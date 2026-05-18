export type Lesson = {
  slug: string;
  number: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  readMinutes: number;
  publishedAt: string;
  author: string;
  tldr: string[];
  body: { heading: string; paragraphs: string[] }[];
  tryThis: string;
};

export type Category = {
  slug: string;
  label: string;
  tagline: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "foundations",
    label: "Foundations",
    tagline: "What an agent actually is",
    description:
      "Definitions, primitives, and the mental models you need before writing a single line. Skip these and you'll waste a month.",
  },
  {
    slug: "building",
    label: "Building",
    tagline: "Tools, memory, orchestration",
    description:
      "How to assemble an agent that survives contact with a real workflow. Tool design, retrieval, and when not to go multi-agent.",
  },
  {
    slug: "shipping",
    label: "Shipping",
    tagline: "Eval, observe, deploy",
    description:
      "The unglamorous work that separates demos from revenue. Evals you'll actually run and the metrics that decide your fate.",
  },
  {
    slug: "business",
    label: "Business",
    tagline: "Pricing, selling, killing",
    description:
      "Selling capability instead of architecture. Pricing models, buyer psychology, and knowing when to shut a project down.",
  },
];

export const lessons: Lesson[] = [
  {
    slug: "what-is-an-agent",
    number: "01",
    title: "What is an agent, really?",
    description: "Strip away the hype. A working definition you can actually build against.",
    category: "foundations",
    categoryLabel: "Foundations",
    readMinutes: 9,
    publishedAt: "2025-02-04",
    author: "The Faculty",
    tldr: [
      "An agent is a loop, not a model.",
      "If it can't take an action and observe a result, it's a chatbot.",
      "The hard part is the tool surface, not the prompt.",
    ],
    body: [
      {
        heading: "The definition that survives a meeting",
        paragraphs: [
          "Most definitions of \"AI agent\" are written to sell something. The one that actually helps you build is boring: an agent is a system that observes a state, decides on an action, takes the action through a tool, and observes the result — repeatedly, until a goal is met or it gives up.",
          "Notice what's missing. No claims about reasoning. No claims about autonomy. No claims about being human-like. Those are downstream consequences, not the definition.",
        ],
      },
      {
        heading: "Why the loop matters more than the model",
        paragraphs: [
          "Swap GPT-5 for a smaller model and a well-designed agent still works, just slower or with more retries. Swap the loop for a single completion and the best model in the world becomes a chatbot again. The loop is the product.",
          "This is also why most agent failures are tooling failures. The model picks a tool, the tool returns garbage, the model picks a worse tool. The fix is almost never a better prompt.",
        ],
      },
      {
        heading: "The smallest useful agent",
        paragraphs: [
          "Two tools, one loop, one stop condition. That's it. If you can't get value out of that, adding a planner and four sub-agents won't save you. Most teams skip this step and wonder why their orchestrator is a museum of broken edges.",
        ],
      },
    ],
    tryThis:
      "Open the Quick Start sandbox. Describe a workflow you do every week in three sentences. Ask the agent which step is the loop and which steps are just text generation.",
  },
  {
    slug: "tools-memory-loop",
    number: "02",
    title: "Tools, memory, and the loop",
    description: "The three primitives behind every agent worth shipping.",
    category: "foundations",
    categoryLabel: "Foundations",
    readMinutes: 11,
    publishedAt: "2025-02-18",
    author: "The Faculty",
    tldr: [
      "Tools are the agent's hands.",
      "Memory is the agent's notebook, not its brain.",
      "The loop is the only thing that turns text into outcomes.",
    ],
    body: [
      {
        heading: "Tools: the only place an agent touches reality",
        paragraphs: [
          "Every meaningful action an agent takes goes through a tool — a function it can call. Search the web, read a file, send an email, query a database. If you haven't given it a tool for something, it cannot do that thing, no matter how confidently it claims otherwise.",
        ],
      },
      {
        heading: "Memory: a notebook, nothing more",
        paragraphs: [
          "Memory in agents is mostly hype. In practice it's a list of past observations the model gets to see again. Sometimes it's summarized. Sometimes it's retrieved. Sometimes it's just dumped back into context. Pick the simplest one that works for your task.",
        ],
      },
      {
        heading: "The loop: where intelligence emerges",
        paragraphs: [
          "A model in a loop does things a model alone can't. That's the whole trick. Master this and the rest of agent engineering is detail work.",
        ],
      },
    ],
    tryThis: "List the tools your dream agent would need. Cut the list in half. Ship that.",
  },
  {
    slug: "models-as-components",
    number: "03",
    title: "Models as components",
    description: "Choosing a model is an architecture decision, not a vibe.",
    category: "foundations",
    categoryLabel: "Foundations",
    readMinutes: 8,
    publishedAt: "2025-03-04",
    author: "The Faculty",
    tldr: [
      "Pick the cheapest model that passes your eval.",
      "Mix models. Cheap one for routing, expensive one for reasoning.",
      "Model loyalty is for fans, not engineers.",
    ],
    body: [
      {
        heading: "Stop picking models by reputation",
        paragraphs: [
          "Twitter says one model is best this week. Next week it's another. Meanwhile your agent has a specific job. Run an eval. Use the cheapest model that passes it. That's the entire decision framework.",
        ],
      },
      {
        heading: "Mix and route",
        paragraphs: [
          "Production agents use multiple models. A fast cheap one to classify intent. A bigger one to handle the actual task. A tiny one to verify the output. Treating \"the LLM\" as a single component is leaving money on the table.",
        ],
      },
    ],
    tryThis: "Pick one task in your agent. Try three models on it. Keep the cheapest one that doesn't break.",
  },
  {
    slug: "designing-the-tool-surface",
    number: "04",
    title: "Designing the tool surface",
    description: "Bad tools = bad agents. How to design ones an LLM can actually wield.",
    category: "building",
    categoryLabel: "Building",
    readMinutes: 12,
    publishedAt: "2025-03-18",
    author: "The Faculty",
    tldr: [
      "Tools are an API design problem in disguise.",
      "Names and descriptions matter more than parameters.",
      "Return errors a model can act on, not stack traces.",
    ],
    body: [
      {
        heading: "Tool design is API design",
        paragraphs: [
          "The model is your only consumer. Design accordingly. Verbose, descriptive names. One job per tool. Sensible defaults. If a junior engineer would misuse it, the model definitely will.",
        ],
      },
      {
        heading: "Errors are instructions",
        paragraphs: [
          "A 500 with a stack trace teaches the model nothing. \"Search returned 0 results — try broader keywords or check spelling\" teaches it everything. Treat error messages as part of the prompt.",
        ],
      },
    ],
    tryThis: "Audit your agent's tools. Rewrite every error message as advice to the model.",
  },
  {
    slug: "memory-without-magic",
    number: "05",
    title: "Memory without the magic",
    description: "Context windows, retrieval, and when 'just dump it all in' works.",
    category: "building",
    categoryLabel: "Building",
    readMinutes: 10,
    publishedAt: "2025-04-01",
    author: "The Faculty",
    tldr: [
      "Try stuffing first. Often it works.",
      "Retrieval is plumbing, not magic.",
      "Summaries lose information you'll later wish you had.",
    ],
    body: [
      {
        heading: "Start with the dumbest option",
        paragraphs: [
          "Modern context windows are huge. For most agents, dumping the relevant docs into context beats a clever retrieval pipeline. Build the clever thing only when the dumb thing visibly fails.",
        ],
      },
    ],
    tryThis: "Before adding RAG, measure what happens if you just put everything in the prompt.",
  },
  {
    slug: "multi-agent-when-not",
    number: "06",
    title: "Multi-agent: when, when not",
    description: "Most multi-agent systems should have been one agent.",
    category: "building",
    categoryLabel: "Building",
    readMinutes: 9,
    publishedAt: "2025-04-15",
    author: "The Faculty",
    tldr: [
      "Multi-agent multiplies failure modes.",
      "Use it for genuinely parallel work or genuinely different roles.",
      "Otherwise: one agent, more tools.",
    ],
    body: [
      {
        heading: "The seduction of orchestration",
        paragraphs: [
          "Drawing boxes connected by arrows feels like architecture. It's usually procrastination. A single agent with the right tools handles most workflows just fine and is dramatically easier to debug.",
        ],
      },
    ],
    tryThis: "Take your multi-agent diagram. Try to do the same job with one agent and more tools. Time it.",
  },
  {
    slug: "evals-youll-actually-run",
    number: "07",
    title: "Evals you'll actually run",
    description: "Cheap, repeatable, honest. Most teams build evals they never look at.",
    category: "shipping",
    categoryLabel: "Shipping",
    readMinutes: 11,
    publishedAt: "2025-05-06",
    author: "The Faculty",
    tldr: [
      "An eval you run weekly beats one you run never.",
      "Twenty handwritten cases > a thousand synthetic ones.",
      "Track regressions, not vibes.",
    ],
    body: [
      {
        heading: "The eval that fits in your head",
        paragraphs: [
          "Start with twenty examples you understand inside out. Run them on every prompt change. When something breaks, you'll know exactly what and why. Scale the eval set after you've built the habit, not before.",
        ],
      },
    ],
    tryThis: "Write your first 20 eval cases by hand today. Run them against your current agent.",
  },
  {
    slug: "observability-for-non-determinism",
    number: "08",
    title: "Observability for non-determinism",
    description: "Tracing, replay, and the art of reading conversations.",
    category: "shipping",
    categoryLabel: "Shipping",
    readMinutes: 10,
    publishedAt: "2025-05-20",
    author: "The Faculty",
    tldr: [
      "Log every tool call with inputs and outputs.",
      "Make traces replayable.",
      "Read your agent's conversations like a manager reads transcripts.",
    ],
    body: [
      {
        heading: "If you can't replay it, you can't fix it",
        paragraphs: [
          "Non-deterministic systems demand a paper trail. Capture the full conversation, every tool call, every input and output. Then build the smallest UI that lets you scroll through one. The first time you find a bug in 30 seconds you'll wonder how you lived without it.",
        ],
      },
    ],
    tryThis: "Add structured logging to one agent run. Read the trace end-to-end. Note three surprises.",
  },
  {
    slug: "cost-and-latency-in-production",
    number: "09",
    title: "Cost & latency in production",
    description: "The two numbers that decide if your agent ships.",
    category: "shipping",
    categoryLabel: "Shipping",
    readMinutes: 8,
    publishedAt: "2025-06-03",
    author: "The Faculty",
    tldr: [
      "Cost per task is a product decision, not an infra decision.",
      "P95 latency kills more agents than bugs.",
      "Caching is free money.",
    ],
    body: [
      {
        heading: "Two numbers, no excuses",
        paragraphs: [
          "Track cost per successful task and P95 end-to-end latency from day one. Every prompt change, every model swap, every new tool: re-measure. If you don't know these numbers, you don't have a product.",
        ],
      },
    ],
    tryThis: "Compute cost-per-task and P95 latency for your agent today. Write them on a sticky note.",
  },
  {
    slug: "pricing-an-agentic-product",
    number: "10",
    title: "Pricing an agentic product",
    description: "Per-seat, per-task, per-outcome — and why most get it wrong.",
    category: "business",
    categoryLabel: "Business",
    readMinutes: 9,
    publishedAt: "2025-06-17",
    author: "The Faculty",
    tldr: [
      "Per-seat pricing punishes you for being good.",
      "Per-task is the easiest to defend.",
      "Per-outcome is the dream and a billing nightmare.",
    ],
    body: [
      {
        heading: "The seat-based trap",
        paragraphs: [
          "If your agent replaces five seats of work, charging per seat caps your revenue at one. Per-task pricing aligns the buyer's spend with the value they receive. It's also what your COGS looks like, which makes the business defensible.",
        ],
      },
    ],
    tryThis: "Model your top customer at per-seat, per-task, and per-outcome. Pick the one that doesn't bankrupt you.",
  },
  {
    slug: "buyer-doesnt-care-its-agentic",
    number: "11",
    title: "The buyer doesn't care it's agentic",
    description: "Selling capability, not architecture.",
    category: "business",
    categoryLabel: "Business",
    readMinutes: 7,
    publishedAt: "2025-07-01",
    author: "The Faculty",
    tldr: [
      "Buyers buy outcomes, not architectures.",
      "\"AI agent\" is a feature word, not a value word.",
      "Lead with the boring win.",
    ],
    body: [
      {
        heading: "Sell the outcome, demo the magic",
        paragraphs: [
          "The pitch is \"we'll respond to every support ticket within five minutes for half the cost.\" The demo is the agent doing it. Lead with the outcome, prove it with the magic. Reverse that order and you sound like every other vendor.",
        ],
      },
    ],
    tryThis: "Rewrite your one-line pitch with no AI vocabulary. If it still sells, you've got a product.",
  },
  {
    slug: "when-to-kill-the-project",
    number: "12",
    title: "When to kill the project",
    description: "The failure modes that mean it's not going to work.",
    category: "business",
    categoryLabel: "Business",
    readMinutes: 10,
    publishedAt: "2025-07-15",
    author: "The Faculty",
    tldr: [
      "If accuracy can't reach the bar in 90 days, it won't.",
      "If buyers won't pay during pilots, they won't at scale.",
      "Sunk cost is not a strategy.",
    ],
    body: [
      {
        heading: "The three signals",
        paragraphs: [
          "One: a quality ceiling that no model and no prompt budges. Two: champions who love the demo but never sign. Three: a unit economics curve going the wrong way as you scale. Any one of them is a warning. Two is a decision.",
        ],
      },
    ],
    tryThis: "Write the three conditions under which you'd kill your current project. Share them with your team.",
  },
];

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getLessonsByCategory(slug: string): Lesson[] {
  return lessons.filter((l) => l.category === slug);
}

export function getRelatedLessons(slug: string, limit = 3): Lesson[] {
  const lesson = getLesson(slug);
  if (!lesson) return [];
  const sameCategory = lessons.filter(
    (l) => l.category === lesson.category && l.slug !== slug,
  );
  const others = lessons.filter(
    (l) => l.category !== lesson.category && l.slug !== slug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
