// ========== Character Vocabulary (Tiny Shakespeare) ==========
const CHARS = '\n !$&\',-.:;?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const stoi = {};
const itos = {};
for (let i = 0; i < CHARS.length; i++) {
    stoi[CHARS[i]] = i;
    itos[i] = CHARS[i];
}

// ========== Tokenizer Demo ==========
function updateTokenizer() {
    const input = document.getElementById('tokenizer-input');
    const output = document.getElementById('tokenizer-output');
    if (!input || !output) return;

    const text = input.value;
    output.innerHTML = '';

    for (const ch of text) {
        const chip = document.createElement('div');
        chip.className = 'token-chip';

        const charSpan = document.createElement('span');
        charSpan.className = 'token-char';
        charSpan.textContent = ch === ' ' ? '␣' : ch === '\n' ? '↵' : ch;

        const idSpan = document.createElement('span');
        idSpan.className = 'token-id';
        idSpan.textContent = stoi[ch] !== undefined ? stoi[ch] : '?';

        chip.appendChild(charSpan);
        chip.appendChild(idSpan);
        output.appendChild(chip);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tokInput = document.getElementById('tokenizer-input');
    if (tokInput) {
        tokInput.addEventListener('input', updateTokenizer);
        updateTokenizer();
    }
});

// ========== Attention Step Walkthrough ==========
function showAttentionStep(stepIdx) {
    // Update buttons
    document.querySelectorAll('.step-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === stepIdx);
    });

    // Update panels
    document.querySelectorAll('.step-panel').forEach((panel, i) => {
        panel.classList.toggle('visible', i === stepIdx);
    });
}

// ========== Causal Mask Explorer ==========
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('mask-grid');
    if (!grid) return;

    const size = 8;
    const tokens = ['T', 'h', 'e', ' ', 'c', 'a', 't', ' '];
    grid.style.gridTemplateColumns = `auto repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `auto repeat(${size}, 1fr)`;

    // Header row
    const corner = document.createElement('div');
    corner.style.cssText = 'font-size:0.35em; color:rgba(255,255,255,0.3); display:flex; align-items:center; justify-content:center;';
    corner.textContent = 'Q\\K';
    grid.appendChild(corner);

    for (let j = 0; j < size; j++) {
        const header = document.createElement('div');
        header.style.cssText = 'font-size:0.4em; font-family:monospace; display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.5);';
        header.textContent = tokens[j] === ' ' ? '␣' : tokens[j];
        grid.appendChild(header);
    }

    // Grid cells
    for (let i = 0; i < size; i++) {
        // Row label
        const rowLabel = document.createElement('div');
        rowLabel.style.cssText = 'font-size:0.4em; font-family:monospace; display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.5);';
        rowLabel.textContent = tokens[i] === ' ' ? '␣' : tokens[i];
        grid.appendChild(rowLabel);

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.className = 'mask-cell ' + (j <= i ? 'allowed' : 'blocked');
            cell.textContent = j <= i ? '1' : '0';
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', () => highlightMaskRow(i, size, tokens));
            grid.appendChild(cell);
        }
    }
});

function highlightMaskRow(row, size, tokens) {
    const cells = document.querySelectorAll('.mask-cell');
    cells.forEach(c => c.classList.remove('highlight-row'));

    cells.forEach(c => {
        if (parseInt(c.dataset.row) === row && parseInt(c.dataset.col) <= row) {
            c.classList.add('highlight-row');
        }
    });

    const explain = document.getElementById('mask-explain');
    if (explain) {
        const tokenChar = tokens[row] === ' ' ? '␣' : tokens[row];
        const canSee = tokens.slice(0, row + 1).map(t => t === ' ' ? '␣' : t).join(', ');
        explain.innerHTML = `<p>Token at position ${row} (<strong>"${tokenChar}"</strong>) can attend to: <strong>${canSee}</strong> (${row + 1} tokens)</p>`;
    }
}

// ========== Batch Animation ==========
let batchAnimRunning = false;

function animateBatch() {
    if (batchAnimRunning) return;
    batchAnimRunning = true;

    const cells = document.querySelectorAll('.batch-cell');
    cells.forEach(c => c.classList.remove('active'));

    let step = 0;
    const numCells = 8;

    const interval = setInterval(() => {
        cells.forEach(c => c.classList.remove('active'));

        if (step < numCells) {
            // Highlight x cell
            cells[step].classList.add('active');
            // Highlight corresponding y cell
            cells[numCells + step].classList.add('active');
        }

        step++;
        if (step > numCells) {
            clearInterval(interval);
            batchAnimRunning = false;
        }
    }, 400);
}

// ========== Generation Animation ==========
let genAnimRunning = false;

function animateGeneration() {
    if (genAnimRunning) return;
    genAnimRunning = true;

    const contextEl = document.getElementById('gen-context');
    const probsEl = document.getElementById('gen-probs');
    const outputEl = document.getElementById('gen-output');

    const sequence = 'First Citizen:\nBe';
    const generated = 'fore we proceed';
    const allChars = [...CHARS];

    let genIdx = 0;
    contextEl.textContent = sequence;
    outputEl.textContent = '';
    probsEl.innerHTML = '';

    const interval = setInterval(() => {
        if (genIdx >= generated.length) {
            clearInterval(interval);
            genAnimRunning = false;
            return;
        }

        const nextChar = generated[genIdx];

        // Show probability bars for random chars + the actual next char
        probsEl.innerHTML = '';
        const candidates = [];
        // Add the actual next char
        candidates.push({ char: nextChar, prob: 0.3 + Math.random() * 0.4 });
        // Add some random alternatives
        for (let i = 0; i < 7; i++) {
            const rc = allChars[Math.floor(Math.random() * allChars.length)];
            candidates.push({ char: rc, prob: Math.random() * 0.2 });
        }
        // Sort by prob descending
        candidates.sort((a, b) => b.prob - a.prob);

        candidates.forEach((c, i) => {
            const bar = document.createElement('div');
            bar.className = 'prob-bar';
            bar.style.height = (c.prob * 28) + 'px';
            if (i === 0) bar.style.background = '#66bb6a';

            const label = document.createElement('div');
            label.className = 'prob-bar-label';
            label.textContent = c.char === ' ' ? '␣' : c.char === '\n' ? '↵' : c.char;

            bar.appendChild(label);
            probsEl.appendChild(bar);
        });

        outputEl.textContent += nextChar;
        contextEl.textContent = sequence + generated.substring(0, genIdx + 1);
        genIdx++;
    }, 500);
}

// ========== Loss Chart ==========
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('lossChart');
    if (!canvas) return;

    // Simulated training loss curve (matches typical nanoGPT training)
    const steps = [];
    const trainLoss = [];
    const valLoss = [];

    for (let i = 0; i <= 5000; i += 100) {
        steps.push(i);
        // Exponential decay with noise
        const t = i / 5000;
        const baseTrain = 4.2 * Math.exp(-3.5 * t) + 0.8 + (Math.random() - 0.5) * 0.05;
        const baseVal = 4.2 * Math.exp(-3.0 * t) + 1.0 + (Math.random() - 0.5) * 0.08;
        trainLoss.push(Math.max(baseTrain, 0.8));
        valLoss.push(Math.max(baseVal, 1.0));
    }

    // Wait for chart.js to be available
    const tryCreate = () => {
        if (typeof Chart === 'undefined') {
            setTimeout(tryCreate, 200);
            return;
        }

        new Chart(canvas, {
            type: 'line',
            data: {
                labels: steps,
                datasets: [
                    {
                        label: 'Train Loss',
                        data: trainLoss,
                        borderColor: '#4fc3f7',
                        backgroundColor: 'rgba(79, 195, 247, 0.1)',
                        borderWidth: 2,
                        pointRadius: 0,
                        tension: 0.4,
                        fill: true,
                    },
                    {
                        label: 'Val Loss',
                        data: valLoss,
                        borderColor: '#ab47bc',
                        backgroundColor: 'rgba(171, 71, 188, 0.1)',
                        borderWidth: 2,
                        pointRadius: 0,
                        tension: 0.4,
                        fill: true,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { intersect: false, mode: 'index' },
                plugins: {
                    legend: {
                        labels: { color: 'rgba(255,255,255,0.7)', font: { size: 12 } }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#4fc3f7',
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: 'Training Step', color: 'rgba(255,255,255,0.5)' },
                        ticks: { color: 'rgba(255,255,255,0.4)', maxTicksLimit: 10 },
                        grid: { color: 'rgba(255,255,255,0.05)' },
                    },
                    y: {
                        title: { display: true, text: 'Loss', color: 'rgba(255,255,255,0.5)' },
                        ticks: { color: 'rgba(255,255,255,0.4)' },
                        grid: { color: 'rgba(255,255,255,0.05)' },
                        min: 0,
                        max: 5,
                    }
                }
            }
        });
    };

    tryCreate();
});
