# LLMs

A hierarchical index of presentation series for AI / LLM / agentic engineers — from transformer internals and GPU hardware up through retrieval, agents, evaluations, safety and production operations.

Every project that used to be indexed here directly is still reachable — typically through its sub-hub (one click of indirection). The 20 sub-hubs below collectively re-export ~152 leaf repos: ~80 pre-existing presentations, 5 MCP decks, 76 newly-added decks across 14 series (including two 5-deck companions to Sebastian Raschka — *Components of a Coding Agent* and *Beyond Standard LLMs*, a 12-deck Google TPUs series, and a 12-deck Linear Algebra for AI/ML series), plus the directly-linked code repos and articles below.

---

## Cloneable code repositories

Most leaves are interactive HTML presentations rendered on GitHub Pages. The repos below are different — they ship runnable source you can clone and execute outside the browser. Listed here for direct discoverability.

| Repo | Sub-hub | What's inside |
|------|---------|---------------|
| [LLM_Transformer_Decoder_RTL](https://github.com/BrendanJamesLynskey/LLM_Transformer_Decoder_RTL) | Transformer Architecture | Synthesisable SystemVerilog implementation of a pre-norm decoder block with KV-cache, plus an 83-test verification suite |
| [Python_Transformer_Decoder](https://github.com/BrendanJamesLynskey/Python_Transformer_Decoder) | Transformer Architecture | Step-by-step PyTorch implementation in a single Jupyter notebook — every component built from first principles |
| [NN_data_types](https://github.com/BrendanJamesLynskey/NN_data_types) | Transformer Architecture | SystemVerilog implementations of 9 numerical formats (FP32 down to FP4) used in NN training and inference hardware |
| [AI_MMUL_Unit](https://github.com/BrendanJamesLynskey/AI_MMUL_Unit) | Transformer Architecture | Hardware deep-dive on the MMUL — 24-slide interactive deck (Kung 1978/82 → TPU → Blackwell, four dataflows, Transformer mapping, FP32→FP4 / MXFP / NVFP4, real systems, memory hierarchy, power & thermals) plus four parameterised SystemVerilog implementations and 258 passing tests |
| [Introduction_to_LangGraph](https://github.com/BrendanJamesLynskey/Introduction_to_LangGraph) | Agents & Orchestration | Interactive slide deck plus 10 runnable examples in Python and TypeScript covering graph-based agent orchestration |
| [ReAct_math_agent](https://github.com/BrendanJamesLynskey/ReAct_math_agent) | Agents & Orchestration | Browser-based ReAct agent that solves maths problems step-by-step with a local Ollama LLM, visualising the reasoning loop |
| [Research_Digest_Agent](https://github.com/BrendanJamesLynskey/Research_Digest_Agent) | Agents & Orchestration | Autonomous research agent that searches the web, reads sources, and produces structured markdown digests (Claude or Ollama) |

---

## Sub-hub index

Each row points to a sub-hub repo whose README and GitHub Pages site list the leaf decks for that area. The `code` marker on the Status column flags sub-hubs that include cloneable-code leaves listed above.

### Foundations & Internals

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [Transformer Architecture](https://github.com/BrendanJamesLynskey/LLM_Hub_Transformer_Architecture) | live · 8 decks · 4 code | Decoder-only transformer internals — visual walkthrough, every-computation forward pass, RTL accelerator, nanoGPT, PyTorch from scratch, NN data types, hardware-aware quantisation, MMUL hardware deep-dive |
| [Modern Architectures](https://github.com/BrendanJamesLynskey/LLM_Hub_Modern_Architectures) | live · 10 decks | Architectures beyond the vanilla decoder — Mixture of Experts, Mamba and state-space models, long-context techniques (RoPE / YaRN / ring attention), diffusion language models, hybrids; plus a 5-deck companion to Raschka's *Beyond Standard LLMs* (linear-attention hybrids, text diffusion, code world models, small recursive transformers, decision tree) |
| [Training & Fine-Tuning](https://github.com/BrendanJamesLynskey/LLM_Hub_Fine_Tuning) | live · 5 decks | SFT pipelines, LoRA / QLoRA / DoRA / IA3, RLHF + PPO, DPO and cousins (IPO / KTO / ORPO / GRPO), Constitutional AI / RLAIF |
| [Reasoning Models](https://github.com/BrendanJamesLynskey/LLM_Hub_Reasoning) | live · 3 decks | The o1 / R1 paradigm shift, scaling test-time compute, process vs outcome reward models, when to use reasoning models vs frontier+scaffolding |
| [Linear Algebra for AI/ML](https://github.com/BrendanJamesLynskey/LLM_Hub_Linear_Algebra) | live · 12 decks | Vectors, matrices, matmul, projections (FFN up/down), eigen, SVD &amp; LoRA, orthogonality &amp; RoPE, gradients &amp; backprop, attention as linear algebra, the full transformer block, tensors / einsum / FlashAttention / MoE / sharding |

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
| [RAG & Retrieval Systems](https://github.com/BrendanJamesLynskey/LLM_Hub_RAG_Retrieval) | live · 7 decks | Embedding models, vector databases, hybrid search and reranking, chunking and ingestion, agentic RAG, GraphRAG, production RAG |
| [Vision-Language Models](https://github.com/BrendanJamesLynskey/LLM_Hub_Vision_Language) | live · 4 decks | CLIP / SigLIP, Vision Transformers, modern VLMs (Llama 3.2 V, Qwen2-VL, InternVL, Pixtral, Gemini, Claude), document AI (ColPali, Donut) |
| [Voice & Real-Time Agents](https://github.com/BrendanJamesLynskey/LLM_Hub_Voice_RealTime) | live · 3 decks | Streaming ASR + TTS, real-time frameworks (Pipecat, LiveKit Agents, OpenAI Realtime), latency budgets and turn-taking |

### Agents & Tools

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [Agents & Orchestration](https://github.com/BrendanJamesLynskey/LLM_Hub_Agents) | live · 7 decks · 3 code | How LLM agents work, multi-agent coordination, LangGraph, framework guides (LangGraph / CrewAI / AutoGen / OpenAI Agents), ReAct math agent, research-digest agent |
| [Coding Agents Internals](https://github.com/BrendanJamesLynskey/LLM_Hub_Coding_Agents) | live · 7 decks | How Cursor, Aider, Claude Code & Codex CLI work — repo understanding, edit strategies, plus a 5-deck companion to Raschka's *Components of a Coding Agent* (context, cache, tools, memory, subagents) |
| [Computer-Use & Browser Agents](https://github.com/BrendanJamesLynskey/LLM_Hub_Computer_Use) | live · 2 decks | Anthropic Computer Use, OpenAI Operator, Gemini Mariner, Browser-Use, Playwright — action schemas, screen vs DOM grounding, evals |
| [Model Context Protocol](https://github.com/BrendanJamesLynskey/LLM_Hub_MCP) | live · 5 decks | Anthropic's open protocol for connecting LLMs to tools and data — JSON-RPC primitives, transports, server-building, OAuth 2.1 security, ecosystem and patterns |

### Production & Safety

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [Production LLMOps](https://github.com/BrendanJamesLynskey/LLM_Hub_LLMOps) | live · 4 decks | LLM gateways (LiteLLM, Portkey), observability (Langfuse, Phoenix), caching strategies, cost and SLO discipline |
| [LLM Evaluations](https://github.com/BrendanJamesLynskey/LLM_Hub_Evaluations) | live · 5 decks | Static benchmarks vs production evals, LLM-as-judge with its biases, eval frameworks (Inspect AI, Braintrust, Phoenix, Langfuse), drift detection, red-teaming |
| [Safety, Alignment & Red-Teaming](https://github.com/BrendanJamesLynskey/LLM_Hub_Safety_Alignment) | live · 2 decks | Jailbreak taxonomy, defence-in-depth (Llama Guard, ShieldGemma, NeMo Guardrails), regulatory frame (NIST AI RMF, EU AI Act) |

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

- The **top-level index** (this README) lists 19 sub-hubs grouped into five themes plus Anthropic Claude, with directly-linked code repos and articles called out separately.
- Each **sub-hub repo** is a small index of leaf-deck repos in that area. The sub-hub's `README.md` and its GitHub Pages site (e.g. `https://brendanjameslynskey.github.io/LLM_Hub_RAG_Retrieval/`) both list the decks.
- Each **leaf deck** is its own repo (typically `Topic_NN_Title`) with a single-page interactive HTML presentation served on GitHub Pages.
- **Status legend.** `live · N decks` — all leaves built and indexed by the sub-hub. `roadmap · N decks` — topic outline published, leaf decks landing progressively. `· N code` — sub-hub includes that many cloneable-source leaves (listed in the Cloneable code repositories table above).
