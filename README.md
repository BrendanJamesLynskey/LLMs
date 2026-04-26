# LLMs

A hierarchical index of presentation series for AI / LLM / agentic engineers — from transformer internals and GPU hardware up through retrieval, agents, evaluations, safety and production operations.

Each entry below points to a **sub-hub repo** that lists the leaf decks for that area. Sub-hubs marked **roadmap** have their topic outlines published; the leaf decks land progressively.

---

## Foundations & Internals

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [Transformer Architecture](https://github.com/BrendanJamesLynskey/LLM_Hub_Transformer_Architecture) | live · 7 decks | Decoder-only transformer internals — visual walkthrough, every-computation forward pass, RTL accelerator, nanoGPT, PyTorch from scratch, NN data types, hardware-aware quantisation |
| [Modern Architectures](https://github.com/BrendanJamesLynskey/LLM_Hub_Modern_Architectures) | roadmap · 5 decks | Architectures beyond the vanilla decoder — Mixture of Experts, Mamba and state-space models, long-context techniques (RoPE / YaRN / ring attention), diffusion language models, hybrids |
| [Training & Fine-Tuning](https://github.com/BrendanJamesLynskey/LLM_Hub_Fine_Tuning) | roadmap · 5 decks | SFT pipelines, LoRA / QLoRA / DoRA / IA3, RLHF + PPO, DPO and cousins (IPO / KTO / ORPO / GRPO), Constitutional AI / RLAIF |
| [Reasoning Models](https://github.com/BrendanJamesLynskey/LLM_Hub_Reasoning) | roadmap · 3 decks | The o1 / R1 paradigm shift, scaling test-time compute, process vs outcome reward models, when to use reasoning models vs frontier+scaffolding |

## Hardware & Inference

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [NVIDIA GPU Architectures](https://github.com/BrendanJamesLynskey/LLM_Hub_NVIDIA_GPUs) | live · 37 decks | Pascal → Blackwell deep tour — SMs, tensor cores, memory hierarchy, NVLink, packaging, power, per-architecture low-level deep dives, the DGX Spark workstation |
| [CUDA Programming](https://github.com/BrendanJamesLynskey/LLM_Hub_CUDA) | live · 10 decks | From your first kernel to tiled matmul, streams, atomics, Nsight profiling — visual presentations on writing CUDA from scratch |
| [Local LLM Hosting](https://github.com/BrendanJamesLynskey/LLM_Hub_Local_LLM_Hosting) | live · 11 decks | Self-hosting LLMs — Ollama, vLLM, llama.cpp, TGI, SGLang, Docker, multi-GPU parallelism, quantisation, determinism, production patterns |

## Retrieval & Multimodality

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [RAG & Retrieval Systems](https://github.com/BrendanJamesLynskey/LLM_Hub_RAG_Retrieval) | roadmap · 7 decks | Embedding models, vector databases, hybrid search and reranking, chunking and ingestion, agentic RAG, GraphRAG, production RAG |
| [Vision-Language Models](https://github.com/BrendanJamesLynskey/LLM_Hub_Vision_Language) | roadmap · 4 decks | CLIP / SigLIP, Vision Transformers, modern VLMs (Llama 3.2 V, Qwen2-VL, InternVL, Pixtral, Gemini, Claude), document AI (ColPali, Donut) |
| [Voice & Real-Time Agents](https://github.com/BrendanJamesLynskey/LLM_Hub_Voice_RealTime) | roadmap · 3 decks | Streaming ASR + TTS, real-time frameworks (Pipecat, LiveKit Agents, OpenAI Realtime), latency budgets and turn-taking |

## Agents & Tools

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [Agents & Orchestration](https://github.com/BrendanJamesLynskey/LLM_Hub_Agents) | live · 7 decks | How LLM agents work, multi-agent coordination, LangGraph, framework guides (LangGraph / CrewAI / AutoGen / OpenAI Agents), ReAct math agent, research-digest agent |
| [Coding Agents Internals](https://github.com/BrendanJamesLynskey/LLM_Hub_Coding_Agents) | roadmap · 2 decks | How Cursor, Aider and Claude Code understand a repository and apply edits — heuristics, diff formats, architectural differences |
| [Computer-Use & Browser Agents](https://github.com/BrendanJamesLynskey/LLM_Hub_Computer_Use) | roadmap · 2 decks | Anthropic Computer Use, OpenAI Operator, Gemini Mariner, Browser-Use, Playwright — action schemas, screen vs DOM grounding, evals |
| [Model Context Protocol](https://github.com/BrendanJamesLynskey/LLM_Hub_MCP) | live · 5 decks | Anthropic's open protocol for connecting LLMs to tools and data — JSON-RPC primitives, transports, server-building, OAuth 2.1 security, ecosystem and patterns |

## Production & Safety

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [Production LLMOps](https://github.com/BrendanJamesLynskey/LLM_Hub_LLMOps) | roadmap · 4 decks | LLM gateways (LiteLLM, Portkey), observability (Langfuse, Phoenix), caching strategies, cost and SLO discipline |
| [LLM Evaluations](https://github.com/BrendanJamesLynskey/LLM_Hub_Evaluations) | roadmap · 5 decks | Static benchmarks vs production evals, LLM-as-judge with its biases, eval frameworks (Inspect AI, Braintrust, Phoenix, Langfuse), drift detection, red-teaming |
| [Safety, Alignment & Red-Teaming](https://github.com/BrendanJamesLynskey/LLM_Hub_Safety_Alignment) | roadmap · 2 decks | Jailbreak taxonomy, defence-in-depth (Llama Guard, ShieldGemma, NeMo Guardrails), regulatory frame (NIST AI RMF, EU AI Act) |

## Anthropic Claude

| Sub-hub | Status | What's inside |
|---------|--------|---------------|
| [Anthropic Claude](https://github.com/BrendanJamesLynskey/LLM_Hub_Anthropic_Claude) | live · 1 deck | Comprehensive presentation series on Claude — models, Claude.ai, Claude Code, API and SDKs, integrations, agents, productivity, Claude Desktop, hands-on workflow walkthroughs |

## Articles & Reference

| Project | Description |
|---------|-------------|
| [LLM Articles](https://github.com/BrendanJamesLynskey/LLM_articles) | Articles and presentations on batching, KV cache optimisation, and quantisation for inference |

---

### How this is organised

- The **top-level index** (this README) lists ~18 sub-hubs grouped into five themes — Foundations & Internals, Hardware & Inference, Retrieval & Multimodality, Agents & Tools, and Production & Safety — plus Anthropic Claude.
- Each **sub-hub repo** is a small index of leaf-deck repos in that area. The sub-hub's README and its GitHub Pages site (e.g. `https://brendanjameslynskey.github.io/LLM_Hub_RAG_Retrieval/`) both list the decks.
- Each **leaf deck** is its own repo (typically `Topic_NN_Title`) with a single-page interactive HTML presentation served on GitHub Pages.
- **Live** sub-hubs link to working leaf decks; **roadmap** sub-hubs publish the topic outline while leaf decks are still being built.
