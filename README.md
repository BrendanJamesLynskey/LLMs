# LLMs

A hierarchical index of presentation series for AI / LLM / agentic engineers — from transformer internals and GPU hardware up through retrieval, agents, evaluations, safety and production operations.

Every project that used to be indexed here directly is still reachable — typically through its sub-hub (one click of indirection). The 22 sub-hubs below collectively re-export ~176 leaf repos: ~80 pre-existing presentations, 5 MCP decks, 78 decks across 14 mid-2025 series (now including a two-deck deep-dive companion on the two-step retrieval cascade architecture and the underlying reranker mathematics), the 10-deck *LLM History* series covering people, labs and ideas from Shannon to the multipolar 2026 frontier, and the 12-deck *Mathematics for Machine Learning* companion to Deisenroth, Faisal &amp; Ong — plus the directly-linked code repos and articles below.

---

## Cloneable code repositories

Most leaves are interactive HTML presentations rendered on GitHub Pages. The repos below are different — they ship runnable source you can clone and execute outside the browser. Listed here for direct discoverability.

| Repo | Sub-hub | What's inside |
|------|---------|---------------|
| [LLM_Transformer_Decoder_RTL](https://github.com/BrendanJamesLynskey/LLM_Transformer_Decoder_RTL) | Transformer Architecture | Synthesisable SystemVerilog implementation of a pre-norm decoder block with KV-cache, plus an 83-test verification suite |
| [Python_Transformer_Decoder](https://github.com/BrendanJamesLynskey/Python_Transformer_Decoder) | Transformer Architecture | Step-by-step PyTorch implementation in a single Jupyter notebook — every component built from first principles |
| [NN_data_types](https://github.com/BrendanJamesLynskey/NN_data_types) | Transformer Architecture | SystemVerilog implementations of 9 numerical formats (FP32 down to FP4) used in NN training and inference hardware |
| [AI_MMUL_Unit](https://github.com/BrendanJamesLynskey/AI_MMUL_Unit) | Transformer Architecture | Hardware deep-dive on the MMUL — 24-slide interactive deck (Kung 1978/82 → TPU → Blackwell, four dataflows, Transformer mapping, FP32→FP4 / MXFP / NVFP4, real systems, memory hierarchy, power & thermals) plus four parameterised SystemVerilog implementations and 258 passing tests |
| [transformer-explainer](https://github.com/BrendanJamesLynskey/transformer-explainer) | Transformer Architecture | Full-stack interactive web app at [transformer-explainer-three.vercel.app](https://transformer-explainer-three.vercel.app/) — type your own tokens and watch every op (embeddings, masked self-attention, FFN, layernorm, sampling) execute server-side. Pure-TypeScript transformer library verified against PyTorch fixtures to 1e-5. Ships with a backend-engineering [PDF tour](https://github.com/BrendanJamesLynskey/transformer-explainer/blob/main/docs/reports/backend-tour.pdf) and a [Reveal.js presentation](https://brendanjameslynskey.github.io/transformer-explainer/) walking through Next.js 14, Drizzle, Auth.js, the test pyramid, CI/CD, and the six production bugs we hit going live |
| [Introduction_to_LangGraph](https://github.com/BrendanJamesLynskey/Introduction_to_LangGraph) | Agents & Orchestration | Interactive slide deck plus 10 runnable examples in Python and TypeScript covering graph-based agent orchestration |
| [ReAct_math_agent](https://github.com/BrendanJamesLynskey/ReAct_math_agent) | Agents & Orchestration | Browser-based ReAct agent that solves maths problems step-by-step with a local Ollama LLM, visualising the reasoning loop |
| [Research_Digest_Agent](https://github.com/BrendanJamesLynskey/Research_Digest_Agent) | Agents & Orchestration | Autonomous research agent that searches the web, reads sources, and produces structured markdown digests (Claude or Ollama) |
| [Raschka_Coding_Agent_LangGraph](https://github.com/BrendanJamesLynskey/Raschka_Coding_Agent_LangGraph) | Coding Agents Internals | LangGraph implementation of Sebastian Raschka's *Components of a Coding Agent* — six components mapped one-per-module (workspace context, cacheable stable-prefix prompt, sandboxed file/shell tools, transcript compression, two-tier memory), swappable Gemini / DeepSeek / OpenAI / fake providers chosen in `.env`, full-fidelity LLM tracing (rich panels + JSONL on disk), 29 offline tests, written as a learning resource |

---

## Sub-hub index

Each row points to a sub-hub repo whose README and GitHub Pages site list the leaf decks for that area. The `code` marker on the Status column flags sub-hubs that include cloneable-code leaves listed above.

### Foundations & Internals

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [Transformer Architecture](https://github.com/BrendanJamesLynskey/LLM_Hub_Transformer_Architecture) | live · 8 decks · 5 code | Decoder-only transformer internals — visual walkthrough, every-computation forward pass, RTL accelerator, nanoGPT, PyTorch from scratch, NN data types, hardware-aware quantisation, MMUL hardware deep-dive, and the full-stack interactive web explainer |
| [Modern Architectures](https://github.com/BrendanJamesLynskey/LLM_Hub_Modern_Architectures) | live · 10 decks | Architectures beyond the vanilla decoder — Mixture of Experts, Mamba and state-space models, long-context techniques (RoPE / YaRN / ring attention), diffusion language models, hybrids; plus a 5-deck companion to Raschka's *Beyond Standard LLMs* (linear-attention hybrids, text diffusion, code world models, small recursive transformers, decision tree) |
| [Training & Fine-Tuning](https://github.com/BrendanJamesLynskey/LLM_Hub_Fine_Tuning) | live · 5 decks | SFT pipelines, LoRA / QLoRA / DoRA / IA3, RLHF + PPO, DPO and cousins (IPO / KTO / ORPO / GRPO), Constitutional AI / RLAIF |
| [Reasoning Models](https://github.com/BrendanJamesLynskey/LLM_Hub_Reasoning) | live · 3 decks | The o1 / R1 paradigm shift, scaling test-time compute, process vs outcome reward models, when to use reasoning models vs frontier+scaffolding |
| [Linear Algebra for AI/ML](https://github.com/BrendanJamesLynskey/LLM_Hub_Linear_Algebra) | live · 12 decks | Vectors, matrices, matmul, projections (FFN up/down), eigen, SVD &amp; LoRA, orthogonality &amp; RoPE, gradients &amp; backprop, attention as linear algebra, the full transformer block, tensors / einsum / FlashAttention / MoE / sharding |
| [Mathematics for Machine Learning](https://github.com/BrendanJamesLynskey/MML_Hub) | live · 12 decks | Twelve-deck companion to Deisenroth, Faisal &amp; Ong's *Mathematics for Machine Learning* (Cambridge University Press, 2020). Part I &mdash; linear algebra, analytic geometry, matrix decompositions, vector calculus, probability, optimisation; Part II &mdash; linear regression, PCA, GMM/EM, and the kernel SVM. Lives on the [Mathematics hub](https://github.com/BrendanJamesLynskey/Mathematics) but re-listed here for AI-engineer discoverability |

### Hardware & Inference

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [NVIDIA GPU Architectures](https://github.com/BrendanJamesLynskey/LLM_Hub_NVIDIA_GPUs) | live · 37 decks | Pascal → Blackwell deep tour — SMs, tensor cores, memory hierarchy, NVLink, packaging, power, per-architecture low-level deep dives, the DGX Spark workstation |
| [Google TPUs](https://github.com/BrendanJamesLynskey/LLM_Hub_Google_TPUs) | live · 12 decks | Twelve-deck deep tour of the TPU programme — 2013 voice-search napkin maths through Ironwood (v7) — history, systolic arrays, every generation v1→v7, OCS &amp; Palomar, ICI &amp; 3D torus, XLA / JAX / Pallas software stack, TPU vs GPU |
| [CUDA Programming](https://github.com/BrendanJamesLynskey/LLM_Hub_CUDA) | live · 10 decks | From your first kernel to tiled matmul, streams, atomics, Nsight profiling — visual presentations on writing CUDA from scratch |
| [Local LLM Hosting](https://github.com/BrendanJamesLynskey/LLM_Hub_Local_LLM_Hosting) | live · 11 decks | Self-hosting LLMs — Ollama, vLLM, llama.cpp, TGI, SGLang, Docker, multi-GPU parallelism, quantisation, determinism, production patterns |

### Retrieval & Multimodality

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [RAG & Retrieval Systems](https://github.com/BrendanJamesLynskey/LLM_Hub_RAG_Retrieval) | live · 9 decks | Embedding models, vector databases, hybrid search and reranking (plus deep-dive companions on two-step cascade architecture and reranker mathematics — cross-encoder attention, ColBERT MaxSim, RankNet/LambdaRank/LambdaMART, InfoNCE, MarginMSE distillation, NDCG derivations), chunking and ingestion, agentic RAG, GraphRAG, production RAG |
| [Vision-Language Models](https://github.com/BrendanJamesLynskey/LLM_Hub_Vision_Language) | live · 5 decks | CLIP / SigLIP, Vision Transformers, modern VLMs (Llama 3.2 V, Qwen2-VL, InternVL, Pixtral, Gemini, Claude), document AI (ColPali, Donut), and Qwen3-VL for video analytics &mdash; clip embedding, temporal-aware rerank, M-RoPE, edge-vs-cloud topology |
| [Voice & Real-Time Agents](https://github.com/BrendanJamesLynskey/LLM_Hub_Voice_RealTime) | live · 3 decks | Streaming ASR + TTS, real-time frameworks (Pipecat, LiveKit Agents, OpenAI Realtime), latency budgets and turn-taking |

### Agents & Tools

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [Agents & Orchestration](https://github.com/BrendanJamesLynskey/LLM_Hub_Agents) | live · 7 decks · 3 code | How LLM agents work, multi-agent coordination, LangGraph, framework guides (LangGraph / CrewAI / AutoGen / OpenAI Agents), ReAct math agent, research-digest agent |
| [Coding Agents Internals](https://github.com/BrendanJamesLynskey/LLM_Hub_Coding_Agents) | live · 7 decks · 1 code | How Cursor, Aider, Claude Code & Codex CLI work — repo understanding, edit strategies, plus a 5-deck companion to Raschka's *Components of a Coding Agent* (context, cache, tools, memory, subagents) and a runnable LangGraph implementation of the same six components |
| [Computer-Use & Browser Agents](https://github.com/BrendanJamesLynskey/LLM_Hub_Computer_Use) | live · 2 decks | Anthropic Computer Use, OpenAI Operator, Gemini Mariner, Browser-Use, Playwright — action schemas, screen vs DOM grounding, evals |
| [Model Context Protocol](https://github.com/BrendanJamesLynskey/LLM_Hub_MCP) | live · 5 decks | Anthropic's open protocol for connecting LLMs to tools and data — JSON-RPC primitives, transports, server-building, OAuth 2.1 security, ecosystem and patterns |

### Production & Safety

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [Production LLMOps](https://github.com/BrendanJamesLynskey/LLM_Hub_LLMOps) | live · 4 decks | LLM gateways (LiteLLM, Portkey), observability (Langfuse, Phoenix), caching strategies, cost and SLO discipline |
| [LLM Evaluations](https://github.com/BrendanJamesLynskey/LLM_Hub_Evaluations) | live · 5 decks | Static benchmarks vs production evals, LLM-as-judge with its biases, eval frameworks (Inspect AI, Braintrust, Phoenix, Langfuse), drift detection, red-teaming |
| [Safety, Alignment & Red-Teaming](https://github.com/BrendanJamesLynskey/LLM_Hub_Safety_Alignment) | live · 2 decks | Jailbreak taxonomy, defence-in-depth (Llama Guard, ShieldGemma, NeMo Guardrails), regulatory frame (NIST AI RMF, EU AI Act) |
| [LLM-as-a-Service (Cloud `*aaS` 06)](https://github.com/BrendanJamesLynskey/Cloud_aaS_06_LLM_aaS) | live · 1 deck | Managed LLM service providers — pricing &amp; latency comparison (OpenAI / Anthropic / Bedrock / Vertex / Azure OpenAI / Together / Groq / Fireworks / Replicate), prompt caching, embeddings &amp; RAG-as-a-Service, agents-as-a-Service, fine-tuning APIs, evals / observability, MCP server hosting, LLM-specific security and governance. Companion to Local LLM Hosting (the self-hosted side) and part of the [Cloud `*aaS` series](https://github.com/BrendanJamesLynskey/Cloud_aaS_Hub) on the [Software](https://github.com/BrendanJamesLynskey/Software) index |

### LLM History

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [LLM History](https://github.com/BrendanJamesLynskey/LLM_Hub_LLM_History) | live · 10 decks | A history of large language models from Shannon (1948) to the multipolar 2026 frontier &mdash; people, labs and ideas. Pre-Transformer NLP, the 2017 transformer paper and its eight authors, university labs, OpenAI, Anthropic, Google DeepMind, Meta/Mistral/xAI/Cohere, the Chinese frontier labs (DeepSeek, Qwen, Kimi, GLM, Yi), and a forecast deck on future directions. Equal attention to technical detail and the human story behind the field |

### Anthropic Claude

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [Anthropic Claude](https://github.com/BrendanJamesLynskey/LLM_Hub_Anthropic_Claude) | live · 1 deck | Comprehensive presentation series on Claude — models, Claude.ai, Claude Code, API and SDKs, integrations, agents, productivity, Claude Desktop, hands-on workflow walkthroughs |

---

## Articles & Reference

| Project | Description |
|---------|-------------|
| [LLM Articles](https://github.com/BrendanJamesLynskey/LLM_articles) | Articles and presentations on batching, KV cache optimisation, and quantisation for inference |

---

### How this is organised

- The **top-level index** (this README) lists 22 sub-hubs grouped into five themes plus the LLM History, Mathematics for Machine Learning and Anthropic Claude sections, with directly-linked code repos and articles called out separately.
- Each **sub-hub repo** is a small index of leaf-deck repos in that area. The sub-hub's `README.md` and its GitHub Pages site (e.g. `https://brendanjameslynskey.github.io/LLM_Hub_RAG_Retrieval/`) both list the decks.
- Each **leaf deck** is its own repo (typically `Topic_NN_Title`) with a single-page interactive HTML presentation served on GitHub Pages.
- **Status legend.** `live · N decks` — all leaves built and indexed by the sub-hub. `roadmap · N decks` — topic outline published, leaf decks landing progressively. `· N code` — sub-hub includes that many cloneable-source leaves (listed in the Cloneable code repositories table above).
