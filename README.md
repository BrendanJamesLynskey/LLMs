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
| [Anthropic Claude Series](https://github.com/BrendanJamesLynskey/Claude) | Interactive presentation series covering all aspects of Anthropic Claude — models, Claude.ai, Claude Code, API & SDKs, integrations, agents, productivity, Claude Desktop, plus hands-on workflow walkthroughs with terminal session recordings |

## Local LLM Hosting

| Project | Description |
|---------|-------------|
| [Why Host Locally — The Landscape](https://brendanjameslynskey.github.io/Local_LLM_01_Landscape/) | Drivers, cost model, and a map of the local-inference ecosystem — Ollama, vLLM, llama.cpp, TGI, SGLang, TensorRT-LLM, LMDeploy, MLC — with an interactive "what should I run?" picker |
| [Ollama — Zero-Friction Local LLMs](https://brendanjameslynskey.github.io/Local_LLM_02_Ollama/) | Ollama architecture, Modelfiles, REST and OpenAI-compat APIs, VRAM tuning, the KV-cache-quant trick, with an interactive sizing calculator |
| [Inside vLLM — PagedAttention & Continuous Batching](https://brendanjameslynskey.github.io/Local_LLM_03_vLLM_Architecture/) | Why vLLM is 5–20× faster — KV fragmentation, paged attention, continuous batching, prefix caching, chunked prefill, speculative decoding, multi-LoRA, with a live page-allocation visualiser |
| [vLLM in Docker on NVIDIA GPUs](https://brendanjameslynskey.github.io/Local_LLM_04_vLLM_Docker/) | From a blank Linux box to an OpenAI-compatible vLLM endpoint — NVIDIA Container Toolkit, the vllm/vllm-openai image, docker compose, operational gotchas, with an interactive command builder |
| [Multi-GPU Parallelism for Serving](https://brendanjameslynskey.github.io/Local_LLM_05_Multi_GPU_Parallelism/) | Tensor, pipeline, data, and expert parallel — NVLink, NVSwitch, NCCL, InfiniBand, multi-node patterns, and an interactive strategy planner that works out TP/PP/DP/EP for your hardware |
| [Framework Shootout](https://brendanjameslynskey.github.io/Local_LLM_06_Frameworks/) | Feature matrix and honest throughput/latency numbers for vLLM, Ollama, llama.cpp, TGI, SGLang, TensorRT-LLM, LMDeploy, MLC, with an interactive filter |
| [Quantization for Local Hosting](https://brendanjameslynskey.github.io/Local_LLM_07_Quantization/) | GGUF, AWQ, GPTQ, FP8, INT4, MX-FP4 — bit layouts, perplexity impact, framework support, and an interactive format picker |
| [Deploying on NVIDIA DGX Spark](https://brendanjameslynskey.github.io/Local_LLM_08_DGX_Spark/) | Practical vLLM on a GB10 Grace-Blackwell workstation — unified memory, arm64 gotchas, realistic model/concurrency matrix, two-Spark pairing over 200 GbE |
| [Sources of Non-Determinism in LLM Serving](https://brendanjameslynskey.github.io/Local_LLM_09_Determinism/) | Why the same prompt gives different tokens twice — sampling, non-associative FP, batch-size dependence, scheduler drift, hardware/version differences, with an interactive "what would differ?" tool |
| [Production Patterns for Local LLM Serving](https://brendanjameslynskey.github.io/Local_LLM_10_Production/) | Routing, prefix & semantic caching, speculative decoding, observability, SLOs, rollouts, cost accounting, with an interactive SLO planner |
| [Deploying on NVIDIA GPUs — Architectures, Memory, Multi-GPU](https://brendanjameslynskey.github.io/Local_LLM_11_NVIDIA_GPUs/) | NVIDIA architecture families (Ampere → Blackwell), memory types (GDDR6/6X/7, HBM2e/3/3e, LPDDR5x, EGM), NVLink / NVSwitch / PCIe P2P / IOMMU, heterogeneous GPU ganging, MIG, and the Ollama/vLLM nuances per GPU class — with interactive GPU and ganging pickers |

## NVIDIA GPU Architectures

| Project | Description |
|---------|-------------|
| [The NVIDIA GPU Family Tree — Pascal to Blackwell](https://brendanjameslynskey.github.io/NVIDIA_GPU_01_Architecture_Overview/) | Family timeline from Pascal (2016) to Blackwell (2024) — process nodes, dies, transistor counts, memory types and what each generation unlocked, with an interactive family explorer |
| [Inside the SM — How NVIDIA's Streaming Multiprocessor Evolved](https://brendanjameslynskey.github.io/NVIDIA_GPU_02_SM_Evolution/) | Streaming Multiprocessor internals across Pascal, Volta, Turing, Ampere, Hopper, Ada and Blackwell — schedulers, register file, tensor cores, TMA, thread-block clusters, with an interactive SM explorer |
| [Tensor Cores — Five Generations of NVIDIA Matmul Hardware](https://brendanjameslynskey.github.io/NVIDIA_GPU_03_Tensor_Cores/) | Every tensor-core generation from Volta's first 4×4×4 FP16 MMA to Blackwell's MX-FP4 microscaling — formats, MMA shapes, sparsity, Transformer Engine, with an interactive precision-throughput calculator |
| [Memory Hierarchy — Registers, Caches, HBM, GDDR, and Why Bandwidth Wins](https://brendanjameslynskey.github.io/NVIDIA_GPU_04_Memory_Hierarchy/) | On-chip and off-chip memory across NVIDIA GPUs — registers, shared, L1/L2, HBM2e/3/3e, GDDR6/6X/7, LPDDR5x unified, and Hopper's TMA, with an interactive decode-speed estimator |
| [NVLink & NVSwitch — How NVIDIA Builds One Big GPU Out of Many](https://brendanjameslynskey.github.io/NVIDIA_GPU_05_NVLink_NVSwitch/) | Scale-up interconnect from NVLink 1 (Pascal) to NVLink 5 (Blackwell NVL72) — NVSwitch fabrics, NVLink-C2C, the rack-scale NVL72 superpod, vs PCIe and InfiniBand, with an interactive fabric planner |
| [Ampere — A100, RTX 30, and the Birth of the LLM Era](https://brendanjameslynskey.github.io/NVIDIA_GPU_06_Ampere/) | Deep dive into the GA100 datacenter die and GA10x consumer family — 3rd-gen tensor cores (TF32, BF16, 2:4 sparsity), MIG hardware partitioning, NVLink 3 with NVSwitch 2, with an interactive SKU picker |
| [Hopper — H100, FP8, and the Transformer Engine](https://brendanjameslynskey.github.io/NVIDIA_GPU_07_Hopper/) | Deep dive into GH100, H100/H200/GH200 — 4th-gen tensor cores with native FP8, the Transformer Engine, the Tensor Memory Accelerator, thread-block clusters and DSMEM, DPX, NVLink 4, with an interactive Hopper variant picker |
| [Ada Lovelace — RTX 40, L40S, and Consumer-Class AI](https://brendanjameslynskey.github.io/NVIDIA_GPU_08_Ada_Lovelace/) | Deep dive into AD102 and the RTX 40 / L40S / L4 family — 4th-gen RT cores with opacity and displaced micro-meshes, DLSS 3 with the Optical Flow Accelerator, the FP8 split between consumer and workstation, the consequences of dropping NVLink, with an interactive Ada SKU picker |
| [Blackwell — Dual-Die, FP4, and the NVL72 Rack-Scale GPU](https://brendanjameslynskey.github.io/NVIDIA_GPU_09_Blackwell/) | Deep dive into B100/B200/GB200 — dual-die NV-HBI packaging, 5th-gen tensor cores with MX-FP4 microscaling, 2nd-gen Transformer Engine, RAS engine, decompression engine, NVLink 5, the GB200 NVL72 superpod, with an interactive throughput planner |
| [Software Stack & Performance — From CUDA to LLM Throughput](https://brendanjameslynskey.github.io/NVIDIA_GPU_10_Software_and_Performance/) | The CUDA software stack — driver, runtime, cuBLAS/cuBLASLt, cuDNN, CUTLASS, Transformer Engine, NCCL, Triton, TensorRT-LLM — and a performance model that turns a GPU spec sheet into LLM tok/s, with an interactive end-to-end calculator |
| [DGX, HGX, MGX — NVIDIA's Datacenter Reference Platforms](https://brendanjameslynskey.github.io/NVIDIA_GPU_11_Datacenter_Platforms/) | Datacenter reference platforms — DGX turnkey systems, HGX 8-GPU baseboards, MGX modular reference, OAM module spec, BasePOD and SuperPOD cluster blueprints, NVL72, the OEM ecosystem (Supermicro, Dell, HPE, Lenovo) and DGX Cloud, with an interactive platform picker |
| [GeForce, RTX Pro, Tesla & A/H/L/B — Decoding NVIDIA's Product Lineup](https://brendanjameslynskey.github.io/NVIDIA_GPU_12_Consumer_Workstation_Products/) | Field guide to every NVIDIA product family — consumer GeForce, workstation RTX Pro (formerly Quadro), datacenter A/H/L/B (formerly Tesla), Jetson edge, China-export A800/H800/H20 — with naming logic, EULA boundaries, driver branches, and the "same die different card" patterns |
| [NVIDIA Networking — InfiniBand, ConnectX, BlueField, and the Cross-Node Fabric](https://brendanjameslynskey.github.io/NVIDIA_GPU_13_Networking_InfiniBand_BlueField/) | Cross-node fabric stack — ConnectX HCAs (CX-6 to CX-8), Quantum InfiniBand and Spectrum-X Ethernet switches, BlueField DPUs, GPUDirect RDMA / Storage, NCCL, and SHARP in-network reductions, with an interactive cluster fabric sizer |
| [PCIe & GPUDirect — The Bus Every GPU Sits On](https://brendanjameslynskey.github.io/NVIDIA_GPU_14_PCIe_and_GPUDirect/) | The system-board layer that decides whether multi-GPU actually scales — PCIe generations 3 to 6, Resizable BAR, IOMMU and ACS, NUMA pinning, GPUDirect P2P/RDMA/Storage, with practical diagnostics and an interactive PCIe topology lint |
| [Grace — NVIDIA's ARM Datacenter CPU and the GH200 / GB200 Superchips](https://brendanjameslynskey.github.io/NVIDIA_GPU_15_Grace_CPU_and_GH_GB/) | Why NVIDIA built an ARM CPU — Grace 72-core Neoverse V2, NVLink-C2C 900 GB/s coherent fabric, GH200 Grace-Hopper, GB200 Grace-Blackwell, NVL72, Extended GPU Memory, and the DGX Spark workstation, with an interactive superchip picker |
| [Jetson — NVIDIA's Edge AI and Robotics Stack](https://brendanjameslynskey.github.io/NVIDIA_GPU_16_Jetson_and_Edge/) | The Jetson edge family — Orin Nano (7W) through AGX Orin (60W) and the Blackwell-based Jetson Thor — plus JetPack, Linux for Tegra, Holoscan, Isaac, and DeepStream, with worked LLM-at-the-edge numbers and an interactive use-case picker |
| [Profiling & Debug — Nsight Systems, Nsight Compute, NVTX, CUPTI](https://brendanjameslynskey.github.io/NVIDIA_GPU_17_Profiling_and_Debug/) | The full NVIDIA profiling toolchain — Nsight Systems for system timelines, Nsight Compute for kernel analysis, NVTX annotations, CUPTI for programmatic capture, plus DCGM/nvbandwidth/nvitop, with worked workflows and an interactive tool picker |
| [Sharing the GPU — MIG, MPS, vGPU, and Kubernetes Time-Slicing](https://brendanjameslynskey.github.io/NVIDIA_GPU_18_GPU_Sharing_MIG_MPS_vGPU/) | Every way NVIDIA lets multiple workloads share one GPU — hardware-partitioned MIG, software-multiplexed MPS, hypervisor-level vGPU, Kubernetes time-slicing via the GPU Operator — with isolation, performance, and licensing trade-offs, and an interactive sharing-mode picker |
| [TensorRT-LLM — NVIDIA's Optimised Inference Engine](https://brendanjameslynskey.github.io/NVIDIA_GPU_19_TensorRT_LLM/) | The library NVIDIA uses to publish their headline LLM throughput numbers — engine builder, in-flight batching, paged KV-cache, FP8/FP4 quantization, speculative decoding (draft, Medusa, EAGLE), tensor/pipeline/expert parallel, with an interactive engine-config helper |
| [NeMo, NIM & AI Enterprise — NVIDIA's Production AI Stack](https://brendanjameslynskey.github.io/NVIDIA_GPU_20_NeMo_NIM_AI_Enterprise/) | NVIDIA's full-stack production answer — NeMo Framework (pretrain + fine-tune on Megatron), NeMo Aligner (RLHF/DPO/PPO), NeMo Curator (data prep), NeMo Guardrails, NIM microservices, Base Command, Run.ai, and the AI Enterprise commercial bundle, with an interactive stack builder |
| [PTX & SASS — The Real GPU Instruction Sets](https://brendanjameslynskey.github.io/NVIDIA_GPU_21_PTX_and_SASS/) | NVIDIA's portable IR (PTX) and the per-arch machine code (SASS) — instruction families, HMMA / WGMMA tensor-core ops, LDMATRIX, BAR.SYNC, predication, ptxas optimisations, worked SASS disassembly examples, and an interactive instruction decoder |
| [Warp Scheduling & SIMT — How the SM Issues Instructions](https://brendanjameslynskey.github.io/NVIDIA_GPU_22_Warp_Scheduling_SIMT/) | Microarchitecture of warp issue — SM partitions, warp schedulers, instruction latencies, occupancy vs ILP, divergence and reconvergence, predication vs branching, independent thread scheduling (Volta+), with an interactive issue-rate predictor |
| [HBM — Inside the Stacks That Feed the Tensor Cores](https://brendanjameslynskey.github.io/NVIDIA_GPU_23_HBM_Internals/) | Deep dive into HBM2e / 3 / 3e / 4 internals — vertical stacks, TSVs, channels and pseudo-channels, banks and bank groups, refresh, ECC modes (on-die, side-band, in-line), the HBM PHY, and CoWoS packaging, with an interactive bandwidth estimator |
| [Power & Thermal — Delivering 1000 W to a Card and Removing It Again](https://brendanjameslynskey.github.io/NVIDIA_GPU_24_Power_and_Thermal/) | How a B200 burns 1000 W and gets that power and heat managed — 12V-2x6 cabling, multi-phase VRMs, multi-rail design, transient response, GPU Boost and P-states, power capping, vapour chambers, direct-to-chip liquid cooling, with a power-and-cooling calculator |
| [Silicon & Substrates — Process, Reticle Limits, and Multi-Die Packaging](https://brendanjameslynskey.github.io/NVIDIA_GPU_25_Process_and_Packaging/) | TSMC process lineage from 16FF through 4N/4NP to N3 and A16, the 830 mm² reticle limit and how Blackwell broke through it, NV-HBI die-to-die, CoWoS-S vs CoWoS-L vs CoWoS-R packaging, yield-driven SKU binning, and the CoWoS supply bottleneck |

### Per-Architecture HW Deep Dives

| Project | Description |
|---------|-------------|
| [Inside Pascal — The First HBM and NVLink GPU](https://brendanjameslynskey.github.io/NVIDIA_GPU_26_Pascal_Low_Level/) | Low-level look at GP100 (P100) and GP102/104/106 — block diagram, the FP-heavy GP100 SM, FP16x2 packed math, TSMC 16FF+, voltages and clocks, HBM2 packaging, GDDR5X memory, and NVLink 1.0 (4 links × 20 GB/s). Interactive SKU picker |
| [Inside Volta — First Tensor Cores, Independent Thread Scheduling](https://brendanjameslynskey.github.io/NVIDIA_GPU_27_Volta_Low_Level/) | Low-level deep dive into GV100 — TSMC 12FF, four-partition SM with split FP/INT, first-generation tensor cores at 125 TFLOPS, independent thread scheduling, HBM2, NVLink 2.0 and NVSwitch 1 (DGX-2). Interactive SKU picker |
| [Inside Turing — RT Cores, INT8/INT4 Tensor Cores, GDDR6](https://brendanjameslynskey.github.io/NVIDIA_GPU_28_Turing_Low_Level/) | Low-level look at TU102/104/106 RTX dies and TU116/117 budget dies — 1st-gen RT cores, 2nd-gen tensor cores (INT8/INT4), GDDR6 mainstream, NVLink 2.0 bridge, and the Tesla T4 inference card. Interactive SKU picker |
| [Inside Ampere — 3rd-Gen Tensor Cores, 40 MB L2, MIG](https://brendanjameslynskey.github.io/NVIDIA_GPU_29_Ampere_Low_Level/) | Low-level deep dive into GA100 (TSMC 7N) and GA10x (Samsung 8N) — two SM variants, TF32/BF16/2:4 sparsity, the 40 MB L2 leap, async copy, MIG, NVLink 3.0, NVSwitch 2, HBM2e crossing 2 TB/s. Picker covers 13 SKUs |
| [Inside Ada Lovelace — AD102, 96 MB L2, 4th-Gen RT](https://brendanjameslynskey.github.io/NVIDIA_GPU_30_Ada_Low_Level/) | Low-level deep dive into AD102–107 on TSMC 4N — doubled-FP32 SM, 4th-gen tensor cores (FP8 enabled only on L40S/RTX 6000 Ada, fused off on RTX 40), 4th-gen RT with OMM/DMM, the OFA, 96 MB L2, GDDR6X, the 12VHPWR saga, no-NVLink consequences |
| [Inside Hopper — FP8, TMA, Thread-Block Clusters, NVLink 4](https://brendanjameslynskey.github.io/NVIDIA_GPU_31_Hopper_Low_Level/) | Low-level deep dive into GH100 / H100 / H200 / GH200 — TSMC 4N, 4th-gen tensor cores with native FP8 at 1979 TFLOPS, WGMMA warp-group MMA, TMA, thread-block clusters and DSMEM, DPX, HBM3/HBM3e, NVLink 4 at 900 GB/s, H800/H20 export variants |
| [Inside Blackwell — Dual-Die, MX-FP4, NVLink 5](https://brendanjameslynskey.github.io/NVIDIA_GPU_32_Blackwell_Low_Level/) | Low-level deep dive into Blackwell — dual-die B100/B200 with the 10 TB/s NV-HBI on CoWoS-L, 5th-gen tensor cores with MX-FP4/MX-FP6 microscaling at 9 PFLOPS, 2nd-gen Transformer Engine, RAS and decompression engines, TEE-IO, 192 GB HBM3e at 8 TB/s, NVLink 5, NVL72, GB200 superchip, RTX 50 series with GDDR7 |

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
