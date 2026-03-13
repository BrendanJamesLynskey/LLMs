# LLMs

A collection of projects exploring large language models — from transformer internals and hardware implementations to agent architectures and multi-agent orchestration.

---

## Transformer Architecture

| Project | Description |
|---------|-------------|
| [Transformer Decoder — Visual Deep Dive](https://github.com/BrendanJamesLynskey/LLM_Transformer_Decoder_guide) | Interactive visual walkthrough of every operation inside a decoder-only transformer, from tokenization to generation |
| [Transformer Decoder — Every Computation](https://github.com/BrendanJamesLynskey/Transformer_Decoder_walkthrough) | Browser-based forward pass with real tensor values — GQA, RoPE, SwiGLU, RMSNorm, all from scratch in vanilla JS |
| [Transformer Decoder — RTL Accelerator](https://github.com/BrendanJamesLynskey/LLM_Transformer_Decoder_RTL) | Synthesisable SystemVerilog implementation of a pre-norm decoder block with KV-cache, plus full verification suite (83 tests) |
| [Neural Network Data Types](https://github.com/BrendanJamesLynskey/NN_data_types) | SystemVerilog implementations of 9 numerical formats (FP32 down to FP4) used in NN training and inference hardware |

## Agents & Orchestration

| Project | Description |
|---------|-------------|
| [How LLM Agents Work](https://github.com/BrendanJamesLynskey/LLM_Agents_guide) | Visual deep dive into agent anatomy — the ReAct loop, tool execution, memory management, and prompt assembly |
| [Multi-Agent Workflows](https://github.com/BrendanJamesLynskey/MultiAgent_Workflows_guide) | Guide to multi-agent coordination and delegation, with examples from LangGraph and the OpenAI Agents SDK |
| [Introduction to LangGraph](https://github.com/BrendanJamesLynskey/Introduction_to_LangGraph) | Interactive slide deck + 10 runnable examples (Python & TypeScript) covering graph-based agent orchestration |
| [OpenClaw Guide](https://github.com/BrendanJamesLynskey/OpenClaw_Guide) | Deep dive into the open-source gateway that connects AI coding agents to any messaging platform |

## Articles & Reference

| Project | Description |
|---------|-------------|
| [LLM Articles](https://github.com/BrendanJamesLynskey/LLM_articles) | Articles and presentations on batching, KV cache optimization, and quantization for inference |
