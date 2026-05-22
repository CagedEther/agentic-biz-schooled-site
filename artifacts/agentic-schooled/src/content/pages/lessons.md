---
title: Lessons
path: /lessons
order: 4
description: Deep-dive lesson notes and reference material for every track
heroImage: lessons.svg
---

# Lesson Notes

Reference material for every lesson in the curriculum. Use this alongside the main curriculum track — each section maps directly to a lesson.

![Lessons reference illustration](/images/lessons.svg)

## Foundations Reference

### What is an agent?

An agent is a system that takes a goal, decides what actions to take, executes those actions, observes the results, and decides what to do next — on its own.

The key difference from a chatbot: a chatbot responds. An agent **acts**.

**The minimal definition:**
- A model that can reason
- A set of tools it can call
- A loop that continues until the goal is met or a stopping condition is reached

### Tools and memory

Tools are functions the agent can call. Memory is what it retains across steps.

**Short-term memory** = the context window. Everything in the current conversation.

**Long-term memory** = a database, vector store, or structured file the agent can read and write.

### Models

| Use case | Model tier |
|---|---|
| Fast classification | Small (Haiku, GPT-4o-mini) |
| Reasoning and planning | Mid (Sonnet, GPT-4o) |
| Complex multi-step problems | Large (Opus, o3) |

Cost scales fast. Most production agents use small models for most steps and only escalate to large models when needed.

## Building Reference

### Prompt architecture

Your system prompt is the agent's operating manual. It should describe:
- What the agent is
- What tools it has
- What good output looks like
- What to do when stuck

Keep it short. Long system prompts get ignored in the middle.

### Loops and stopping conditions

Every agent loop needs a way to stop. Common patterns:

- **Max steps** — hard limit on how many actions the agent can take
- **Goal check** — the agent evaluates whether the goal is met after each step
- **Human in the loop** — the agent pauses and asks for approval before certain actions

## Shipping Reference

### Deployment patterns

| Pattern | When to use |
|---|---|
| Async job queue | Long-running tasks, acceptable latency |
| Real-time agent | User-facing, low-latency required |
| Scheduled run | Recurring automation (daily reports, etc.) |

### Observability

Log every agent step: the input, the tool called, the result. You cannot debug an agent you cannot observe.

---

[Read the full curriculum →](/curriculum)
