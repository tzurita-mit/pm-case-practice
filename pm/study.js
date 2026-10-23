/* PM Case Practice - study content. Original explanations; sources listed per guide. */
window.PM_STUDY = {
  guides: [
    /* ------------------------------------------------------------------ DESIGN */
    {
      cat: "design",
      title: "How to answer product design questions",
      summary: "You are asked to design a new product, or a product for a specific group, usually from a blank page. The interviewer is testing product sense: whether you can pick a sharp user and problem, generate ideas that actually solve it, and make reasoned choices under ambiguity.",
      looksLike: [
        "Design a product to help people find a roommate.",
        "Design an alarm clock for blind users.",
        "Build a product for Spotify aimed at parents of young children.",
        "What would you build if you were Google entering the pet-care space?"
      ],
      evaluates: [
        "Whether you clarify the goal and constraints before designing anything.",
        "Empathy: how well you understand a specific user segment and its real pain points.",
        "Prioritisation: picking one segment and one problem with explicit reasons.",
        "Creativity: at least one idea that goes beyond the obvious feature list.",
        "Judgement on trade-offs and how you would measure success.",
        "Communication: a clear structure the interviewer can follow and steer."
      ],
      framework: {
        name: "CIRCLES (adapted)",
        origin: "Lewis C. Lin, Decode and Conquer",
        steps: [
          { t: "Comprehend the situation", d: "Restate the prompt and pin down what is being built, for whom, and why the company would care. Ask about platform, geography and any constraints, then state your own assumptions if the interviewer leaves it open. This keeps you from designing the wrong thing for 30 minutes.", tips: ["Ask what, who, why and how; skip trivia.", "Tie the goal to the company mission (e.g. Spotify: more listening time)."], say: "Before I jump in, I want to make sure I understand the goal. Is this a new standalone app or a feature inside the existing product, and is the goal engagement, revenue or reaching new users?" },
          { t: "Identify the customer", d: "List 3 to 4 distinct user segments, defined by behaviour or need rather than just demographics. Pick one to focus on and say why: size, severity of pain, or fit with the company goal.", tips: ["Name segments concretely: 'students moving to a new city in August' beats 'young people'.", "Make the choice explicit and move on; you can mention the others later."], say: "I see four groups: students, young professionals relocating for work, people leaving a relationship, and landlords. I will focus on relocating professionals: they move on short notice, cannot visit in person, and have money to pay for trust." },
          { t: "Report the customer's needs", d: "Walk through the user's journey and list the pain points or jobs-to-be-done at each stage. Phrase them as user needs, not features. Aim for 3 to 5 needs.", tips: ["Use a simple journey: discover, evaluate, decide, use, repeat.", "Ask 'why' once or twice to get to the underlying need."], say: "Walking through their journey: finding candidates, judging whether they are trustworthy, checking lifestyle compatibility, and handling the lease. The biggest pain is trust, because they cannot meet people before signing." },
          { t: "Cut through prioritisation", d: "Choose the one or two needs to solve, using stated criteria such as frequency, severity and how badly current alternatives handle them. Saying no is the point of this step.", tips: ["Use a quick 2x2 or score of impact vs. how underserved the need is.", "Check in: 'Does that focus sound reasonable?'"], say: "I will prioritise trust and compatibility. They are the reason people fall back on friends-of-friends, and no existing listing site handles them well." },
          { t: "List solutions", d: "Brainstorm 3 or more distinct ideas for the chosen need. Mix safe ideas with at least one ambitious one. Describe each idea briefly in terms of what the user experiences.", tips: ["Aim for range: a product feature, a process change and a bold bet.", "Do not fall in love with the first idea."], say: "Three ideas: verified profiles with ID, employer and references; a compatibility quiz that matches on habits like sleep schedule and cleanliness; and a 'trial week' guarantee where we help rehouse you if it fails." },
          { t: "Evaluate trade-offs", d: "Compare the ideas on user impact, effort, risk and fit with the goal. Be honest about downsides like privacy, cold-start or abuse.", tips: ["A small table in words works: impact high/med/low, effort high/med/low.", "Call out the riskiest assumption for your favourite idea."], say: "Verified profiles are high impact and moderate effort, but raise privacy concerns. The guarantee is a strong differentiator but expensive and hard to operate, so I would test it later." },
          { t: "Summarise and measure", d: "Recommend what to build first, recap why, and name a primary success metric plus a guardrail. Mention a lightweight MVP and what you would learn from it.", tips: ["Pair a success metric with a counter-metric.", "End with a one-line vision of where this goes next."], say: "I would launch verified profiles plus the compatibility quiz as an MVP in two cities. Success is matches that lead to a signed lease within 30 days; guardrail is reports of bad experiences per match." }
        ]
      },
      timing: [["Clarify goal and constraints", "3 min"], ["Users and segment choice", "5 min"], ["Needs and prioritisation", "7 min"], ["Solutions", "8 min"], ["Trade-offs", "5 min"], ["Metrics and summary", "4 min"]],
      example: {
        q: "Design a product to help people find a roommate.",
        outline: [
          "Clarify: assume a standalone mobile app in large US cities; goal is to become the trusted place to find a roommate, monetised later.",
          "Segments: students, relocating professionals, people splitting after a breakup, landlords filling rooms. Pick relocating professionals: urgent need, cannot meet in person, can pay.",
          "Journey and needs: find candidates, trust them are who they say, match on lifestyle, coordinate viewing and lease.",
          "Prioritise trust and compatibility: highest pain, poorly served by Craigslist and Facebook groups.",
          "Idea 1: verified profiles (ID, employer email, past-roommate references).",
          "Idea 2: lifestyle compatibility quiz with match score and short video intros.",
          "Idea 3 (bold): 30-day 'roommate guarantee' with rehousing help, funded by a premium tier.",
          "Trade-offs: 1 and 2 are feasible and reinforce each other; 3 is a differentiator but operationally heavy, so park it for v2.",
          "MVP: launch 1+2 in two cities seeded through employer relocation programmes to solve cold-start.",
          "Metrics: North Star = matches that convert to a signed lease within 30 days; guardrail = safety reports per 1,000 matches; also track profile verification rate."
        ]
      },
      mistakes: [
        "Jumping straight to features without defining the user or the problem.",
        "Choosing a segment so broad (e.g. 'everyone') that needs and solutions become generic.",
        "Listing many features but never prioritising or making a recommendation.",
        "Only proposing safe, incremental ideas with no creative stretch.",
        "Forgetting metrics, or naming vanity metrics like downloads.",
        "Reciting the framework mechanically instead of having a conversation."
      ],
      tips: [
        "Signpost each step out loud so the interviewer can follow and redirect you.",
        "Make one bold call per step and justify it in a sentence.",
        "Draw or describe a simple user journey; it naturally produces pain points.",
        "Address cold-start, trust and abuse for any marketplace or social product.",
        "Keep your best idea concrete: describe the first screen the user sees.",
        "Leave 3 to 4 minutes for a crisp summary; it is what interviewers remember."
      ],
      alternatives: [
        { name: "Carrus 6-step product case", d: "Clarify, users, needs, goal plus success metric, solutions, and an 'imagine' vision statement. Good when you want metrics defined before brainstorming." },
        { name: "Jobs-to-be-done lens", d: "Frame needs as the progress the user is trying to make. Helpful when demographics are a poor way to segment." },
        { name: "Lean CIRCLES", d: "A shortened version for 15 to 20 minute questions: clarify, user, need, two solutions, pick one." }
      ],
      sources: [
        { name: "Stream: CIRCLES method overview", url: "https://getstream.io/blog/circles-method/" },
        { name: "Product School: CIRCLES framework guide", url: "https://productschool.com/blog/skills/circles-framework-guide" },
        { name: "Carrus: 6-step framework for product cases", url: "https://www.carrus.io/blog/a-6-step-framework-to-nail-your-product-case-interview" },
        { name: "Aakash Gupta: the product sense interview", url: "https://www.news.aakashg.com/i/135705731/history-of-the-product-sense-interview" }
      ]
    },

    /* ------------------------------------------------------------------ IMPROVE */
    {
      cat: "improve",
      title: "How to answer product improvement questions",
      summary: "You are asked how you would make an existing product better, often your favourite product or the interviewer's own. It tests whether you understand why a product exists today, can spot the most valuable gap, and can propose changes tied to a business goal rather than personal taste.",
      looksLike: [
        "What is your favourite product and how would you improve it?",
        "How would you improve Google Maps?",
        "Pick a feature of Instagram you would change and why.",
        "How would you increase engagement on LinkedIn?"
      ],
      evaluates: [
        "Whether you understand the product's current mission, users and business model.",
        "Choosing a goal for the improvement (engagement, retention, revenue) and sticking to it.",
        "Spotting real, prioritised pain points rather than personal pet peeves.",
        "Solutions that are specific, feasible and connected to the chosen goal.",
        "Defining success metrics and risks for the change."
      ],
      framework: {
        name: "Goal-first improvement",
        origin: "Common practice (adapts CIRCLES to existing products)",
        steps: [
          { t: "Describe the product today", d: "Briefly say what the product does, who uses it and how it makes money. This shows you understand the status quo and gives the interviewer a chance to correct you.", tips: ["One or two sentences; do not lecture.", "Mention the company mission if you know it."], say: "Google Maps helps people navigate and discover places; it earns money mainly through local ads and business listings." },
          { t: "Pick a goal for the improvement", d: "Ask or decide what the improvement should move: acquisition, engagement, retention, monetisation or satisfaction. Everything after this is judged against that goal.", tips: ["If the interviewer says 'you choose', pick one and justify it."], say: "I will focus on deepening engagement with discovery, because navigation is mature and discovery is where Maps earns ad revenue." },
          { t: "Segment users", d: "List the main user groups and pick one whose experience matters most for the goal. Explain the choice.", tips: ["Consider both sides of multi-sided products (e.g. riders and businesses)."], say: "Users include commuters, tourists, local explorers, and businesses. I will focus on local explorers looking for somewhere to eat on a weekend." },
          { t: "Find pain points", d: "Walk through the chosen user's journey with the product today and list where it falls short. Prioritise one or two pains by frequency, severity and link to the goal.", tips: ["Ground pains in observed behaviour: 'people switch to Instagram or TikTok to judge vibe'."], say: "The biggest gap is judging whether a place fits the moment: is it busy, is it good for a group, what does it feel like right now." },
          { t: "Propose solutions", d: "Give two or three distinct improvements, including one ambitious idea. Describe what the user would see and why it addresses the pain.", tips: ["Mix a quick win with a bigger bet."], say: "Ideas: short user video reviews on listings, a 'plan with friends' shared shortlist, and an AI suggestion that plans an evening based on group preferences." },
          { t: "Prioritise and recommend", d: "Compare impact, effort and risk, then recommend one to build first. Explain how you would test it cheaply.", tips: ["Use RICE or a simple impact/effort comparison, out loud."], say: "I would start with the shared shortlist: low effort, uses existing data, and brings multiple users into Maps per decision." },
          { t: "Define metrics and risks", d: "Name a primary metric aligned to the goal, a guardrail, and the biggest risk. Mention an A/B test or staged rollout.", tips: ["Avoid vanity metrics; use rate or per-user measures."], say: "Primary metric: weekly users who save or share a place; guardrail: navigation start time and crash rate. Risk: clutter for commuters, so the entry point lives in Explore only." }
        ]
      },
      timing: [["Product today and goal", "4 min"], ["Users and segment", "4 min"], ["Pain points", "6 min"], ["Solutions", "7 min"], ["Prioritise", "4 min"], ["Metrics, risks, summary", "5 min"]],
      example: {
        q: "How would you improve Spotify?",
        outline: [
          "Status quo: music and podcast streaming, freemium with ads and subscription; mission about connecting creators and listeners.",
          "Goal chosen: retention of free users in their first 30 days, since they feed the subscription funnel.",
          "Segments: new free users, long-time premium users, podcast listeners, artists. Focus: new free users.",
          "Pain points: empty home screen before the algorithm learns taste; ad interruptions feel heavy; unclear what Premium adds.",
          "Prioritise the cold-start taste problem: it hits every new user and drives early churn.",
          "Idea 1: onboarding that imports taste from a few songs the user hums or names, or from other services.",
          "Idea 2: 'first week mix' updated daily that explicitly asks thumbs up or down.",
          "Idea 3 (bold): social onboarding that seeds taste from friends who already use Spotify.",
          "Recommend idea 2 first: cheap to build on existing recommenders; A/B test against current home screen.",
          "Metrics: day-30 retention of new free users (primary); listening hours per user; guardrail: ad impressions per user and skip rate."
        ]
      },
      mistakes: [
        "Improving without stating a goal, so solutions cannot be compared.",
        "Proposing changes based on your own taste rather than a user segment's needs.",
        "Ignoring why the product works today and suggesting something that breaks it.",
        "Listing ten small tweaks instead of going deep on one or two.",
        "Forgetting the business side: how the improvement helps the company."
      ],
      tips: [
        "Prepare two or three 'favourite products' in advance with users, goal and improvements ready.",
        "Show you know the product's strategy: what it is betting on right now.",
        "Name one thing the product does brilliantly before criticising it.",
        "Suggest how to validate the idea (user research, fake door test, A/B test).",
        "Always close with metrics and a guardrail."
      ],
      alternatives: [
        { name: "CIRCLES", d: "Works for improvement too; spend less time on Comprehend because the product exists, and more on pain points." },
        { name: "Kano analysis", d: "Useful when deciding whether a fix is a basic expectation, a performance feature or a delighter." },
        { name: "AARRR funnel lens", d: "Pick the funnel stage with the biggest drop-off and improve that stage." }
      ],
      sources: [
        { name: "Carrus: 6-step framework for product cases", url: "https://www.carrus.io/blog/a-6-step-framework-to-nail-your-product-case-interview" },
        { name: "Product School: PM interview questions list", url: "https://productschool.com/blog/interview/the-ultimate-list-product-manager-interview-questions/" },
        { name: "Aakash Gupta: the product sense interview", url: "https://www.news.aakashg.com/i/135705731/history-of-the-product-sense-interview" },
        { name: "Roadmunk: Kano model glossary", url: "https://roadmunk.com/glossary/kano-model" }
      ]
    },

    /* ------------------------------------------------------------------ METRICS */
    {
      cat: "metrics",
      title: "How to answer metrics and success questions",
      summary: "You are asked how you would measure the success of a product or feature, or which single metric you would choose. It tests whether you can connect a product's purpose to a small, well-chosen set of measures, and anticipate how those measures can mislead.",
      looksLike: [
        "How would you measure the success of Instagram Stories?",
        "What is the North Star metric for Airbnb?",
        "You are the PM for Google Docs comments. What metrics would you track?",
        "How would you set goals for a new checkout flow?"
      ],
      evaluates: [
        "Understanding what the product is for and who it serves before choosing metrics.",
        "Choosing one primary metric and defending it, rather than listing everything.",
        "Covering the user journey with supporting metrics (acquisition, activation, engagement, retention).",
        "Adding guardrail or counter-metrics to catch harm and gaming.",
        "Precise metric definitions: numerator, denominator, time window.",
        "Awareness of trade-offs, e.g. engagement vs. user wellbeing."
      ],
      framework: {
        name: "Goal - Signal - Metric with North Star",
        origin: "Google HEART / GSM (Rodden, Hutchinson and Fu) combined with the Amplitude North Star approach",
        steps: [
          { t: "Clarify the product and its goal", d: "State what the product or feature does, for whom, and why the company built it. Metrics follow from the goal, so getting this right matters more than any list.", tips: ["Ask whether it is a new launch or a mature product; the right metric differs."], say: "Stories exist to let people share casual moments without cluttering their feed, and to increase daily sharing and viewing on Instagram." },
          { t: "Map the user journey or actions", d: "List the key actions users take: discover, create, consume, interact, return. This gives you candidate signals at each step.", tips: ["For two-sided products, map both sides (creators and viewers)."], say: "Creators open the camera, post a story, and see who viewed. Viewers tap through stories, reply or react, and come back the next day." },
          { t: "Turn goals into signals", d: "For each goal, ask what user behaviour would show it is being met. HEART dimensions (happiness, engagement, adoption, retention, task success) are a useful checklist.", tips: ["Signals are behaviours; metrics are precise numbers built from them."], say: "If Stories is working, more people post casually, and viewers watch and reply regularly." },
          { t: "Pick a North Star metric", d: "Choose one metric that captures the value users get and leads to business results. Define it precisely and explain why it beats the alternatives.", tips: ["Prefer metrics that reflect delivered value over raw counts like signups.", "Give the time window: daily, weekly, 28-day."], say: "My North Star is daily users who post or reply to at least one story, because it captures both sides of the value exchange." },
          { t: "Add supporting and input metrics", d: "Name 2 to 4 metrics that drive the North Star and help diagnose movement: e.g. creation rate, completion rate, replies per viewer.", tips: ["Group them by funnel stage so they read as a system."], say: "Inputs: percentage of DAU who post a story, stories viewed per viewer, and reply rate per story view." },
          { t: "Add guardrails", d: "Choose metrics that should not get worse: cannibalisation of feed posts, time spent quality, reports, performance. They stop you from celebrating a harmful win.", tips: ["Every metric can be gamed; say how you would detect it."], say: "Guardrails: feed posts per user, ad revenue per session, and negative feedback like hides and reports." },
          { t: "Discuss trade-offs and targets", d: "Say what you would do if metrics conflict and how you would set a target, for example with a baseline and expected lift from an experiment.", tips: ["Close with a short recap of North Star, inputs and guardrails."], say: "If story posts rise but feed posts fall a lot, I would look at total sharing per user before calling it a win." }
        ]
      },
      timing: [["Clarify goal", "3 min"], ["User journey", "4 min"], ["Signals and North Star", "6 min"], ["Supporting metrics", "5 min"], ["Guardrails and trade-offs", "5 min"], ["Recap", "2 min"]],
      example: {
        q: "How would you measure the success of Airbnb Experiences?",
        outline: [
          "Goal: give guests more reasons to book through Airbnb and deepen trips, while giving hosts a new income source.",
          "Users: guests (travellers and locals) and experience hosts.",
          "Journey: browse, book, attend, review, rebook; hosts list, get bookings, deliver, get paid.",
          "North Star: experiences attended per month with a 4+ star review (value delivered, not just bookings).",
          "Inputs: share of stay guests who view an experience; booking conversion; host supply in top cities; repeat booking rate.",
          "Host health: active hosts with 1+ booking per month; host earnings.",
          "Guardrails: cancellations, safety incidents, and impact on stay bookings (no cannibalisation of core).",
          "Trade-off: pushing experiences too hard in the stay checkout might lower stay conversion; monitor carefully in experiments.",
          "Recap: one North Star, four inputs, three guardrails."
        ]
      },
      mistakes: [
        "Listing a dozen metrics with no primary metric.",
        "Picking vanity metrics like downloads or page views.",
        "Not defining the metric precisely (what counts as 'active'?).",
        "Forgetting guardrails, so a harmful change could look like a win.",
        "Ignoring one side of a two-sided product.",
        "Choosing a metric that the team cannot actually influence."
      ],
      tips: [
        "Say 'the metric I would put on the wall is...' to signal your primary pick.",
        "Use ratios and per-user metrics to control for growth in the user base.",
        "Name a leading indicator you can read in days, not months.",
        "For new features, include adoption; for mature ones, emphasise retention and depth.",
        "Mention how you would segment results (new vs. existing users, platform, region)."
      ],
      alternatives: [
        { name: "HEART", d: "Google's five user-experience categories; good checklist for UX-heavy features." },
        { name: "AARRR (pirate metrics)", d: "Acquisition, activation, retention, referral, revenue; good for growth and funnel questions." },
        { name: "Input / output metric tree", d: "Break a top-level outcome into drivers the team can move; good for goal-setting questions." }
      ],
      sources: [
        { name: "Google Research: HEART framework paper", url: "https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/" },
        { name: "Amplitude: North Star Playbook", url: "https://amplitude.com/books/north-star" },
        { name: "RocketBlocks: success metrics in PM interviews", url: "https://www.rocketblocks.me/blog/success-metrics-pm-interviews.php" }
      ]
    },

    /* ------------------------------------------------------------------ RCA */
    {
      cat: "rca",
      title: "How to answer root cause (metric drop) questions",
      summary: "You are told a metric changed unexpectedly and asked to find out why. It tests structured, hypothesis-driven investigation: ruling out data problems, narrowing the scope, and then reasoning about internal and external causes before proposing a fix.",
      looksLike: [
        "Facebook event creation dropped 20% week over week. What happened?",
        "Uber ride requests in one city are down 10%. How would you investigate?",
        "YouTube watch time is up but ad revenue is flat. Why?",
        "Sign-ups for our app doubled overnight. What do you do?"
      ],
      evaluates: [
        "Clarifying the metric definition, magnitude and timing before hypothesising.",
        "Checking data quality and instrumentation first.",
        "A structured way to segment the problem (time, user, platform, geography, funnel step).",
        "Generating hypotheses across internal and external causes, then prioritising them.",
        "Proposing how to confirm the cause and what to do next."
      ],
      framework: {
        name: "Validate - Scope - Segment - Hypothesise - Fix",
        origin: "Common practice",
        steps: [
          { t: "Clarify the metric and the change", d: "Ask how the metric is defined, how big the change is, over what time window and compared to what. A 2% daily dip and a 20% sustained drop need very different investigations.", tips: ["Ask: sudden or gradual? one-off or ongoing?"], say: "How is 'event creation' defined, is it events created per day? And is the 20% drop sudden from one day, or a gradual slide over the week?" },
          { t: "Rule out data issues", d: "Check whether the drop is real: logging changes, tracking bugs, pipeline delays, a change in metric definition or a dashboard filter. Many real-world drops are data artefacts.", tips: ["Compare with related metrics: if events dropped but event page views did not, suspect logging."], say: "First I would confirm it is real: was there a release that changed logging, and do related metrics like event invites show the same drop?" },
          { t: "Check seasonality and external context", d: "Compare to the same period last year and last week. Consider holidays, news, competitor launches, outages, regulation or weather.", tips: ["Ask whether the whole industry saw it (e.g. app store trends)."], say: "Was there a holiday or major event last week? Is the drop also visible year over year?" },
          { t: "Segment to localise the drop", d: "Slice the metric by platform, app version, geography, user type (new vs. existing), acquisition channel and funnel step. The goal is to find where the drop is concentrated.", tips: ["If it is everywhere, think broad causes; if concentrated, think targeted causes.", "Decompose the metric: e.g. events = users x creation rate."], say: "I would split by iOS vs. Android and app version. If only Android 5.2 dropped, I would look at that release." },
          { t: "Generate and rank hypotheses", d: "List likely causes in buckets: internal (releases, experiments, bugs, marketing changes, pricing) and external (competition, seasonality, platform policy). Rank by likelihood given what you found.", tips: ["Say which hypothesis you would test first and why."], say: "Given the drop is on Android only after Tuesday's release, my top hypothesis is a bug in the new create-event button." },
          { t: "Confirm and act", d: "Describe the data or test that would confirm the cause, the fix (rollback, hotfix, communication) and how you would prevent recurrence, such as alerts.", tips: ["Close with a short summary of your reasoning path."], say: "I would check crash and funnel data for the create flow on that version; if confirmed, roll back and add an alert on creation rate by version." }
        ]
      },
      timing: [["Clarify metric and change", "3 min"], ["Data validity", "3 min"], ["External and seasonal", "3 min"], ["Segmentation", "7 min"], ["Hypotheses", "6 min"], ["Confirm, fix, summary", "4 min"]],
      example: {
        q: "Weekly active users on Instagram dropped 8% last week. Investigate.",
        outline: [
          "Clarify: WAU = users with at least one session in 7 days; drop is 8% vs. prior week and started sharply on Wednesday.",
          "Data check: any logging or SDK change, pipeline delay, or definition change? Do sessions and DAU show the same pattern?",
          "External: no major holiday; check whether competitors launched something or an app store issue occurred.",
          "Segment: by platform, version, country, new vs. existing, entry point (notifications, organic).",
          "Finding (assumed by interviewer): drop concentrated in existing Android users in India arriving via push notifications.",
          "Hypotheses: notification delivery bug on new Android OS update; notification throttling experiment; regional network outage.",
          "Test: check push send vs. delivery vs. open rates by OS version; check experiment log for notification changes.",
          "Action: fix or roll back the cause, communicate impact, and add an alert on push delivery rate per OS version.",
          "Summary: confirmed real drop, localised to a channel and region, traced to the most likely cause, proposed fix and prevention."
        ]
      },
      mistakes: [
        "Jumping to a favourite hypothesis without checking data validity.",
        "Listing a dozen causes in no order instead of narrowing down.",
        "Not asking whether the drop is sudden or gradual.",
        "Forgetting external factors like seasonality or competitor launches.",
        "Ending without a way to confirm the cause or a next step."
      ],
      tips: [
        "Think out loud as a decision tree: 'If X, then I look at Y; if not, I look at Z'.",
        "Decompose the metric into factors (users x frequency x conversion) to find which moved.",
        "Use the interviewer as your data source; ask for specific cuts.",
        "Sudden drops point to releases, outages or logging; gradual ones to competition or product decay.",
        "Treat unexpected increases with the same suspicion as drops."
      ],
      alternatives: [
        { name: "5 Whys", d: "Keep asking why once you have a likely cause, to reach the underlying process failure." },
        { name: "Fishbone (Ishikawa) diagram", d: "Organise causes into categories such as people, process, technology and environment when causes are many." },
        { name: "Metric decomposition tree", d: "Break the metric into a formula of drivers and check each branch; good for revenue and funnel metrics." }
      ],
      sources: [
        { name: "RocketBlocks: metrics questions in PM interviews", url: "https://www.rocketblocks.me/blog/success-metrics-pm-interviews.php" },
        { name: "Interview Query: answering a metric drop question", url: "https://www.interviewquery.com/p/metrics-drop-data-science-interview" },
        { name: "Inflection Point: guide to root cause analysis problems", url: "https://inflectionpointnewsletter.substack.com/p/a-guide-to-root-cause-analysis-problems" }
      ]
    },

    /* ------------------------------------------------------------------ ESTIMATE */
    {
      cat: "estimate",
      title: "How to answer estimation questions",
      summary: "You are asked to estimate a number you cannot look up, such as a market size, usage volume or infrastructure need. It tests structured quantitative reasoning, comfort with assumptions, and sanity-checking, not whether you hit the exact figure.",
      looksLike: [
        "How many Uber rides happen in New York City per day?",
        "Estimate the annual revenue of YouTube Premium in the US.",
        "How much storage does Google Photos need per year?",
        "What is the market size for dog-walking apps in the UK?"
      ],
      evaluates: [
        "Clarifying scope: units, geography, time period and definitions.",
        "Choosing a clear structure (top-down, bottom-up or both) and writing the equation first.",
        "Reasonable, explained assumptions with round numbers.",
        "Clean, auditable arithmetic.",
        "Sanity-checking the result and naming the most sensitive assumption.",
        "Linking the number back to a product decision."
      ],
      framework: {
        name: "Define - Structure - Assume - Calculate - Check - Decide",
        origin: "Common practice (Fermi estimation, adapted for PM interviews)",
        steps: [
          { t: "Define the question", d: "Pin down exactly what is being estimated: which geography, time period, unit (count or revenue) and definitions. Ask why the number matters; it hints at the level of precision needed.", tips: ["Repeat the final question in one sentence before you start."], say: "So we want the number of Uber rides that start in the five boroughs of NYC on an average weekday, including UberX and Uber Pool, but not Uber Eats. Is that right?" },
          { t: "Choose a structure", d: "Decide between top-down (start from population and narrow) and bottom-up (start from units of supply or demand and scale). Write the equation before plugging in numbers.", tips: ["If time allows, plan a second method for cross-checking."], say: "I will go top-down: population x share who use ride-hailing x trips per user per day x Uber's share." },
          { t: "State assumptions", d: "Fill in each variable with a rounded, justified assumption. Use segments if behaviour differs a lot between groups, e.g. residents vs. tourists.", tips: ["Round aggressively (8.3M becomes 8M).", "Anchor unfamiliar numbers to familiar ones."], say: "NYC has about 8 million residents plus roughly 300,000 tourists on a given day. I assume 25% of residents use ride-hailing at all, about twice a week." },
          { t: "Calculate", d: "Work step by step, saying the intermediate results out loud and keeping units visible. Use scientific notation for very large numbers.", tips: ["Write numbers down in a list so the interviewer can follow."], say: "2 million users x 2 trips per week is 4 million trips a week, about 570,000 a day; with Uber at 70% share that is about 400,000 rides." },
          { t: "Sanity check", d: "Compare with a known benchmark, a bottom-up estimate or a common-sense ratio. Identify which assumption moves the answer most.", tips: ["Bottom-up check: number of active drivers x rides per driver per day."], say: "Cross-check: if there are 70,000 active drivers doing 6 rides each, that is about 420,000, which is close." },
          { t: "Decide what it means", d: "Say what the estimate implies for the product or business, and how you would make it more precise if it mattered.", tips: ["Mention which assumption you would validate with data first."], say: "At roughly 400,000 rides a day, even a 1% improvement in matching would be about 4,000 more completed rides daily." }
        ]
      },
      timing: [["Define", "2 min"], ["Structure", "2 min"], ["Assumptions", "5 min"], ["Calculate", "4 min"], ["Sanity check", "3 min"], ["Implication", "2 min"]],
      example: {
        q: "Estimate the annual revenue of YouTube Premium in the US.",
        outline: [
          "Define: US subscribers to YouTube Premium (individual, family, student plans) in one year; revenue at list price before taxes.",
          "Structure: US internet users x YouTube users x share paying for Premium x average monthly price x 12.",
          "Assume ~300M US internet users; ~80% use YouTube monthly = 240M.",
          "Assume ~5% pay for Premium (incl. family members counted as one paying account) = 12M paying accounts.",
          "Average price ~$14/month blending individual, family and student plans.",
          "Calculate: 12M x $14 x 12 = about $2.0B per year.",
          "Sanity check: compare with music streaming penetration in the US (tens of millions of paid subs across all services); 12M for a bundled video + music product seems plausible.",
          "Sensitivity: the paying share drives the answer; 3% vs. 7% gives a $1.2B to $2.8B range.",
          "Implication: a bundle or price change that moves conversion by a point is worth roughly $400M."
        ]
      },
      mistakes: [
        "Starting to multiply numbers before stating the structure.",
        "Using overly precise numbers that make the arithmetic slow and error-prone.",
        "Not explaining why an assumption is reasonable.",
        "Arithmetic errors with zeros; lose track of millions vs. billions.",
        "Skipping the sanity check, or presenting a single number with false precision.",
        "Never connecting the estimate to a decision."
      ],
      tips: [
        "Memorise a few anchors: world population about 8B, US about 335M, UK about 68M, about 2 people per household in rich countries.",
        "Segment when one average would hide big differences (e.g. heavy vs. light users).",
        "Give a range and a point estimate.",
        "Pause and ask, 'Does this feel right?' before moving on.",
        "Keep a running written tally so you can backtrack."
      ],
      alternatives: [
        { name: "Bottom-up (supply side)", d: "Estimate from capacity: number of stores, drivers or servers x throughput. Good for operational questions." },
        { name: "Replacement-cycle model", d: "Installed base divided by replacement period; good for durable goods like phones or laptops." },
        { name: "TAM / SAM / SOM", d: "For market sizing, step from total market to serviceable market to what you can realistically capture." }
      ],
      sources: [
        { name: "PracHub: market sizing questions for PMs", url: "https://prachub.com/resources/market-sizing-interview-questions-for-product-managers-framework-examples-and-estimation-drills" },
        { name: "Airtribe: tips to ace guesstimates in PM interviews", url: "https://airtribe.substack.com/p/tips-to-ace-guesstimates-in-pm-interviews" },
        { name: "CaseCoach: market sizing case interview", url: "https://casecoach.com/b/market-sizing-case-interview/" }
      ]
    },

    /* ------------------------------------------------------------------ STRATEGY */
    {
      cat: "strategy",
      title: "How to answer product strategy questions",
      summary: "You are asked where a company should go next: enter a market, respond to a competitor, invest or divest, or build, buy or partner. It tests business judgement, understanding of competitive dynamics, and whether you can turn analysis into a clear recommendation.",
      looksLike: [
        "Should Netflix launch a live sports offering?",
        "How should Spotify respond if Apple bundles music with every iPhone for free?",
        "Should Amazon build its own payment network?",
        "You are the CEO of Duolingo. What should you do in the next three years?"
      ],
      evaluates: [
        "Understanding the company's mission, strengths, business model and current position.",
        "Analysing the market, customers and competitors with relevant structure.",
        "Generating several strategic options rather than one obvious answer.",
        "Weighing options with explicit criteria: impact, feasibility, risk, fit.",
        "Making a clear recommendation with risks and how to de-risk.",
        "Long-term thinking about moats, network effects and second-order effects."
      ],
      framework: {
        name: "Goal - Situation - Options - Recommendation",
        origin: "Common practice (draws on 3Cs and Porter's five forces)",
        steps: [
          { t: "Clarify the objective", d: "Ask what success means for the company: growth, profit, defence, entering a new segment. Confirm timeframe and constraints.", tips: ["Ask what prompted the question (a competitor move, a slowdown)."], say: "Is Netflix considering sports to grow subscribers, reduce churn, or to build an ad business? And over what horizon?" },
          { t: "Assess the company", d: "Summarise the company's mission, assets, business model and capabilities that matter for this decision.", tips: ["Name specific assets: data, brand, distribution, cash."], say: "Netflix has 250M+ members, a strong recommendation engine and a growing ad tier, but limited live-streaming experience." },
          { t: "Assess customers and market", d: "Who would this serve, what do they need, and how big and growing is the opportunity? Mention trends that matter.", tips: ["Segment customers; strategy often differs per segment."], say: "Sports fans are high-intent, watch live, and today pay for cable or several services; ad rates for live sports are among the highest." },
          { t: "Assess competition", d: "Who else serves this need, how strong are they, and what would they do in response? Think about substitutes and incumbents' advantages.", tips: ["Consider bargaining power of rights holders and switching costs."], say: "Rights are controlled by leagues that auction them; Amazon, YouTube, ESPN and Apple are all bidding, which pushes prices up." },
          { t: "Generate options", d: "Lay out 3 or 4 distinct paths, including doing nothing or a partial move. Strategy is choosing between real alternatives.", tips: ["Include build, buy and partner options where relevant."], say: "Options: no sports; selective event rights; a full league package; or partner with an existing sports streamer." },
          { t: "Evaluate and recommend", d: "Score options on impact, cost, risk and strategic fit, then make a clear call. Explain why the alternatives lost.", tips: ["Commit to one answer; hedging sounds weak."], say: "I recommend selective live events: they test demand and ad pricing without a multi-billion rights commitment." },
          { t: "Risks, metrics and next steps", d: "Name the biggest risks, how to mitigate them, how you would measure success and what would make you change course.", tips: ["Give a phased plan: test, learn, scale."], say: "Risk is streaming quality at peak load. I would track sign-ups and churn around events and ad CPMs; if retention lift is weak after a year, I would not bid for leagues." }
        ]
      },
      timing: [["Objective", "3 min"], ["Company", "4 min"], ["Customers and market", "5 min"], ["Competition", "5 min"], ["Options", "5 min"], ["Recommendation and risks", "6 min"]],
      example: {
        q: "Should Spotify launch audiobooks?",
        outline: [
          "Objective: grow revenue per user and reduce churn without hurting margins; 3-year horizon.",
          "Company: large global user base, strong personalisation, existing podcast investment; margins squeezed by music label royalties.",
          "Customers: book listeners who already use Audible; casual listeners who might try audiobooks if bundled.",
          "Market: audiobooks growing fast; dominated by Audible with a credit-based subscription.",
          "Competition: Audible's catalogue and loyalty; Apple Books; publishers control pricing.",
          "Options: a la carte purchases; hours of listening included in Premium; separate audiobook subscription; do nothing.",
          "Recommend: include a limited number of hours in Premium, with top-ups for heavy listeners. It differentiates Premium, uses the existing app and suits casual listeners.",
          "Risks: publisher cost per hour and cannibalised listening time. Mitigate with usage caps and revenue-share deals.",
          "Metrics: Premium churn, share of Premium users who start an audiobook, and gross margin per user."
        ]
      },
      mistakes: [
        "Diving into features instead of business strategy.",
        "Analysing endlessly without making a recommendation.",
        "Ignoring how competitors and partners would respond.",
        "Not tying the strategy to the company's strengths.",
        "Forgetting the economics: cost, margin, investment size."
      ],
      tips: [
        "Read company earnings calls and shareholder letters for the companies you interview with.",
        "Think in moats: network effects, scale, switching costs, brand, data.",
        "Consider second-order effects, e.g. a move that wins users but angers partners.",
        "Use a phased plan to turn a risky bet into a series of tests.",
        "State what evidence would change your mind."
      ],
      alternatives: [
        { name: "3Cs (Company, Customers, Competitors)", d: "Quick structure for market-entry questions." },
        { name: "Porter's five forces", d: "Use when the question is about industry attractiveness or profitability." },
        { name: "SWOT", d: "Simple strengths, weaknesses, opportunities and threats summary; fine as a sanity check, weak as a full answer." },
        { name: "Build / buy / partner", d: "Use when the question is how to acquire a capability quickly." }
      ],
      sources: [
        { name: "Exponent: introduction to product strategy questions", url: "https://www.tryexponent.com/courses/pm/product-strategy/intro-product-strategy" },
        { name: "Aakash Gupta: the product sense interview", url: "https://www.news.aakashg.com/i/135705731/history-of-the-product-sense-interview" },
        { name: "Aced: AI product manager interview questions (strategy section)", url: "https://www.aced.io/blog/ai-product-manager-interview-questions" }
      ]
    },

    /* ------------------------------------------------------------------ GTM */
    {
      cat: "gtm",
      title: "How to answer go-to-market and pricing questions",
      summary: "You are asked how to launch a product to market or how to price it. It tests whether you can pick the right first customers, channels and message, and connect pricing to the value customers get and the company's economics.",
      looksLike: [
        "How would you launch a new Slack feature for small businesses?",
        "How should we price an AI writing assistant?",
        "Should Amazon offer a cheaper 'Prime Lite' with fewer perks?",
        "You built a smart water bottle. How would you take it to market?"
      ],
      evaluates: [
        "Choosing a focused target segment (beachhead) and explaining why.",
        "A clear value proposition and positioning against alternatives.",
        "Sensible channels and launch sequencing for that segment.",
        "Pricing based on value, willingness to pay and unit economics.",
        "Metrics for launch success and a plan to iterate."
      ],
      framework: {
        name: "Segment - Value - Channel - Price - Launch",
        origin: "Common practice",
        steps: [
          { t: "Clarify product and goal", d: "Understand what the product does, its stage and the goal of the launch: revenue, adoption, or learning. Ask about constraints like budget and timeline.", tips: ["A launch for learning looks very different from one for revenue."], say: "Is this a brand-new startup product, or part of an existing company with distribution? And is the goal fast adoption or proving willingness to pay?" },
          { t: "Choose the beachhead segment", d: "List segments and pick the first one to win: high pain, reachable, willing to pay, and likely to spread to others.", tips: ["Score segments on pain, ability to pay, reachability, word-of-mouth."], say: "I would start with marathon runners: they track hydration closely, already buy gadgets, and talk to each other in clubs." },
          { t: "Define the value proposition and positioning", d: "Say what problem you solve, for whom, and why you are better than the alternative they use today. Keep it to one sentence.", tips: ["Compare to the real alternative, often 'doing nothing' or a spreadsheet."], say: "For serious runners who struggle to hydrate right, our bottle tracks intake and nudges you before you are dehydrated, unlike a regular bottle." },
          { t: "Pick channels and sequencing", d: "Choose 2 or 3 channels where the segment already is: partnerships, communities, sales, app store, existing product surfaces. Plan a beta, a launch moment and a scale phase.", tips: ["For B2B, separate the buyer from the user.", "Existing companies should use their own distribution first."], say: "Beta with five running clubs, then launch at a major marathon expo, then scale through running stores and Strava integration." },
          { t: "Set the pricing model", d: "Pick the value metric (what you charge for), the model (one-time, subscription, usage, freemium) and price level based on willingness to pay, competitor prices and costs. Consider tiers for different segments.", tips: ["Price on value delivered, check against cost to ensure margin.", "Use tiers or fences to serve different willingness to pay."], say: "One-time hardware price around $79 with an optional $4 per month coaching subscription; the subscription carries the margin." },
          { t: "Measure and iterate", d: "Define launch success metrics: activation, conversion to paid, retention, CAC vs. LTV. Say what you would change if results disappoint.", tips: ["Name a kill or pivot criterion."], say: "Success is 30% of buyers active after 60 days and 15% attaching the subscription. Below that, I would revisit the segment or the coaching value." }
        ]
      },
      timing: [["Clarify", "3 min"], ["Segment", "6 min"], ["Value proposition", "4 min"], ["Channels and sequencing", "7 min"], ["Pricing", "7 min"], ["Metrics", "3 min"]],
      example: {
        q: "How should we price an AI meeting-notes assistant for teams?",
        outline: [
          "Clarify: B2B SaaS, integrates with Zoom and Google Meet; goal is revenue growth with strong retention.",
          "Segments: individual consultants, small teams, mid-size companies, enterprises. Beachhead: 10 to 200 person sales and customer-success teams who live in calls.",
          "Value: saves ~30 minutes per day on notes and CRM updates; strongest for customer-facing roles.",
          "Value metric options: per seat, per recorded hour, per meeting. Choose per seat with fair-use hours, since value grows with people who use it.",
          "Model: freemium with limited monthly meetings for individuals (PLG), paid team tier, enterprise tier with security and admin.",
          "Price level: anchor on time saved (30 min/day is worth far more than $20/month), check vs. competitors at $10 to $30 per seat.",
          "Costs: LLM and transcription cost per hour must keep gross margin above ~70%; set fair-use limits accordingly.",
          "Fences: enterprise features (SSO, data retention controls) only in top tier.",
          "Metrics: free-to-paid conversion, net revenue retention, gross margin per seat; test price points with new cohorts."
        ]
      },
      mistakes: [
        "Targeting everyone at launch instead of a beachhead.",
        "Listing every channel without matching them to the segment.",
        "Pricing on cost-plus only, ignoring the value delivered.",
        "Forgetting variable costs (e.g. AI compute) that can destroy margins.",
        "No success metrics or plan to iterate after launch."
      ],
      tips: [
        "Separate the buyer and the user in B2B; they need different messages.",
        "Choose a value metric that grows with the customer's success.",
        "Use good-better-best tiers to capture different willingness to pay.",
        "Mention a pricing test (e.g. Van Westendorp survey or cohort price tests).",
        "Tie the launch to a moment: an event, season, or existing product release."
      ],
      alternatives: [
        { name: "4Ps (Product, Price, Place, Promotion)", d: "Classic marketing mix; a quick checklist for launch plans." },
        { name: "Crossing the Chasm / beachhead", d: "Win one niche completely before expanding to adjacent segments." },
        { name: "Product-led growth", d: "Let users adopt for free and convert as they get value; best for low-touch software." }
      ],
      sources: [
        { name: "Exponent: product strategy questions (pricing and GTM examples)", url: "https://www.tryexponent.com/courses/pm/product-strategy/intro-product-strategy" },
        { name: "Aakash Gupta: product sense case types incl. pricing", url: "https://www.news.aakashg.com/i/135705731/history-of-the-product-sense-interview" },
        { name: "Lenny's Newsletter: knowing if you have product-market fit", url: "https://www.lennysnewsletter.com/p/how-to-know-if-youve-got-productmarket" }
      ]
    },

    /* ------------------------------------------------------------------ TECHNICAL */
    {
      cat: "technical",
      title: "How to answer technical questions",
      summary: "You are asked to explain how a system works, sketch a high-level design, or discuss a technical trade-off. For PMs it tests whether you can work credibly with engineers: understanding components, constraints and trade-offs at a product level, not writing code.",
      looksLike: [
        "How does Google Search return results so quickly?",
        "Design the backend for a URL shortener at a high level.",
        "Explain what an API is to a non-technical stakeholder.",
        "Engineering says a feature will take 6 months. How do you respond?"
      ],
      evaluates: [
        "Clarifying requirements and scale before proposing a design.",
        "Knowing the main building blocks: clients, APIs, servers, databases, caches, queues.",
        "Reasoning about trade-offs like latency, cost, consistency and reliability.",
        "Explaining technical concepts simply and accurately.",
        "Connecting technical choices back to user experience and business goals."
      ],
      framework: {
        name: "Requirements - Components - Flow - Trade-offs",
        origin: "Common practice (simplified system design for PMs)",
        steps: [
          { t: "Clarify the use case and scale", d: "Ask what the system must do, for how many users, and what matters most: speed, reliability, cost or freshness. Restate your understanding.", tips: ["Separate functional requirements (what it does) from non-functional (how well)."], say: "So users paste a long link and get a short one; we expect ~100M new links a month and many more clicks than creations. Fast redirects matter most." },
          { t: "Define the main user flows", d: "Describe the key actions from the user's point of view, such as create and read. This anchors the design in the product.", tips: [], say: "Two flows: create a short link, and click a short link to be redirected." },
          { t: "Sketch the components", d: "Name the building blocks: client, API, application servers, database, cache, and any queues or third-party services. Explain what each does in one sentence.", tips: ["Name a component and its job; skip internals unless asked."], say: "The client calls a create API; a server generates a unique short code and stores it in a key-value database; a cache keeps the most popular links in memory." },
          { t: "Walk through the data flow", d: "Trace a request end to end for each flow. Mention where data is stored and read.", tips: [], say: "On click, the server checks the cache; on a miss it reads the database, then returns a redirect and logs the click asynchronously for analytics." },
          { t: "Discuss trade-offs and scaling", d: "Cover the key trade-offs: caching vs. freshness, SQL vs. NoSQL, sync vs. async, build vs. buy. Mention reliability (replication), security and abuse.", tips: ["Link each trade-off to the user experience."], say: "Analytics can be eventually consistent, so I log clicks through a queue; that keeps redirects fast even during traffic spikes." },
          { t: "Tie back to product", d: "Summarise the design and note what you would monitor: latency, error rate, cost. Mention what you would need from engineering to decide next steps.", tips: [], say: "I would watch p95 redirect latency and spam link rates; those are the two things that would hurt users most." }
        ]
      },
      timing: [["Requirements and scale", "5 min"], ["User flows", "3 min"], ["Components", "7 min"], ["Data flow", "5 min"], ["Trade-offs", "7 min"], ["Summary", "3 min"]],
      example: {
        q: "At a high level, how would you design a photo-sharing feed like Instagram?",
        outline: [
          "Requirements: upload photos, follow people, see a feed of followed accounts; hundreds of millions of users; feed must load fast.",
          "Flows: upload photo; open feed; like and comment.",
          "Components: mobile client, API gateway, upload service, object storage for images, CDN for delivery, metadata database, feed service, cache.",
          "Upload flow: client uploads to object storage; metadata stored in database; event put on a queue to update followers' feeds.",
          "Feed flow: precompute feeds for most users (fan-out on write); for celebrity accounts, merge posts at read time to avoid huge writes.",
          "Images served from a CDN close to the user for low latency.",
          "Trade-offs: precomputed feeds are fast but use storage; ranking adds relevance but more compute.",
          "Reliability: replicate databases, degrade gracefully (show cached feed if ranking fails).",
          "Product tie-back: monitor feed load time and upload success rate; both directly affect engagement."
        ]
      },
      mistakes: [
        "Diving into technical detail without understanding the requirements.",
        "Using jargon you cannot explain if the interviewer probes.",
        "Ignoring scale, reliability or cost entirely.",
        "Pretending to know something rather than reasoning from first principles.",
        "Forgetting to connect the design back to users."
      ],
      tips: [
        "Learn the core vocabulary: API, client/server, database (SQL vs. NoSQL), cache, CDN, queue, load balancer, latency.",
        "Draw boxes and arrows, even verbally: 'the client talks to...'.",
        "Practice explaining a concept to a 12-year-old in 60 seconds.",
        "When asked about estimates from engineers, explore scope and trade-offs, not pressure.",
        "Ask your recruiter whether technical questions are part of the loop."
      ],
      alternatives: [
        { name: "Explain-like-I'm-five", d: "For 'explain X' questions: analogy first, then the real mechanism, then why it matters." },
        { name: "Trade-off triangle (scope, time, quality)", d: "For questions about engineering estimates and delivery pressure." }
      ],
      sources: [
        { name: "IGotAnOffer: system design questions for PMs", url: "https://igotanoffer.com/en/advice/system-design-questions-product-managers" },
        { name: "Exponent: how to answer technical product questions", url: "https://www.tryexponent.com/courses/pm-technical/how-to-answer-technical-product-questions" }
      ]
    },

    /* ------------------------------------------------------------------ BEHAVIORAL */
    {
      cat: "behavioral",
      title: "How to answer behavioural questions",
      summary: "You are asked to describe real situations from your past: conflicts, failures, leadership, influence without authority. It tests how you actually behave at work, using specific stories as evidence for traits like ownership, judgement and collaboration.",
      looksLike: [
        "Tell me about a time you disagreed with an engineer or designer.",
        "Describe a product you launched that failed. What did you learn?",
        "Tell me about a time you had to make a decision without enough data.",
        "Give an example of influencing a team you did not manage."
      ],
      evaluates: [
        "Specific, real examples rather than general statements.",
        "Your personal actions and judgement, not just the team's.",
        "Measurable results and honest reflection on what you learned.",
        "Values the company cares about (e.g. Amazon Leadership Principles).",
        "Self-awareness: owning mistakes without blaming others.",
        "Concise storytelling under time pressure."
      ],
      framework: {
        name: "STAR (plus Learning)",
        origin: "Common practice (STAR method used by career services and recruiters)",
        steps: [
          { t: "Situation", d: "Set the scene in two or three sentences: company, team, product and what was at stake. Give only the context needed to understand the story.", tips: ["Keep it under 20% of your answer."], say: "At my last company I was the PM for the checkout team at an e-commerce startup with about 2M monthly shoppers." },
          { t: "Task", d: "State your specific responsibility or the goal you had to reach. Make it clear why it was hard.", tips: ["Make your role explicit."], say: "I owned reducing checkout abandonment, which was 70%, and had one quarter to show progress." },
          { t: "Action", d: "Describe what you did, step by step, using 'I'. Include how you made decisions, handled disagreement and brought people along. This is the core of the answer.", tips: ["Spend about half your time here.", "Name the trade-off you made and why."], say: "I analysed the funnel and found most drop-off at the shipping cost reveal. The designer wanted a full redesign; I proposed testing upfront shipping estimates first, and we agreed to run both as experiments." },
          { t: "Result", d: "Share the outcome with numbers if possible, and the impact on users or the business. Be honest if it was mixed.", tips: ["Quantify: %, $, time saved, users affected."], say: "Showing shipping costs on the product page cut abandonment by 8 points and added about $1.2M in annual revenue." },
          { t: "Learning", d: "Close with what you learned and what you do differently now. This shows growth and self-awareness.", tips: ["Especially important for failure stories."], say: "I learned to test the cheapest hypothesis first before committing to a big redesign; I now do that by default." }
        ]
      },
      timing: [["Situation", "20-30 sec"], ["Task", "15-20 sec"], ["Action", "60-90 sec"], ["Result", "20-30 sec"], ["Learning", "15-20 sec"], ["Follow-up questions", "1-2 min"]],
      example: {
        q: "Tell me about a time you disagreed with your engineering lead.",
        outline: [
          "Situation: PM on a B2B analytics product; a large customer requested a custom export feature before renewal.",
          "Task: I needed to decide whether to build it within the quarter without derailing the roadmap.",
          "Conflict: engineering lead wanted to refuse; it would add tech debt and only help one customer.",
          "Action 1: I met the lead one-on-one to understand the concerns in detail, rather than debating in the team meeting.",
          "Action 2: I checked usage data and support tickets and found 15 other customers had asked for similar exports.",
          "Action 3: we agreed on a generic export API instead of a custom one, and I cut a lower-priority feature to make room.",
          "Result: customer renewed (about $400K ARR), and the API was adopted by 30% of accounts within two months.",
          "Learning: disagreements become easier when we look at the same data and reframe the solution together."
        ]
      },
      mistakes: [
        "Saying 'we' throughout so your own role is unclear.",
        "Long situation setup and rushed actions and results.",
        "Choosing a story with no real conflict or stakes.",
        "Blaming others or not owning your part in a failure.",
        "Giving hypothetical answers ('I would...') instead of a real story.",
        "No numbers or concrete outcomes."
      ],
      tips: [
        "Prepare 6 to 8 stories that each cover several themes (conflict, failure, leadership, ambiguity, impact).",
        "Map your stories to the company's values; for Amazon, to its Leadership Principles.",
        "Rehearse out loud and time yourself to about 2 minutes per story.",
        "Expect follow-ups: what would you do differently? what did the other person think?",
        "Use recent stories (last 2 to 3 years) where possible."
      ],
      alternatives: [
        { name: "CAR (Context, Action, Result)", d: "A shorter version of STAR for quick answers." },
        { name: "SOAR (Situation, Obstacle, Action, Result)", d: "Emphasises the obstacle; good for problem-solving stories." }
      ],
      sources: [
        { name: "Dartmouth Guarini: using the STAR method", url: "https://guarinigrad.dartmouth.edu/resources/using-the-star-method-for-your-next-behavioral-interview/" },
        { name: "Amazon Leadership Principles", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles" },
        { name: "Aced: AI PM interview questions (behavioural section)", url: "https://www.aced.io/blog/ai-product-manager-interview-questions" }
      ]
    },

    /* ------------------------------------------------------------------ AI */
    {
      cat: "ai",
      title: "How to answer AI product questions",
      summary: "You are asked to design, improve, evaluate or launch a product powered by machine learning or large language models. It tests normal product sense plus AI fluency: knowing what models can and cannot do, designing for wrong outputs, and measuring quality with evals.",
      looksLike: [
        "Design an AI assistant for doctors writing patient notes.",
        "Users say our chatbot is confident but wrong. How would you fix it?",
        "How would you measure the quality of an AI search summary feature?",
        "Should we use RAG or fine-tuning for our customer support bot?"
      ],
      evaluates: [
        "Whether AI is the right tool for the problem at all.",
        "Designing for imperfect outputs: confidence, fallbacks, human review.",
        "Defining quality with evals, not just usage metrics.",
        "Understanding key concepts: LLMs, RAG, fine-tuning, latency and cost per query.",
        "Responsible AI: safety, privacy, bias and user trust.",
        "Usual product sense: users, needs, prioritisation and metrics."
      ],
      framework: {
        name: "User - Task - Model - Quality - Safety - Launch",
        origin: "Common practice",
        steps: [
          { t: "Clarify user and problem", d: "Define who the user is and what job they need done, as in any design question. Then ask whether AI is genuinely needed or a simpler solution would work.", tips: ["Say why AI adds value here: scale, personalisation, unstructured data."], say: "Doctors spend about two hours a day on notes. AI helps because the input is unstructured conversation and the output is a structured note." },
          { t: "Define the AI task and failure cost", d: "State precisely what the model does: classify, generate, summarise, retrieve, take actions. Ask how costly errors are; that decides how much autonomy to give the model.", tips: ["High-stakes domains need a human in the loop."], say: "The model drafts a structured note from the visit transcript; the doctor reviews and signs. A wrong medication dose is a severe error, so the doctor must approve every note." },
          { t: "Choose the technical approach", d: "Decide at a high level between prompting an off-the-shelf model, retrieval-augmented generation (RAG) for grounding in company data, or fine-tuning for style or narrow tasks. Mention latency and cost per query.", tips: ["Pick one and say what would change your mind."], say: "I would start with a strong general model plus RAG over the patient's record, so notes reflect real history. Fine-tuning can come later for hospital-specific formats." },
          { t: "Design the experience for imperfect outputs", d: "Show how the user can see sources, edit easily, give feedback, and understand uncertainty. Plan fallbacks when the model is unsure.", tips: ["Highlight uncertain parts rather than hiding them."], say: "Each statement in the note links to the transcript timestamp, and anything the model is unsure about is highlighted for review." },
          { t: "Define quality and evals", d: "Create an evaluation set of real examples with expected outputs, and measure accuracy, hallucination rate and helpfulness before launch. Combine automated checks, expert review and online metrics.", tips: ["Run evals before and after every model or prompt change."], say: "We would build 500 annotated visits and measure factual error rate, omissions and edit distance from the doctor's final note." },
          { t: "Safety, privacy and trust", d: "Cover data privacy, regulatory constraints, bias and misuse. Explain safeguards and monitoring.", tips: [], say: "Patient data stays in a compliant environment, is not used to train shared models, and we monitor errors by patient group for bias." },
          { t: "Launch and measure", d: "Plan a staged rollout and metrics: adoption, time saved, quality, user trust and cost per use. Define criteria to expand.", tips: ["Pair usage metrics with correctness metrics."], say: "Pilot with 50 doctors; success is 40% less time on notes with no rise in factual errors. Then expand by specialty." }
        ]
      },
      timing: [["User and problem", "5 min"], ["AI task and failure cost", "4 min"], ["Technical approach", "5 min"], ["UX for imperfect outputs", "6 min"], ["Evals and quality", "6 min"], ["Safety and launch", "4 min"]],
      example: {
        q: "Users say our customer-support chatbot is confident but wrong. How would you fix it?",
        outline: [
          "Clarify: how often, which topics, how measured (thumbs down, escalations, complaints)? What is the business impact?",
          "Diagnose: sample bad conversations; categorise errors (outdated info, made-up policies, misunderstood question).",
          "Root causes: no grounding in current help docs; prompt encourages answering everything; stale knowledge base.",
          "Fix 1: add RAG over the up-to-date help centre and require answers to cite a source.",
          "Fix 2: confidence threshold; if retrieval finds nothing relevant, say so and hand off to a human agent.",
          "Fix 3: clean and version the knowledge base; assign owners for policy pages.",
          "Evals: build a test set of 300 real questions with correct answers; track accuracy and hallucination rate on every change.",
          "Online metrics: resolution rate without escalation, CSAT, and wrong-answer reports; guardrail: handoff volume and cost.",
          "Roll out to 10% of traffic, compare against the current bot, then expand."
        ]
      },
      mistakes: [
        "Assuming the model is always right, with no plan for errors.",
        "Using AI where a simple rule or search would work better.",
        "Measuring only engagement, not correctness or quality.",
        "Hand-waving technical choices without trade-offs (cost, latency, privacy).",
        "Ignoring safety, bias and regulatory issues in sensitive domains."
      ],
      tips: [
        "Learn the vocabulary: tokens, context window, temperature, RAG, fine-tuning, evals, agents.",
        "Always ask 'what is the cost of a wrong answer?' early.",
        "Design the human-in-the-loop moment explicitly.",
        "Mention cost per query; AI features can have real marginal costs.",
        "Show a feedback loop: user corrections improve evals and the product."
      ],
      alternatives: [
        { name: "CIRCLES with an AI layer", d: "Run a normal design answer, then add a section on model approach, evals and safety." },
        { name: "Hallucination diagnosis tree", d: "Separate causes from training data, retrieval, prompt and decoding; use for 'confident but wrong' questions." }
      ],
      sources: [
        { name: "Aced (Exponent): AI product manager interview questions", url: "https://www.aced.io/blog/ai-product-manager-interview-questions" },
        { name: "Exponent: evals lesson (analytical course)", url: "https://www.tryexponent.com/courses/analytical/evals" },
        { name: "Northeastern Careers: AI PM interview questions guide", url: "https://careers.northeastern.edu/blog/2026/06/11/ai-product-manager-interview-questions-2026-guide/" }
      ]
    }
  ],

  /* =================================================================== CONCEPTS */
  concepts: [
    { term: "DAU / MAU", cat: "metrics", def: "Daily and monthly active users: unique users who perform a defined meaningful action in a day or month.", example: "A chat app might count a user as active if they send or read at least one message." },
    { term: "Stickiness (DAU/MAU ratio)", cat: "metrics", def: "The share of monthly users who are active on a given day; a measure of how habitual a product is.", example: "DAU of 50M and MAU of 100M gives 50% stickiness, typical of a strong social app." },
    { term: "Retention cohort", cat: "metrics", def: "A group of users who started in the same period, tracked over time to see what share keep using the product.", example: "Of users who signed up in January, 40% are active in week 4 and 30% in week 12." },
    { term: "Churn", cat: "metrics", def: "The rate at which customers or revenue are lost over a period; the inverse of retention.", example: "A subscription service losing 5% of subscribers each month has 5% monthly churn." },
    { term: "Activation", cat: "metrics", def: "The moment a new user first experiences the product's core value; often defined by a specific action.", example: "Slack has described a team sending a set number of messages as a sign of activation." },
    { term: "AARRR (pirate metrics)", cat: "metrics", def: "Dave McClure's funnel of Acquisition, Activation, Retention, Referral and Revenue for analysing growth.", example: "A fitness app tracks installs, first workout, week-4 return, invites sent and subscriptions." },
    { term: "HEART framework", cat: "metrics", def: "Google's user-centred metrics categories: Happiness, Engagement, Adoption, Retention and Task success, used with a Goals-Signals-Metrics process.", example: "For Gmail search: task success = share of searches followed by opening an email." },
    { term: "North Star metric", cat: "metrics", def: "One metric that best captures the value customers get from the product and predicts long-term business success.", example: "Airbnb: nights booked. Spotify: time spent listening." },
    { term: "Guardrail metric", cat: "metrics", def: "A metric that must not get worse when you optimise something else; used to catch harm in experiments.", example: "When testing more ads in a feed, guardrail on session length and app uninstalls." },
    { term: "Counter-metric", cat: "metrics", def: "A metric paired with a goal metric to detect gaming or unintended effects.", example: "If optimising support tickets closed per hour, counter with reopen rate." },
    { term: "Leading vs. lagging indicators", cat: "metrics", def: "Leading indicators move early and predict outcomes; lagging indicators confirm results after the fact.", example: "Week-1 activation is leading; annual revenue is lagging." },
    { term: "Funnel conversion", cat: "metrics", def: "The share of users who move from one step of a process to the next, used to find drop-off points.", example: "1,000 cart views, 400 checkouts started, 300 purchases: 30% end-to-end conversion." },
    { term: "A/B test", cat: "metrics", def: "A controlled experiment that randomly splits users between versions to measure the causal effect of a change.", example: "Half of users see a green buy button, half see blue; compare purchase rates." },
    { term: "Statistical significance", cat: "metrics", def: "An indication that an observed difference would be unlikely if the change truly had no effect; commonly judged at a 95% level.", example: "A 2% lift with p = 0.01 is unlikely to be pure chance." },
    { term: "p-value", cat: "metrics", def: "The probability of seeing a result at least this extreme if there were no real effect; not the probability that the change works.", example: "p = 0.03 means a 3% chance of such a difference arising from random noise alone." },
    { term: "Statistical power and sample size", cat: "metrics", def: "Power is the chance a test detects a real effect of a given size; sample size must be set in advance to reach adequate power.", example: "Detecting a 1% lift needs far more users than detecting a 10% lift." },
    { term: "Peeking problem", cat: "metrics", def: "Checking a test repeatedly and stopping when it looks significant inflates false positives; fix the sample size or use sequential methods.", example: "Stopping a test the first day it hits p < 0.05 can declare false winners often." },
    { term: "Novelty effect", cat: "metrics", def: "A temporary change in behaviour because something is new, which fades over time.", example: "A redesigned home page gets extra clicks for a week, then returns to baseline." },
    { term: "Network effects", cat: "strategy", def: "When a product becomes more valuable to each user as more people use it.", example: "WhatsApp is more useful the more of your contacts are on it." },
    { term: "Cannibalisation", cat: "strategy", def: "When a new product or feature takes usage or revenue from an existing one of the same company.", example: "A cheaper subscription tier pulling customers away from the premium tier." },
    { term: "Moat", cat: "strategy", def: "A durable competitive advantage that protects a business from competitors.", example: "Network effects, switching costs, brand, scale economies or proprietary data." },
    { term: "Flywheel", cat: "strategy", def: "A self-reinforcing loop where each part of the business drives the next, accelerating growth.", example: "Amazon: more sellers, more selection, more customers, more sellers." },
    { term: "Build / buy / partner", cat: "strategy", def: "The decision of whether to develop a capability in-house, acquire a company, or work with a partner.", example: "A bank partnering with a fintech for instant payments rather than building them." },
    { term: "Opportunity cost", cat: "strategy", def: "The value of the best alternative you give up by choosing one option.", example: "Spending a quarter on a redesign means not shipping the integration customers asked for." },
    { term: "Product-market fit", cat: "strategy", def: "The point where a product satisfies a strong market demand, shown by retention, organic growth and users who would be very disappointed to lose it.", example: "The Sean Ellis test: over 40% of users saying they would be very disappointed without the product." },
    { term: "MVP (minimum viable product)", cat: "design", def: "The smallest version of a product that lets you test your riskiest assumption with real users.", example: "A landing page with a sign-up button to test demand before building the product." },
    { term: "Jobs-to-be-done", cat: "design", def: "A lens that defines user needs as the progress people are trying to make in a situation, rather than by demographics.", example: "People 'hire' a milkshake to make a long commute less boring." },
    { term: "Personas and segmentation", cat: "design", def: "Grouping users by shared needs or behaviours so you can design for a specific group.", example: "Segmenting a travel app's users into business travellers, families and backpackers." },
    { term: "RICE", cat: "improve", def: "A prioritisation score: Reach x Impact x Confidence divided by Effort, popularised by Intercom.", example: "Reach 2,000 users, impact 2, confidence 80%, effort 4 person-months gives 800." },
    { term: "ICE", cat: "improve", def: "A quick prioritisation score from Impact, Confidence and Ease, each rated on a simple scale.", example: "Growth teams score experiment ideas 1 to 10 on each and sort by total." },
    { term: "Kano model", cat: "improve", def: "Classifies features by their effect on satisfaction: basic expectations, performance features and delighters.", example: "For a hotel: clean sheets are basic, room size is performance, a free upgrade is a delighter." },
    { term: "MoSCoW", cat: "improve", def: "A prioritisation method sorting requirements into Must have, Should have, Could have and Won't have.", example: "For a launch: login is a Must, dark mode is a Could." },
    { term: "TAM / SAM / SOM", cat: "estimate", def: "Total addressable market, serviceable available market, and serviceable obtainable market: from the whole market down to what you can realistically capture.", example: "TAM: all global coffee spend; SAM: specialty coffee in your countries; SOM: your realistic 5-year share." },
    { term: "Top-down vs. bottom-up sizing", cat: "estimate", def: "Top-down starts from a large population and narrows; bottom-up builds up from units such as customers, stores or transactions.", example: "Top-down: US population x % who own dogs. Bottom-up: number of vet clinics x patients each." },
    { term: "Fermi estimation", cat: "estimate", def: "Breaking an unknown quantity into factors you can reasonably guess, then multiplying them out.", example: "Piano tuners in a city = households x % with pianos x tunings per year / tunings per tuner." },
    { term: "LTV (customer lifetime value)", cat: "gtm", def: "The total gross profit expected from a customer over their relationship with the company.", example: "$20 per month x 70% margin x 24-month average lifetime = $336." },
    { term: "CAC (customer acquisition cost)", cat: "gtm", def: "The average cost of sales and marketing to acquire one new customer.", example: "Spending $100K on ads to win 1,000 customers gives a $100 CAC." },
    { term: "Payback period", cat: "gtm", def: "How long it takes for the gross profit from a customer to repay the cost of acquiring them.", example: "$100 CAC and $14 monthly gross profit gives about a 7-month payback." },
    { term: "Contribution margin", cat: "gtm", def: "Revenue minus variable costs per unit or order; what each sale contributes to fixed costs and profit.", example: "A $30 delivery order with $24 of food, driver and payment costs has $6 contribution margin." },
    { term: "Gross margin", cat: "gtm", def: "Revenue minus cost of goods sold, divided by revenue; software is often 70 to 80%, hardware much lower.", example: "A SaaS company with $10M revenue and $2M hosting and support costs has 80% gross margin." },
    { term: "Take rate", cat: "gtm", def: "The share of transaction value a marketplace keeps as revenue.", example: "A marketplace that keeps $15 of every $100 booking has a 15% take rate." },
    { term: "Freemium and product-led growth (PLG)", cat: "gtm", def: "Offering a useful free tier so users adopt the product themselves and upgrade as they get more value.", example: "Dropbox: free storage up to a limit, paid plans for more space and team features." },
    { term: "Value metric", cat: "gtm", def: "The unit you charge for, ideally one that grows as the customer gets more value.", example: "Per seat for collaboration tools, per API call for developer platforms." },
    { term: "Price discrimination and fencing", cat: "gtm", def: "Charging different prices to segments with different willingness to pay, using 'fences' (conditions) to keep segments apart.", example: "Student discounts with ID verification; cheaper airline fares requiring a Saturday-night stay." },
    { term: "Beachhead market", cat: "gtm", def: "A narrow first segment a new product targets to win decisively before expanding.", example: "Facebook started with Harvard students before opening to other colleges." },
    { term: "API", cat: "technical", def: "An application programming interface: a defined way for software systems to request data or actions from each other.", example: "A travel app calls an airline's API to get live flight prices." },
    { term: "Latency", cat: "technical", def: "The delay between a request and its response; often reported at percentiles such as p95.", example: "A search page with p95 latency of 300 ms responds within 0.3 s for 95% of requests." },
    { term: "Caching", cat: "technical", def: "Storing frequently used data closer to where it is needed so it can be served faster, at the risk of being stale.", example: "A news site caches the home page for 60 seconds instead of rebuilding it on every visit." },
    { term: "Technical debt", cat: "technical", def: "The future cost created by taking shortcuts in code or architecture to ship faster.", example: "Hard-coding prices to hit a launch date, which later blocks running pricing experiments." },
    { term: "STAR method", cat: "behavioral", def: "A structure for behavioural answers: Situation, Task, Action, Result, often followed by what you learned.", example: "Describing how you reduced checkout drop-off, with the numbers before and after." },
    { term: "Amazon Leadership Principles", cat: "behavioral", def: "Amazon's set of 16 principles, such as Customer Obsession, Ownership and Dive Deep, used to structure behavioural interviews.", example: "A 'Have Backbone; Disagree and Commit' question asks for a time you challenged a decision and then supported it." },
    { term: "Influence without authority", cat: "behavioral", def: "Getting people you do not manage to act, through data, shared goals and relationships.", example: "Persuading a platform team to prioritise your API request by showing its impact on their own metrics." },
    { term: "LLM (large language model)", cat: "ai", def: "A model trained on large amounts of text to predict the next token, which lets it generate and transform language.", example: "Models like GPT, Claude and Gemini powering chat assistants and writing tools." },
    { term: "Hallucination", cat: "ai", def: "When an AI model produces confident output that is false or unsupported by its sources.", example: "A chatbot inventing a refund policy that the company does not have." },
    { term: "Evals", cat: "ai", def: "Systematic tests of model quality on a fixed set of examples, using automated checks, human review or model-based grading.", example: "Running 500 support questions with known answers after every prompt change to track accuracy." },
    { term: "RAG (retrieval-augmented generation)", cat: "ai", def: "Retrieving relevant documents at query time and giving them to the model so its answer is grounded in current, specific data.", example: "A support bot that searches the help centre and answers with citations." },
    { term: "Fine-tuning", cat: "ai", def: "Further training a pre-trained model on specific examples to change its behaviour, style or performance on a narrow task.", example: "Fine-tuning a model on thousands of past legal summaries to match a firm's format." },
    { term: "Precision and recall", cat: "ai", def: "Precision is the share of predicted positives that are correct; recall is the share of actual positives that are found.", example: "A spam filter with high precision rarely flags real email; high recall catches most spam." },
    { term: "Human-in-the-loop", cat: "ai", def: "A design where people review, correct or approve model outputs before they take effect, especially for high-stakes decisions.", example: "A doctor approves every AI-drafted clinical note before it enters the record." },
    { term: "Context window and tokens", cat: "ai", def: "Tokens are the chunks of text a model processes; the context window is the maximum tokens it can consider at once, which also drives cost.", example: "Summarising a 300-page contract may need chunking if it exceeds the context window." }
  ],

  /* =================================================================== SKILLS */
  skills: [
    { title: "Asking clarifying questions", points: [
      "Ask 2 to 4 questions that change your answer: goal, user, platform, constraints. Skip trivia.",
      "If the interviewer says 'you decide', state an assumption and move on.",
      "Restate the problem in one sentence before you start answering.",
      "Ask why the company cares; it tells you which metric or goal to optimise."
    ]},
    { title: "Structuring and signposting", points: [
      "Say your plan up front: 'I will cover users, needs, solutions, then metrics.'",
      "Announce transitions: 'Now that we have the user, let us look at their pain points.'",
      "Use numbered lists out loud ('three ideas: first...').",
      "Adapt the framework to the question instead of reciting it mechanically."
    ]},
    { title: "Thinking out loud", points: [
      "Share your reasoning, not just your conclusions, so the interviewer can follow and help.",
      "It is fine to ask for 30 seconds to organise your thoughts, then present a structure.",
      "Say when you are making an assumption, and why.",
      "Treat the interviewer as a collaborator; invite input at natural checkpoints."
    ]},
    { title: "Prioritising with explicit criteria", points: [
      "Always state the criteria before choosing: impact, effort, reach, risk, strategic fit.",
      "Use a lightweight tool (RICE, 2x2 of impact vs. effort) and say the result out loud.",
      "Make a clear choice and explain what you are not doing and why.",
      "Tie the choice back to the goal you set at the start."
    ]},
    { title: "Handling pushback", points: [
      "Listen fully and acknowledge the point before responding.",
      "Ask a question to understand the concern ('Is your worry cost or user trust?').",
      "Either defend with reasons or update your answer; both are fine if you explain why.",
      "Do not abandon your whole structure; adjust the part that was challenged.",
      "Pushback is often a test of judgement, not a sign you are wrong."
    ]},
    { title: "Managing time", points: [
      "Agree on the time available and plan your sections against it.",
      "Do not spend more than a quarter of the time clarifying and segmenting.",
      "If you are running long, summarise the remaining steps briefly rather than skipping them.",
      "Always reserve the last few minutes for a summary and recommendation."
    ]},
    { title: "Closing with a recommendation", points: [
      "End with a clear call: what you would do, for whom, and why.",
      "Recap the path: goal, user, problem, solution, metric, in 30 seconds.",
      "Name the biggest risk and how you would test or mitigate it.",
      "Mention next steps such as an MVP, experiment or research."
    ]},
    { title: "Working with data in a case", points: [
      "Ask for specific data cuts rather than 'any data'.",
      "Use ratios and per-user metrics, not raw totals.",
      "Separate correlation from causation; propose an experiment to confirm.",
      "Do quick arithmetic carefully and say the numbers aloud.",
      "State what result would change your decision."
    ]}
  ],

  /* =================================================================== SOURCES */
  sources: [
    { name: "Stream: CIRCLES method overview", url: "https://getstream.io/blog/circles-method/" },
    { name: "Product School: CIRCLES framework guide", url: "https://productschool.com/blog/skills/circles-framework-guide" },
    { name: "Product School: PM interview questions list", url: "https://productschool.com/blog/interview/the-ultimate-list-product-manager-interview-questions/" },
    { name: "Carrus: 6-step framework for product cases", url: "https://www.carrus.io/blog/a-6-step-framework-to-nail-your-product-case-interview" },
    { name: "Aakash Gupta: the product sense interview", url: "https://www.news.aakashg.com/i/135705731/history-of-the-product-sense-interview" },
    { name: "Roadmunk: Kano model glossary", url: "https://roadmunk.com/glossary/kano-model" },
    { name: "Google Research: HEART framework paper", url: "https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/" },
    { name: "Amplitude: North Star Playbook", url: "https://amplitude.com/books/north-star" },
    { name: "RocketBlocks: success metrics in PM interviews", url: "https://www.rocketblocks.me/blog/success-metrics-pm-interviews.php" },
    { name: "Interview Query: answering a metric drop question", url: "https://www.interviewquery.com/p/metrics-drop-data-science-interview" },
    { name: "Inflection Point: guide to root cause analysis problems", url: "https://inflectionpointnewsletter.substack.com/p/a-guide-to-root-cause-analysis-problems" },
    { name: "PracHub: market sizing questions for PMs", url: "https://prachub.com/resources/market-sizing-interview-questions-for-product-managers-framework-examples-and-estimation-drills" },
    { name: "Airtribe: tips to ace guesstimates in PM interviews", url: "https://airtribe.substack.com/p/tips-to-ace-guesstimates-in-pm-interviews" },
    { name: "CaseCoach: market sizing case interview", url: "https://casecoach.com/b/market-sizing-case-interview/" },
    { name: "Exponent: introduction to product strategy questions", url: "https://www.tryexponent.com/courses/pm/product-strategy/intro-product-strategy" },
    { name: "Lenny's Newsletter: knowing if you have product-market fit", url: "https://www.lennysnewsletter.com/p/how-to-know-if-youve-got-productmarket" },
    { name: "IGotAnOffer: system design questions for PMs", url: "https://igotanoffer.com/en/advice/system-design-questions-product-managers" },
    { name: "Exponent: how to answer technical product questions", url: "https://www.tryexponent.com/courses/pm-technical/how-to-answer-technical-product-questions" },
    { name: "Dartmouth Guarini: using the STAR method", url: "https://guarinigrad.dartmouth.edu/resources/using-the-star-method-for-your-next-behavioral-interview/" },
    { name: "Amazon Leadership Principles", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles" },
    { name: "Aced (Exponent): AI product manager interview questions", url: "https://www.aced.io/blog/ai-product-manager-interview-questions" },
    { name: "Exponent: evals lesson (analytical course)", url: "https://www.tryexponent.com/courses/analytical/evals" },
    { name: "Northeastern Careers: AI PM interview questions guide", url: "https://careers.northeastern.edu/blog/2026/06/11/ai-product-manager-interview-questions-2026-guide/" },
    { name: "Intercom: RICE prioritisation", url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/" },
    { name: "Evan Miller: How Not To Run an A/B Test", url: "https://www.evanmiller.org/how-not-to-run-an-ab-test.html" },
    { name: "Optimizely: statistical significance glossary", url: "https://www.optimizely.com/optimization-glossary/statistical-significance/" }
  ]
};
