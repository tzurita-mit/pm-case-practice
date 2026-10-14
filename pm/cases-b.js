window.PM_CASES_B = [

  /* ===================== ESTIMATE (6) ===================== */
  {
    id: 'b-est-voltnest-ev-chargers',
    cat: 'estimate',
    style: 'Google-style',
    lvl: 'Easy',
    min: 20,
    title: 'US home EV charger installs',
    prompt: 'Voltnest installs Level 2 home EV chargers. Estimate the annual US market (in dollars) for home Level 2 charger installations, and tell me how much of it Voltnest can realistically serve.',
    brief: [
      'Voltnest is a 4-year-old startup that sells and installs Level 2 (240V) home chargers through a network of licensed electricians. It currently operates in California and the Northeast.',
      'Leadership is preparing a Series B deck and wants a defensible, bottom-up market size rather than a top-down analyst number.',
      'Scope: residential installs only (single-family homes and townhouses with off-street parking). Multifamily and workplace charging are out of scope.',
      'You have the anchor facts in Exhibit 1. You must choose the decomposition yourself and give a range, not a single number.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Anchor facts',
        cols: ['Fact', 'Value'],
        rows: [
          ['New plug-in EV sales in the US (BEV + PHEV), per year', '~1.6M'],
          ['EV buyers with dedicated off-street parking (garage / driveway)', '~70%'],
          ['Of those, share who install Level 2 within 12 months of purchase', '~65%'],
          ['Existing EV owners still on Level 1 (standard outlet) only', '~1.2M'],
          ['Share of that Level 1 base upgrading to Level 2 each year', '~15%'],
          ['Average installed price (hardware ~$600 + electrician ~$1,100)', '~$1,700'],
          ['Share of US EV sales in California + Northeast states', '~45%']
        ],
        note: 'Illustrative figures, rounded for interview use.'
      }
    ],
    follow: [
      'Walk me through your decomposition before you calculate anything.',
      'Which single assumption moves your answer the most? Give me the sensitivity.',
      'Some installs need a panel upgrade costing $2,000–$4,000 extra. How would you incorporate that?',
      'What share of the serviceable market could Voltnest win in 3 years, and why?',
      'How does this market change if EV sales growth stalls for two years?'
    ],
    strong: [
      'Splits the market into new-EV-buyer installs (1.6M × 70% × 65% ≈ 730k) and backlog upgrades (1.2M × 15% ≈ 180k), totalling ~0.9M installs per year.',
      'Multiplies by ~$1,700 to land around $1.5B per year, and states a range (roughly $1.2B–$2B) driven by EV sales and install price.',
      'Derives the serviceable market from the 45% regional share: ~$0.7B in California + Northeast.',
      'Calls out panel upgrades as an upsell that can raise average ticket meaningfully for older homes.',
      'Sanity-checks against the EV fleet size and notes that the market tracks new EV sales, so it is cyclical.'
    ],
    traps: [
      'Using total US households or total cars as the base instead of EV buyers.',
      'Forgetting the existing-owner backlog, or double counting it with new buyers.',
      'Giving one precise number without a range or sensitivity.'
    ],
    insight: 'About 0.9M installs per year × ~$1,700 ≈ $1.5B nationally (range $1.2–2B), with ~$0.7B serviceable in Voltnest\'s current regions; new EV sales are the dominant driver.'
  },

  {
    id: 'b-est-doctorly-mx-telehealth',
    cat: 'estimate',
    style: 'Startup',
    lvl: 'Medium',
    min: 25,
    title: 'Telehealth consults in Mexico',
    prompt: 'Doctorly is a telehealth startup expanding to Mexico. Estimate how many paid telehealth consultations happen in Mexico per year today, and the revenue pool that represents.',
    brief: [
      'Doctorly runs a video and chat consult app in Colombia and wants to launch in Mexico. Patients pay per consult; there is no insurance billing at launch.',
      'Mexico has a large public system (IMSS, ISSSTE) and a very large private out-of-pocket market, including pharmacy-adjacent clinics.',
      'The board wants a sense of the current private telehealth market and how fast it could grow.',
      'Use Exhibit 1 anchors. Assume the exchange rate is 18 MXN per USD.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Anchor facts',
        cols: ['Fact', 'Value'],
        rows: [
          ['Population of Mexico', '~130M'],
          ['Outpatient doctor visits per person per year (all settings)', '~2.8'],
          ['Share of outpatient visits that are private / out-of-pocket', '~40%'],
          ['Share of private consults currently delivered via telehealth', '~8%'],
          ['Adults with a smartphone', '~75%'],
          ['Typical private telehealth consult price', 'MXN 250 (~$14)'],
          ['Typical pharmacy-adjacent clinic consult price', 'MXN 50–90']
        ],
        note: 'Illustrative figures for interview practice.'
      }
    ],
    follow: [
      'Why might per-capita visits be a misleading base for telehealth demand?',
      'How would you adjust for the very cheap pharmacy-clinic consults that compete on price?',
      'If telehealth share of private consults went from 8% to 15% in 3 years, what is the market then?',
      'What is Doctorly\'s realistic share in year 2, and what would it need to believe?',
      'Which segments (chronic care, pediatrics, mental health) would you target first using this sizing?'
    ],
    strong: [
      'Computes total visits 130M × 2.8 ≈ 364M, private ≈ 146M, telehealth ≈ 11.6M consults per year.',
      'Revenue pool ≈ 11.6M × MXN 250 ≈ MXN 2.9B (~$160M), with a range of roughly $110–220M.',
      'Notes the price mix problem: many private consults happen at MXN 50–90 pharmacy clinics, so average realised price is lower than 250.',
      'Sizes the growth scenario: 15% share → ~22M consults, ~$300M.',
      'Uses smartphone penetration as a ceiling on addressable patients, not as a multiplier on visits.'
    ],
    traps: [
      'Multiplying population by smartphone penetration by visits, which double-counts constraints.',
      'Ignoring the public system share and treating all visits as addressable.',
      'Forgetting currency conversion or mixing MXN and USD.'
    ],
    insight: 'Roughly 11–12M private telehealth consults per year today (~$160M), with growth to ~$300M if share nearly doubles; price competition from cheap pharmacy clinics is the key risk to the revenue estimate.'
  },

  {
    id: 'b-est-roadlens-dashcam-storage',
    cat: 'estimate',
    style: 'Amazon-style',
    lvl: 'Hard',
    min: 30,
    title: 'Dashcam fleet video storage',
    prompt: 'Roadlens sells AI dashcams to trucking fleets. Estimate how much video storage Roadlens needs per year, and what it costs to keep it.',
    brief: [
      'Roadlens has 85,000 cameras installed on long-haul and regional trucks. Cameras record continuously to a local SD card, but only some footage is uploaded to the cloud.',
      'Two upload paths exist: (1) automatic event clips when the AI detects harsh braking, tailgating, phone use, etc.; (2) on-demand retrieval of full footage when a customer requests it for an insurance claim or dispute.',
      'Engineering wants to know which path dominates storage cost before they redesign retention policies.',
      'All the anchors you need are in Exhibit 1.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Fleet and video parameters',
        cols: ['Parameter', 'Value'],
        rows: [
          ['Cameras in service', '85,000'],
          ['Driving hours per truck per working day', '9'],
          ['Working days per year', '250'],
          ['Video bitrate (1080p, road-facing + cab, combined)', '4 Mbps'],
          ['Event clips per truck per day', '12'],
          ['Length of each event clip', '20 seconds'],
          ['Share of driving hours later requested in full', '2%'],
          ['Cloud storage price: hot / archive tier', '$0.023 / $0.004 per GB-month']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Which upload path drives most of the storage, and does that surprise you?',
      'If retention is 12 months, what is the steady-state monthly storage bill on hot storage? On archive?',
      'Product wants to raise event clips to 30 seconds. What does that cost?',
      'How would you redesign retention or tiering to cut cost by half without hurting claims?',
      'What changes if Roadlens moves to 4K cameras?'
    ],
    strong: [
      'Converts bitrate: 4 Mbps = 0.5 MB/s. Event clips: 12 × 20s × 0.5 MB = 120 MB per truck-day → 10.2 TB/day → ~2.55 PB/year.',
      'Full footage per truck-day = 9h × 3,600 × 0.5 MB = 16.2 GB; 2% requested = 0.324 GB → 27.5 TB/day → ~6.9 PB/year.',
      'Total ~9.4 PB/year; on-demand retrieval is ~73% of storage despite being only 2% of hours.',
      'Steady-state cost at 12-month retention: ~9.4 PB × $0.023 ≈ $216k/month hot vs ~$38k/month archive.',
      'Proposes tiering (hot for 30 days, then archive), shorter retention for non-claim retrievals, and lower-bitrate cab video.'
    ],
    traps: [
      'Confusing megabits and megabytes (an 8x error).',
      'Assuming all continuous footage is uploaded.',
      'Focusing optimisation on event clips when retrieval dominates.'
    ],
    insight: 'About 9–10 PB per year, and roughly three quarters comes from the 2% of hours customers request in full; tiering and retention policy on retrieved footage matter far more than event-clip length.'
  },

  {
    id: 'b-est-lunchpay-school-payments',
    cat: 'estimate',
    style: 'Edtech',
    lvl: 'Medium',
    min: 25,
    title: 'School lunch payments TAM',
    prompt: 'LunchPay lets parents prepay school meals online and charges a convenience fee per deposit, plus a small SaaS fee to districts. Estimate the US annual revenue pool for this business.',
    brief: [
      'LunchPay integrates with school cafeteria point-of-sale systems. Parents top up a student meal account; LunchPay charges a $2.49 fee per deposit. Districts pay a per-student SaaS fee.',
      'Many students receive free or reduced-price meals and their families never need to deposit for lunch, but some still deposit for snacks and à la carte items.',
      'The CEO wants a TAM with clear logic for investor materials.',
      'Use the anchors in Exhibit 1.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Anchor facts',
        cols: ['Fact', 'Value'],
        rows: [
          ['Public K-12 students', '~49.5M'],
          ['Average daily school-lunch program participants', '~29.6M'],
          ['…of which free or reduced-price', '~74%'],
          ['Free/reduced students whose families still deposit for extras', '~25%'],
          ['Students per paying family (average)', '~1.7'],
          ['Districts offering online prepayment', '~70%'],
          ['Deposits per paying family per month (school year = 9 months)', '~2.2'],
          ['Convenience fee per deposit / District SaaS fee per student per year', '$2.49 / $1.10']
        ],
        note: 'Illustrative figures.'
      }
    ],
    follow: [
      'How did you treat families with several children?',
      'What fraction of the TAM comes from fees vs district SaaS?',
      'Several states moved to universal free school meals. How does that change your estimate and strategy?',
      'If you cut the fee to $1.49, how many more deposits would you need to break even?',
      'What would you do to grow revenue per family without raising fees?'
    ],
    strong: [
      'Paid-lunch participants ≈ 29.6M × 26% ≈ 7.7M → ~4.5M families; extras: 21.9M × 25% ≈ 5.5M students → ~3.2M families; total ~7.7M families.',
      'Applies online availability (70%) → ~5.4M families × 2.2 × 9 ≈ 107M deposits × $2.49 ≈ $265M.',
      'Adds district SaaS: 49.5M × $1.10 ≈ $54M, for a TAM of roughly $320M (range $200–400M).',
      'Flags universal free meals as a structural threat to the fee pool, and the district SaaS line as more durable.',
      'Breakeven math on fee cut: needs ~67% more deposits at $1.49 to match $2.49 revenue.'
    ],
    traps: [
      'Counting all 49.5M students as fee payers.',
      'Forgetting the 9-month school year.',
      'Ignoring that families, not students, make deposits.'
    ],
    insight: 'The pool is roughly $300M per year, ~80% from parent convenience fees; universal free meal policies shrink the fee pool, so the district SaaS and extras purchases are the strategic hedge.'
  },

  {
    id: 'b-est-wavecast-podcast-ads',
    cat: 'estimate',
    style: 'Media',
    lvl: 'Easy',
    min: 20,
    title: 'Podcast network ad revenue',
    prompt: 'Wavecast is a podcast network with 40 shows. Estimate its annual ad revenue, and tell me where the money actually comes from.',
    brief: [
      'Wavecast sells host-read and dynamically inserted ads. Each episode has three ad positions: pre-roll, mid-roll and post-roll, priced on CPM (cost per thousand downloads).',
      'Not all inventory sells. Sell-through depends on audience size: advertisers chase large shows.',
      'The network splits ad revenue 50/50 with hosts, but the question is about gross ad revenue first.',
      'Use the data in the exhibits.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Show tiers',
        cols: ['Tier', 'Shows', 'Downloads per episode', 'Episodes per week', 'Sell-through'],
        rows: [
          ['Top', '5', '120,000', '2', '85%'],
          ['Mid', '15', '25,000', '1', '60%'],
          ['Long tail', '20', '4,000', '1', '25%']
        ],
        note: 'Illustrative data. Assume 52 weeks per year.'
      },
      {
        title: 'Exhibit 2 — CPM by ad position',
        cols: ['Position', 'CPM'],
        rows: [['Pre-roll', '$18'], ['Mid-roll', '$25'], ['Post-roll', '$12']],
        note: 'Illustrative market rates.'
      }
    ],
    follow: [
      'What share of revenue comes from the top 5 shows?',
      'Should Wavecast keep investing in the long tail? Make the case either way.',
      'Mid-tier sell-through is 60%. What is a 10-point improvement worth?',
      'A top show threatens to leave for an exclusive deal. How much revenue is at risk?',
      'What would you measure beyond downloads to raise CPMs?'
    ],
    strong: [
      'Downloads: top 62.4M, mid 19.5M, tail 4.2M per year (~86M total).',
      'Full-sold revenue per 1,000 downloads = $55; applies sell-through: top ~$2.92M, mid ~$0.64M, tail ~$0.06M → ~$3.6M gross.',
      'Notes top 5 shows ≈ 80% of revenue; long tail is ~2%.',
      'Values mid-tier sell-through +10pp at ~$107k/year and compares to the cost of a sales hire.',
      'Discusses host-concentration risk and net revenue after 50/50 split (~$1.8M).'
    ],
    traps: [
      'Applying a single CPM to all downloads without positions or sell-through.',
      'Forgetting top shows publish twice a week.',
      'Treating the long tail as a meaningful revenue driver.'
    ],
    insight: 'Gross ad revenue is about $3.6M a year, and ~80% comes from 5 shows; the business is a hit-driven portfolio where host retention matters more than adding long-tail shows.'
  },

  {
    id: 'b-est-notewise-gpu-fleet',
    cat: 'estimate',
    style: 'AI / Infra',
    lvl: 'Hard',
    min: 30,
    title: 'GPUs to serve an AI assistant',
    prompt: 'Notewise wants to self-host an open-weight model for its AI assistant. Estimate how many GPUs it needs at peak, and compare monthly cost to using a hosted API.',
    brief: [
      'Notewise is a note-taking app with 3M daily active users. Its AI assistant answers questions about a user\'s notes.',
      'Today it calls a hosted mid-tier LLM API. Finance asks whether self-hosting an open-weight model on rented GPUs would be cheaper.',
      'Assume prefill (input) and decode (output) run on the same GPU pool and you can add their GPU requirements.',
      'Use the anchors in Exhibit 1.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Usage and infrastructure anchors',
        cols: ['Parameter', 'Value'],
        rows: [
          ['Daily active users', '3M'],
          ['Assistant requests per DAU per day', '6'],
          ['Average input tokens per request (prompt + retrieved notes)', '1,500'],
          ['Average output tokens per request', '400'],
          ['Peak-to-average traffic ratio', '3x'],
          ['Per-GPU throughput: output tokens / input tokens per second', '2,000 / 20,000'],
          ['GPU rental price', '$2.50 per GPU-hour'],
          ['Hosted API price: input / output per 1M tokens', '$1 / $5']
        ],
        note: 'Illustrative figures; real throughput depends on model size, batching and hardware.'
      }
    ],
    follow: [
      'How much headroom would you add, and why?',
      'Self-hosting looks cheaper. What costs are missing from the comparison?',
      'Prompt caching cuts input cost on the API by 90% for repeated context. Redo the comparison.',
      'What non-cost factors decide this (quality, latency, compliance)?',
      'At what DAU does self-hosting stop making sense?'
    ],
    strong: [
      'Requests: 18M/day → ~208 req/s average → ~625 req/s peak.',
      'Peak output: 625 × 400 = 250k tok/s → 125 GPUs; peak input: 625 × 1,500 ≈ 940k tok/s → ~47 GPUs; ~172 GPUs plus ~30% headroom ≈ 220–230.',
      'Self-host cost ≈ 225 × $2.50 × 730h ≈ $410k/month (if provisioned for peak 24/7).',
      'API cost: per request $0.0015 + $0.002 = $0.0035 → $63k/day ≈ $1.9M/month.',
      'Notes missing self-host costs: ML infra engineers, eval/quality gap of open model, reliability, autoscaling savings; with caching the API gap narrows sharply.'
    ],
    traps: [
      'Sizing for average traffic instead of peak.',
      'Ignoring input tokens, which are larger in volume even if cheaper per token.',
      'Comparing GPU rental only, without people and quality costs.'
    ],
    insight: 'Roughly 170 GPUs at peak (~225 with headroom), ~$0.4M/month vs ~$1.9M/month on the API; self-hosting wins on raw compute at this scale, but quality, team cost and caching can erase much of the gap.'
  },

  /* ===================== STRATEGY (8) ===================== */
  {
    id: 'b-strat-ledgerly-upmarket',
    cat: 'strategy',
    style: 'B2B SaaS',
    lvl: 'Medium',
    min: 30,
    title: 'Ledgerly: go upmarket?',
    prompt: 'Ledgerly is a B2B invoicing SaaS with 12,000 customers. The CEO wants to move upmarket to larger companies. Should they, and what would you build first?',
    brief: [
      'Ledgerly automates invoicing, payment reminders and reconciliation. It grew through self-serve signups from small businesses.',
      'Total MRR is about $1.6M (~$19M ARR). Gross margin is 80%.',
      'The sales team has started closing some larger accounts, but many large deals are lost.',
      'You have 2 squads for the next 2 quarters. The board wants a clear segment focus.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Segment economics',
        cols: ['Segment (employees)', 'Customers', 'ARPA / month', 'Monthly logo churn', 'CAC'],
        rows: [
          ['SMB (1–20)', '9,600', '$59', '3.2%', '$420'],
          ['Mid-market (21–200)', '2,150', '$310', '1.1%', '$4,800'],
          ['Upper (200+)', '250', '$1,450', '0.6%', '$28,000']
        ],
        note: 'Illustrative data. Gross margin 80% for all segments.'
      },
      {
        title: 'Exhibit 2 — Primary reason for lost deals, last 2 quarters',
        cols: ['Reason', 'Mid-market (n=180)', 'Upper (n=95)'],
        rows: [
          ['Missing ERP integration (NetSuite / SAP)', '22%', '41%'],
          ['No SSO / SCIM', '9%', '34%'],
          ['No multi-step approval workflows', '27%', '18%'],
          ['Price', '31%', '7%'],
          ['Other', '11%', '0%']
        ],
        note: 'From CRM closed-lost notes.'
      }
    ],
    follow: [
      'Compute MRR share, LTV/CAC and CAC payback by segment. What do you see?',
      'SMB has the most customers. Why not double down there?',
      'Which single feature unlocks the most revenue? Use Exhibit 2.',
      'How would you sequence the 2 squads across 2 quarters?',
      'What metrics would tell you in 6 months that the bet is working?'
    ],
    strong: [
      'MRR: SMB $566k (35%), Mid $667k (42%), Upper $363k (23%); mid-market is already the largest revenue segment.',
      'LTV (ARPA × 80% / churn): SMB ~$1.5k (3.5x CAC), Mid ~$22.5k (4.7x), Upper ~$193k (6.9x); paybacks ~9, ~19 and ~24 months.',
      'Identifies approval workflows as the top fixable mid-market blocker and ERP integration + SSO as upper-market blockers (75% of losses combined).',
      'Recommends a staged move: consolidate mid-market first (approvals + NetSuite), then SSO for upper; keep SMB self-serve on autopilot.',
      'Defines success metrics: mid-market win rate, net revenue retention, sales cycle length, payback.'
    ],
    traps: [
      'Choosing a segment by customer count rather than revenue and unit economics.',
      'Ignoring that upmarket needs sales, security reviews and longer cycles, not just features.',
      'Treating price objections in mid-market as a product problem.'
    ],
    insight: 'Mid-market already generates the most MRR with strong LTV/CAC; build approvals and a NetSuite integration first, which serves mid-market now and unlocks the upper segment next.'
  },

  {
    id: 'b-strat-reelhouse-telco-bundle',
    cat: 'strategy',
    style: 'Media',
    lvl: 'Hard',
    min: 35,
    title: 'Reelhouse: telco bundle in Brazil',
    prompt: 'Reelhouse, a documentary streaming service, has been offered a bundle deal by a large Brazilian telco. Should it accept?',
    brief: [
      'Reelhouse has 1.8M direct subscribers in Brazil paying R$24.90 per month. Contribution margin after payment fees, streaming and support is ~70%.',
      'The telco (22M postpaid mobile customers) offers to include Reelhouse in its premium plans, paying Reelhouse R$9 wholesale per activated subscriber per month. Contribution margin on bundled subs is ~90% (no payment or acquisition costs).',
      'The telco projects 1.2M activated bundle subscribers by end of year 2. The contract is 3 years and the telco owns the billing relationship.',
      'A 3-month pilot in one city has been run. Leadership is split: growth team loves it, brand team fears becoming a commodity.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Direct vs bundle economics',
        cols: ['Metric', 'Direct', 'Bundle (pilot)'],
        rows: [
          ['Price / wholesale per month', 'R$24.90', 'R$9.00'],
          ['Contribution per sub per month', 'R$17.43', 'R$8.10'],
          ['CAC', 'R$95', 'R$0'],
          ['Monthly churn', '6.5%', '2.0%'],
          ['Viewing hours per sub per month', '9.4', '2.1']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 — Pilot cannibalisation',
        cols: ['Metric', 'Value'],
        rows: [
          ['Share of current direct subs who are customers of this telco', '31%'],
          ['Of those, share who switched from direct to bundle in pilot', '18%'],
          ['New-to-Reelhouse share of bundle activations', '82%']
        ],
        note: 'Pilot city, 3 months.'
      }
    ],
    follow: [
      'Compute lifetime value per subscriber for each channel net of CAC.',
      'How many direct subscribers would you expect to cannibalise nationally, and what does it cost per month?',
      'Bundle subscribers watch 4x less. Why does that matter if they churn less?',
      'What terms would you negotiate to protect the business?',
      'What is your recommendation, and what would make you walk away in year 2?'
    ],
    strong: [
      'LTV: direct R$17.43 / 6.5% ≈ R$268 − R$95 CAC ≈ R$173; bundle R$8.10 / 2% ≈ R$405, no CAC.',
      'Cannibalisation: 1.8M × 31% × 18% ≈ 100k subs × (17.43 − 8.10) ≈ R$0.94M/month lost, vs ~1.1M net new bundle subs × R$8.10 ≈ R$8.9M/month gained.',
      'Recognises low bundle engagement as a renewal risk: the telco will judge value by usage, and passive subs are not a durable audience.',
      'Negotiates: minimum guarantees, data sharing, co-marketing, user accounts owned by Reelhouse, price floor for direct-to-bundle switchers, and engagement onboarding.',
      'Recommends accepting with protections, and tracks engagement of bundle cohorts as the leading indicator for renewal.'
    ],
    traps: [
      'Comparing only price (R$24.90 vs R$9) and rejecting the deal.',
      'Ignoring cannibalisation or assuming it is zero.',
      'Ignoring dependency risk when the telco owns billing and the customer.'
    ],
    insight: 'The bundle is accretive (higher LTV, ~R$8M/month net gain even after ~R$1M cannibalisation), but low engagement makes renewal fragile; accept with data, account ownership and minimum-guarantee terms.'
  },

  {
    id: 'b-strat-pulso-ring-pricing',
    cat: 'strategy',
    style: 'Hardware',
    lvl: 'Medium',
    min: 25,
    title: 'Pulso: hardware vs subscription',
    prompt: 'Pulso sells a $299 smart fitness ring with an optional $5.99 subscription. The team proposes cutting the ring to $199 with a mandatory $7.99 subscription. Should they?',
    brief: [
      'Pulso\'s ring tracks sleep, heart rate and recovery. The free tier shows basic data; the subscription unlocks insights and coaching.',
      'Hardware cost (BOM + fulfilment) is $118 per unit. Subscription gross margin is 90%.',
      'A two-week price test ran on the website with equal traffic per arm.',
      'Finance cares about 24-month gross profit per website visitor. Brand cares about reviews.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Price test results (per 1,000 site visitors)',
        cols: ['Metric', 'A: $299 + optional $5.99', 'B: $199 + mandatory $7.99'],
        rows: [
          ['Conversion to purchase', '2.0%', '3.1%'],
          ['Units sold', '20', '31'],
          ['Hardware gross profit per unit', '$181', '$81'],
          ['Subscription attach rate', '62%', '100%'],
          ['Expected paid months in first 24 months', '14', '15'],
          ['Return rate within 30 days', '6%', '9%']
        ],
        note: 'Illustrative data. Ignore returns in the base calculation.'
      }
    ],
    follow: [
      'Compute 24-month gross profit per 1,000 visitors for both arms.',
      'What happens to cash flow timing under option B?',
      'How would mandatory subscriptions affect reviews and word of mouth?',
      'What would you test next before rolling out globally?',
      'How would you handle existing customers who bought at $299?'
    ],
    strong: [
      'A: hardware 20 × $181 = $3,620; subs 12.4 × ($5.99 × 14 × 0.9 ≈ $75.5) ≈ $936; total ≈ $4,556.',
      'B: hardware 31 × $81 = $2,511; subs 31 × ($7.99 × 15 × 0.9 ≈ $107.9) ≈ $3,344; total ≈ $5,855 (+28%).',
      'Notes B shifts profit into future months, raising payback risk and working capital needs.',
      'Factors in higher returns and potential review backlash from mandatory subscriptions.',
      'Suggests a middle option (e.g., $249 with 6 months included) and longer test to measure real retention.'
    ],
    traps: [
      'Comparing hardware margin only.',
      'Assuming retention under mandatory subscription equals optional (selection bias).',
      'Ignoring returns and customer sentiment.'
    ],
    insight: 'Option B yields ~28% more 24-month gross profit per visitor, but it relies on retention assumptions from a 2-week test and back-loads cash; validate retention with a longer cohort before switching.'
  },

  {
    id: 'b-strat-swapr-campus-expansion',
    cat: 'strategy',
    style: 'Marketplace',
    lvl: 'Easy',
    min: 20,
    title: 'Swapr: where to expand next',
    prompt: 'Swapr is a student marketplace for furniture and textbooks live on 40 campuses. Choose where to expand next: more campuses, or opening the app to everyone in a city.',
    brief: [
      'Swapr takes an 8% fee on each sale. Growth has come from launching campus by campus with student ambassadors.',
      'Investors suggest opening Swapr to all residents of Boston, arguing the market is 10x larger.',
      'You can fund 3 new launches this semester (a campus or the city counts as one launch).',
      'Liquidity (how fast listings sell) is the metric the team watches most.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Campus performance by housing type',
        cols: ['Campus type', 'Campuses', '7-day sell-through', 'GMV per enrolled student / year'],
        rows: [
          ['Residential (>60% live on/near campus)', '18', '48%', '$38'],
          ['Mixed (30–60%)', '14', '31%', '$19'],
          ['Commuter (<30%)', '8', '14%', '$6']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 — Candidate launches',
        cols: ['Candidate', 'Enrollment / population', '% living on/near campus', 'Notes'],
        rows: [
          ['Northbridge University', '22,000', '68%', 'Active Facebook buy/sell group'],
          ['Lakeshore State', '41,000', '18%', 'Largest school on list'],
          ['Pine Valley College', '6,500', '85%', 'Small, tight-knit'],
          ['Metro Tech', '15,000', '45%', 'Near existing Swapr campus'],
          ['Coastal A&M', '30,000', '62%', 'Strong move-out season'],
          ['Boston (open city)', '1.2M adults', 'n/a', 'Competes with FB Marketplace, Craigslist']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Estimate annual GMV and Swapr revenue for each campus candidate.',
      'Lakeshore is the biggest school. Why might it be a bad choice?',
      'What would have to be true for the Boston city launch to work?',
      'How would you measure liquidity in the first 30 days of a launch?',
      'What is your pick of 3, and in what order?'
    ],
    strong: [
      'Applies benchmarks: Coastal ~$1.14M GMV (~$91k revenue), Northbridge ~$836k (~$67k), Metro ~$285k, Pine Valley ~$247k, Lakeshore ~$246k.',
      'Recognises density drives liquidity: commuter campuses perform 3x worse on sell-through.',
      'Rejects or defers Boston: no density advantage, entrenched competitors, and the trust signal (verified students) is lost.',
      'Picks Coastal, Northbridge, and then Metro Tech or Pine Valley with justification (adjacency vs residential share).',
      'Times launches to move-in / move-out peaks.'
    ],
    traps: [
      'Choosing by enrollment size alone.',
      'Treating the city as a larger version of a campus.',
      'Ignoring the trust and network-density reasons the model works.'
    ],
    insight: 'Liquidity tracks residential density, not size; launch at high-residential campuses (Coastal, Northbridge) and defer the open-city idea, which loses Swapr\'s density and trust advantages.'
  },

  {
    id: 'b-strat-paylite-kenya',
    cat: 'strategy',
    style: 'Fintech',
    lvl: 'Hard',
    min: 35,
    title: 'Paylite: merchant credit or remittances',
    prompt: 'Paylite is a mobile wallet in Kenya. With one year of runway for a new bet, should it launch inventory credit for small shops or inbound diaspora remittances?',
    brief: [
      'Paylite has 40,000 active merchants (mostly small shops, called dukas) and 1.1M consumer wallets. It competes with a dominant mobile-money incumbent.',
      'Option A: 30-day inventory loans to merchants, underwritten using Paylite transaction history.',
      'Option B: receive remittances from Kenyans abroad (US, UK, Gulf) into Paylite wallets, needing new licences and a sender app.',
      'Assume 129 KES per USD. The board wants year-2 economics and a view on strategic fit.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Option A: merchant inventory credit',
        cols: ['Assumption', 'Value'],
        rows: [
          ['Merchants eligible (enough transaction history)', '35%'],
          ['Uptake among eligible', '50%'],
          ['Average loan size', 'KES 60,000'],
          ['Loan cycles per year (30-day loans)', '12'],
          ['Fee per cycle', '3%'],
          ['Credit losses (% of amount disbursed)', '1.2%'],
          ['Annual funding cost on outstanding book', '14%'],
          ['Pilot: change in borrowers\' wallet payment volume', '+30%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 — Option B: inbound remittances',
        cols: ['Assumption', 'Value'],
        rows: [
          ['Inbound remittances to Kenya per year', '~$4.9B'],
          ['Paylite share achievable by year 2', '1.5%'],
          ['Net take rate (fee + FX spread − partner costs)', '1.8%'],
          ['Average sender volume per year', '$4,200'],
          ['CAC per sender (diaspora marketing)', '$35'],
          ['Licensing + compliance cost per year', '$400k']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Compute year-2 net revenue for each option in USD.',
      'Which option builds on an advantage Paylite already has?',
      'What are the main risks in each, and how would you de-risk them in 90 days?',
      'The incumbent can copy merchant credit quickly. Does that change your answer?',
      'What is your recommendation and what metric would make you reverse it?'
    ],
    strong: [
      'A: 40k × 35% × 50% = 7,000 borrowers; KES 420M per cycle; KES 5.04B disbursed/yr; fees KES 151M − losses KES 60M − funding KES 59M ≈ KES 32M (~$250k).',
      'B: $4.9B × 1.5% = $73.5M volume × 1.8% ≈ $1.32M revenue; ~17,500 senders × $35 ≈ $0.61M CAC; minus $0.4M compliance → ~$0.3M year-2 contribution, more upside later.',
      'Notes A leverages proprietary data and lifts core wallet volume (+30%), strengthening merchant lock-in; B targets a new customer base against strong global players.',
      'Discusses credit risk at scale, regulatory risk (digital lender licensing), and FX/partner dependency in B.',
      'Recommends A as the core bet with a capped loan book, possibly B later via a partner; leading metrics are default rate and merchant volume.'
    ],
    traps: [
      'Choosing B because the headline market ($4.9B) is bigger.',
      'Counting loan fees as profit without losses and funding costs.',
      'Ignoring strategic fit and defensibility.'
    ],
    insight: 'Year-2 profits are similar and small, but merchant credit uses Paylite\'s data advantage and boosts core wallet volume by ~30%; it is the better strategic bet if losses stay near 1.2%.'
  },

  {
    id: 'b-strat-clinicly-embedded-payments',
    cat: 'strategy',
    style: 'Vertical SaaS',
    lvl: 'Medium',
    min: 25,
    title: 'Clinicly: add payments?',
    prompt: 'Clinicly is scheduling and practice software for dental clinics. Should it add embedded payments, and how big is the prize?',
    brief: [
      'Clinicly serves 3,200 dental clinics at $349 per clinic per month. ARR is about $13.4M and growth has slowed to 18%.',
      'Clinics currently use separate card terminals from banks and processors. Patients pay at the front desk or by invoice.',
      'An embedded payments partner offers a net take (after interchange and partner fees) of 0.6% of card volume.',
      'Engineering estimates 2 quarters to launch card-present + online payments.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Customer base',
        cols: ['Segment', 'Clinics', 'Avg annual patient collections', 'Card share of collections'],
        rows: [
          ['Single-location', '2,500', '$1.6M', '55%'],
          ['Multi-location groups', '700', '$3.9M', '55%'],
          ['Total / weighted', '3,200', '$2.1M', '55%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 — Adoption assumptions and peer benchmarks',
        cols: ['Item', 'Value'],
        rows: [
          ['Clinics with processor contracts locked 2+ years', '40% of groups, 15% of singles'],
          ['Expected payments adoption by year 3', '35%'],
          ['Peer vertical SaaS: payments attach at maturity', '30–60%'],
          ['Peer vertical SaaS: payments revenue vs subscription revenue', '1–2x']
        ],
        note: 'Illustrative.'
      }
    ],
    follow: [
      'Size full-adoption and year-3 payments revenue.',
      'Which segment would you target first, and why?',
      'How does payments affect churn and pricing power of the core product?',
      'What are the operational risks (chargebacks, onboarding, support)?',
      'How would you design the rollout and incentives to switch processors?'
    ],
    strong: [
      'Full adoption: 3,200 × $2.1M × 55% × 0.6% ≈ $22.2M (1.65x current ARR).',
      'Year 3 at 35%: ≈ $7.8M, adding ~58% to ARR at high margin.',
      'Targets single-location clinics first (fewer locked contracts, simpler setup), then groups as contracts expire.',
      'Notes payments increase switching costs and reduce churn; enables financing and patient-payment features later.',
      'Plans incentives (e.g., software discount for processing), contract buyouts and an integrated reconciliation experience as the wedge.'
    ],
    traps: [
      'Applying take rate to total collections instead of card volume.',
      'Assuming 100% adoption on launch.',
      'Ignoring locked processor contracts and the operational load of payments.'
    ],
    insight: 'Embedded payments could add ~$7.8M by year 3 (~$22M at full adoption) versus $13.4M ARR today; it is the largest growth lever, starting with single-location clinics.'
  },

  {
    id: 'b-strat-lingoloop-b2b-pivot',
    cat: 'strategy',
    style: 'Edtech',
    lvl: 'Hard',
    min: 30,
    title: 'Lingo Loop: pivot to B2B?',
    prompt: 'Lingo Loop is a consumer language-learning app whose growth has stalled. Should it pivot to selling to companies for employee training?',
    brief: [
      'Lingo Loop charges $9.99 per month. Contribution margin is ~85%. Paid users have flatlined around 170k for 18 months.',
      'Paid marketing costs keep rising and churn is creeping up.',
      'The team ran 14 B2B pilots over the last 2 quarters at $8 per seat per month.',
      'The board asks for a recommendation: stay consumer, pivot to B2B, or run both.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Consumer trend',
        cols: ['Quarter', 'MAU', 'Paid subs', 'Paid conversion', 'Blended CAC', 'Monthly paid churn'],
        rows: [
          ['Q1-25', '4.2M', '168k', '4.0%', '$41', '9.0%'],
          ['Q2-25', '4.4M', '176k', '4.0%', '$45', '9.4%'],
          ['Q3-25', '4.5M', '175k', '3.9%', '$50', '9.9%'],
          ['Q4-25', '4.4M', '172k', '3.9%', '$55', '10.3%'],
          ['Q1-26', '4.3M', '170k', '4.0%', '$59', '10.6%'],
          ['Q2-26', '4.3M', '172k', '4.0%', '$63', '11.0%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 — B2B pilots',
        cols: ['Company size', 'Pilots', 'Seats', 'Seat activation', 'Intend to renew'],
        rows: [
          ['<500 employees', '6', '600', '52%', '5 of 6'],
          ['500–5,000', '5', '1,100', '41%', '3 of 5'],
          ['>5,000', '3', '1,400', '30%', '1 of 3']
        ],
        note: 'Illustrative data. Overall activation 38%.'
      }
    ],
    follow: [
      'Compute consumer LTV/CAC in Q1-25 vs Q2-26.',
      'What does seat activation tell you about the B2B product?',
      'Which B2B segment would you go after first and why?',
      'Design a 2-quarter plan that tests the B2B thesis without killing consumer.',
      'What would make you abandon B2B?'
    ],
    strong: [
      'Consumer LTV: Q1-25 $8.49/0.09 ≈ $94 vs $41 CAC (2.3x); Q2-26 $8.49/0.11 ≈ $77 vs $63 CAC (1.2x) — unit economics are breaking.',
      'B2B pilots: ~$298k annualised, ~$21k ACV; 64% intend to renew, but activation falls with company size.',
      'Spots that low activation at large companies predicts poor renewals; mid-size and small companies are the beachhead.',
      'Recommends cutting paid consumer spend to profitable channels, running consumer for cash, and building B2B admin/reporting + manager nudges for activation.',
      'Sets kill criteria: e.g., activation <45% or renewal <70% in the <5,000 segment after 2 quarters.'
    ],
    traps: [
      'Pivoting fully on 14 pilots.',
      'Reading renewal intent as revenue without accounting for activation.',
      'Ignoring that consumer still funds the company.'
    ],
    insight: 'Consumer LTV/CAC fell from 2.3x to 1.2x, so the paid growth engine is broken; B2B is promising for companies under 5,000 employees but activation must be solved before scaling.'
  },

  {
    id: 'b-strat-shelfie-platform-threat',
    cat: 'strategy',
    style: 'E-commerce',
    lvl: 'Medium',
    min: 25,
    title: 'Shelfie vs the platform',
    prompt: 'Shelfie is a reviews app for online stores. The e-commerce platform it runs on just announced free native reviews. How should Shelfie respond?',
    brief: [
      'Shelfie collects product reviews, photo reviews and Q&A, and syndicates reviews to Google Shopping.',
      'It has 60,000 installed merchants, most on a free plan.',
      'The platform\'s native reviews will be free, basic (text + stars), with no syndication.',
      'A merchant survey asked whether they would switch to the native option.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Plans and switching intent',
        cols: ['Plan', 'Price / month', 'Merchants', 'Would switch to native', 'Use Google syndication'],
        rows: [
          ['Free', '$0', '47,790', '70%', '0%'],
          ['Basic', '$15', '9,200', '55%', '6%'],
          ['Growth', '$79', '2,600', '22%', '48%'],
          ['Plus', '$299', '410', '8%', '91%']
        ],
        note: 'Illustrative data; survey n=2,400.'
      }
    ],
    follow: [
      'Compute MRR by plan and MRR at risk.',
      'What does the syndication column tell you about where Shelfie\'s value lies?',
      'Should Shelfie cut prices on Basic to defend?',
      'What would you build in the next two quarters?',
      'Should Shelfie diversify to other platforms? What are the trade-offs?'
    ],
    strong: [
      'MRR ≈ $466k: Basic $138k, Growth $205k, Plus $123k.',
      'At-risk MRR: Basic ~$76k, Growth ~$45k, Plus ~$10k → ~$131k (28%).',
      'Sees that syndication and advanced features anchor higher tiers; value sits in reach and conversion, not review collection.',
      'Recommends conceding the low end, migrating Basic users with syndication-lite or bundling, and doubling down on Growth/Plus (syndication, AI summaries, UGC in ads).',
      'Considers multi-platform expansion to reduce dependency.'
    ],
    traps: [
      'Panicking and cutting prices across all plans.',
      'Treating free installs as revenue at risk.',
      'Ignoring platform dependency as a long-term strategic risk.'
    ],
    insight: 'About 28% of MRR is at risk, mostly from Basic; Shelfie\'s moat is syndication and conversion features used by Growth and Plus merchants, so it should cede basic reviews and move upmarket.'
  },

  /* ===================== GTM (6) ===================== */
  {
    id: 'b-gtm-shipwise-usage-pricing',
    cat: 'gtm',
    style: 'B2B SaaS',
    lvl: 'Hard',
    min: 30,
    title: 'Shipwise: seats to usage pricing',
    prompt: 'Shipwise sells shipping-label software for online stores at $40 per seat. The CFO proposes moving to usage-based pricing per label. Evaluate the proposal and design the rollout.',
    brief: [
      'Shipwise customers print labels, compare carrier rates and track parcels. Value scales with shipping volume, not users.',
      'Proposed pricing: $29 platform fee including 200 labels, then $0.05 per additional label.',
      'Competitors charge $0.02–0.03 per label at high volume.',
      'Annual contracts are 30% of customers; the rest are monthly.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Customer segments today',
        cols: ['Segment', 'Customers', 'Avg seats', 'Labels / month / customer', 'Current $/month'],
        rows: [
          ['Micro', '3,000', '1.2', '150', '$48'],
          ['Small', '1,800', '2.5', '900', '$100'],
          ['Mid', '600', '4', '6,000', '$160'],
          ['Large', '150', '8', '40,000', '$320']
        ],
        note: 'Illustrative data. Current MRR $468k.'
      }
    ],
    follow: [
      'Compute new MRR by segment under the proposed pricing.',
      'Who wins and who loses? What happens to Large customers?',
      'How would you redesign the price curve to reduce churn risk?',
      'How would you migrate existing customers?',
      'Which metrics would you track in the first 90 days?'
    ],
    strong: [
      'New monthly price: Micro $29, Small $64, Mid $319, Large $2,019; new MRR ≈ $696k (+49%) if no churn.',
      'Identifies Large customers face 6.3x increase and are above competitor prices ($0.05 vs $0.02–0.03) — high churn risk on ~$300k of new MRR.',
      'Proposes volume tiers (e.g., $0.03 above 5k, $0.02 above 25k) or committed-volume contracts.',
      'Rollout: new customers first, grandfathering, opt-in migration where Micro saves money, 90-day notice and sales-led conversations for Large.',
      'Tracks net revenue retention, churn by segment, expansion revenue and price objection rate.'
    ],
    traps: [
      'Celebrating +49% without modelling churn.',
      'Forcing migration on all customers at once.',
      'Ignoring competitor anchors for high-volume buyers.'
    ],
    insight: 'Usage pricing aligns with value and lifts MRR, but the flat $0.05 rate overprices Large customers vs competitors; add volume tiers and migrate carefully.'
  },

  {
    id: 'b-gtm-sleepwell-paywall',
    cat: 'gtm',
    style: 'Consumer subscription',
    lvl: 'Easy',
    min: 20,
    title: 'Sleepwell paywall test',
    prompt: 'Sleepwell, a sleep app, tested three paywall designs. Which one should it roll out?',
    brief: [
      'Sleepwell offers guided sleep programmes. Revenue comes from subscriptions through app stores.',
      'Three variants were shown to 40,000 new users each over four weeks.',
      'The growth team argues for C because it has the highest first-year revenue.',
      'Use Exhibit 1; year 2 revenue is estimated from renewal rates.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Paywall test',
        cols: ['Variant', 'Default plan', 'Trial start', 'Trial→paid', 'Paid per 1,000 users', 'Y1 net revenue / user', 'Y2 renewal'],
        rows: [
          ['A', 'Monthly $9.99, no trial', 'n/a', 'n/a', '31', '$1.30', 'n/a (avg 4.2 paid months in Y1)'],
          ['B', 'Annual $59.99, 7-day trial', '9.5%', '38%', '36.1', '$2.08', '34%'],
          ['C', 'Annual $79.99, 7-day trial', '9.0%', '31%', '27.9', '$2.10', '27%']
        ],
        note: 'Illustrative data. Y1 net revenue after refunds (B 4%, C 6%).'
      }
    ],
    follow: [
      'Compute 2-year revenue per user for B and C.',
      'Is the difference between B and C in year 1 meaningful?',
      'Why might annual plans with trials outperform monthly?',
      'What would you test next?',
      'What else should you check before rollout (refunds, ratings, segments)?'
    ],
    strong: [
      'B two-year ≈ $2.08 + 0.0361 × 34% × $59.99 ≈ $2.82; C ≈ $2.10 + 0.0279 × 27% × $79.99 ≈ $2.70.',
      'Notes year-1 difference ($0.02) is likely noise; B wins on volume of payers and long-term value.',
      'Explains annual + trial reduces early churn and captures commitment, matching subscription app benchmarks.',
      'Proposes next test: B with monthly alternative visible, or $69.99 price point.',
      'Checks refunds, app store ratings and regional differences.'
    ],
    traps: [
      'Picking C on year-1 revenue only.',
      'Ignoring the number of paying users (a larger base for upsells and referrals).',
      'Not checking statistical significance.'
    ],
    insight: 'B creates the most paying users and the highest 2-year value (~$2.82 vs $2.70); C\'s year-1 edge is within noise.'
  },

  {
    id: 'b-gtm-tracebit-pql-sales',
    cat: 'gtm',
    style: 'Devtools',
    lvl: 'Medium',
    min: 25,
    title: 'Tracebit: add sales to PLG',
    prompt: 'Tracebit is a freemium observability tool. A sales-assist pilot on product-qualified leads looked strong. Should Tracebit scale it, and how?',
    brief: [
      'Tracebit grows through developer signups. Free-to-paid conversion is 1.8%, typical of developer tools.',
      'A product-qualified lead (PQL) is an account with 3+ services instrumented and 5+ teammates.',
      'In the pilot, 200 randomly selected PQLs got outreach from an account executive; 200 others did not.',
      'A fully loaded AE costs $250k per year and can work ~150 PQLs per quarter.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Quarterly funnel',
        cols: ['Stage', 'Count'],
        rows: [
          ['Signups', '52,000'],
          ['Activated (sent data in week 1)', '16,120'],
          ['PQLs', '1,950'],
          ['Self-serve paid conversions (all signups)', '936']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 — Sales-assist pilot',
        cols: ['Group', 'PQLs', 'Conversion', 'Average ACV'],
        rows: [
          ['Sales-assisted', '200', '31%', '$18,000'],
          ['Control (self-serve)', '200', '14%', '$3,100']
        ],
        note: 'Illustrative data; randomised assignment.'
      }
    ],
    follow: [
      'Compute ACV generated per group and the incremental value per PQL.',
      'How many AEs would you need to cover all PQLs? Is it worth it?',
      'What could make the pilot results not hold at scale?',
      'How do you keep the self-serve experience strong while adding sales?',
      'What would you change in the PQL definition?'
    ],
    strong: [
      'Sales-assisted: 62 × $18k ≈ $1.12M ACV; control: 28 × $3.1k ≈ $87k; incremental ≈ $5.1k per PQL.',
      '1,950 PQLs ÷ 150 ≈ 13 AEs (~$812k/quarter) vs ~$10M incremental ACV/quarter — strongly positive.',
      'Flags risks: ACV may include discounting or long cycles, AE quality in pilot, deal slippage, diminishing returns as lower-quality PQLs are worked.',
      'Proposes scaling in waves (e.g., 4 AEs, then 8), with PQL scoring and holdout groups.',
      'Keeps self-serve path and avoids forcing sales on small teams.'
    ],
    traps: [
      'Comparing conversion rates only and ignoring ACV.',
      'Assuming results scale linearly.',
      'Making sales outreach so aggressive that developer sentiment suffers.'
    ],
    insight: 'Sales assist turns each PQL into ~$5k more ACV; scale gradually with holdouts because pilot results rarely hold linearly.'
  },

  {
    id: 'b-gtm-cubre-pet-insurance-channels',
    cat: 'gtm',
    style: 'Insurtech',
    lvl: 'Hard',
    min: 30,
    title: 'Cubre: pick the growth channel',
    prompt: 'Cubre sells pet insurance in Spain. It tested three acquisition channels. Where should next year\'s budget go?',
    brief: [
      'Cubre sells monthly policies for dogs and cats. Operating costs are ~15% of premium.',
      'Paid social looks best on CAC. The vet channel uses vet clinics as referral partners; capacity is limited to 120 clinics in year 1.',
      'Pet store partnerships sell policies at checkout.',
      'The CFO wants positive contribution within 24 months per policy.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Channel test results',
        cols: ['Channel', 'Policies sold', 'CAC', 'Avg premium / month', '12-month retention', 'Loss ratio'],
        rows: [
          ['Paid social', '4,200', '€38', '€21', '52%', '78%'],
          ['Vet clinics', '1,100', '€85', '€26', '81%', '58%'],
          ['Pet store partnerships', '1,700', '€54', '€19', '66%', '64%']
        ],
        note: 'Illustrative data. Loss ratio = claims paid ÷ premium.'
      }
    ],
    follow: [
      'Compute first-year contribution per policy by channel.',
      'Why does paid social have the highest loss ratio?',
      'Which channel is profitable by month 24?',
      'Vet capacity is limited. How would you allocate the budget?',
      'What product or pricing changes could fix paid social?'
    ],
    strong: [
      'Approximates first-year months active as 12 × (1 + retention)/2 and margin = 1 − loss ratio − 15%.',
      'Year 1: social ≈ €191 × 7% − €38 ≈ −€25; vets ≈ €282 × 27% − €85 ≈ −€9; pet stores ≈ €189 × 21% − €54 ≈ −€14.',
      'Year 2: vets add ≈ 81% × €312 × 27% ≈ €68 → positive; social and pet stores stay negative or marginal.',
      'Explains adverse selection: social attracts owners whose pets already need care.',
      'Allocates budget to vets up to capacity, then pet stores with underwriting fixes; repricing or waiting periods for social.'
    ],
    traps: [
      'Choosing paid social on CAC.',
      'Ignoring loss ratio, which drives insurance profitability.',
      'Ignoring channel capacity constraints.'
    ],
    insight: 'Only the vet channel turns positive within 24 months; paid social\'s low CAC is offset by adverse selection (78% loss ratio) and poor retention.'
  },

  {
    id: 'b-gtm-gigloop-take-rate',
    cat: 'gtm',
    style: 'Marketplace',
    lvl: 'Medium',
    min: 25,
    title: 'Gigloop: raise the take rate?',
    prompt: 'Gigloop is a freelance marketplace taking 10% from freelancers. It tested three monetisation changes. Which should it roll out?',
    brief: [
      'Gigloop matches small businesses with freelance designers and developers.',
      'Leakage (client and freelancer moving off-platform after the first job) is the main long-term risk.',
      'Each test arm ran for 8 weeks in comparable cities, normalised to $1.0M monthly GMV at baseline.',
      'Leadership wants more revenue without damaging marketplace health.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Monetisation test arms',
        cols: ['Arm', 'Fee structure', 'Monthly GMV', 'Monthly revenue', 'Repeat-booking rate', 'Freelancer NPS'],
        rows: [
          ['Control', '10% from freelancer', '$1,000k', '$100k', '41%', '32'],
          ['A', '15% from freelancer', '$880k', '$132k', '33%', '9'],
          ['B', '10% freelancer + 5% client fee', '$955k', '$143k', '39%', '30'],
          ['C', '8% freelancer + optional $19/mo Pro plan', '$1,010k', '$92k', '42%', '38']
        ],
        note: 'Illustrative data. C revenue = $80.8k fees + ~$11.4k subscriptions.'
      }
    ],
    follow: [
      'Which arm earns the most revenue? Which is healthiest?',
      'Why is repeat-booking rate a leading indicator?',
      'What long-term risk does arm A create even though revenue rose?',
      'Could you combine B and C? What would you test?',
      'How would you communicate the change to clients?'
    ],
    strong: [
      'Ranks revenue: B $143k > A $132k > Control $100k > C $92k.',
      'Explains repeat-booking drop in A (41% → 33%) signals leakage that will erode GMV over time.',
      'Notes B keeps health metrics close to control while lifting revenue 43%.',
      'Suggests combining B with C to retain top freelancers and test longer.',
      'Communicates client fee with clear value (payment protection, dispute resolution).'
    ],
    traps: [
      'Choosing A on revenue alone.',
      'Ignoring freelancer NPS and supply-side health.',
      'Using 8-week revenue without considering long-term leakage.'
    ],
    insight: 'A client-side fee (B) lifts revenue ~43% with minimal damage to repeat bookings; raising the freelancer fee (A) causes visible leakage.'
  },

  {
    id: 'b-gtm-mathly-teacher-to-district',
    cat: 'gtm',
    style: 'Edtech',
    lvl: 'Easy',
    min: 20,
    title: 'Mathly: teachers to districts',
    prompt: 'Mathly is a free adaptive-math app used by teachers. How should it turn bottom-up teacher usage into paid school and district deals?',
    brief: [
      'Mathly has 61,000 registered teachers, of whom 18,000 are weekly active across 9,800 schools.',
      'Paid offers: a school plan at $2,500 per year and district contracts (avg ACV $48k, 9-month sales cycle).',
      'District close rates: 18% when the district contains a school with 6+ active teachers, 3% for cold outreach.',
      'The sales team is 4 people and currently works a list of the largest districts.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Schools by teacher density',
        cols: ['Active teachers per school', 'Schools', 'Active teachers', 'Converted to school plan last year'],
        rows: [
          ['1', '6,200', '6,200', '1.0%'],
          ['2', '2,200', '4,400', '2.5%'],
          ['3–5', '1,000', '4,000', '9%'],
          ['6+', '400', '3,400', '21%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'How much school-plan revenue did each density band generate?',
      'What does this suggest about how sales should prioritise?',
      'How would you move schools from 1–2 teachers to 3+?',
      'What would a PQL look like for district sales?',
      'What could go wrong if sales pushes too early?'
    ],
    strong: [
      'School plans: 62 + 55 + 90 + 84 = ~291 schools × $2,500 ≈ $728k; 6+ schools are 4% of schools but ~29% of plans.',
      'Uses density as the PQL signal and redirects sales from largest districts to districts containing dense schools (18% vs 3% close).',
      'Proposes in-product invites, shared class reports and principal dashboards to grow density.',
      'Defines a school PQL (e.g., 3+ active teachers for 4 weeks) and a district PQL (2+ PQL schools).',
      'Protects teacher trust: no paywall on existing free features.'
    ],
    traps: [
      'Targeting the largest districts regardless of usage.',
      'Paywalling teachers to force upgrades.',
      'Counting registered teachers instead of active ones.'
    ],
    insight: 'Conversion rises sharply with teacher density (1% → 21%); use density as the PQL signal for both school and district sales and invest in in-product virality.'
  },

  /* ===================== TECHNICAL (4) ===================== */
  {
    id: 'b-tech-shopora-search-build-buy',
    cat: 'technical',
    style: 'Technical PM',
    lvl: 'Medium',
    min: 25,
    title: 'Shopora: build or buy search',
    prompt: 'Shopora is a marketplace whose search is weak. Should it buy a hosted search vendor or build on open-source search?',
    brief: [
      'Shopora runs $300M GMV per year with a 12% take rate. 40% of GMV comes from sessions that use search.',
      'A vendor pilot showed +6% search conversion. Engineering believes it can match this with an in-house build in ~6 months.',
      'Search volume grows ~40% per year.',
      'The team has 3 engineers available who would otherwise work on checkout.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — 3-year cost comparison',
        cols: ['Year', 'Searches / month', 'Buy (vendor at $0.50 per 1k)', 'Build (team + infra)'],
        rows: [
          ['Y1', '90M', '$540k', '$756k'],
          ['Y2', '126M', '$756k', '$470k'],
          ['Y3', '176M', '$1,058k', '$520k'],
          ['Total', '', '$2,354k', '$1,746k']
        ],
        note: 'Illustrative. Build Y1 = 3 engineers × $220k + $96k infra; later years 1.5 engineers + infra.'
      },
      {
        title: 'Exhibit 2 — Time to value',
        cols: ['Option', 'Time to launch', 'Expected search conversion lift'],
        rows: [['Buy', '6 weeks', '+6% (pilot)'], ['Build', '~6 months', '+6% (estimate)']],
        note: 'Illustrative.'
      }
    ],
    follow: [
      'What is the annual revenue value of the +6% lift?',
      'Include the cost of delay. Does build still win?',
      'What is the opportunity cost of the 3 engineers?',
      'At what search volume would you switch from buy to build?',
      'What would you negotiate with the vendor?'
    ],
    strong: [
      'Lift value: $120M search GMV × 6% = $7.2M GMV × 12% ≈ $864k revenue per year.',
      'Cost of 6-month delay ≈ $432k, which closes most of the $608k 3-year gap.',
      'Adds opportunity cost of not working on checkout and execution risk of matching vendor quality.',
      'Recommends buy now with volume pricing and data portability, revisit build when volume ~2x.',
      'Defines exit criteria and owns relevance tuning/merchandising in-house.'
    ],
    traps: [
      'Comparing licence fees to salaries only.',
      'Assuming in-house build reaches parity on schedule.',
      'Ignoring lock-in and data portability.'
    ],
    insight: 'Build looks $0.6M cheaper over 3 years, but 6 months of delay costs ~$0.4M plus opportunity cost; buy now, negotiate volume tiers, and revisit at higher scale.'
  },

  {
    id: 'b-tech-rideko-quote-latency',
    cat: 'technical',
    style: 'Technical PM',
    lvl: 'Hard',
    min: 30,
    title: 'Rideko: price-quote latency',
    prompt: 'Rideko is a ride-hailing app in Southeast Asia. Slow price quotes seem to hurt conversion. Choose between adding compute and building a precomputed cache.',
    brief: [
      'When a rider enters a destination, Rideko calls a pricing service (ETA, surge, route) before showing a price.',
      'There are 30M quote sessions per month. Average fare is $6 with a 20% take rate ($1.20 per ride).',
      'Option A: add compute (+$90k/month) to reduce tail latency. Option B: precompute prices per geohash every 30 seconds (2 engineer-quarters); staleness causes mispricing worth ~0.3% of GMV.',
      'Latency data is observational, not from an experiment.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Conversion by quote latency (today)',
        cols: ['Latency', 'Share of sessions', 'Quote → booking conversion'],
        rows: [
          ['<300ms', '40%', '31.0%'],
          ['300–800ms', '35%', '29.5%'],
          ['800–1,500ms', '18%', '26.0%'],
          ['>1,500ms', '7%', '19.0%']
        ],
        note: 'Illustrative data. Blended conversion ≈ 28.7%.'
      },
      {
        title: 'Exhibit 2 — Projected latency mix',
        cols: ['Scenario', '<300ms', '300–800ms', '800–1,500ms', '>1,500ms'],
        rows: [
          ['Today', '40%', '35%', '18%', '7%'],
          ['A: more compute', '50%', '35%', '13%', '2%'],
          ['B: precomputed cache', '75%', '20%', '4%', '1%']
        ],
        note: 'Engineering estimates.'
      }
    ],
    follow: [
      'Compute projected conversion and monthly revenue impact for A and B.',
      'Why might the latency–conversion relationship be overstated?',
      'How would you prove causality before investing?',
      'What risks does stale pricing create beyond revenue leakage?',
      'Which would you do, and in what order?'
    ],
    strong: [
      'A: conversion ≈ 29.6% (+0.85pp) → ~255k extra rides × $1.20 ≈ $306k/month − $90k ≈ +$216k.',
      'B: conversion ≈ 30.4% (+1.65pp) → ~494k rides ≈ $592k/month; minus leakage 0.3% × ~$55M GMV ≈ $164k → ≈ +$428k/month.',
      'Flags confounding: slow quotes correlate with poor networks, rural areas and low-intent users.',
      'Proposes an injected-latency experiment or holdout to measure causal impact.',
      'Sequences: quick compute win now, then cache with guardrails (max staleness, refresh on surge changes, driver-pay protection).'
    ],
    traps: [
      'Treating observational data as causal.',
      'Ignoring mispricing costs and driver fairness.',
      'Optimising p50 when the tail drives losses.'
    ],
    insight: 'The cache is worth roughly twice compute (~$430k vs ~$215k/month) if causal; validate with a latency experiment first since slow sessions are likely lower intent.'
  },

  {
    id: 'b-tech-payloom-api-deprecation',
    cat: 'technical',
    style: 'Fintech',
    lvl: 'Medium',
    min: 25,
    title: 'Payloom: deprecate API v1',
    prompt: 'Payloom, a payments API, wants to shut down its v1 API. Plan the deprecation.',
    brief: [
      'Payloom processes 1.1B transactions per year. v1 lacks idempotency keys and modern webhooks; v2 has been available for 3 years.',
      '2,600 integrations still use v1, though v1 is only 9% of volume.',
      'v1 causes 18% of on-call incidents and duplicate charges at 0.04% of v1 transactions.',
      'Sales fears losing large merchants if forced to migrate quickly.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — v1 integrations by monthly volume',
        cols: ['Monthly transactions', 'v1 integrations', 'Share of v1 volume'],
        rows: [
          ['>100k', '40', '62%'],
          ['10k–100k', '80', '23%'],
          ['10–10k', '580', '13%'],
          ['<10', '1,900', '2%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'How many duplicate charges does v1 cause per year? What does that cost?',
      'How would you segment the migration plan?',
      'What would you build to make migration easier?',
      'What timeline and comms would you use?',
      'What if a top-10 merchant refuses to migrate?'
    ],
    strong: [
      'v1 volume ≈ 99M tx/year × 0.04% ≈ 40k duplicate charges/year; with ~$25 support cost each ≈ $1M plus chargebacks and trust damage.',
      'Notes 120 integrations = 85% of v1 volume → white-glove migration with solutions engineers.',
      'Long tail (1,900 with <10 tx) → automated emails, deprecation headers, then sunset.',
      'Builds a compatibility shim, migration guide, test sandbox and dashboard showing migration status.',
      'Timeline: announce, 6–12 months, brownouts before shutdown, executive escalation for holdouts.'
    ],
    traps: [
      'Treating all integrations equally.',
      'Shutting down without brownouts or warnings.',
      'Ignoring the security/trust cost of duplicate charges.'
    ],
    insight: '120 integrations carry 85% of v1 volume; handle them with white-glove migration, automate the long tail, and use brownouts to drive the final migration.'
  },

  {
    id: 'b-tech-tabletop-offline-pos',
    cat: 'technical',
    style: 'Technical PM',
    lvl: 'Hard',
    min: 30,
    title: 'Tabletop: offline mode for POS',
    prompt: 'Tabletop is a cloud point-of-sale for restaurants. Internet outages cause lost orders and churn. Which reliability investment should it make?',
    brief: [
      'Tabletop serves 8,000 restaurants at $165 per month. Monthly churn is 1.6%.',
      'Restaurants experience ~3.1 internet outages per month, median 11 minutes, often during peak hours.',
      'Engineering capacity is constrained; competitors advertise offline mode.',
      'Choose one of three options for next year.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Churn reasons (monthly churn = 128 restaurants)',
        cols: ['Reason', 'Share'],
        rows: [
          ['Business closed', '31%'],
          ['Reliability / outages', '27%'],
          ['Price', '22%'],
          ['Switched for features', '20%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 — Options',
        cols: ['Option', 'Cost', 'Time', 'Outage impact covered'],
        rows: [
          ['A: Full offline-first architecture', '~$900k (6 eng × 3 quarters)', '9 months', '~100%'],
          ['B: Store-and-forward payments + local order queue', '~$300k (3 eng × 2 quarters)', '6 months', '~70%'],
          ['C: Bundle LTE failover router', '$12/month per restaurant ongoing', '2 months', '~85%']
        ],
        note: 'Illustrative estimates.'
      }
    ],
    follow: [
      'How much ARR is lost per year to reliability churn?',
      'Compare the payback of A, B and C.',
      'What new risks does offline mode introduce (sync conflicts, fraud)?',
      'Could you combine options? In what order?',
      'How would you measure success?'
    ],
    strong: [
      'Reliability churn ≈ 35 restaurants/month ≈ 420/year × $1,980 ≈ $830k ARR lost per year.',
      'B: $300k for ~70% → ~$580k saved/year; payback < 1 year.',
      'C: 8,000 × $12 × 12 ≈ $1.15M/year ongoing unless charged to customers; fast but expensive at scale.',
      'A: complete but slow and complex; risk of sync conflicts.',
      'Recommends B now, C as paid add-on for high-volume restaurants, revisit A later.'
    ],
    traps: [
      'Choosing full offline-first because competitors advertise it.',
      'Ignoring ongoing costs of hardware.',
      'Forgetting offline payment fraud risk.'
    ],
    insight: 'Reliability churn costs ~$830k ARR per year; store-and-forward (B) captures ~70% of the benefit at a third of the cost, and LTE failover can be sold as an add-on.'
  },

  /* ===================== AI (8) ===================== */
  {
    id: 'b-ai-stayloop-support-agent',
    cat: 'ai',
    style: 'AI PM',
    lvl: 'Medium',
    min: 25,
    title: 'Stayloop: AI support rollout',
    prompt: 'Stayloop, a vacation-rental platform, piloted an AI support agent. Which ticket types should it launch on, and which should stay with humans?',
    brief: [
      'Stayloop receives 400,000 support tickets per month. A human-handled ticket costs $6.50; an AI-handled ticket costs $0.40.',
      'The AI agent uses an LLM with retrieval over help-center articles and booking data.',
      'A policy error means the AI told a guest something that contradicts policy (e.g., promising a refund not allowed). An erroneous refund promise costs ~$180 on average.',
      'Leadership wants savings without hurting trust.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Pilot results by intent',
        cols: ['Intent', 'Share of tickets', 'AI auto-resolved', 'CSAT (AI)', 'CSAT (human)', 'Policy errors per 1,000'],
        rows: [
          ['Check-in / access', '28%', '71%', '4.4', '4.3', '2'],
          ['Booking changes', '22%', '54%', '4.0', '4.2', '6'],
          ['Refunds / cancellations', '19%', '62%', '3.6', '3.9', '41'],
          ['Payments / billing', '14%', '48%', '3.9', '4.1', '9'],
          ['Safety / emergency', '3%', 'Escalated', '–', '4.5', '0'],
          ['Other', '14%', '35%', '3.7', '4.0', '5']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Estimate monthly savings if you launch check-in and booking changes.',
      'Is the refunds intent worth launching? Do the math.',
      'How would you reduce policy errors on refunds?',
      'What evals and guardrails would you require before expanding?',
      'How do you handle safety tickets?'
    ],
    strong: [
      'Check-in: 112k × 71% ≈ 79.5k; booking: 88k × 54% ≈ 47.5k; ~127k tickets × $6.10 ≈ $775k/month savings.',
      'Refunds: 76k × 62% ≈ 47k × $6.10 ≈ $287k savings vs ~3.1k errors × $180 ≈ $560k cost → net negative.',
      'Proposes grounding refunds on structured policy engine, AI drafts with human approval, or tool-based eligibility checks.',
      'Defines evals: policy accuracy test sets, CSAT, escalation quality, regression testing before releases.',
      'Keeps safety always human with instant escalation.'
    ],
    traps: [
      'Launching everywhere because overall resolution looks good.',
      'Optimising for deflection rate instead of correctness.',
      'Ignoring cost of errors.'
    ],
    insight: 'Launch on check-in and booking changes (~$775k/month savings); refunds are net negative because policy errors cost more than the savings.'
  },

  {
    id: 'b-ai-notewise-llm-unit-economics',
    cat: 'ai',
    style: 'AI PM',
    lvl: 'Hard',
    min: 30,
    title: 'Notewise: AI costs exceed revenue',
    prompt: 'Notewise added AI summaries to its freemium note app. LLM costs now exceed subscription revenue. Fix the unit economics without killing the feature.',
    brief: [
      'Notewise has 2M monthly active users; Pro costs $10 per month.',
      'AI summaries are available to all users without limits.',
      'Today every summary runs on a frontier model.',
      'You must reach positive gross margin on AI within one quarter.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Usage by user tier',
        cols: ['Tier', 'Share of MAU', 'Summaries per user / month', 'Paid share'],
        rows: [
          ['Light', '60%', '20', '4%'],
          ['Medium', '30%', '120', '10%'],
          ['Heavy', '10%', '900', '28%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 — Model options',
        cols: ['Model', 'Cost per summary', 'Quality: short notes (<2k words)', 'Quality: long notes'],
        rows: [
          ['Frontier', '$0.012', '4.5 / 5', '4.5 / 5'],
          ['Small', '$0.002', '4.3 / 5', '3.6 / 5']
        ],
        note: 'Illustrative. 80% of summaries are short notes.'
      }
    ],
    follow: [
      'Compute monthly AI cost and subscription revenue.',
      'Which users drive the cost? Are they paying?',
      'Design a routing strategy and compute its cost.',
      'What free-tier limits would you set, and how would you test them?',
      'How would you monitor quality after switching models?'
    ],
    strong: [
      'Summaries ≈ 2M × (12 + 36 + 90) = 276M/month × $0.012 ≈ $3.3M; revenue ≈ 164k paid × $10 ≈ $1.64M.',
      'Heavy users = 65% of usage; free heavy users (144k) alone cost ≈ $1.56M/month.',
      'Routing (short → small, long → frontier): $0.004 average → ≈ $1.1M/month.',
      'Caps free heavy usage (e.g., 50/month): reduces ~122M summaries → ≈ $0.6M/month; upsell prompt at limit.',
      'Monitors quality with eval sets, user ratings and regression testing.'
    ],
    traps: [
      'Removing the feature or just raising price.',
      'Switching all traffic to the small model without checking long-note quality.',
      'Ignoring that heavy free users are the conversion pool.'
    ],
    insight: 'Free heavy users drive nearly half of cost; routing plus a free-tier cap takes AI cost from ~$3.3M to ~$0.6M against $1.64M revenue.'
  },

  {
    id: 'b-ai-carely-triage-safety',
    cat: 'ai',
    style: 'Health AI',
    lvl: 'Hard',
    min: 30,
    title: 'Carely: LLM triage safety',
    prompt: 'Carely wants to use an LLM to triage patient symptoms before a telehealth visit. Which configuration should it ship, if any?',
    brief: [
      'Today nurses triage patients by phone at ~$14 per conversation.',
      'Under-triage (telling someone urgent to wait) is the most dangerous error. Over-triage costs money but is safer.',
      'The team evaluated configurations on 5,000 labelled cases reviewed by physicians.',
      'Regulatory and clinical leaders must approve.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Triage evaluation',
        cols: ['Configuration', 'Accuracy', 'Under-triage', 'Over-triage', 'Cost per conversation', 'p95 latency'],
        rows: [
          ['Nurse line (baseline)', '78%', '3.1%', '18.9%', '$14.00', 'n/a'],
          ['Model A (frontier, no retrieval)', '74%', '5.8%', '20.2%', '$0.09', '6.1s'],
          ['Model A + protocol retrieval', '81%', '2.4%', '16.6%', '$0.12', '7.4s'],
          ['Model B (small) + retrieval', '76%', '4.9%', '19.1%', '$0.02', '2.2s'],
          ['Model A + retrieval + red-flag rules', '80%', '0.9%', '19.1%', '$0.12', '7.5s']
        ],
        note: 'Illustrative data. Rows sum to 100% across accuracy, under- and over-triage.'
      }
    ],
    follow: [
      'Which metric should drive the decision, and why not accuracy?',
      'Which configuration would you ship?',
      'How would you design the rollout (human-in-the-loop)?',
      'What ongoing monitoring would you require?',
      'How would you handle edge cases (children, language, pregnancy)?'
    ],
    strong: [
      'Prioritises under-triage over accuracy; rejects models with under-triage above nurse baseline (A, B).',
      'Chooses A + retrieval + red-flag rules: under-triage 0.9% vs 3.1% baseline.',
      'Notes the best-accuracy configuration (81%) is not the safest one.',
      'Proposes rollout: AI suggests, nurse confirms; phased by risk level; incident reporting.',
      'Monitors with subgroup analysis, drift detection and periodic re-evaluation.'
    ],
    traps: [
      'Optimising for accuracy.',
      'Choosing the cheapest model.',
      'Launching fully autonomous triage without clinical oversight.'
    ],
    insight: 'Ship A + retrieval + red-flag rules with nurse oversight: under-triage drops to 0.9% vs 3.1% for nurses, even though accuracy is not the highest.'
  },

  {
    id: 'b-ai-pipely-copilot-pricing',
    cat: 'ai',
    style: 'B2B SaaS',
    lvl: 'Medium',
    min: 25,
    title: 'Pipely: price the AI copilot',
    prompt: 'Pipely, a CRM, built an AI email-drafting copilot. Should it be a paid add-on, bundled into Pro with a price increase, or usage-based credits?',
    brief: [
      'Pipely has 4,000 customers and 60,000 seats on Pro at $45 per seat per month ($2.7M MRR).',
      'In beta, 12% of seats used the copilot weekly. Cost per active seat is ~$3.20 per month.',
      'Competitors are adding AI features; some bundle them for free.',
      'The CFO wants AI gross margin above 75%.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Pricing options',
        cols: ['Option', 'Price', 'Expected adoption', 'Monthly revenue', 'Monthly AI cost'],
        rows: [
          ['A: Add-on', '$20 per seat', '15% of seats (9,000)', '$180k', '$28.8k'],
          ['B: Bundle into Pro', '+$5 per seat on all seats', '25% active (15,000)', '$300k', '$48k'],
          ['C: Credits', '50 drafts free, packs of 500 for $10', 'Uncertain', 'TBD', 'TBD']
        ],
        note: 'Illustrative estimates.'
      },
      {
        title: 'Exhibit 2 — Admin survey (n=310)',
        cols: ['Statement', 'Agree'],
        rows: [
          ['Would buy a $20 add-on for some seats', '34%'],
          ['Would accept +$5 for all seats', '41%'],
          ['Would downgrade or churn at +$5', '22%']
        ],
        note: 'Illustrative.'
      }
    ],
    follow: [
      'Compute gross margin for A and B.',
      'If 5% of seats downgrade to Starter ($25) under B, what happens to net revenue?',
      'What are the strategic pros and cons of bundling?',
      'Would you choose a hybrid?',
      'How would you test pricing before full rollout?'
    ],
    strong: [
      'A margin ≈ 84%; B margin ≈ 84% on $300k.',
      'B with 3,000 seats downgrading × $20 = −$60k → ~$240k revenue, still above A.',
      'Discusses bundling for adoption and competitive defence vs add-on for value capture and price discrimination.',
      'Suggests hybrid: basic drafting in Pro (+$3–5), advanced agentic features as add-on, fair-use limits.',
      'Tests with new customers and a subset of renewals before broad rollout.'
    ],
    traps: [
      'Ignoring cost per active user.',
      'Assuming survey intent equals behaviour.',
      'Pricing AI as a separate SKU when competitors bundle it.'
    ],
    insight: 'Bundling yields more revenue even after modest downgrades (~$240k vs $180k) with similar margins; a hybrid (bundle basic, charge for advanced) balances adoption and value capture.'
  },

  {
    id: 'b-ai-tunely-recsys-ab',
    cat: 'ai',
    style: 'Consumer ML',
    lvl: 'Medium',
    min: 25,
    title: 'Tunely: new recommendation model',
    prompt: 'Tunely, a music streaming app in India, tested a new recommendation model. Engagement is up. Should you ship it?',
    brief: [
      'Tunely has 30M monthly users and licensing deals with labels that include commitments to promote regional and emerging artists.',
      'The new model is trained to maximise streams and minimise skips.',
      'The A/B test ran for 5 weeks with 10% of users in treatment.',
      'Leadership wants a ship / no-ship decision.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — A/B test results',
        cols: ['Metric', 'Control', 'Treatment', 'Change'],
        rows: [
          ['Streams per DAU', '24.3', '25.3', '+4.1%'],
          ['Skip rate', '31%', '27%', '−4pp'],
          ['D30 retention (new users)', '38.0%', '37.2%', '−0.8pp (p=0.04)'],
          ['D30 retention (existing users)', '81.5%', '81.9%', '+0.4pp (n.s.)'],
          ['Share of streams to top 1% artists', '38%', '47%', '+9pp'],
          ['Streams of artists new to the user', '18%', '14%', '−4pp']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'What story do these metrics tell together?',
      'Why might new users retain worse?',
      'How does the concentration on top artists affect label relationships?',
      'What changes would you make to the model or objective?',
      'What would you need to see to ship?'
    ],
    strong: [
      'Identifies the trade-off: short-term engagement up, discovery down, and new-user retention significantly worse.',
      'Hypothesises popularity bias hurts new users who need discovery and personalisation.',
      'Flags contractual risk from concentration on top artists.',
      'Proposes multi-objective optimisation (diversity, novelty), new-user specific model, or guardrail metrics.',
      'Recommends no ship as-is; iterate and retest with guardrails.'
    ],
    traps: [
      'Shipping on streams per DAU alone.',
      'Ignoring statistical significance or segments.',
      'Ignoring ecosystem/label impacts.'
    ],
    insight: 'The model boosts engagement by concentrating on popular artists, but it hurts new-user retention and discovery; do not ship until those guardrails are met.'
  },

  {
    id: 'b-ai-patchpilot-auto-merge',
    cat: 'ai',
    style: 'Devtools',
    lvl: 'Medium',
    min: 25,
    title: 'Patchpilot: when to auto-merge',
    prompt: 'Patchpilot is an AI coding agent that opens pull requests. Customers want it to auto-merge. Which tasks should be eligible?',
    brief: [
      'Patchpilot opens ~31,500 PRs per month across customer repositories.',
      'All PRs run through customer CI. Today a human reviews and merges every PR.',
      'A revert within 7 days is the proxy for a bad merge.',
      'Customers pay per merged PR, so auto-merge would raise revenue and adoption.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — PR outcomes by task type (last 30 days)',
        cols: ['Task type', 'PRs', 'Merged without edits', 'Reverted within 7 days', 'Reviewer minutes per PR'],
        rows: [
          ['Lint / formatting', '12,500', '96%', '0.1%', '0.5'],
          ['Dependency bumps', '9,400', '88%', '0.6%', '2'],
          ['Flaky test fixes', '3,100', '61%', '2.9%', '6'],
          ['Small bug fixes', '4,800', '44%', '3.8%', '11'],
          ['Feature scaffolding', '1,700', '19%', '6.5%', '24']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Which tasks are safe to auto-merge?',
      'How many reviewer hours would that save per month?',
      'What guardrails would you require?',
      'How would you let customers configure autonomy?',
      'How would you expand eligibility over time?'
    ],
    strong: [
      'Auto-merge lint/formatting and dependency bumps (low revert rates, high merge rates).',
      'Reviewer time saved ≈ 12,500 × 0.5 + 9,400 × 2 ≈ 25,050 min ≈ 418 hours/month.',
      'Guardrails: passing CI, size limits, no changes to sensitive paths, auto-rollback, audit logs.',
      'Customer controls per repo/task type; default conservative.',
      'Expand using revert rate thresholds and evals per task type.'
    ],
    traps: [
      'Auto-merging all tasks.',
      'Ignoring blast radius of bad merges.',
      'Using merge rate only without revert rate.'
    ],
    insight: 'Lint and dependency bumps (~70% of PRs) can safely auto-merge with guardrails, saving ~400 reviewer hours monthly; keep humans on bug fixes and features.'
  },

  {
    id: 'b-ai-kova-fraud-threshold',
    cat: 'ai',
    style: 'Fintech',
    lvl: 'Hard',
    min: 30,
    title: 'Kova: fraud model threshold',
    prompt: 'Kova is a buy-now-pay-later provider. Choose the decision threshold for its fraud model.',
    brief: [
      'Kova receives 1M applications per month; average order is $180; fraud prevalence is 0.8% (8,000 fraudulent applications).',
      'A missed fraud costs the full $180. A false decline costs ~$15 (lost $9 merchant fee + $6 future value).',
      'The risk team favours a strict threshold; growth favours approving more.',
      'Pick a threshold and justify it.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Threshold performance (monthly)',
        cols: ['Threshold', 'Recall', 'Fraud caught', 'Fraud missed', 'Good users declined'],
        rows: [
          ['0.3', '92%', '7,360', '640', '39,000'],
          ['0.5', '85%', '6,800', '1,200', '15,000'],
          ['0.7', '72%', '5,760', '2,240', '5,000'],
          ['0.9', '51%', '4,080', '3,920', '1,200']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Compute total monthly cost for each threshold.',
      'What is precision at threshold 0.5?',
      'If the cost of a false decline is $40, which threshold wins?',
      'How would you reduce false declines without missing more fraud?',
      'How would you monitor drift?'
    ],
    strong: [
      'Costs: 0.3 ≈ $700k; 0.5 ≈ $441k; 0.7 ≈ $478k; 0.9 ≈ $724k → 0.5 is optimal.',
      'Precision at 0.5 ≈ 6,800 / 21,800 ≈ 31%.',
      'At $40 false-decline cost: 0.5 ≈ $816k vs 0.7 ≈ $603k → 0.7 wins.',
      'Suggests step-up verification for the grey zone instead of hard declines.',
      'Monitors fraud rate, chargebacks, approval rate and model drift.'
    ],
    traps: [
      'Optimising recall or precision alone.',
      'Ignoring the cost asymmetry.',
      'Treating the threshold as static.'
    ],
    insight: 'Threshold 0.5 minimises cost at $15 per false decline, but the answer flips to 0.7 if false declines cost $40; the threshold depends on economics, not model metrics.'
  },

  {
    id: 'b-ai-tutora-socratic-tutor',
    cat: 'ai',
    style: 'Edtech',
    lvl: 'Medium',
    min: 25,
    title: 'Tutora: answers or hints?',
    prompt: 'Tutora is an AI homework helper. It tested giving direct answers versus Socratic hints. Which experience should it ship?',
    brief: [
      'Tutora targets middle and high school students; parents pay the subscription.',
      'Teachers worry AI tools encourage copying answers.',
      'The experiment ran for 6 weeks with three arms.',
      'Leadership wants a recommendation balancing engagement, learning and revenue.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 — Experiment results',
        cols: ['Arm', 'Sessions / week', 'Msgs / session', 'Test score gain', 'W4 retention', 'Parent NPS', 'Paid conversion', 'Cost per active student / month'],
        rows: [
          ['Direct answers', '4.8', '3.1', '+2.1 pts', '46%', '12', '3.1%', '$0.38'],
          ['Socratic hints', '3.2', '8.7', '+7.9 pts', '39%', '41', '4.6%', '$0.92'],
          ['Hybrid (hint first, answer after 2 tries)', '4.1', '5.6', '+6.4 pts', '44%', '35', '4.9%', '$0.66']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'What does each arm optimise for?',
      'Which arm would you ship and why?',
      'How do you think about the user (student) vs the buyer (parent)?',
      'How would you evaluate learning quality over time?',
      'What risks does the hybrid introduce?'
    ],
    strong: [
      'Notes direct answers maximise engagement but minimise learning and parent satisfaction.',
      'Hybrid delivers most of the learning gain (+6.4) with near-direct retention and highest conversion (4.9%).',
      'Recognises the parent is the buyer; NPS and learning outcomes drive conversion.',
      'Monitors learning with periodic assessments and teacher feedback.',
      'Addresses gaming the hybrid (students forcing answers) with adaptive hint policies.'
    ],
    traps: [
      'Choosing on engagement alone.',
      'Ignoring cost differences.',
      'Forgetting the buyer vs user distinction.'
    ],
    insight: 'The hybrid arm wins: highest conversion (4.9%), strong learning gains and retention close to direct answers, aligning student engagement with parent value.'
  }
];

window.PM_CASES_B_SOURCES = [
  { name: 'Lenny\'s Newsletter — What is good retention?', url: 'https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29' },
  { name: 'Bessemer Venture Partners — The State of AI 2025', url: 'https://www.bvp.com/atlas/the-state-of-ai-2025' },
  { name: 'RevenueCat — AI app retention study', url: 'https://www.revenuecat.com/blog/growth/ai-app-retention-study' },
  { name: 'TechCrunch — AI-powered apps struggle with long-term retention', url: 'https://techcrunch.com/2026/03/10/ai-powered-apps-struggle-with-long-term-retention-new-report-shows' },
  { name: 'McKinsey — The state of AI', url: 'https://mckinsey.de/capabilities/quantumblack/our-insights/the-state-of-ai' },
  { name: 'OpenView — Product benchmarks', url: 'https://openviewpartners.com/productbenchmarks' },
  { name: 'Orb — SaaS metrics benchmarks', url: 'https://www.withorb.com/blog/saas-metrics-benchmarks-statistics' },
  { name: 'SaaSRise — SaaS benchmark report 2026', url: 'https://saasrise.com/blog/saas-benchmark-report-2026' },
  { name: 'BenchLM — LLM pricing 2026', url: 'https://benchlm.ai/md/blog/posts/llm-pricing-2026.md' },
  { name: 'IntuitionLabs — LLM API pricing comparison', url: 'https://intuitionlabs.ai/articles/llm-api-pricing-cost-per-task-comparison' },
  { name: 'Sharetribe — Commission take rate', url: 'https://www.sharetribe.com/marketplace-glossary/commission-take-rate/' },
  { name: 'Tidemark — Marketplace take rates', url: 'https://www.tidemarkcap.com/vskp-chapter/marketplace-take-rates' },
  { name: 'IGotAnOffer — Estimation interview questions', url: 'https://igotanoffer.com/blogs/product-manager/estimation-interview-questions' },
  { name: 'Exponent — Estimation questions', url: 'https://www.tryexponent.com/courses/pm/estimation/introduction-estimation-questions' },
  { name: 'RocketBlocks — Estimation interviews', url: 'https://rocketblocks.me/guide/pm/estimation-interviews.php' }
];
