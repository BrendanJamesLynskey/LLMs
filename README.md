# LLMs

A collection of projects exploring large language models — from transformer internals and hardware implementations to agent architectures and multi-agent orchestration.

---

## Transformer Architecture

| Project | Description |
|---------|-------------|
| [Transformer Decoder — Visual Deep Dive](https://github.com/BrendanJamesLynskey/LLM_Transformer_Decoder_guide) | Interactive visual walkthrough of every operation inside a decoder-only transformer, from tokenization to generation |
| [Transformer Decoder — Every Computation](https://github.com/BrendanJamesLynskey/Transformer_Decoder_walkthrough) | Browser-based forward pass with real tensor values — GQA, RoPE, SwiGLU, RMSNorm, all from scratch in vanilla JS |
| [Transformer Decoder — RTL Accelerator](https://github.com/BrendanJamesLynskey/LLM_Transformer_Decoder_RTL) | Synthesisable SystemVerilog implementation of a pre-norm decoder block with KV-cache, plus full verification suite (83 tests) |
| [Karpathy's nanoGPT — Step by Step](https://github.com/BrendanJamesLynskey/nanoGPT_presentation) | Interactive presentation walking through every line of Karpathy's ~200-line GPT implementation — tokenization, self-attention, transformer blocks, training, and generation |
| [Transformer Decoder from Scratch](https://github.com/BrendanJamesLynskey/Python_Transformer_Decoder) | Step-by-step PyTorch implementation in a single Jupyter notebook — every component built from first principles and visualised |
| [Neural Network Data Types](https://github.com/BrendanJamesLynskey/NN_data_types) | SystemVerilog implementations of 9 numerical formats (FP32 down to FP4) used in NN training and inference hardware |
| [Hardware-Aware Quantisation](https://github.com/BrendanJamesLynskey/Hardware_Aware_Quantisation) | Interactive quantisation explorer — number format visualisation, weight distributions, quantisation schemes, simulated inference, hardware cost models, mixed-precision |

## Agents & Orchestration

| Project | Description |
|---------|-------------|
| [How LLM Agents Work](https://github.com/BrendanJamesLynskey/LLM_Agents_guide) | Visual deep dive into agent anatomy — the ReAct loop, tool execution, memory management, and prompt assembly |
| [Multi-Agent Workflows](https://github.com/BrendanJamesLynskey/MultiAgent_Workflows_guide) | Guide to multi-agent coordination and delegation, with examples from LangGraph and the OpenAI Agents SDK |
| [Introduction to LangGraph](https://github.com/BrendanJamesLynskey/Introduction_to_LangGraph) | Interactive slide deck + 10 runnable examples (Python & TypeScript) covering graph-based agent orchestration |
| [Agentic Frameworks Guide](https://github.com/BrendanJamesLynskey/Agentic_Frameworks_Guide) | Visual guide to the agentic framework landscape — LangGraph, CrewAI, AutoGen, architecture patterns, and how to choose |
| [OpenClaw Guide](https://github.com/BrendanJamesLynskey/OpenClaw_Guide) | Deep dive into the open-source gateway that connects AI coding agents to any messaging platform |
| [ReAct Math Agent](https://github.com/BrendanJamesLynskey/ReAct_math_agent) | Browser-based ReAct agent that solves maths problems step-by-step with a local Ollama LLM, visualising the reasoning loop |
| [Research Digest Agent](https://github.com/BrendanJamesLynskey/Research_Digest_Agent) | Autonomous research agent that searches the web, reads sources, and produces structured markdown digests (Claude or Ollama) |

## Anthropic Claude

| Project | Description |
|---------|-------------|
| [Anthropic Claude Series](https://github.com/BrendanJamesLynskey/Claude) | 10-part interactive presentation series covering all aspects of Anthropic Claude — models, Claude.ai, Claude Code, API & SDKs, integrations, agents, productivity workflows, and future capabilities |
| [Claude Certifications & Training](https://brendanjameslynskey.github.io/Claude/certifications-report/) | Advisory report on Claude AI credentials — official certs, cloud provider exams, free courses, productivity and employability analysis |

## CUDA Programming

| Project | Description |
|---------|-------------|
| [GPU Architecture & the CUDA Execution Model](https://brendanjameslynskey.github.io/CUDA_01_GPU_Architecture/) | Visual deep dive into SMs, warps, SIMT execution, thread hierarchy, and how GPU hardware maps to CUDA's programming model |
| [Your First CUDA Kernel](https://brendanjameslynskey.github.io/CUDA_02_First_Kernel/) | From `nvcc` setup to vector addition — host/device workflow, memory allocation, kernel launch syntax, error handling |
| [Thread Hierarchy & Indexing](https://brendanjameslynskey.github.io/CUDA_03_Thread_Hierarchy/) | Grids, blocks, threads, warps — how to map problem dimensions to launch configurations with worked index calculations |
| [Memory Hierarchy](https://brendanjameslynskey.github.io/CUDA_04_Memory_Hierarchy/) | Global, shared, constant, texture, and register memory — access patterns, bank conflicts, coalescing rules, and when to use each |
| [Matrix Multiplication — Naive to Tiled](https://brendanjameslynskey.github.io/CUDA_05_Matrix_Multiply/) | Step-by-step optimisation from a naive O(n³) kernel to shared-memory tiled multiplication with performance benchmarks |
| [Synchronisation & Atomics](https://brendanjameslynskey.github.io/CUDA_06_Synchronisation/) | `__syncthreads()`, warp-level primitives, atomic operations, race conditions, and parallel reduction patterns |
| [Profiling with Nsight](https://brendanjameslynskey.github.io/CUDA_07_Profiling/) | Hands-on profiling workflow with Nsight Systems and Nsight Compute — finding bottlenecks, occupancy analysis, memory throughput |
| [Streams & Async Execution](https://brendanjameslynskey.github.io/CUDA_08_Streams/) | Overlapping compute and data transfer, CUDA streams, events, concurrency patterns, and the default stream trap |
| [Libraries & Ecosystem](https://brendanjameslynskey.github.io/CUDA_09_Libraries/) | cuBLAS, cuDNN, Thrust, cuRAND, cuFFT — when to write custom kernels vs use optimised libraries, with examples |
| [Hardware Platforms for CUDA Learning](https://brendanjameslynskey.github.io/CUDA_10_Hardware/) | Practical buying guide — DGX Spark, consumer GPUs, cloud instances, Google Colab — cost, capability, and recommendations |

## Articles & Reference

| Project | Description |
|---------|-------------|
| [LLM Articles](https://github.com/BrendanJamesLynskey/LLM_articles) | Articles and presentations on batching, KV cache optimization, and quantization for inference |
