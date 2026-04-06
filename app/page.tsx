import Link from "next/link";
import ContactForm from "./components/ContactForm";
import Navbar from "@/app/components/Navbar";
const stats = [
  { value: "10M+", label: "profiles scanned across workflows" },
  { value: "190+", label: "countries and regional market coverage" },
  { value: "94%", label: "lead-list cleanup rate before delivery" },
  { value: "24/7", label: "collection logic, filtering, and export" },
];

const trustItems = [
  "Built for web designers, growth operators, AI automation agencies, and closers",
  "Real-time scraping logic instead of stale recycled lead databases",
  "Custom qualification rules for reviews, ratings, websites, emails, phones, and intent signals",
  "Export-ready delivery with clean columns, dedupe rules, and usable contact structure",
];

const featureCards = [
  {
    eyebrow: "Precision targeting",
    title: "Search by niche, city, region, and buying context.",
    body:
      "Target plumbers in Chicago, med spas in Miami, real estate agents in Houston, or obscure B2B supplier niches in Europe. The system is built to handle niche, geography, and commercial relevance without turning everything into generic junk.",
    bullets: [
      "Local and global market targeting",
      "Niche-specific query expansion",
      "Custom segmentation by business type",
      "Works for cold outreach and sales ops",
    ],
  },
  {
    eyebrow: "Lead quality",
    title: "Filter out garbage before it wastes your time.",
    body:
      "Most lead providers sell bloated sheets full of dead domains, duplicate records, hobby businesses, and zero-buying-intent trash. Dakota focuses on filtering logic first so the output is leaner, cleaner, and actually useful.",
    bullets: [
      "Review and rating thresholds",
      "Website presence checks",
      "Email and phone requirement toggles",
      "Deduplication across repeated sources",
    ],
  },
  {
    eyebrow: "Real enrichment",
    title: "Extract more than a business name and a prayer.",
    body:
      "Leads become more valuable when they include context. The system can structure names, phone numbers, websites, cities, ratings, review counts, map URLs, and additional enrichment signals so outreach is faster and more credible.",
    bullets: [
      "Email extraction workflows",
      "Contact and website parsing",
      "Location-level enrichment",
      "Export-ready table formatting",
    ],
  },
];

const outcomes = [
  {
    title: "For agencies",
    text:
      "Get targeted business lists for website design, paid ads, SEO, automation, CRM setup, consulting, or outbound campaigns without manually hunting through maps for hours like a sleep-deprived goblin.",
  },
  {
    title: "For closers",
    text:
      "Work cleaner lists with less nonsense. Spend more time on conversations and less time cleaning broken spreadsheets, dead numbers, and businesses that clearly should not have been there in the first place.",
  },
  {
    title: "For operators",
    text:
      "Turn lead sourcing into a repeatable system. Target, enrich, export, distribute, and track campaigns with a more controlled input pipeline instead of relying on random list vendors and their suspicious optimism.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Define the market",
    body:
      "Choose the niche, geography, and qualification logic. This can be as broad as ‘roofers in Texas’ or as specific as ‘helichrysum oil suppliers in Milan with weak digital presence’."
  },
  {
    step: "02",
    title: "Run collection logic",
    body:
      "Search and collection workflows are structured to source live business data instead of static list dumps. The emphasis is on fresh discovery and usable business profiles."
  },
  {
    step: "03",
    title: "Filter and dedupe",
    body:
      "Bad fits get removed early. Deduplication, website checks, review thresholds, and contact-quality rules reduce the amount of garbage making it to the final sheet."
  },
  {
    step: "04",
    title: "Enrich and export",
    body:
      "Deliver a clean list with columns that matter. Names, websites, emails, phones, locations, ratings, review counts, and useful URLs get packaged for immediate use."
  },
];

const comparison = [
  {
    label: "Traditional list broker",
    bad: "Old database, duplicate rows, weak context, dead websites, generic targeting",
    good: "",
  },
  {
    label: "Cheap freelancer scrape",
    bad: "Inconsistent formatting, random fields, little quality control, no filtering logic",
    good: "",
  },
  {
    label: "Dakota Collective",
    bad: "",
    good: "Targeted sourcing, configurable filters, cleaner exports, and stronger campaign readiness",
  },
];

const leadColumns = [
  "Company Name",
  "Phone",
  "Email",
  "Website",
  "Address",
  "City",
  "Country",
  "Rating",
  "Reviews",
  "Instagram",
  "Source",
  "Maps URL",
];

const useCases = [
  {
    title: "Web design outreach",
    description:
      "Find businesses with weak, missing, or outdated sites and build lists around visible commercial problems that are easy to pitch against.",
  },
  {
    title: "AI automation services",
    description:
      "Source businesses with operational friction, weak digital intake, and obvious automation opportunities for AI chat, CRM automation, follow-up, and workflow upgrades.",
  },
  {
    title: "Local service campaigns",
    description:
      "Build segmented outreach campaigns for plumbers, electricians, med spas, roofers, lawyers, dental clinics, brokers, suppliers, and dozens of other categories.",
  },
  {
    title: "Sales pipeline filling",
    description:
      "Keep outbound calendars full with fresher lists and less manual prep, so the team can actually sell instead of babysitting broken data.",
  },
  {
    title: "Market entry research",
    description:
      "Map markets in new cities or countries by collecting structured business data and identifying where outreach has the strongest angle.",
  },
  {
    title: "Lead delivery productization",
    description:
      "Package lead generation into a direct offer for agencies, operators, and niche consultants who want clean data without building the sourcing system themselves.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$10",
    note: "For testing quality before going bigger",
    features: [
      "100 targeted leads",
      "Clean delivery structure",
      "Basic filtering logic",
      "Maps URL included",
      "Fast turnaround-ready format",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$49",
    note: "For agencies and outbound operators",
    features: [
      "500 leads",
      "Higher quality filtering",
      "Phone + website fields",
      "Email included when available",
      "Built for campaign launch",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "$99",
    note: "For heavier volume and broader expansion",
    features: [
      "1200+ leads",
      "Advanced segmentation",
      "Expanded enrichment",
      "Cleaner list architecture",
      "Made for repeat systems",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    question: "Are these just recycled lead lists?",
    answer:
      "No. The whole point is to avoid stale bulk databases. The offer is centered on live collection logic, filtering rules, and cleaner packaging so the final sheet is closer to campaign-ready instead of dump-ready.",
  },
  {
    question: "Can this target very specific niches?",
    answer:
      "Yes. Narrow niches are one of the strengths. The workflow can be aimed at local service businesses, agency prospects, B2B suppliers, regional verticals, and highly specific combinations of niche plus geography.",
  },
  {
    question: "What fields can be included?",
    answer:
      "Typical delivery can include business name, phone, email, website, address, city, country, rating, review count, social links, source labels, and maps URLs depending on the workflow and source quality.",
  },
  {
    question: "Who is this best for?",
    answer:
      "Agencies, closers, consultants, automation operators, outbound teams, and service businesses that need fresh lead inputs without wasting hours building and cleaning lists manually.",
  },
  {
    question: "Why not just buy a giant cheap list?",
    answer:
      "Because giant cheap lists are usually giant cheap regrets. They look efficient until half the rows are dead, duplicated, irrelevant, or so generic they create miserable outreach. Cleaner inputs usually win.",
  },
];

const industries = [
  "Home services",
  "Legal",
  "Dental",
  "Medical aesthetics",
  "Real estate",
  "Hospitality",
  "Construction",
  "Suppliers",
  "Automotive",
  "Coaches and consultants",
  "Fitness studios",
  "Clinics",
  "Restaurants",
  "Franchises",
  "Manufacturers",
  "B2B services",
];

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
      {children}
    </div>
  );
}

function GridGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-320px] h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[160px]" />
      <div className="absolute left-[8%] top-[34%] h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-[4%] top-[12%] h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-[160px]" />
      <div className="absolute bottom-[-150px] left-[20%] h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[150px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
    </div>
  );
}



  

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <SectionBadge>Lead infrastructure for agencies and operators</SectionBadge>

          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
            Buy real leads.
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              Stop buying fake momentum.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Dakota Collective helps agencies, closers, and operators get targeted
            lead lists built around live sourcing, stronger filtering, cleaner
            exports, and more useful data structure. Because paying for a giant
            spreadsheet full of stale nonsense is somehow still a thriving industry.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition duration-300 hover:scale-[1.03]"
            >
              Get 100 leads for $10
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white/85 transition duration-300 hover:bg-white/10"
            >
              See how the system works
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              >
                <div className="text-3xl font-black tracking-[-0.05em] text-white">
                  {item.value}
                </div>
                <div className="mt-2 text-sm leading-6 text-white/55">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0a1018]/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Sample delivery view
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  Campaign-ready output structure
                </div>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Live-ready
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {leadColumns.map((column, index) => (
                <div
                  key={column}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white/80">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-sm font-medium text-white/80">{column}</div>
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Included
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.02] p-5">
              <div className="text-xs uppercase tracking-[0.26em] text-white/45">
                Why this matters
              </div>
              <p className="mt-3 text-sm leading-7 text-white/65">
                The value is not just “a lot of rows.” The value is cleaner rows,
                usable columns, stronger filters, and less time wasted trying to
                figure out whether a lead is a real opportunity or a spreadsheet hallucination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[34px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl lg:grid-cols-4 lg:p-8">
        {trustItems.map((item) => (
          <div key={item} className="rounded-[22px] border border-white/8 bg-[#0b1018]/80 p-5">
            <div className="text-sm leading-7 text-white/70">{item}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="proof" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div>
          <SectionBadge>Why it wins</SectionBadge>
          <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Cleaner inputs create better campaigns.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            Better lead generation is not magic. It is targeting, qualification,
            filtering, enrichment, and packaging done with actual discipline. Most
            providers fail at least three of those. Some fail all five and still send an invoice.
          </p>

          <div className="mt-10 space-y-4">
            {comparison.map((row) => (
              <div
                key={row.label}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
              >
                <div className="text-lg font-semibold text-white">{row.label}</div>
                {row.bad ? (
                  <p className="mt-3 text-sm leading-7 text-rose-200/70">{row.bad}</p>
                ) : null}
                {row.good ? (
                  <p className="mt-3 text-sm leading-7 text-emerald-200/75">{row.good}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="rounded-[32px] border border-white/10 bg-[#0a1018]/85 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
            >
              <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                Outcome
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white">
                {outcome.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{outcome.text}</p>
            </div>
          ))}

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-white/[0.04] to-cyan-500/10 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:col-span-2">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                  Delivery promise
                </div>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white">
                  Built to reduce cleanup, not create more of it.
                </h3>
              </div>
              <a
                href="#contact"
                className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/15"
              >
                Talk about your niche
              </a>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/70">
              Campaigns fail upstream all the time. Bad targeting creates bad lists.
              Bad lists create bad outreach. Bad outreach creates fake conclusions
              about the market. Fixing the sourcing layer helps everything after it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionBadge>Core features</SectionBadge>
          <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            A lead generation site that actually explains why it matters.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg">
            Your service is not “we scrape data.” Your service is “we help people
            get to better opportunities faster with cleaner inputs.” That is the
            frame. The site should sell the result, not just the mechanism.
          </p>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-[34px] border border-white/10 bg-[#0a1018]/85 p-8 shadow-[0_20px_90px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                {card.eyebrow}
              </div>
              <h3 className="mt-5 text-2xl font-bold leading-tight tracking-[-0.03em] text-white">
                {card.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/65">{card.body}</p>
              <div className="mt-7 space-y-3">
                {card.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-white/80" />
                    <div className="text-sm text-white/75">{bullet}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <SectionBadge>Industries</SectionBadge>
            <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Built for dozens of commercial categories.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/65">
              Home services, healthcare, suppliers, local businesses, B2B targets,
              consultants, hospitality, and more. If a market can be defined clearly,
              it can usually be mapped more cleanly than people expect.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-[24px] border border-white/10 bg-[#0c1119]/80 px-4 py-5 text-center text-sm font-semibold text-white/80"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionBadge>Process</SectionBadge>
          <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Structured like a system. Explained like a service.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg">
            The page needs to make buyers feel there is a repeatable process behind
            the output. Not mystery. Not “trust me bro.” Structure sells better.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-[32px] border border-white/10 bg-[#0b1018]/85 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            >
              <div className="text-5xl font-black tracking-[-0.08em] text-white/18">
                {step.step}
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionBadge>Use cases</SectionBadge>
            <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              More than one offer. More than one audience.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg">
              A good service page should not trap you inside one angle. The same
              sourcing system can support different buyers with different goals.
              Show range, but keep the message commercial.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 transition duration-300 hover:bg-white/10"
          >
            Build a custom campaign
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold tracking-[-0.03em] text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>Pricing</SectionBadge>
          <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Simple pricing that sells fast.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg">
            Keep entry pricing clear. Buyers should understand the offer without
            needing a decoder ring or a 14-step funnel. The job here is confidence, not confusion.
          </p>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[34px] border p-8 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl ${
                plan.highlight
                  ? "border-white/25 bg-white/[0.09] xl:-translate-y-3"
                  : "border-white/10 bg-[#0a1018]/85"
              }`}
            >
              {plan.highlight ? (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-black">
                  Most popular
                </div>
              ) : null}

              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
                {plan.name}
              </div>
              <div className="mt-5 text-6xl font-black tracking-[-0.06em] text-white">
                {plan.price}
              </div>
              <p className="mt-4 text-sm leading-7 text-white/60">{plan.note}</p>

              <div className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                    <div className="text-sm text-white/78">{feature}</div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-bold transition duration-300 hover:scale-[1.02] ${
                  plan.highlight
                    ? "bg-white text-black"
                    : "border border-white/15 bg-white/5 text-white"
                }`}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricBand() {
  const items = [
    ["Fresh data", "Live collection workflows instead of stale list recycling"],
    ["Cleaner exports", "Structure designed for real outreach and campaign use"],
    ["Lower friction", "Less cleanup means faster time to launch"],
    ["Better framing", "The page explains the commercial result, not just the technical mechanism"],
  ];

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[36px] border border-white/10 bg-[#091019]/90 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl md:grid-cols-2 xl:grid-cols-4 xl:p-10">
        {items.map(([title, body]) => (
          <div key={title} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6">
            <div className="text-lg font-bold text-white">{title}</div>
            <p className="mt-3 text-sm leading-7 text-white/65">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Questions buyers will ask anyway.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg">
            So answer them here before they vanish into the internet mist and pretend they were “just thinking about it.”
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[30px] border border-white/10 bg-[#0a1018]/85 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.26)] backdrop-blur-xl"
            >
              <h3 className="text-xl font-bold tracking-[-0.02em] text-white">
                {faq.question}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-fuchsia-500/[0.06] to-cyan-500/[0.06] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          
          <div>
            <SectionBadge>Ready to launch</SectionBadge>

            <h2 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Build outbound on top of better lead inputs.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Whether you sell web design, AI automation, consulting, or another
              service with a clear commercial outcome, Dakota helps you start with
              cleaner lists and a stronger angle.
            </p>
          </div>

          {/* 🔥 SENİN EKLEDİĞİN FORM (FIXLENMİŞ) */}
          <div className="rounded-[32px] border border-white/10 bg-[#091019]/85 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8">

            <h3 className="text-lg mb-4 text-white/70">Start here</h3>

            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#03060b] text-white">
      <div className="relative isolate min-h-screen">
        <Navbar />
        <GridGlow />
        <Hero />
        <TrustStrip />
        <WhySection />
        <Features />
        <Industries />
        <Process />
        <UseCases />
        <Pricing />
        <MetricBand />
        <FAQ />
        <FinalCTA />
      </div>
    </main>
  );
}

                  



