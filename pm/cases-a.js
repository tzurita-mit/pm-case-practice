// PM practice cases, set A. All companies are fictional and all data is illustrative.
// Benchmarks used to keep numbers plausible are listed in window.PM_CASES_A_SOURCES.
window.PM_CASES_A = [

  // ======================= DESIGN (8) =======================
  {
    id: 'a-ridely-night-safety',
    cat: 'design',
    style: 'Uber-style',
    lvl: 'Medium',
    min: 30,
    title: 'Night-time safety for women riders at Ridely',
    prompt: 'Ridely is losing women riders after 10pm. Design a product experience that makes women feel safe enough to ride at night, and tell us how you would know it worked.',
    brief: [
      'Ridely is a ride-hailing app operating in Mexico City, Bogota, Lima and Sao Paulo, with roughly 9M monthly riders and 420k active drivers.',
      'Women are 54% of daytime riders but only 31% of riders between 22:00 and 06:00. Leadership believes night trips are a growth pool of about 3M trips per month if the gap closed.',
      'Ridely already has Share Trip and an SOS button, but both were built as generic features in 2021 and are rarely used.',
      'Constraints: the solution must ship an MVP within one quarter, must work on low-end Android phones, and cannot add more than US$0.05 of cost per trip on average.',
      'Driver supply at night is thin; any feature that makes drivers less willing to accept night trips is a serious risk.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Trips and safety reports by time of day (last 90 days)',
        cols: ['Time band', 'Trips (M)', 'Women share of riders', 'Safety reports per 100k trips', 'Rider cancel rate'],
        rows: [
          ['06:00-18:00', '48.0', '54%', '3.1', '6.8%'],
          ['18:00-22:00', '21.5', '49%', '4.0', '7.4%'],
          ['22:00-02:00', '9.2', '33%', '9.8', '11.9%'],
          ['02:00-06:00', '2.6', '24%', '14.2', '13.5%']
        ],
        note: 'Illustrative data. Safety reports include any rider- or driver-filed incident, from rude behaviour to assault.'
      },
      {
        title: 'Exhibit 2 - Survey: women who stopped riding at night (n = 2,000)',
        cols: ['Main reason (single choice)', 'Share', 'Mentioned at all (multi-choice)'],
        rows: [
          ['Fear about driver behaviour', '46%', '71%'],
          ['Unsure the car is the right car', '18%', '39%'],
          ['Walk from drop-off to the door', '15%', '44%'],
          ['Route deviation / not knowing where I am', '12%', '35%'],
          ['Price surge at night', '9%', '28%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 3 - Usage of existing safety features',
        cols: ['Feature', 'Awareness (survey)', 'Used on % of night trips', 'Note'],
        rows: [
          ['Share Trip', '58%', '4.0%', 'Requires 4 taps, recipient must open a web link'],
          ['SOS button', '22%', '0.03%', 'Calls local emergency number; no Ridely follow-up'],
          ['Driver photo + plate', '81%', 'n/a', 'Shown only on the request screen, not on arrival']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Which single user segment and moment in the trip would you design for first, and why?',
      'Exhibit 2 says the walk from drop-off to the door is mentioned by 44% of women. How would your design handle the end of the trip?',
      'How do you avoid making drivers feel surveilled or accused, given night supply is already thin?',
      'What is your primary success metric, and what guardrail would stop you from shipping?',
      'Share Trip exists but is used on only 4% of night trips. Why, and what would you change?',
      'An exec suggests women-only drivers for women riders. How do you respond?'
    ],
    strong: [
      'Segments by journey moment (before pickup, in car, after drop-off) and prioritises based on Exhibit 2: driver behaviour and car verification are the top two drivers.',
      'Notices that 2:00-6:00 has 4.6x the daytime report rate and that existing features fail on friction (Share Trip needs 4 taps; plate is not shown at arrival).',
      'Proposes concrete MVP features such as a PIN to start the trip, automatic Share Trip for night trips, route-deviation alerts and a "wait until I am inside" option for the driver.',
      'Picks a primary metric like night trips by women riders (or women night riders retained month over month) with guardrails on driver acceptance rate at night and cost per trip.',
      'Considers the driver side: safety for drivers too, framing features as mutual (both sides verified), and checks night acceptance rate in the experiment.',
      'Discusses measurement challenges: safety reports may rise at first because reporting gets easier, so they are not a clean success metric.'
    ],
    traps: [
      'Jumping to a laundry list of features without picking a moment or segment.',
      'Using raw safety reports as the success metric without noting that better tooling increases reporting.',
      'Ignoring driver supply and acceptance at night.'
    ],
    insight: 'The data points to pre-pickup verification and in-trip reassurance (driver behaviour 46%, wrong car 18%) plus the under-served end-of-trip moment; existing features fail on friction, not on concept, so an automatic, default-on night safety mode beats new opt-in tools.'
  },
  {
    id: 'a-medimo-senior-adherence',
    cat: 'design',
    style: 'Health tech',
    lvl: 'Medium',
    min: 30,
    title: 'Medication adherence for seniors at Medimo',
    prompt: 'Medimo is a pharmacy chain that wants a product to help seniors taking five or more medications take them on time. Design it.',
    brief: [
      'Medimo runs 900 pharmacies in Spain and Portugal and fills prescriptions for 1.4M customers aged 65+.',
      'About 38% of those seniors take five or more daily medications (polypharmacy). Missed doses drive hospital readmissions and lost refill revenue.',
      'Medimo is paid per prescription filled, and a regional insurer has offered a bonus of EUR 40 per patient per year if measured adherence (proportion of days covered, PDC) exceeds 80%.',
      'Constraints: many customers are not comfortable with smartphones; caregivers (often adult children) are frequently involved; health data must stay GDPR compliant.',
      'Budget allows either a software product, a low-cost hardware add-on (under EUR 30), or a service component in-store, but not all three in year one.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Adherence by number of daily medications (PDC above 80%)',
        cols: ['Daily meds', 'Share of 65+ customers', 'Adherent (PDC > 80%)', 'Hospital visits per 100 patients / yr'],
        rows: [
          ['1-2', '34%', '74%', '9'],
          ['3-4', '28%', '63%', '14'],
          ['5-7', '27%', '49%', '22'],
          ['8+', '11%', '38%', '31']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Who manages medications, and devices owned (5+ meds segment, survey n = 1,200)',
        cols: ['Age band', 'Owns smartphone', 'Manages alone', 'Caregiver helps weekly', 'Uses a pill organiser'],
        rows: [
          ['65-74', '64%', '61%', '27%', '41%'],
          ['75-84', '41%', '38%', '49%', '55%'],
          ['85+', '18%', '15%', '72%', '63%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 3 - Main reason for the last missed dose (5+ meds segment)',
        cols: ['Reason', 'Share'],
        rows: [
          ['Forgot', '41%'],
          ['Confused about schedule or which pill', '22%'],
          ['Cost of the medicine', '15%'],
          ['Side effects / felt fine so skipped', '12%'],
          ['Ran out before refill', '10%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Who is your primary user: the senior, the caregiver, or the pharmacist? Defend it with Exhibit 2.',
      'Forgetting is 41% of missed doses but confusion is 22%. Does your design address both?',
      'How would you measure adherence without trusting self-reported taps?',
      'What is the business case for Medimo? Rough-size it.',
      'How do you handle a patient over 85 without a smartphone and no caregiver?'
    ],
    strong: [
      'Notices smartphone ownership collapses with age (64% to 18%) while caregiver involvement rises (27% to 72%), so designs for a senior-plus-caregiver pair rather than an app for seniors alone.',
      'Proposes a pharmacy-prepared, time-labelled blister pack (solves confusion) plus reminders over voice call / SMS or a simple device, with caregiver alerts when a dose is missed.',
      'Uses refill data (PDC) as the objective outcome metric rather than in-app check-ins, and ties refill reminders to the 10% "ran out" reason.',
      'Sizes value: about 532k seniors on 5+ meds (38% of 1.4M); moving 10pp of them above 80% PDC is around 53k patients x EUR 40 = about EUR 2.1M in insurer bonus, plus refill revenue.',
      'Prioritises the 8+ meds segment where adherence is lowest (38%) and hospital visits highest.',
      'Raises privacy/consent for caregiver access under GDPR.'
    ],
    traps: [
      'Designing a feature-heavy smartphone app for 85-year-olds.',
      'Measuring success by app downloads or reminder opens.',
      'Ignoring cost and side-effects reasons that a reminder cannot fix.'
    ],
    insight: 'The real user is the senior-caregiver pair: low smartphone ownership but high caregiver involvement means a pharmacy-packaged, multi-channel (voice/SMS + caregiver) system measured by refill-based PDC wins over a standalone app.'
  },
  {
    id: 'a-tutorly-ai-homework',
    cat: 'design',
    style: 'Edtech',
    lvl: 'Hard',
    min: 35,
    title: 'An AI homework helper that teaches, not tells',
    prompt: 'Tutorly wants to redesign its AI homework helper for students aged 12-16 so that it improves learning instead of just handing out answers. Design the product.',
    brief: [
      'Tutorly is a freemium homework app with 6M monthly active students in the US and UK. Parents pay US$12/month for Tutorly Plus (unlimited help, progress reports).',
      'In 2025 Tutorly added an AI chat that solves any pasted question step by step. Usage exploded, but schools have started blocking the app and teachers complain it enables copying.',
      'The CEO wants a design that keeps students engaged (they are the daily users) while convincing parents and teachers (the buyers and gatekeepers) that it builds real learning.',
      'Constraints: cannot remove the ability to see a full solution entirely (competitors offer it); must work on mobile; must not add more than 2 seconds of latency.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - AI helper session types (last 30 days, 41M sessions)',
        cols: ['Session type', 'Share of sessions', 'Avg session minutes', 'Return within 7 days', 'Next quiz score change'],
        rows: [
          ['Paste question, view full answer, leave', '68%', '1.9', '71%', '-2 pts'],
          ['Ask for hint, then try', '14%', '7.4', '64%', '+9 pts'],
          ['Ask concept explanation', '11%', '5.1', '58%', '+6 pts'],
          ['Check own answer', '7%', '3.2', '69%', '+4 pts']
        ],
        note: 'Illustrative data. Quiz score change measured on Tutorly practice quizzes vs. the student baseline; observational, not randomised.'
      },
      {
        title: 'Exhibit 2 - Stakeholder survey',
        cols: ['Statement', 'Students agree', 'Parents agree', 'Teachers agree'],
        rows: [
          ['Tutorly helps me/my child/students understand the material', '62%', '48%', '19%'],
          ['Tutorly is mostly used to copy answers', '31%', '44%', '71%'],
          ['I would pay / recommend if it showed proof of learning', 'n/a', '67%', '52%']
        ],
        note: 'Illustrative data. n = 3,000 students, 1,500 parents, 400 teachers.'
      },
      {
        title: 'Exhibit 3 - Subscription funnel',
        cols: ['Step', 'Monthly volume'],
        rows: [
          ['Monthly active students', '6,000,000'],
          ['Parents who receive a progress email', '1,200,000'],
          ['Parents who open it', '310,000'],
          ['New Plus subscriptions', '42,000'],
          ['Plus monthly churn', '9.5%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Your design adds friction for students who just want the answer. How do you avoid losing them to a competitor?',
      'Exhibit 1 shows hint sessions correlate with +9 quiz points. Can you claim the hint mode causes learning? How would you test it?',
      'How does your design change what the parent sees, given the parent is the payer?',
      'What would make a teacher unblock Tutorly? Design something for them.',
      'Define one success metric that balances engagement and learning.',
      'How would you guard against the AI giving wrong hints?'
    ],
    strong: [
      'Identifies the three-sided problem: students (users), parents (payers), teachers (gatekeepers), and designs something for each instead of only the chat.',
      'Uses Exhibit 1 to note that 68% of sessions are answer-copying with the shortest duration and negative learning signal, while hint sessions are longer and correlate with better scores, but flags self-selection bias.',
      'Proposes a hint-first ladder (nudge, hint, worked similar example, full answer) with full answer still available but gated by an attempt or a short delay, plus mastery checks afterwards.',
      'Turns learning into the product for parents: proof-of-learning reports (67% of parents would pay for it) and a teacher mode/assignment integration.',
      'Picks a metric like weekly "learning sessions" (sessions with an attempt plus correct follow-up) with guardrails on WAU and Plus conversion, and proposes an RCT on quiz outcomes.',
      'Notes the parent email funnel is weak (26% open, 3.5% of recipients convert), a lever for monetisation.'
    ],
    traps: [
      'Removing full answers entirely (violates a constraint and kills engagement).',
      'Treating the correlation in Exhibit 1 as causal.',
      'Designing only for students and forgetting parents/teachers.'
    ],
    insight: 'Most usage is low-value answer copying; the winning design is a graduated hint ladder plus proof-of-learning for parents and teachers, validated by a randomised test since the hint/score correlation is self-selected.'
  },
  {
    id: 'a-pocketa-teen-account',
    cat: 'design',
    style: 'Fintech',
    lvl: 'Medium',
    min: 25,
    title: 'A first bank account for Brazilian teens',
    prompt: 'Pocketa, a Brazilian digital bank, wants to launch an account for teenagers aged 13-17. Design the product.',
    brief: [
      'Pocketa has 11M adult customers in Brazil. Customer acquisition cost for adults is now R$95 and rising.',
      'Brazilian teens can hold an account opened and supervised by a parent. Pix (instant payments) is ubiquitous and most teen spending happens via a parent\'s Pix or cash.',
      'Goal: build a product that teens actually use weekly and that converts into a full adult account at 18. Secondary goal: deepen engagement with the parent.',
      'Constraints: regulatory limits on teen credit (none allowed), parental consent required, and a monthly fee is not acceptable.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Teen money habits (survey of 2,500 teens 13-17)',
        cols: ['Behaviour', '13-15', '16-17'],
        rows: [
          ['Own a smartphone', '84%', '95%'],
          ['Receive regular allowance', '52%', '47%'],
          ['Earn own money (gigs, reselling, family business)', '14%', '38%'],
          ['Pay online via a parent\'s Pix or card weekly', '61%', '73%'],
          ['Have a savings goal right now', '58%', '66%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Parent survey: top concerns about giving teens an account (n = 1,500)',
        cols: ['Concern', 'Share in top 2'],
        rows: [
          ['Scams and fraud targeting teens', '57%'],
          ['Overspending on games/apps', '49%'],
          ['Not seeing what they buy', '38%'],
          ['Hassle of sending money every week', '31%'],
          ['Teaching them to save', '25%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 3 - Competitor teen products in market',
        cols: ['Product', 'Monthly fee', 'Teens on app', 'Weekly active rate'],
        rows: [
          ['Competitor A (incumbent bank)', 'R$0', '1.1M', '12%'],
          ['Competitor B (fintech)', 'R$0', '600k', '29%'],
          ['Competitor C (prepaid card)', 'R$9.90', '150k', '18%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Who do you design for first: 13-15 or 16-17? Use Exhibit 1.',
      'How does the product make money without a fee or credit?',
      'Scams are the top parent concern. What does your design do about it concretely?',
      'What is your north star for this product, and what is the lifetime value logic that justifies it?',
      'Competitor A has the most teens but only 12% weekly active. What does that tell you?'
    ],
    strong: [
      'Segments by age: 16-17 earn their own money far more (38% vs 14%), so they need receiving Pix and earning tools; 13-15 depend on allowance and parental controls.',
      'Designs a parent-teen dual experience: auto allowance via Pix, spending categories with limits, real-time notifications, savings goals with parent matching.',
      'Addresses scams directly (Pix limits for new recipients, a delay plus parent approval for first-time payees, scam education in-flow).',
      'Monetisation logic: interchange on debit spend, deposits float, and above all reduced adult CAC: converting teens at 18 avoids around R$95 CAC each.',
      'Picks weekly active teens (doing a transaction or savings action) as north star; notes Competitor A shows accounts without habit are worthless.'
    ],
    traps: [
      'Designing only for the teen and ignoring the parent who must consent and fund it.',
      'Proposing credit or fees despite the constraints.',
      'Measuring sign-ups rather than weekly use.'
    ],
    insight: 'The product is a parent-teen system: allowance automation and anti-scam controls win the parent, earning/saving tools win older teens, and the economics rest on converting teens to adults to avoid a R$95 CAC.'
  },
  {
    id: 'a-shelfie-food-waste',
    cat: 'design',
    style: 'Hardware',
    lvl: 'Hard',
    min: 35,
    title: 'Reducing food waste with a smart fridge',
    prompt: 'Shelfie makes smart fridges with interior cameras. Design a feature or product that measurably reduces household food waste.',
    brief: [
      'Shelfie has sold 600k connected fridges in the US and Germany at a premium price (US$2,400 average). The companion app is installed by 70% of owners.',
      'The existing interior camera feature lets owners view a photo of the shelves from the app; weekly use is low.',
      'An EU sustainability grant will pay Shelfie EUR 2M if it can show a 20% reduction in household food waste among participating German households within 12 months.',
      'Constraints: new hardware only for the next model year (18 months away); a software update can use existing cameras, door sensors and the app. Image recognition of items is about 80% accurate for packaged goods and 55% for loose produce.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Household food waste by category (diary study, 300 Shelfie households, 4 weeks)',
        cols: ['Category', 'Share of wasted weight', 'Main reason'],
        rows: [
          ['Fresh produce', '39%', 'Forgot it was there / went bad'],
          ['Leftovers / cooked food', '24%', 'Forgot it was there'],
          ['Dairy', '14%', 'Passed best-before date'],
          ['Bread and bakery', '11%', 'Bought too much'],
          ['Meat and fish', '8%', 'Plans changed'],
          ['Other', '4%', 'Mixed']
        ],
        note: 'Illustrative data. Average waste: 2.9 kg per household per week.'
      },
      {
        title: 'Exhibit 2 - Current app engagement',
        cols: ['Feature', 'Weekly users (% of app installs)', 'Most common time used'],
        rows: [
          ['Camera view of shelves', '12%', 'While at the supermarket'],
          ['Door-open alerts', '31%', 'Passive'],
          ['Temperature controls', '6%', 'Rarely'],
          ['Shopping list', '4%', 'Before shopping']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 3 - Prototype test of "use-it-up" reminders (40 households, 4 weeks)',
        cols: ['Group', 'Waste kg/household/week', 'Reminders opened', 'Households that turned reminders off'],
        rows: [
          ['Control (no reminders)', '2.9', 'n/a', 'n/a'],
          ['Daily push of all items expiring', '2.6', '22%', '45%'],
          ['Two weekly "plan your meals" nudges with 3 items', '2.2', '61%', '10%']
        ],
        note: 'Illustrative data. Small sample; not statistically conclusive.'
      }
    ],
    follow: [
      'Leftovers and produce are 63% of waste, but recognition accuracy is only 55% for loose produce. How does your design cope?',
      'Exhibit 3 shows daily pushes get turned off. What design principle does that suggest?',
      'How would you measure food waste for the EU grant credibly?',
      'What would you put into next year\'s hardware given what you learn?',
      'How does this feature help Shelfie\'s business beyond the grant?'
    ],
    strong: [
      'Focuses on the two biggest categories (produce 39%, leftovers 24%) and the shared root cause "forgot it was there".',
      'Designs around imperfect recognition: lets users tag leftovers in one tap when the door closes (e.g. a "leftover" tag with an auto-reminder) and confirms low-confidence produce detections instead of trusting them.',
      'Uses Exhibit 3: low-frequency, actionable meal-plan nudges beat noisy daily pushes (2.2 vs 2.6 kg, 10% vs 45% opt-out), while noting the small sample.',
      'Proposes a credible measurement plan: baseline diary or weighed waste bins for a sample, randomised rollout, 20% target = from 2.9 to about 2.3 kg/week.',
      'Hardware roadmap: better camera angles for drawers, a weight sensor on a leftovers shelf.',
      'Ties to business: differentiation for premium price, grocery partnership revenue, retention of the app.'
    ],
    traps: [
      'Designing a full automatic inventory system that assumes perfect computer vision.',
      'Measuring success with reminder opens instead of waste.',
      'Notification spam.'
    ],
    insight: 'Waste is mostly forgotten produce and leftovers; a low-noise, meal-planning nudge with one-tap leftover tagging works around weak recognition, and the prototype already shows a roughly 24% reduction trend that needs a properly powered test.'
  },
  {
    id: 'a-farmlink-kenya-prices',
    cat: 'design',
    style: 'Emerging markets',
    lvl: 'Hard',
    min: 35,
    title: 'Market prices for smallholder farmers in Kenya',
    prompt: 'FarmLink wants to help smallholder farmers in Kenya get better prices for their produce. Design the product.',
    brief: [
      'FarmLink is a startup funded by an agritech VC and a development finance institution. It has a network of 40 field agents in central and western Kenya.',
      'Smallholders (under 2 hectares) typically sell to middlemen at the farm gate. Many do not know prices at the nearest wholesale market, and transport is costly.',
      'Goal for year one: reach 100k farmers and show they earn at least 15% more per kg sold. FarmLink must have a path to revenue within 24 months.',
      'Constraints: patchy connectivity, many farmers use basic feature phones, literacy varies, Swahili and local languages are needed. M-Pesa mobile money is nearly universal.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Farmer profile (survey of 1,800 smallholders)',
        cols: ['Attribute', 'Value'],
        rows: [
          ['Owns feature phone only', '61%'],
          ['Owns smartphone', '32%'],
          ['No phone of their own', '7%'],
          ['Uses M-Pesa monthly', '88%'],
          ['Comfortable reading SMS in Swahili', '74%'],
          ['Sells mainly to farm-gate middlemen', '79%'],
          ['Member of a farmer group or cooperative', '46%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Price gap: farm gate vs nearest wholesale market (KES per kg, last season)',
        cols: ['Crop', 'Farm-gate price', 'Wholesale price', 'Transport cost per kg (individual)', 'Transport cost per kg (group, 1 truck)'],
        rows: [
          ['Tomatoes', '28', '45', '9', '3'],
          ['Cabbage', '12', '20', '6', '2'],
          ['Avocado (Hass)', '15', '32', '7', '2'],
          ['Maize (dry)', '33', '40', '5', '2']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Given Exhibit 1, what channel does your product run on? Why not a smartphone app?',
      'Exhibit 2 shows a price gap, but does price information alone close it? Do the maths for tomatoes.',
      'How does FarmLink make money?',
      'How would you prove the 15% income uplift to funders?',
      'What could go wrong with middlemen, and how do you handle it?'
    ],
    strong: [
      'Chooses USSD/SMS (and IVR voice for low literacy) as the primary channel because 68% lack a smartphone; uses field agents and cooperatives (46%) for onboarding.',
      'Does the maths: for tomatoes, an individual farmer nets 45 - 9 = 36 vs 28 at farm gate (+29%), but a group nets 45 - 3 = 42 (+50%). For maize, individual gain is only 2 KES (+6%). So information alone is not enough: aggregation is the real lever.',
      'Designs price alerts plus group selling: aggregate volume, book a shared truck, collect payment via M-Pesa.',
      'Revenue: a small commission on aggregated sales or buyer-side fees, or premium data to buyers; not charging farmers for SMS.',
      'Measurement: randomised or staggered rollout across villages comparing realised price per kg from M-Pesa receipts.',
      'Anticipates middleman response (raising farm-gate prices, which is still a win for farmers but erodes FarmLink\'s attribution).'
    ],
    traps: [
      'Building a smartphone app with photos and maps.',
      'Assuming price information alone closes the gap without considering transport and volume.',
      'No revenue model.'
    ],
    insight: 'Price transparency helps only where the gap exceeds individual transport cost; the bigger value is aggregation (group transport cuts cost by two thirds), so the product is SMS/USSD price alerts plus coordinated group selling paid via M-Pesa.'
  },
  {
    id: 'a-crewdesk-onboarding',
    cat: 'design',
    style: 'B2B SaaS',
    lvl: 'Easy',
    min: 20,
    title: 'Onboarding restaurant managers at Crewdesk',
    prompt: 'Crewdesk is a shift-scheduling tool for restaurants. Design a new onboarding experience for restaurant managers who sign up for the free trial.',
    brief: [
      'Crewdesk sells to independent restaurants and small chains in the US. Price: US$4 per employee per month; a typical restaurant has 20 staff.',
      'Managers sign up on desktop or phone, usually late at night after closing. They then must add staff, create a schedule, and get staff to install the employee app.',
      'Trial length is 30 days. The team believes a restaurant is activated when it publishes a schedule and at least half of staff install the app.',
      'Constraint: no extra headcount for human onboarding calls; the solution must be product-led.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Monthly trial funnel',
        cols: ['Step', 'Restaurants', 'Step conversion'],
        rows: [
          ['Signed up', '5,000', '-'],
          ['Created a location', '3,900', '78%'],
          ['Added staff', '1,700', '44%'],
          ['Published first schedule', '1,100', '65%'],
          ['50%+ of staff installed app', '600', '55%'],
          ['Paid at day 30', '260', '43%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - How staff were added (restaurants that added staff)',
        cols: ['Method', 'Share of restaurants', 'Published first schedule', 'Median time to add staff'],
        rows: [
          ['Typed manually', '82%', '61%', '48 min'],
          ['CSV upload', '12%', '79%', '15 min'],
          ['Imported from POS integration', '6%', '88%', '3 min']
        ],
        note: 'Illustrative data. 82% x 61% + 12% x 79% + 6% x 88% = about 65%.'
      }
    ],
    follow: [
      'Where is the biggest leak in Exhibit 1 and why do you think it happens?',
      'Only 6% use the POS import. What would you do with that?',
      'How do you get staff to install the app, given the manager cannot force them?',
      'What is your activation metric and how would you test the new onboarding?'
    ],
    strong: [
      'Identifies "Added staff" (44%) as the largest leak and links it to manual entry taking 48 minutes late at night.',
      'Uses Exhibit 2: POS import users publish at 88% vs 61%, so makes POS import / contact-list import / invite-by-link the default path (with the caveat of selection bias).',
      'Designs a time-to-value flow: template schedule from last week, add staff by sharing a link in the staff group chat (staff add themselves, which also installs the app).',
      'Sizes it: lifting the add-staff step from 44% to 60% at constant downstream rates adds about 145 paid restaurants per month (260 x 60/44 = 355).',
      'Proposes an A/B test with the share of signups activated within 7 days as primary metric and trial-to-paid as the outcome.'
    ],
    traps: [
      'Designing a generic product tour or tooltips without addressing data entry.',
      'Ignoring the staff-side install step.'
    ],
    insight: 'The leak is data entry: adding staff manually takes 48 minutes and only 44% get through; making import or self-invite by link the default fixes both the add-staff and app-install steps.'
  },
  {
    id: 'a-loop-commuter-podcasts',
    cat: 'design',
    style: 'Media',
    lvl: 'Easy',
    min: 20,
    title: 'Podcast discovery for commuters',
    prompt: 'Loop is a podcast app. Design a feature that helps commuters discover new shows they will keep listening to.',
    brief: [
      'Loop has 8M monthly listeners, mostly in the UK and Ireland. Revenue comes from ads inside shows and a premium tier with ad-free bonus episodes.',
      'Most listening happens on commutes, where people have one hand or no hands free.',
      'Goal: increase the number of shows each listener follows, because listeners who follow 4+ shows retain much better.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Listening sessions by context (last 30 days)',
        cols: ['Context', 'Share of listening hours', 'Starts with "continue episode"', 'Avg seconds browsing before play'],
        rows: [
          ['Commute (car, transit)', '46%', '83%', '9'],
          ['Exercise', '18%', '76%', '14'],
          ['At home', '24%', '52%', '71'],
          ['Other', '12%', '64%', '35']
        ],
        note: 'Illustrative data. Context inferred from motion and connected-device signals.'
      },
      {
        title: 'Exhibit 2 - Retention by number of followed shows',
        cols: ['Shows followed', 'Share of listeners', '90-day retention'],
        rows: [
          ['1', '34%', '38%'],
          ['2-3', '41%', '57%'],
          ['4+', '25%', '81%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Commuters barely browse (9 seconds). What does that imply for discovery?',
      'Is following 4+ shows a cause of retention or a symptom of an engaged listener?',
      'How would you design for hands-free use?',
      'What metric would you use to judge the feature in an A/B test?'
    ],
    strong: [
      'Notices commuters almost always continue an episode and browse only 9 seconds, so discovery must happen passively during the commute (e.g. a 60-second trailer of a related show auto-played after an episode ends) or be prepared at home.',
      'Designs hands-free interactions: voice or one large button to "follow" the trailer show, car/Bluetooth friendly.',
      'Flags correlation vs causation on the 4+ shows retention gap and proposes an experiment.',
      'Primary metric: new shows with 3+ episodes played within 30 days per listener; guardrails: listening hours and skip rate.'
    ],
    traps: [
      'Designing a richer browse screen that commuters will never look at.',
      'Optimising for follows instead of actual repeat listening.'
    ],
    insight: 'Commute listening is continuation, not browsing, so discovery must be pushed into the end-of-episode moment in a hands-free format and judged by repeat listening of new shows, not follow taps.'
  },

  // ======================= IMPROVE (8) =======================
  {
    id: 'a-cartwise-checkout',
    cat: 'improve',
    style: 'E-commerce',
    lvl: 'Medium',
    min: 25,
    title: 'Improve checkout conversion at Cartwise',
    prompt: 'Cartwise is a grocery delivery service. Leadership wants to increase completed orders. Using the data, where would you focus and what would you build?',
    brief: [
      'Cartwise delivers groceries in 12 US metro areas. Customers pick a 1-hour delivery slot during checkout.',
      'Average order value is about US$60 and contribution margin is about US$6 per order.',
      'There is one product squad (6 engineers) available for the next quarter.',
      'The industry average cart abandonment rate is roughly 70% (Baymard), though grocery carts usually convert better because intent is high.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Weekly checkout funnel by platform',
        cols: ['Platform', 'Cart viewed', 'Slot selected', 'Payment page', 'Order placed', 'Cart-to-order'],
        rows: [
          ['iOS app', '200,000', '170,000', '150,000', '138,000', '69.0%'],
          ['Android app', '180,000', '151,000', '132,000', '120,000', '66.7%'],
          ['Mobile web', '150,000', '120,000', '66,000', '58,000', '38.7%'],
          ['Desktop web', '70,000', '60,000', '52,000', '48,000', '68.6%'],
          ['Total', '600,000', '501,000', '400,000', '364,000', '60.7%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Slot step diagnostics',
        cols: ['Platform', 'Median time on slot step', '"Slot no longer available" error after selecting', 'Slot held while paying?'],
        rows: [
          ['iOS app', '21 s', '2%', 'Yes, 10 min'],
          ['Android app', '23 s', '2%', 'Yes, 10 min'],
          ['Mobile web', '74 s', '12%', 'No'],
          ['Desktop web', '30 s', '3%', 'No']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 3 - Mobile web exit survey (left between slot and payment)',
        cols: ['Reason', 'Share'],
        rows: [
          ['The slot I wanted disappeared', '38%'],
          ['Too many steps / page reloads', '21%'],
          ['Delivery fee shown too late', '19%'],
          ['Just browsing / will come back', '22%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Which step on which platform would you fix first? Size the opportunity.',
      'Desktop web also does not hold slots but converts fine. Why might mobile web suffer more?',
      'Would you rather fix mobile web or push users to the app? Trade-offs?',
      'How would you design the experiment, and what is your guardrail?',
      'The delivery fee shown late is 19%. Would showing it earlier lower or raise conversion?'
    ],
    strong: [
      'Spots that mobile web slot-to-payment is 55% (66k/120k) vs about 87-88% on apps, the single biggest leak.',
      'Links it to Exhibits 2 and 3: no slot hold plus slow step leads to 12% "slot gone" errors, which is the top exit reason (38%).',
      'Sizes it: lifting mobile web slot-to-payment to 85% gives 102k reaching payment; at the existing 88% payment-to-order rate, about 89.7k orders, roughly +31.7k orders/week, about +US$190k contribution per week.',
      'Proposes holding the slot for 10 minutes on web, reducing reloads, showing fees upfront, and possibly a soft app-install prompt.',
      'Explains desktop users likely have bigger screens/faster flows (30 s), so the race condition bites less; mobile web is slow (74 s).',
      'Guardrails: slot utilisation / no-show rate from held-but-unused slots, delivery capacity.'
    ],
    traps: [
      'Optimising the whole funnel generically instead of the one broken step.',
      'Blaming users for "just browsing" when only 22% say so.',
      'Forgetting that holding slots costs capacity.'
    ],
    insight: 'Mobile web leaks at the slot step (55% vs 88% on apps) because slots are not held and the step is slow; holding the slot and showing fees early could add about 30k orders per week.'
  },
  {
    id: 'a-fitstreak-retention',
    cat: 'improve',
    style: 'Consumer subscription',
    lvl: 'Medium',
    min: 25,
    title: 'Improve retention of a fitness subscription',
    prompt: 'Fitstreak, a home-workout subscription app, has strong sign-ups but weak retention. How would you improve month-3 retention?',
    brief: [
      'Fitstreak charges US$14.99/month. It acquires about 60k new subscribers per month in the US, mostly through paid social.',
      'Month-3 paid retention is about 33%. Leadership benchmarks itself against consumer subscriptions where around 40% 12-month retention is considered good (Lenny\'s Newsletter).',
      'Blended CAC is US$45. The finance team says that below 35% month-3 retention, paid acquisition does not pay back within 6 months.',
      'The product has a library of 1,200 workouts from 10 to 45 minutes and a quiz that recommends a plan.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Retention by workouts completed in first 7 days',
        cols: ['Workouts in week 1', 'Share of new subs', 'Month-1 retention', 'Month-3 retention'],
        rows: [
          ['0', '30%', '38%', '12%'],
          ['1-2', '45%', '61%', '30%'],
          ['3+', '25%', '84%', '62%'],
          ['Blended', '100%', '61.9%', '32.6%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Retention by acquisition channel',
        cols: ['Channel', 'Share of new subs', 'CAC', 'Month-3 retention'],
        rows: [
          ['Instagram / TikTok ads', '40%', '$58', '22%'],
          ['Organic and referral', '25%', '$12', '45%'],
          ['Influencer partnerships', '35%', '$51', '36%']
        ],
        note: 'Illustrative data. Blended CAC = about $45.'
      },
      {
        title: 'Exhibit 3 - Week-1 behaviour of the 0-workout and 3+ groups',
        cols: ['Behaviour', '0 workouts', '3+ workouts'],
        rows: [
          ['Completed onboarding quiz', '48%', '93%'],
          ['Length of first workout started', '32 min avg', '15 min avg'],
          ['Turned on reminders', '19%', '66%'],
          ['Started first workout within 24h of paying', '21%', '78%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Is "3 workouts in week 1" the cause of retention or just a sign of motivated users?',
      'Exhibit 2: would you cut Instagram spend? What does the unit economics say?',
      'Design a first-week experience based on Exhibit 3.',
      'If you could run only one experiment, what is it and what is the success metric?',
      'How would you think about re-engaging the 0-workout group before they churn?'
    ],
    strong: [
      'Identifies an activation threshold (3+ workouts in week 1: 62% vs 12% month-3) while flagging selection bias and proposing an experiment that moves users across the threshold.',
      'Uses Exhibit 3: zero-workout users start longer workouts (32 min) and skip the quiz, so designs short 10-15 min starter workouts, quiz-first onboarding, first workout within 24h, and reminders.',
      'Notes channel quality: Instagram ads have the highest CAC ($58) and worst retention (22%); suggests reallocating spend or improving onboarding specifically for that channel.',
      'Sizes impact: moving 10% of subs from 0 to 3+ workouts lifts blended month-3 by about 5pp (0.10 x (62 - 12)), clearing the 35% threshold.',
      'Defines a success metric (share of new subs with 3+ workouts in week 1) as leading indicator and month-3 retention as outcome.'
    ],
    traps: [
      'Focusing on win-back emails for churned users instead of week-1 activation.',
      'Treating the correlation as fully causal.',
      'Proposing more content when the library is already large.'
    ],
    insight: 'Retention is decided in week 1: users who do 3+ short workouts retain 5x better, and the non-activators start with long workouts and skip onboarding, so a short-workout, quiz-first first week is the main lever.'
  },
  {
    id: 'a-ledgerly-free-to-paid',
    cat: 'improve',
    style: 'B2B SaaS',
    lvl: 'Hard',
    min: 35,
    title: 'Improve free-to-paid conversion for invoicing software',
    prompt: 'Ledgerly is a freemium invoicing tool for small businesses. Free-to-paid conversion has been flat at about 6.7% for a year. How would you improve it?',
    brief: [
      'Ledgerly has 400k free accounts and 26k paying accounts. Paid plan: US$25/month flat, unlimited invoices, bank sync, automatic reminders, and up to 5 users.',
      'Free plan: 5 invoices per month, 1 user, no bank sync, no automatic reminders.',
      'Benchmarks the team uses: self-serve freemium products typically convert around 3-8% of new accounts within 6 months (Lenny\'s Newsletter / Kyle Poyar).',
      'Ledgerly also processes card payments on invoices for a 2.9% + $0.30 fee, of which it keeps 0.6% after processor costs.',
      'The CEO is debating lowering the free limit to 3 invoices per month.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - 6-month free-to-paid conversion by company size',
        cols: ['Company size', 'Share of sign-ups', '6-month conversion', 'Share who ever hit the 5-invoice limit'],
        rows: [
          ['Solo (1 person)', '62%', '3%', '30%'],
          ['2-10 employees', '30%', '11%', '58%'],
          ['11-50 employees', '8%', '19%', '71%'],
          ['Blended', '100%', '6.7%', '42%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Actions in the first 14 days and conversion',
        cols: ['Action', 'Share of new accounts doing it', 'Conversion if done', 'Conversion if not'],
        rows: [
          ['Sent 3+ invoices', '30%', '18%', '1.8%'],
          ['Invited a teammate', '9%', '34%', '4.0%'],
          ['Started bank sync trial (paid feature preview)', '14%', '31%', '2.7%'],
          ['Turned on card payments', '11%', '12%', '6.0%']
        ],
        note: 'Illustrative data. Conversion = paid within 6 months.'
      },
      {
        title: 'Exhibit 3 - Solo accounts that never pay',
        cols: ['Metric', 'Value'],
        rows: [
          ['Median invoices sent per month', '2'],
          ['Median invoice value', '$640'],
          ['Share paid by card when card payments on', '46%'],
          ['Share still active after 12 months', '41%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Would lowering the free limit to 3 invoices increase revenue? Who would it hurt?',
      'Exhibit 2: which action would you push in onboarding and why?',
      'Is there a way to monetise solo users who will never pay a subscription? Size it.',
      'How would you test a pricing change without damaging trust?',
      'What would you tell the CEO in one sentence?'
    ],
    strong: [
      'Segments: solos are 62% of sign-ups but convert at 3% and only 30% ever hit the limit, so a limit change mostly hits them without converting them; teams convert far better.',
      'Notes that lowering the limit to 3 would push solos sending 2 invoices/month (median) only slightly; risk of churn to competitors and loss of payments revenue.',
      'Proposes monetising solos via payments: 2 invoices x $640 x 46% card share x 0.6% = about $3.5/month per active solo, so driving card-payment adoption may beat forcing a subscription.',
      'For teams: push teammate invites and bank sync preview during onboarding (31-34% conversion if done), with a caution about selection bias.',
      'Suggests value-metric thinking (Reforge/Miro example): pricing on users or payment volume rather than invoice count.',
      'Proposes a geo or new-cohort pricing test with guardrails on activation and payments volume.'
    ],
    traps: [
      'Recommending a tighter free limit without segmenting.',
      'Treating "conversion if done" as causal lift.',
      'Ignoring the payments revenue line.'
    ],
    insight: 'The flat blended rate hides two businesses: teams that convert when they collaborate and connect a bank, and solos who rarely hit the limit but can be monetised through payments; a single tighter limit fixes neither.'
  },
  {
    id: 'a-homenest-host-supply',
    cat: 'improve',
    style: 'Marketplace',
    lvl: 'Hard',
    min: 30,
    title: 'Grow host supply in Lisbon',
    prompt: 'Homenest, a vacation-rental marketplace, is losing bookings in Lisbon because there is not enough supply. How would you increase the number of active listings?',
    brief: [
      'Homenest takes a 15% combined take rate (3% from hosts, 12% from guests). Average booking value in Lisbon is EUR 620.',
      'Lisbon has high demand but searches often return few results for peak dates. Portuguese law requires a local accommodation licence (AL) number before a listing can go live.',
      'Homenest gets about 10k new host sign-ups per quarter in Lisbon but only a fraction become bookable.',
      'Constraints: Homenest cannot obtain licences on behalf of hosts; the city has frozen new AL licences in some central districts.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Quarterly host onboarding funnel, Lisbon',
        cols: ['Step', 'Hosts', 'Step conversion'],
        rows: [
          ['Started listing', '10,000', '-'],
          ['Completed property details', '6,800', '68%'],
          ['Uploaded 5+ photos', '4,100', '60%'],
          ['Licence verified (listing live)', '2,300', '56%'],
          ['First booking within 60 days', '1,300', '57%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Licence step breakdown (4,100 hosts reaching it)',
        cols: ['Situation', 'Hosts', 'Went live'],
        rows: [
          ['Already had an AL number', '2,000', '1,900'],
          ['Applying for AL, district open', '1,300', '400'],
          ['In a frozen district', '800', '0']
        ],
        note: 'Illustrative data. Median time from application to AL number: 19 days. 1,900 + 400 + 0 = 2,300.'
      },
      {
        title: 'Exhibit 3 - Unfulfilled demand: searches with fewer than 10 available results',
        cols: ['Segment', 'Share of searches', 'Searches with < 10 results'],
        rows: [
          ['Couples, 1 bedroom, weekday', '38%', '6%'],
          ['Couples, 1 bedroom, weekend', '22%', '17%'],
          ['Families/groups, 2+ bedrooms, any day', '27%', '41%'],
          ['Long stays 28+ nights', '13%', '22%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Where in Exhibit 1 is the most recoverable supply?',
      'What can you do for the 800 hosts in frozen districts?',
      'Exhibit 3 suggests which kind of supply matters most. How would you target it?',
      'Size the revenue of your top idea.',
      'What are the risks of growing supply without matching demand?'
    ],
    strong: [
      'Breaks the licence step down: hosts already licensed go live at 95%, but applicants in open districts only at 31% (400/1,300) because the process takes 19 days; frozen-district hosts can never go live as short stays.',
      'Proposes guided licence application (pre-filled forms, status tracking, reminders, allowing a "pending" listing visible for future dates), and redirecting frozen-district hosts to 28+ night stays where licence rules differ.',
      'Uses Exhibit 3 to prioritise 2+ bedroom family supply (41% of those searches under-supplied) and long stays (22%).',
      'Sizes: converting another 500 of the 1,300 applicants, with 57% booking at say 6 bookings/year x EUR 620 x 15%, is roughly EUR 160k/year take; quantifies assumptions.',
      'Also addresses earlier steps (photos 60%) with a professional photography offer.'
    ],
    traps: [
      'Spending more on host acquisition marketing while the funnel leaks.',
      'Ignoring the regulatory constraint or proposing ways around the law.',
      'Treating all supply as equal regardless of demand gaps.'
    ],
    insight: 'The biggest recoverable leak is licence applicants in open districts (only 31% go live because approval takes 19 days); guiding them through licensing and pointing frozen-district hosts at long stays adds the family/long-stay supply Lisbon actually lacks.'
  },
  {
    id: 'a-pagely-news-engagement',
    cat: 'improve',
    style: 'Media',
    lvl: 'Easy',
    min: 20,
    title: 'Improve daily engagement of a news app',
    prompt: 'Pagely is a news app with DAU/MAU of 14%. How would you make it a daily habit?',
    brief: [
      'Pagely has 5M monthly users in Canada. Revenue is ads plus a US$6/month subscription.',
      'Mixpanel\'s 2024 benchmarks put average DAU/MAU around 36% for media and entertainment products; Pagely is far below that.',
      'Most sessions start from push notifications. The team sends about 6 pushes per day.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Engagement by feature used in the last 30 days',
        cols: ['Feature', 'Share of MAU using', 'DAU/MAU of those users', '90-day retention'],
        rows: [
          ['Breaking news (via push)', '71%', '15%', '44%'],
          ['Local news section', '22%', '24%', '58%'],
          ['Daily puzzles', '9%', '41%', '79%'],
          ['Morning briefing (5-min summary)', '12%', '33%', '71%']
        ],
        note: 'Illustrative data. Users can use several features.'
      },
      {
        title: 'Exhibit 2 - Push volume and opt-outs',
        cols: ['Month', 'Pushes per day', 'Push open rate', 'Push opt-outs in month'],
        rows: [
          ['Jan', '3', '7.1%', '1.2%'],
          ['Mar', '4', '6.0%', '1.9%'],
          ['May', '5', '4.8%', '2.8%'],
          ['Jul', '6', '3.9%', '3.6%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'What do the high-DAU/MAU features have in common?',
      'Exhibit 2: is sending more pushes working?',
      'Which one initiative would you start with and how would you measure it?',
      'How would you avoid cannibalising subscription revenue if puzzles are free?'
    ],
    strong: [
      'Notices that puzzles and the morning briefing are ritual, finite, daily formats with 33-41% DAU/MAU and 71-79% retention, while push-driven breaking news is the least sticky.',
      'Reads Exhibit 2: doubling pushes from 3 to 6 per day cut open rate almost in half and tripled opt-outs, so total push-driven opens barely grew while the channel erodes.',
      'Proposes making the morning briefing and puzzles discoverable (onboarding, home screen, a single morning push), plus reducing push volume and personalising it.',
      'Primary metric: DAU/MAU or days active per week per user; guardrails: push opt-outs and ad revenue.'
    ],
    traps: [
      'Recommending more notifications.',
      'Assuming puzzles cause retention without considering who uses them.'
    ],
    insight: 'Habit comes from finite daily rituals (briefing, puzzles), not breaking-news pushes, whose rising volume is burning the channel; surface the rituals and cut push volume.'
  },
  {
    id: 'a-kibo-repeat-transfers',
    cat: 'improve',
    style: 'Fintech',
    lvl: 'Medium',
    min: 25,
    title: 'Improve repeat usage of a remittance app',
    prompt: 'Kibo is a remittance app for migrants in the US sending money home. Only 61% of first-time senders send again within 60 days. How would you improve that?',
    brief: [
      'Kibo serves US-to-Mexico, Philippines, India and Nigeria corridors. Average transfer is US$300; senders who stay transfer about twice a month.',
      'Kibo charges a US$3.99 fee plus an FX margin of 1.2%. Competitors often advertise lower fees but use wider FX margins.',
      'New users go through identity checks (KYC). Some first transfers are held for manual review.',
      'Contribution per transfer is about US$5.50; CAC is about US$38.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Repeat within 60 days by first-transfer experience',
        cols: ['First transfer', 'Share of new senders', 'Repeat within 60 days', 'Avg time to deliver'],
        rows: [
          ['No KYC hold', '82%', '66%', '12 min'],
          ['KYC hold (manual review)', '18%', '38%', '26 h'],
          ['Blended', '100%', '61%', '-']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Repeat by payout method',
        cols: ['Payout method', 'Share of first transfers', 'Repeat within 60 days'],
        rows: [
          ['Mobile wallet', '30%', '70%'],
          ['Bank deposit', '45%', '61%'],
          ['Cash pickup', '25%', '52%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 3 - Price comparison on a $300 transfer (survey of lapsed users\' reason + price check)',
        cols: ['Provider', 'Fee', 'FX margin', 'Total cost', 'Lapsed users who said "found it cheaper elsewhere"'],
        rows: [
          ['Kibo', '$3.99', '1.2% ($3.60)', '$7.59', '-'],
          ['Competitor X', '$2.99', '1.8% ($5.40)', '$8.39', '27%'],
          ['Competitor Y', '$0', '2.6% ($7.80)', '$7.80', '19%']
        ],
        note: 'Illustrative data. 46% of lapsed users cite price as a reason.'
      }
    ],
    follow: [
      'Which lever would you pull first, and why?',
      'Exhibit 3 shows Kibo is actually cheapest. Why do lapsed users think otherwise?',
      'How would you reduce KYC holds without increasing fraud?',
      'Size the value of fixing the KYC hold experience.',
      'Cash pickup repeat is lowest. What might be going on for those recipients?'
    ],
    strong: [
      'Identifies the KYC hold: 18% of first transfers wait 26h and repeat at 38% vs 66%. Even halving the gap adds about 2.5pp to blended repeat.',
      'Proposes upfront KYC before the first transfer (verify while the user sets up), clear status messages, faster review SLAs, and a small goodwill credit after a hold.',
      'Uses Exhibit 3: Kibo is cheapest on total cost ($7.59) but its visible fee is highest, so it loses the price perception battle; proposes showing total cost and recipient amount versus competitors.',
      'Sizes value: each extra repeat sender is worth multiple transfers x $5.50; with CAC $38, retention lifts directly improve payback.',
      'Considers cash pickup recipients (agent hours, queues) and nudges toward wallets where available.'
    ],
    traps: [
      'Cutting the fee without realising Kibo already has the lowest total cost.',
      'Loosening KYC in a way that creates compliance risk.'
    ],
    insight: 'The two fixable leaks are the 26-hour KYC hold on 18% of first transfers and a price-perception problem: Kibo is the cheapest on total cost but shows the highest fee.'
  },
  {
    id: 'a-mindful-trial-conversion',
    cat: 'improve',
    style: 'Consumer subscription',
    lvl: 'Easy',
    min: 20,
    title: 'Improve trial-to-paid for a meditation app',
    prompt: 'Mindful offers a 7-day free trial that converts to an annual plan. Trial-to-paid is about 26%. How would you improve it?',
    brief: [
      'Mindful is a meditation and sleep app; the annual plan costs US$69.99.',
      'Users start the trial during onboarding by entering payment details; they are charged on day 7 unless they cancel.',
      'Leadership wants a higher conversion without generating refund requests or app-store complaints.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Trial-to-paid by days active during trial',
        cols: ['Days active in trial', 'Share of trialists', 'Trial-to-paid'],
        rows: [
          ['0-1 days', '48%', '9%'],
          ['2-3 days', '32%', '31%'],
          ['4+ days', '20%', '58%'],
          ['Blended', '100%', '25.8%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - When trialists cancel',
        cols: ['Day of cancellation', 'Share of cancellations'],
        rows: [
          ['Day 0-1', '63%'],
          ['Day 2-5', '14%'],
          ['Day 6-7', '23%']
        ],
        note: 'Illustrative data. Most day 0-1 cancels happen within 10 minutes of starting the trial.'
      }
    ],
    follow: [
      'What does the day 0-1 cancellation spike tell you about user psychology?',
      'Which group of trialists would you focus on?',
      'Propose two experiments and their metrics.',
      'What guardrails protect against dark patterns here?'
    ],
    strong: [
      'Reads Exhibit 2: 63% cancel almost immediately, likely to avoid forgetting the charge, not because of the product, so a trusted reminder before charging (and saying so upfront) can reduce defensive cancels.',
      'Focuses on getting trialists from 0-1 days to 2-3+ days active: a personalised day-1 plan, evening sleep content reminders, short sessions.',
      'Sizes: moving 10% of trialists from 0-1 to 2-3 days lifts conversion by about 2.2pp (0.10 x (31 - 9)).',
      'Guardrails: refund rate, app-store rating, month-13 renewal rate.'
    ],
    traps: [
      'Hiding the cancel button or making cancellation harder.',
      'Lengthening the trial without looking at activity data.'
    ],
    insight: 'Conversion is driven by early engagement and by trust: most cancellations are defensive day-0 cancels, so a transparent reminder promise plus a strong first 3 days beats any paywall tweak.'
  },
  {
    id: 'a-gigly-fill-rate',
    cat: 'improve',
    style: 'Marketplace',
    lvl: 'Medium',
    min: 25,
    title: 'Improve job fill rate on a freelance marketplace',
    prompt: 'Gigly is a freelance marketplace for small businesses. About 70% of posted jobs get hired within 7 days. How would you raise the fill rate?',
    brief: [
      'Gigly takes 10% from freelancers and a 5% client fee. Average job value is US$450.',
      'Clients post a job with a budget; freelancers send proposals; the client hires one.',
      'Unfilled clients rarely come back: their 90-day return rate is 12% vs 55% for clients who hired.',
      'Typical service-marketplace take rates are 10-30%, so Gigly sits at the low-middle of the range.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Jobs posted last quarter by category',
        cols: ['Category', 'Jobs posted', 'Filled in 7 days', 'Fill rate', 'Median time to first proposal', 'Avg proposals per job'],
        rows: [
          ['Web development', '12,000', '9,360', '78%', '3 h', '14'],
          ['Design', '8,000', '5,680', '71%', '5 h', '11'],
          ['Data and analytics', '4,000', '2,080', '52%', '19 h', '4'],
          ['Translation', '3,000', '2,490', '83%', '2 h', '9'],
          ['Video editing', '3,000', '1,470', '49%', '22 h', '3'],
          ['Total', '30,000', '21,080', '70.3%', '-', '-']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Data and video jobs: fill rate by budget vs category median rate',
        cols: ['Budget vs median rate', 'Share of jobs', 'Fill rate'],
        rows: [
          ['Below 70% of median', '45%', '31%'],
          ['70-100% of median', '35%', '62%'],
          ['Above median', '20%', '78%']
        ],
        note: 'Illustrative data. Combined data and video: 7,000 jobs, 3,550 filled = 50.7%.'
      }
    ],
    follow: [
      'Where would you focus and why?',
      'Is the problem in data/video a supply shortage or a pricing problem?',
      'What would you build for clients, and what for freelancers?',
      'Size the impact of raising data/video fill rate to 65%.',
      'What could go wrong if you nudge clients to raise budgets?'
    ],
    strong: [
      'Spots that data and video editing fill at about 50% vs 70%+ elsewhere, with slow first proposals and few proposals per job.',
      'Uses Exhibit 2: 45% of those jobs have budgets far below market and fill at 31%; so part of the problem is client pricing, not just supply.',
      'Proposes budget guidance at posting (show typical rates, scope templates), plus supply actions: invite matching freelancers, alerts for niche skills, recruit supply.',
      'Sizes: lifting 7,000 jobs from 50.7% to 65% adds about 1,000 filled jobs per quarter x $450 x 15% = about $67k take per quarter, plus higher client return rates (55% vs 12%).',
      'Guardrails: job post volume (budget nudges may scare clients) and freelancer win rate.'
    ],
    traps: [
      'Recruiting more freelancers across all categories.',
      'Ignoring the budget-mismatch signal.'
    ],
    insight: 'The fill-rate gap is concentrated in data and video, where under-priced budgets (45% of jobs fill at 31%) starve proposals; pricing guidance at posting plus targeted supply is the lever.'
  },

  // ======================= METRICS (8) =======================
  {
    id: 'a-ridely-pool-launch',
    cat: 'metrics',
    style: 'Uber-style',
    lvl: 'Medium',
    min: 30,
    title: 'Was the shared-ride test a success?',
    prompt: 'Ridely tested a cheaper shared ride ("Ridely Pool") in Bogota for 4 weeks. Define success metrics and tell us whether to launch based on the results.',
    brief: [
      'Ridely randomised 400k riders in Bogota: half saw Pool as an option (treatment), half did not (control). Drivers were shared across both groups.',
      'Pool fares are about 30% cheaper than a solo ride. Two riders going in a similar direction can be matched into one car.',
      'Company goals for the year: grow trips and reach positive contribution margin per city.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Rider experiment results (4 weeks, per rider per week)',
        cols: ['Metric', 'Control', 'Treatment', 'Delta'],
        rows: [
          ['Riders', '200,000', '200,000', '-'],
          ['Trips per rider', '1.80', '1.96', '+8.9%'],
          ['Share of trips that are Pool', '0%', '31%', '-'],
          ['Gross bookings per rider (US$)', '9.90', '10.10', '+2.0%'],
          ['Average fare per trip (US$)', '5.50', '5.15', '-6.4%'],
          ['Contribution margin per trip (US$)', '0.62', '0.55', '-11.3%'],
          ['Rider cancel rate', '7.9%', '8.6%', '+0.7pp']
        ],
        note: 'Illustrative data. All deltas significant at p < 0.05 except cancel rate (p = 0.08).'
      },
      {
        title: 'Exhibit 2 - Pool trip quality',
        cols: ['Metric', 'Pool', 'Solo (same period)'],
        rows: [
          ['Requests matched with a co-rider', '48%', 'n/a'],
          ['Avg detour added', '6.1 min', '-'],
          ['Avg rating', '4.62', '4.81'],
          ['Pickup ETA', '5.4 min', '4.4 min']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 3 - City-wide driver metrics (all riders), before vs during test',
        cols: ['Metric', '4 weeks before', 'During test'],
        rows: [
          ['Driver earnings per online hour (US$)', '6.10', '6.25'],
          ['Driver utilisation (time with a rider)', '58%', '63%'],
          ['Median pickup ETA, control riders', '4.0 min', '4.3 min']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'What is your primary metric for this launch, and why?',
      'Compute contribution margin per rider per week in each arm. What do you see?',
      'Exhibit 3 shows control riders\' ETA got worse during the test. What does that mean for the validity of the experiment?',
      'Only 48% of Pool requests got matched. How does that affect economics, and how would it change at scale?',
      'What test design would you use next?',
      'Launch, iterate, or kill? Defend it.'
    ],
    strong: [
      'Picks a primary metric tied to the goals, such as contribution margin per rider (or trips subject to a margin guardrail), not trips alone.',
      'Computes margin per rider per week: control 1.80 x 0.62 = $1.116, treatment 1.96 x 0.55 = $1.078, about -3.4%, so trips grow but margin per rider falls.',
      'Spots cannibalisation: trips +8.9% but gross bookings only +2.0%; much of Pool is substitution from solo rides.',
      'Notices interference (SUTVA violation): drivers are shared, so control ETAs also worsened (4.0 to 4.3); recommends a switchback or city/time-sliced test.',
      'Links match rate (48%) to unit economics: unmatched Pool trips are discounted solo rides; match rates rise with density, so economics may improve at scale.',
      'Recommends iterate: launch only in dense corridors/peak times, or adjust the pricing gap, and re-test with switchbacks.'
    ],
    traps: [
      'Declaring success because trips went up 8.9%.',
      'Ignoring network effects between experiment arms.',
      'Ignoring rider experience metrics (ratings, detours).'
    ],
    insight: 'Pool grew trips but cut contribution per rider by about 3% through cannibalisation at a 48% match rate, and the rider-randomised test is contaminated by shared drivers; iterate with a switchback test in dense zones.'
  },
  {
    id: 'a-snapgram-story-reactions',
    cat: 'metrics',
    style: 'Meta-style',
    lvl: 'Medium',
    min: 25,
    title: 'Measuring quick reactions on Stories',
    prompt: 'Snapgram, a photo-sharing social app, tested one-tap emoji reactions on Stories. How would you measure success, and would you ship based on these results?',
    brief: [
      'Snapgram has 300M DAU. Stories are viewed by about 70% of DAU daily. Before the test, the only way to respond to a story was to send a text reply into DMs.',
      'The team\'s hypothesis: lightweight reactions give creators more feedback, which makes them post more.',
      'Leadership worries that reactions could replace replies, and DM conversations are a key driver of long-term retention.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Experiment results (2 weeks, 5% of users in each arm)',
        cols: ['Metric', 'Control', 'Treatment', 'Delta'],
        rows: [
          ['Reactions per 1,000 story views', '0', '41', '-'],
          ['Text replies per 1,000 story views', '12.0', '9.8', '-18%'],
          ['Total interactions per 1,000 story views', '12.0', '50.8', '+323%'],
          ['Stories posted per poster per week', '2.40', '2.54', '+5.8%'],
          ['Story viewers DAU', 'baseline', '+0.0%', 'n.s.'],
          ['DM conversations (3+ messages) per user per week', '1.90', '1.74', '-8.4%']
        ],
        note: 'Illustrative data. Treatment randomised at the user level for both posting and viewing.'
      },
      {
        title: 'Exhibit 2 - Historical correlation with 6-month retention',
        cols: ['Behaviour (weekly)', 'Users with behaviour: 6-month retention', 'Users without: 6-month retention'],
        rows: [
          ['Posts at least 1 story', '88%', '71%'],
          ['Has 1+ DM conversation', '91%', '64%'],
          ['Receives any story feedback', '87%', '73%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'What is your primary success metric? Is "total interactions" a good one?',
      'How do you weigh +5.8% posting against -8.4% DM conversations?',
      'Given network effects, is a user-level randomisation trustworthy here?',
      'Propose a design change that keeps the posting benefit but protects conversations.',
      'What would you monitor long term if you ship?'
    ],
    strong: [
      'Rejects "total interactions +323%" as a vanity metric because a reaction is worth less than a reply.',
      'Frames the trade-off: creator posting up (supply), but deeper conversations down; both correlate with retention in Exhibit 2, and DMs have the larger gap (91% vs 64%).',
      'Flags network effects: a poster in treatment may have viewers in control, diluting results; suggests cluster/graph-based randomisation.',
      'Proposes iterating: reaction opens a reply composer, or reactions start a DM thread so creators can respond, then re-test with conversations as a guardrail.',
      'Recommends not shipping as-is, or shipping only with a conversation guardrail met, and running a long-term holdout.'
    ],
    traps: [
      'Shipping because interactions went up 4x.',
      'Treating Exhibit 2 correlations as causal effects.'
    ],
    insight: 'Reactions boost posting but substitute for replies and cut DM conversations by 8%, the behaviour most tied to retention; iterate so reactions lead into conversations before shipping.'
  },
  {
    id: 'a-cartwise-plus-membership',
    cat: 'metrics',
    style: 'E-commerce',
    lvl: 'Hard',
    min: 35,
    title: 'Is the delivery membership actually working?',
    prompt: 'Cartwise launched Cartwise Plus, a US$9.99/month free-delivery membership. The CEO says members order 2.4x more, so it is a huge success. How would you measure whether Plus is really working?',
    brief: [
      'Cartwise normally charges a US$3.99 delivery fee per order. Plus members pay US$9.99 per month and get free delivery on orders above US$35.',
      'Plus has 120k members out of 1M monthly active customers after 9 months.',
      'Contribution per order before delivery fee is about US$6.00. Delivery cost is the same with or without Plus.',
      'The finance team wants to know whether to spend US$5M on marketing Plus next year.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - The CEO\'s slide (last month)',
        cols: ['Segment', 'Customers', 'Orders per customer per month', 'Average order value'],
        rows: [
          ['Plus members', '120,000', '4.1', '$68'],
          ['Non-members', '880,000', '1.7', '$54']
        ],
        note: 'Illustrative data. 4.1 / 1.7 = 2.4x.'
      },
      {
        title: 'Exhibit 2 - Members who joined in Q1 vs matched non-members',
        cols: ['Group', 'Orders/month, 3 months before', 'Orders/month, 3 months after'],
        rows: [
          ['Q1 joiners (n = 30,000)', '2.6', '3.4'],
          ['Matched non-members (same pre-period behaviour)', '2.6', '2.7']
        ],
        note: 'Illustrative data. Matching on orders, AOV, tenure and city.'
      }
    ],
    follow: [
      'What is wrong with the CEO\'s 2.4x comparison?',
      'Using Exhibit 2, estimate the incremental orders per member.',
      'Calculate the incremental contribution per member per month. Is Plus profitable?',
      'What would you choose as the north star and the guardrails for Plus?',
      'How would you design a cleaner causal test before spending US$5M?',
      'What long-term effects might the matched analysis miss?'
    ],
    strong: [
      'Identifies selection bias: heavy buyers self-select into Plus; Exhibit 2 shows joiners already ordered 2.6/month vs 1.7 for the average non-member.',
      'Computes incremental orders with difference-in-differences: (3.4 - 2.6) - (2.7 - 2.6) = +0.7 orders/month (about +26% vs the 2.7 counterfactual).',
      'Computes economics: fee revenue $9.99 minus lost delivery fees on the 2.7 baseline orders (2.7 x $3.99 = $10.77) = -$0.78, plus incremental contribution 0.7 x $6 = +$4.20, so about +$3.42 per member per month: positive but far smaller than the headline suggests.',
      'Proposes north star such as incremental contribution per member (or retained members x incremental orders), guardrails on non-member conversion and delivery capacity.',
      'Recommends a randomised offer test (holdout of eligible customers who do not see Plus marketing) or geo test to measure incrementality before the US$5M spend.',
      'Mentions longer-term effects: retention/churn of members, share-of-wallet vs competitors.'
    ],
    traps: [
      'Accepting the 2.4x correlation as the effect of Plus.',
      'Forgetting the delivery fees members no longer pay.',
      'Only listing metrics without an incrementality method.'
    ],
    insight: 'The 2.4x is mostly selection; the matched comparison suggests about +0.7 incremental orders per member and roughly +$3.4 incremental contribution per month, so Plus works modestly and needs a holdout test before scaling marketing.'
  },
  {
    id: 'a-docuflow-north-star',
    cat: 'metrics',
    style: 'B2B SaaS',
    lvl: 'Easy',
    min: 20,
    title: 'Choosing a north star for a collaborative docs tool',
    prompt: 'Docuflow is a collaborative document tool sold to teams. Pick a north star metric and justify it using the data.',
    brief: [
      'Docuflow is a product-led B2B SaaS tool: teams start free and upgrade at US$8 per user per month.',
      'The board currently tracks sign-ups and total documents created. Revenue retention is the main concern.',
      'The analytics team compared candidate metrics by how well they separate teams that renew vs churn.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Candidate metrics',
        cols: ['Candidate metric', 'Current value', 'MoM growth', '12-month team retention: top quartile', '12-month team retention: bottom quartile'],
        rows: [
          ['New sign-ups per month', '48,000', '+12%', '61%', '52%'],
          ['Documents created per week', '410,000', '+9%', '70%', '44%'],
          ['Weekly active teams (3+ active users)', '21,000', '+4%', '84%', '31%'],
          ['Documents edited by 2+ people in a week', '96,000', '+6%', '88%', '27%'],
          ['Minutes in app per user per day', '34', '+2%', '55%', '58%']
        ],
        note: 'Illustrative data. Quartiles are based on each team\'s value of the metric in its first 60 days.'
      }
    ],
    follow: [
      'Why not just use sign-ups, the fastest-growing number?',
      'Minutes in app looks like engagement. Why does it not separate retention?',
      'What would be the guardrail metrics alongside your north star?',
      'How would different teams (growth, editor, enterprise) contribute to the north star?'
    ],
    strong: [
      'Picks a collaboration-based metric (documents edited by 2+ people per week, or weekly active collaborative teams) because it best separates retention (88% vs 27%) and reflects the core value of collaboration.',
      'Explains sign-ups and documents created are volume/vanity metrics with weak retention signal.',
      'Notes time-in-app is flat or inverse (55% vs 58%), likely because struggling users spend more time.',
      'Adds guardrails (e.g. paid seat churn, performance, support tickets) and input metrics per team.'
    ],
    traps: [
      'Picking revenue as the north star (lagging, not actionable).',
      'Picking the metric with the fastest growth.'
    ],
    insight: 'Multi-editor document activity is the best predictor of retention (88% vs 27%), capturing collaboration value; sign-ups and time-in-app are weak or misleading.'
  },
  {
    id: 'a-vidya-live-classes',
    cat: 'metrics',
    style: 'Edtech',
    lvl: 'Medium',
    min: 25,
    title: 'Success metrics for live classes',
    prompt: 'Vidya, an online learning platform in India, added live classes to its coding courses. Define success metrics and tell us whether live classes should expand to all courses.',
    brief: [
      'Vidya sells 10-week coding courses for INR 4,000. Historically courses were recorded video only.',
      'A pilot course added 10 weekly live sessions with an instructor, while keeping recordings available.',
      'Live classes cost about INR 1,400 per learner vs INR 350 for recorded-only delivery.',
      'Leadership cares about completion (which drives referrals) and renewal into the next course.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Live attendance by session (pilot, 6,000 learners)',
        cols: ['Session', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        rows: [
          ['Attended live', '78%', '64%', '55%', '47%', '41%', '36%', '31%', '28%', '25%', '22%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Outcomes by share of sessions attended live',
        cols: ['Attended live', 'Share of learners', 'Course completion', 'Renewal into next course'],
        rows: [
          ['60%+ of sessions', '18%', '71%', '48%'],
          ['20-60%', '30%', '44%', '29%'],
          ['Under 20%', '52%', '19%', '14%'],
          ['Pilot blended', '100%', '35.9%', '24.6%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 3 - Recorded-only course (same subject, prior cohort)',
        cols: ['Metric', 'Value'],
        rows: [
          ['Completion', '21%'],
          ['Renewal into next course', '15%'],
          ['Delivery cost per learner', 'INR 350']
        ],
        note: 'Illustrative data. Prior cohort, not randomised against the pilot.'
      }
    ],
    follow: [
      'What is your primary success metric for live classes?',
      'Exhibit 2 shows 71% completion for frequent attendees. Can you attribute that to live classes?',
      'Is the pilot worth its extra cost? Work through rough economics.',
      'Attendance halves by session 5. What does that suggest about the format?',
      'How would you design the test before expanding?'
    ],
    strong: [
      'Chooses completion (or renewal) per learner as the primary metric, with live attendance as an input metric, and cost per completer as a guardrail.',
      'Flags self-selection: motivated learners both attend live and complete; Exhibit 2 is not causal.',
      'Compares pilot vs recorded: completion 35.9% vs 21%, renewal 24.6% vs 15%, but cohorts are not randomised.',
      'Rough economics: extra cost INR 1,050 per learner vs extra renewal of about 9.6pp x INR 4,000 = about INR 384 per learner, so live classes do not pay back on renewals alone unless referrals or pricing change; suggests a premium live tier or cheaper formats (group office hours).',
      'Notes the steep attendance decay and suggests fewer, better-timed sessions; proposes a randomised test.'
    ],
    traps: [
      'Concluding live classes triple completion from Exhibit 2.',
      'Ignoring the 4x delivery cost.'
    ],
    insight: 'Live classes correlate with much better outcomes but attendance decays fast and the uplift vs recorded (about +15pp completion, +10pp renewal) does not cover the 4x cost on renewals alone; test a cheaper or premium-priced format in a randomised trial.'
  },
  {
    id: 'a-pocketa-fraud-threshold',
    cat: 'metrics',
    style: 'Fintech',
    lvl: 'Hard',
    min: 35,
    title: 'The right metric for a fraud model',
    prompt: 'Pocketa\'s fraud team sets its card-fraud model threshold to minimise fraud losses. Is that the right metric? Use the data to recommend a threshold.',
    brief: [
      'Pocketa processes about 10M debit card transactions per month, US$400M in volume. Attempted fraud is about US$480k per month.',
      'The fraud team is measured on fraud losses in basis points of volume, and currently uses a 0.80 threshold (transactions scoring above the threshold risk are blocked).',
      'Every blocked good transaction (false decline) costs interchange revenue and annoys customers; some leave.',
      'Average good transaction: US$40; Pocketa earns 1.4% interchange. Customer lifetime value: US$120.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Model performance at different thresholds (monthly)',
        cols: ['Threshold', 'Fraud caught', 'Fraud losses', 'False decline rate', 'Good transactions declined'],
        rows: [
          ['0.95', '55%', '$216k', '0.10%', '10,000'],
          ['0.90', '68%', '$154k', '0.25%', '25,000'],
          ['0.80 (current)', '80%', '$96k', '0.60%', '60,000'],
          ['0.70', '87%', '$62k', '1.30%', '130,000'],
          ['0.60', '92%', '$38k', '2.50%', '250,000']
        ],
        note: 'Illustrative data. Fraud losses = $480k x (1 - fraud caught).'
      },
      {
        title: 'Exhibit 2 - Cost of a false decline',
        cols: ['Component', 'Value'],
        rows: [
          ['Lost interchange per declined transaction', '$0.56 ($40 x 1.4%)'],
          ['Monthly churn of customers with a false decline', '4.0%'],
          ['Monthly churn of other customers', '1.5%'],
          ['Extra churn cost per false decline', '$3.00 (2.5pp x $120 LTV)'],
          ['Total cost per false decline', 'about $3.56']
        ],
        note: 'Illustrative data. Assumes roughly one false decline per affected customer.'
      },
      {
        title: 'Exhibit 3 - Where false declines happen (current threshold)',
        cols: ['Customer tenure', 'Share of transactions', 'Share of false declines', 'Churn after false decline'],
        rows: [
          ['First 30 days', '8%', '60%', '9.0%'],
          ['31+ days', '92%', '40%', '2.6%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'What is the total cost (fraud + false declines) at each threshold?',
      'Why is "fraud losses in bps" a dangerous metric on its own?',
      'Exhibit 3: what does the concentration of false declines in new customers suggest?',
      'What metric would you give the fraud team instead, and what guardrails?',
      'How would you roll out a threshold change safely?'
    ],
    strong: [
      'Computes total cost: 0.95 about $252k; 0.90 about $243k; 0.80 about $310k; 0.70 about $525k; 0.60 about $928k. The current threshold is about $67k/month worse than 0.90.',
      'Explains that a single-sided metric (fraud bps) pushes the team to over-block; recommends a total cost of fraud metric (fraud losses + false decline costs), with fraud bps and regulatory chargeback limits as guardrails.',
      'Uses Exhibit 3: new customers get 60% of false declines from 8% of transactions and churn at 9%, so the cost per false decline is higher for them; suggests segment-specific thresholds or step-up verification (OTP) instead of declining.',
      'Notes uncertainty: churn effect is observational; propose an experiment (randomly route a small share to a different threshold).',
      'Mentions network/issuer limits on fraud rates and reputational risk as constraints.'
    ],
    traps: [
      'Minimising fraud at any cost.',
      'Forgetting customer lifetime effects of false declines.',
      'Treating the threshold as one-size-fits-all.'
    ],
    insight: 'Optimising fraud losses alone over-blocks: total cost is lowest around 0.90 (about $243k vs $310k at the current 0.80), and new customers bear most false declines, so segment-specific thresholds or step-up verification are better.'
  },
  {
    id: 'a-trackr-sleep-coaching',
    cat: 'metrics',
    style: 'Hardware',
    lvl: 'Easy',
    min: 20,
    title: 'Metrics for a wearable\'s sleep coaching',
    prompt: 'Trackr, a smart-ring company, launched sleep coaching in its app. How would you measure success, and what does the early data tell you?',
    brief: [
      'Trackr sells a US$299 ring plus a US$5.99/month membership. 400k rings are active.',
      'Sleep coaching gives a nightly tip and a weekly plan based on sleep data. It is free for members.',
      'The company\'s business depends on people wearing the ring daily and keeping the membership.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Sleep coaching funnel (first 6 weeks)',
        cols: ['Step', 'Users', 'Share of active rings'],
        rows: [
          ['Active rings', '400,000', '100%'],
          ['Opened sleep tab weekly', '248,000', '62%'],
          ['Enabled coaching', '72,000', '18%'],
          ['Followed 1+ recommendation (self-reported)', '36,000', '9%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Coaching users vs others',
        cols: ['Metric', 'Enabled coaching', 'Did not enable'],
        rows: [
          ['Nights worn per week (before launch)', '5.6', '4.6'],
          ['Nights worn per week (after launch)', '6.1', '4.7'],
          ['Membership cancellation (monthly)', '1.1%', '2.4%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'What would be your primary metric for sleep coaching?',
      'Exhibit 2: how much of the difference is caused by coaching?',
      'Only 18% enabled coaching. Is that a problem?',
      'Would you use "sleep score improvement" as a metric? Why or why not?'
    ],
    strong: [
      'Chooses nights worn per week (or membership retention) as primary because it ties to the business model; coaching engagement as input metric.',
      'Notes pre-existing difference: coaching users already wore the ring 5.6 vs 4.6 nights before launch; the incremental effect is closer to +0.4 nights (6.1 - 5.6 vs 4.7 - 4.6), a difference-in-differences estimate.',
      'Flags low enablement (18%) and self-reported adherence as weak data; suggests default-on for a test group.',
      'Discusses sleep score as a user-value metric but noisy and gameable; good as secondary.'
    ],
    traps: [
      'Claiming coaching halves cancellations based on Exhibit 2.',
      'Using tab opens as the success metric.'
    ],
    insight: 'Coaching users were already more engaged; the diff-in-diff suggests a real but modest +0.4 nights worn per week, and low enablement means the next step is a default-on randomised test.'
  },
  {
    id: 'a-searchly-ai-answers',
    cat: 'metrics',
    style: 'Google-style',
    lvl: 'Hard',
    min: 40,
    title: 'Measuring AI answers in search',
    prompt: 'Searchly, a search engine, tested AI-generated answers at the top of results. Clicks and ad revenue went down. How should Searchly measure success, and what would you recommend?',
    brief: [
      'Searchly handles about 1B queries per day and earns revenue from ads on results pages.',
      'The AI answer appears above results for queries where the model is confident. Test ran for 4 weeks on 2% of users.',
      'Leadership mission: help people find information faster. But publishers and advertisers depend on clicks.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Experiment results',
        cols: ['Metric', 'Control', 'Treatment', 'Delta'],
        rows: [
          ['Queries per user per day', '4.10', '4.18', '+2.0%'],
          ['Organic click-through rate', '62%', '51%', '-11pp'],
          ['Ad click-through rate', '3.2%', '2.7%', '-15.6%'],
          ['"Good abandonment" (no click, no re-query within 60s)', '14%', '24%', '+10pp'],
          ['Query refinement rate', '18%', '15%', '-3pp'],
          ['Latency p50', '0.45 s', '1.10 s', '+0.65 s'],
          ['Revenue per 1,000 queries', '$42.0', '$35.4', '-15.7%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Effects by query type',
        cols: ['Query type', 'Share of queries', 'AI answer shown', 'Organic CTR change', 'Refinement change', 'Ad revenue change'],
        rows: [
          ['Navigational (e.g. "bank login")', '25%', '3%', '-1pp', '0pp', '0%'],
          ['Short informational', '35%', '70%', '-16pp', '-2pp', '-5%'],
          ['Complex / multi-step', '15%', '85%', '-20pp', '-9pp', '-2%'],
          ['Commercial (e.g. "best running shoes")', '25%', '60%', '-12pp', '-1pp', '-21%']
        ],
        note: 'Illustrative data. Most ad revenue comes from commercial queries.'
      }
    ],
    follow: [
      'Is a lower click-through rate bad here? How do you tell good from bad abandonment?',
      'What is your primary metric for user value, and what are the guardrails?',
      'Exhibit 2: where do AI answers help users most, and where do they cost the most money?',
      'How would you measure the long-term effect on queries per user?',
      'What is your recommendation for launch?'
    ],
    strong: [
      'Explains that lower CTR can mean success (the answer satisfied the need); uses good abandonment, lower refinements and higher queries per user as user-value signals, while noting good abandonment is a proxy.',
      'Defines a primary user metric (e.g. sessions with successful task completion, or long-run queries per user) with guardrails on revenue per 1,000 queries, latency, publisher traffic and answer accuracy.',
      'Uses Exhibit 2: complex queries benefit most (refinement -9pp) with tiny revenue cost; commercial queries lose 21% ad revenue with almost no user benefit (-1pp refinement).',
      'Recommends a targeted launch: show AI answers on complex and informational queries, not commercial ones (or design ad formats inside answers), and fix latency.',
      'Proposes a long-term holdout to measure habit effects since 4 weeks is too short, and mentions ecosystem health (publisher clicks).'
    ],
    traps: [
      'Treating CTR as the success metric for an answer product.',
      'Optimising only revenue and killing the feature.',
      'Ignoring the latency increase.'
    ],
    insight: 'User value concentrates in complex queries while revenue loss concentrates in commercial ones; launch AI answers selectively by query type, fix latency, and use a long-term holdout to measure habit effects.'
  },

  // ======================= RCA (8) =======================
  {
    id: 'a-ridely-cancellations',
    cat: 'rca',
    style: 'Uber-style',
    lvl: 'Medium',
    min: 25,
    title: 'Ride cancellations jumped 30%',
    prompt: 'Ridely\'s cancellation rate went from about 8% to about 10.6% over three weeks. Find the root cause.',
    brief: [
      'Ridely is a ride-hailing app in Latin America with about 2.4M ride requests per week across four cities.',
      'A cancellation is any accepted request that does not become a trip, whether the rider or the driver cancels.',
      'In week 4, Ridely released driver app v5.2 (both Android and iOS) with a new battery-saving location mode. Rollout was staged; some Android drivers are still on v5.1.',
      'No pricing changes happened in this period. A competitor ran a rider promotion in Lima in week 5.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Weekly cancellations',
        cols: ['Week', 'Requests', 'Rider cancels', 'Driver cancels', 'Total cancel rate'],
        rows: [
          ['W1', '2,410k', '5.2%', '2.9%', '8.1%'],
          ['W2', '2,435k', '5.1%', '3.0%', '8.1%'],
          ['W3', '2,450k', '5.3%', '2.9%', '8.2%'],
          ['W4', '2,470k', '5.2%', '4.6%', '9.8%'],
          ['W5', '2,480k', '5.3%', '5.2%', '10.5%'],
          ['W6', '2,490k', '5.2%', '5.4%', '10.6%']
        ],
        note: 'Illustrative data. Increase is similar across all four cities.'
      },
      {
        title: 'Exhibit 2 - Week 6 driver cancel rate by driver app',
        cols: ['Driver app', 'Share of trips', 'Driver cancel rate'],
        rows: [
          ['Android v5.2', '41%', '8.9%'],
          ['Android v5.1', '17%', '2.9%'],
          ['iOS v5.2', '42%', '3.0%'],
          ['Weighted total', '100%', '5.4%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 3 - Android v5.2 diagnostics',
        cols: ['Metric', 'W3 (before)', 'W6 Android v5.2'],
        rows: [
          ['Avg age of driver GPS location at dispatch', '4 s', '41 s'],
          ['Avg pickup ETA shown to driver after accepting', '4.1 min', '6.8 min'],
          ['Driver cancel reason "pickup too far"', '22%', '58%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Before diving in, what would you check about the metric itself?',
      'Is this a rider-side or driver-side problem? How do you know?',
      'Exhibit 2: iOS also got v5.2. Why is only Android affected?',
      'Explain the mechanism from stale GPS to a cancellation.',
      'What is your immediate fix, and what would you do longer term?',
      'Does the Lima competitor promotion explain anything?'
    ],
    strong: [
      'Decomposes total cancels into rider vs driver: rider cancels are flat (about 5.2%), driver cancels nearly doubled (2.9% to 5.4%) starting W4, the release week.',
      'Segments by app version/platform: only Android v5.2 spiked (8.9%) while Android v5.1 and iOS v5.2 are at baseline; verifies the weighted average adds up to 5.4%.',
      'Uses Exhibit 3: battery-saving mode on Android sends stale locations (41 s old), so dispatch picks drivers who are actually further away; they see a long pickup and cancel.',
      'Rules out the Lima promotion and seasonality because the change is uniform across cities and tied to driver cancels.',
      'Recommends rollback or hotfix (disable battery mode in Android v5.2 or force fresh GPS at dispatch), then monitoring driver cancels and ETA accuracy; long term, add release guardrails on cancel rate.'
    ],
    traps: [
      'Blaming the competitor or seasonality without segmenting.',
      'Stopping at "the release caused it" without explaining why only Android.',
      'Not separating rider from driver cancellations.'
    ],
    insight: 'Driver cancels on Android v5.2 drove the whole increase: its battery-saving mode sends stale GPS, dispatch assigns far-away drivers, and they cancel because the pickup is too far.'
  },
  {
    id: 'a-snapgram-dau-drop',
    cat: 'rca',
    style: 'Meta-style',
    lvl: 'Medium',
    min: 25,
    title: 'DAU down 3% in two weeks',
    prompt: 'Snapgram\'s global DAU fell about 3% over the last two weeks. Walk us through how you would find the root cause.',
    brief: [
      'Snapgram is a photo-sharing social app with about 270M DAU globally.',
      'Two weeks ago Snapgram released app version 12.0 for Android and iOS, adding new AR camera effects. The Android app size grew from 68MB to 104MB.',
      'In India, the national cricket league season ended the same week, which usually reduces social activity slightly.',
      'No outages were reported. Logging changes were not part of the release.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - DAU by region (millions)',
        cols: ['Region', 'Two weeks ago', 'This week', 'Change'],
        rows: [
          ['North America', '62.0', '61.8', '-0.3%'],
          ['Europe', '48.0', '47.7', '-0.6%'],
          ['India', '85.0', '77.6', '-8.7%'],
          ['Southeast Asia', '40.0', '39.7', '-0.8%'],
          ['Latin America', '35.0', '34.8', '-0.6%'],
          ['Total', '270.0', '261.6', '-3.1%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - India DAU by device memory (millions)',
        cols: ['Device RAM', 'Two weeks ago', 'This week', 'Change'],
        rows: [
          ['3GB or less (all Android)', '38.25', '31.0', '-19.0%'],
          ['More than 3GB', '46.75', '46.6', '-0.3%'],
          ['Total India', '85.0', '77.6', '-8.7%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 3 - Low-memory Android devices in India, by app version',
        cols: ['Metric', 'v11.8', 'v12.0'],
        rows: [
          ['Share of these users on version', '30%', '70%'],
          ['Cold start time', '3.1 s', '6.4 s'],
          ['Crash rate per session', '0.6%', '2.9%'],
          ['Users who uninstalled in 14 days', '0.8%', '3.4%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'What would you check first to rule out a data or logging issue?',
      'Where is the drop concentrated? Show your segmentation steps.',
      'Could the end of the cricket season explain the drop? How do you rule it in or out?',
      'Why would a bigger app and AR effects hurt low-memory phones specifically?',
      'What do you recommend doing this week, and how would you prevent it next time?'
    ],
    strong: [
      'Starts with sanity checks (logging, data pipeline, definition changes), then segments by region: India explains 7.4M of the 8.4M drop (about 88%).',
      'Segments India by device: low-memory devices dropped 19% while high-memory devices are flat, which rules out the cricket season (it would affect all devices).',
      'Uses Exhibit 3 to link v12.0 to doubled cold start and 5x crash rate on low-RAM phones, plus higher uninstalls (storage pressure from +36MB).',
      'Recommends a quick fix: roll back or ship a lite build/dynamic feature module for AR effects on low-memory devices, and track recovery.',
      'Suggests prevention: release guardrails by device tier, staged rollout with crash/cold-start alerts for low-end Android.'
    ],
    traps: [
      'Accepting the cricket explanation without segmenting.',
      'Looking only at global numbers.',
      'Proposing a big re-engagement campaign before fixing the cause.'
    ],
    insight: 'The drop is almost entirely low-memory Android phones in India after v12.0 doubled cold-start time and quintupled crashes; the cricket season is a red herring because high-memory devices did not move.'
  },
  {
    id: 'a-cartwise-aov-drop',
    cat: 'rca',
    style: 'E-commerce',
    lvl: 'Easy',
    min: 20,
    title: 'Average order value fell 9%',
    prompt: 'Cartwise\'s average order value dropped about 9% month over month. The CFO is worried. What happened?',
    brief: [
      'Cartwise is a grocery delivery service. Last month the growth team launched a "US$10 off your first order, no minimum" promo code (NEWTEN) on social media.',
      'No price changes were made to the catalogue. Delivery fees were unchanged.',
      'The CFO is looking only at the blended AOV chart.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Orders and AOV by customer type',
        cols: ['Segment', 'Orders (last month)', 'AOV (last month)', 'Orders (this month)', 'AOV (this month)'],
        rows: [
          ['Returning customers', '400,000', '$62.00', '405,000', '$61.50'],
          ['New customers', '50,000', '$55.00', '130,000', '$38.00'],
          ['Total', '450,000', '$61.22', '535,000', '$55.79']
        ],
        note: 'Illustrative data. Total revenue rose from $27.6M to $29.8M.'
      },
      {
        title: 'Exhibit 2 - New customers this month by acquisition source',
        cols: ['Source', 'Orders', 'AOV', '30-day repeat rate (early read)'],
        rows: [
          ['NEWTEN promo code', '85,000', '$31.00', '14%'],
          ['Other channels', '45,000', '$51.00', '31%']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Is AOV dropping a problem in itself? What else happened to revenue?',
      'Explain the drop in one sentence using Exhibit 1.',
      'Is the NEWTEN promo a good investment? What would you need to know?',
      'What would you recommend changing about the promo?'
    ],
    strong: [
      'Identifies a mix shift: returning AOV is almost flat (-0.8%), while new customers jumped from 50k to 130k orders at a much lower AOV, dragging the blend down.',
      'Notes total orders (+19%) and revenue (+8%) went up; AOV alone is misleading.',
      'Uses Exhibit 2: promo orders average $31 with only 14% early repeat vs 31% for other new customers, so promo quality is weak.',
      'Recommends a minimum basket (e.g. $35) on the promo, tracking promo cohort retention and payback rather than blended AOV.'
    ],
    traps: [
      'Searching for pricing or product bugs when it is a mix effect.',
      'Calling the promo a failure or success without looking at retention.'
    ],
    insight: 'This is a mix shift, not a decline: a no-minimum promo brought many small first orders; returning AOV is flat and revenue grew, but the promo cohort repeats poorly and needs a basket minimum.'
  },
  {
    id: 'a-ledgerly-churn-spike',
    cat: 'rca',
    style: 'B2B SaaS',
    lvl: 'Hard',
    min: 35,
    title: 'Customer churn jumped from 2.1% to 3.4%',
    prompt: 'Ledgerly\'s monthly logo churn rose from about 2.1% to about 3.4% in Q3 and stayed there. Find the root cause and tell us what happens next quarter.',
    brief: [
      'Ledgerly is an invoicing SaaS for small businesses with about 19k paying customers.',
      'Customers come from three channels: self-serve monthly plans, direct annual plans, and a partner program where accountants refer clients. Partner referrals in Q3 last year got 50% off for 12 months on annual plans.',
      'In July, a well-known competitor launched a free tier with unlimited invoices. The sales team blames it for the churn.',
      'No major product changes or outages happened in Q3.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Monthly logo churn',
        cols: ['Month', 'Customers at start', 'Churned', 'Churn rate'],
        rows: [
          ['Apr', '18,000', '378', '2.1%'],
          ['May', '18,400', '390', '2.1%'],
          ['Jun', '18,800', '400', '2.1%'],
          ['Jul', '19,100', '630', '3.3%'],
          ['Aug', '19,000', '660', '3.5%'],
          ['Sep', '18,900', '645', '3.4%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Q3 churn by segment',
        cols: ['Segment', 'Customers (avg in Q3)', 'Churned in Q3', 'Q3 churn'],
        rows: [
          ['Self-serve monthly', '12,000', '760', '6.3% (about 2.1%/month)'],
          ['Partner annual (renewal due in Q3)', '2,100', '1,050', '50% at renewal'],
          ['Direct annual', '4,900', '125', '2.6%'],
          ['Total', '19,000', '1,935', '-']
        ],
        note: 'Illustrative data. 630 + 660 + 645 = 1,935.'
      },
      {
        title: 'Exhibit 3 - Partner cohort details',
        cols: ['Item', 'Value'],
        rows: [
          ['Price in year 1 (discounted)', '$29/month'],
          ['Price at renewal (list)', '$58/month'],
          ['Churned partner customers sending under 1 invoice/month in prior 3 months', '64%'],
          ['Exit survey: main reason "price"', '61%'],
          ['Exit survey: "moved to my accountant\'s tool"', '22%'],
          ['Exit survey: "switched to competitor free tier"', '7%'],
          ['Partner annual renewals due in Q4', '2,600']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'How would you test the sales team\'s competitor hypothesis with this data?',
      'Which segment explains the increase? Show the maths.',
      'What is happening with the partner cohort beyond the price jump?',
      'Forecast Q4 churn if nothing changes.',
      'What would you do before Q4 renewals, and what would you change about the partner program?'
    ],
    strong: [
      'Segments churn: self-serve monthly is flat at about 2.1%/month and direct annual is low; the partner annual cohort hitting renewal (1,050 churned) explains almost the entire excess (Q3 excess vs 2.1% baseline is about 1,935 - 1,197 = about 740 churns, less than partner churn).',
      'Identifies the mechanism: a contractual price cliff (price doubles from $29 to $58) on a low-engagement cohort (64% sent under 1 invoice/month), not the competitor (only 7% cite it).',
      'Forecasts Q4: 2,600 partner renewals at a similar 50% churn means about 1,300 extra churns, so elevated churn will continue or worsen.',
      'Recommends proactive renewal plays: step-up pricing, right-sizing plans for low-usage customers, engagement campaigns before renewal, accountant-side incentives, and changing future partner offers to avoid cliffs.',
      'Notes it is partly a quality-of-acquisition problem: discounts brought in low-intent customers.'
    ],
    traps: [
      'Accepting the competitor narrative.',
      'Reading churn as a product problem without segmenting by cohort and contract.',
      'Missing the Q4 forward risk.'
    ],
    insight: 'The spike is a contract cliff, not competition: discounted partner customers renewing at double price, most of them barely using the product, churned at 50%; 2,600 more renew in Q4.'
  },
  {
    id: 'a-kibo-failed-transfers',
    cat: 'rca',
    style: 'Fintech',
    lvl: 'Medium',
    min: 25,
    title: 'Failed money transfers doubled',
    prompt: 'Kibo\'s share of failed transfers doubled from 1.2% to about 2.5% last week. Find out why and what to do.',
    brief: [
      'Kibo is a US remittance app sending about 470k transfers per week to Mexico, the Philippines, India and Nigeria.',
      'A failed transfer is refunded to the sender, usually within 3 days; failures hurt trust and repeat usage.',
      'Last Monday, Bank Luzon, Kibo\'s largest bank partner in the Philippines, migrated to a new payment platform. Kibo shipped no changes to its own system that week.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Weekly transfers and failure rate by corridor',
        cols: ['Corridor', 'Transfers per week', 'Failure rate (prior week)', 'Failure rate (last week)'],
        rows: [
          ['US to Mexico', '220k', '1.1%', '1.1%'],
          ['US to Philippines', '120k', '1.3%', '6.1%'],
          ['US to India', '90k', '1.2%', '1.3%'],
          ['US to Nigeria', '40k', '1.5%', '1.6%'],
          ['Total', '470k', '1.2%', '2.5%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Philippines failures by payout method',
        cols: ['Payout', 'Transfers per week', 'Failure rate (prior week)', 'Failure rate (last week)'],
        rows: [
          ['Bank Luzon deposit', '45k', '1.2%', '14.0%'],
          ['Other banks', '30k', '1.4%', '1.5%'],
          ['PesoPay mobile wallet', '35k', '1.2%', '1.2%'],
          ['Cash pickup', '10k', '1.8%', '1.9%']
        ],
        note: 'Illustrative data. Weighted: 1.3% prior, 6.1% last week.'
      },
      {
        title: 'Exhibit 3 - Bank Luzon failure codes (last week)',
        cols: ['Failure code', 'Share of failures'],
        rows: [
          ['R07 Beneficiary name mismatch', '81%'],
          ['Account closed', '8%'],
          ['Timeout', '6%'],
          ['Other', '5%']
        ],
        note: 'Illustrative data. Name-mismatch failures are concentrated in recipients with two given names, accented characters, or names longer than 25 characters (Kibo truncates names to 25 characters).'
      }
    ],
    follow: [
      'Walk through your segmentation. Which corridor and payout method?',
      'What changed at Bank Luzon, and why does it interact with Kibo\'s data?',
      'Kibo shipped nothing. Is Kibo still responsible for the fix?',
      'What do you do for the customers already affected?',
      'How do you prevent a partner change from surprising you next time?'
    ],
    strong: [
      'Segments by corridor: the Philippines alone moves from 1.3% to 6.1% and explains nearly all of the increase.',
      'Within the Philippines, isolates Bank Luzon deposits (1.2% to 14.0%), consistent with its platform migration.',
      'Uses Exhibit 3: 81% of failures are name mismatches; the new platform applies strict name matching, and Kibo\'s 25-character truncation and stripping of accents produce mismatches.',
      'Recommends immediate mitigation: send full names in the right format, coordinate with Bank Luzon on matching rules, offer automatic retry or switch to wallet payout, and fast refunds plus proactive messages.',
      'Prevention: partner change notifications, per-partner failure alerts, pre-validation of recipient names.'
    ],
    traps: [
      'Saying "it is the bank\'s problem" and stopping.',
      'Looking only at the global failure rate.'
    ],
    insight: 'All of the increase comes from Bank Luzon deposits after its migration to strict beneficiary-name matching, which collides with Kibo truncating names to 25 characters and stripping accents.'
  },
  {
    id: 'a-streamly-watch-time',
    cat: 'rca',
    style: 'Media',
    lvl: 'Medium',
    min: 30,
    title: 'Watch time down 8% but users are stable',
    prompt: 'Streamly, a video streaming service, saw total daily watch hours fall about 8% while daily active users stayed flat. Diagnose it and tell us whether to reverse the change.',
    brief: [
      'Streamly has about 30M DAU across mobile, web, smart TV and game consoles.',
      'Three weeks ago, the Smart TV app (v8) changed the "Are you still watching?" prompt to appear after 1 episode of no remote input instead of 3, to reduce CDN costs from screens left playing to empty rooms.',
      'Content slate was normal; no big releases ended.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Daily watch hours by platform (millions)',
        cols: ['Platform', 'Before', 'After', 'Change'],
        rows: [
          ['Mobile', '30.0', '29.8', '-0.7%'],
          ['Web', '12.0', '11.9', '-0.8%'],
          ['Smart TV', '40.0', '33.0', '-17.5%'],
          ['Console', '8.0', '7.9', '-1.3%'],
          ['Total', '90.0', '82.6', '-8.2%']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - Smart TV engagement',
        cols: ['Metric', 'Before', 'After'],
        rows: [
          ['Smart TV DAU', '10.0M', '9.95M'],
          ['Sessions per DAU', '2.6', '2.6'],
          ['Average session length', '92 min', '76 min'],
          ['Sessions continuing to next episode', '72%', '41%'],
          ['"Still watching" prompts per session', '0.15', '0.9']
        ],
        note: 'Illustrative data. 10.0M x 2.6 x 92 / 60 = about 40M hours; 9.95M x 2.6 x 76 / 60 = about 33M hours.'
      },
      {
        title: 'Exhibit 3 - Smart TV hours split by attention signal (millions)',
        cols: ['Type', 'Before', 'After'],
        rows: [
          ['Attended (remote/voice input in last 3 hours)', '35.6', '32.0'],
          ['Unattended (no input for 3+ hours)', '4.4', '1.0'],
          ['Total', '40.0', '33.0']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Decompose watch hours. Which factor moved?',
      'How much of the drop is "ghost" viewing that nobody was watching?',
      'Is losing unattended hours bad? For whom?',
      'Attended hours also fell. What does that suggest about the prompt?',
      'What would you recommend: revert, keep, or modify?'
    ],
    strong: [
      'Decomposes watch hours = DAU x sessions per DAU x session length; isolates Smart TV session length (92 to 76 min) as the driver, explaining 7.0M of the 7.4M hour drop.',
      'Connects the change to the prompt appearing 6x more often and next-episode continuation falling from 72% to 41%.',
      'Uses Exhibit 3: about 3.4M hours were unattended ghost viewing (a real saving in CDN cost, not lost value), but attended hours also fell 3.6M (-10%), so the prompt interrupts genuine bingeing.',
      'Recommends modifying, not reverting: e.g. prompt after 2 episodes, or use signals such as a TV-off event, time of night, or input detection to target unattended screens.',
      'Picks attended watch hours or engaged sessions as the metric going forward, with CDN cost as a secondary metric.'
    ],
    traps: [
      'Treating all lost watch time as lost value.',
      'Reverting immediately without considering the CDN savings.',
      'Not decomposing the metric.'
    ],
    insight: 'The drop is the Smart TV prompt change: about half removed ghost viewing (good), but half cut real binge-watching; tune the prompt rather than revert it, and track attended hours.'
  },
  {
    id: 'a-mindful-signups-tracking',
    cat: 'rca',
    style: 'Consumer subscription',
    lvl: 'Easy',
    min: 20,
    title: 'Sign-ups dropped 19% overnight',
    prompt: 'Mindful\'s analytics dashboard shows weekly sign-ups down about 19%, starting on a Monday. What happened?',
    brief: [
      'Mindful is a meditation app with sign-ups from iOS, Android and the web.',
      'On the Monday the drop started, the web team launched a new cookie consent banner to comply with privacy rules. Under it, EU visitors must opt in before analytics scripts load.',
      'The analytics dashboard counts sign-up events from the analytics SDK. The backend database separately records every account created.',
      'Marketing spend and app store rankings were unchanged.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Weekly sign-ups: analytics events vs backend accounts',
        cols: ['Week', 'iOS (analytics)', 'Android (analytics)', 'Web (analytics)', 'Total (analytics)', 'Accounts created (backend)'],
        rows: [
          ['W1', '21,000', '15,000', '24,000', '60,000', '61,200'],
          ['W2', '20,800', '15,200', '23,800', '59,800', '61,000'],
          ['W3 (banner launched)', '21,100', '15,100', '12,600', '48,800', '60,900'],
          ['W4', '21,200', '15,000', '12,400', '48,600', '61,300']
        ],
        note: 'Illustrative data.'
      },
      {
        title: 'Exhibit 2 - W4 web sign-ups by region',
        cols: ['Region', 'Analytics events', 'Backend accounts', 'Analytics opt-in rate on banner'],
        rows: [
          ['EU', '1,800', '12,900', '14%'],
          ['US', '8,600', '9,100', 'n/a (no opt-in required)'],
          ['Rest of world', '2,000', '2,200', 'n/a'],
          ['Total web', '12,400', '24,200', '-']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'What is the first thing you would check?',
      'Did real sign-ups fall? Use Exhibit 1.',
      'Which segment explains the gap?',
      'Could this measurement issue cause a real business problem later?',
      'How would you fix measurement going forward?'
    ],
    strong: [
      'Checks data integrity first and compares analytics with the backend: backend accounts are flat at about 61k, so real sign-ups did not fall.',
      'Localises the drop to web (24k to 12.4k analytics events) and then EU web, where only about 14% of visitors opt in to analytics.',
      'Flags second-order risk: ad platforms optimising on these conversion events will see fewer conversions and may cut bidding or misallocate spend, turning a measurement problem into a real one.',
      'Recommends server-side conversion events from the backend, consent-compliant modelling, and re-baselining dashboards with an annotation.'
    ],
    traps: [
      'Launching a sign-up recovery project for a drop that is not real.',
      'Suggesting ways to pressure users into accepting tracking.'
    ],
    insight: 'Real sign-ups are flat; the consent banner stopped the analytics SDK from loading for most EU web visitors, so the drop is a measurement artifact, though it can hurt ad bidding if not fixed.'
  },
  {
    id: 'a-homenest-europe-bookings',
    cat: 'rca',
    style: 'Marketplace',
    lvl: 'Hard',
    min: 35,
    title: 'European summer bookings down 5%',
    prompt: 'Homenest\'s summer bookings in Europe are down about 5% year over year, while the company expected 8% growth. Find the root cause and recommend what to do.',
    brief: [
      'Homenest is a vacation rental marketplace. Europe is its largest region.',
      'This year, Barcelona and Amsterdam enforced new short-term rental rules that removed unlicensed listings and capped nights per year.',
      'Marketing believes demand is weak because of a cold early summer and a weaker currency for US travellers, and wants to raise ad spend by 20%.',
      'On June 15, Homenest also started showing the total price (with fees) in search results across Europe. Early tests showed a neutral effect on conversion.'
    ],
    exhibits: [
      {
        title: 'Exhibit 1 - Summer bookings by city (thousands), year over year',
        cols: ['City / area', 'Last year', 'This year', 'Change'],
        rows: [
          ['Barcelona', '60', '42', '-30.0%'],
          ['Amsterdam', '40', '31', '-22.5%'],
          ['Paris', '90', '88', '-2.2%'],
          ['Rome', '70', '71', '+1.4%'],
          ['Lisbon', '50', '49', '-2.0%'],
          ['Rest of Europe', '290', '287', '-1.0%'],
          ['Total', '600', '568', '-5.3%']
        ],
        note: 'Illustrative data. Rest of Europe includes Catalan coast towns (e.g. Sitges, Costa Brava), which grew by 6k bookings.'
      },
      {
        title: 'Exhibit 2 - Barcelona and Amsterdam funnel',
        cols: ['Metric', 'Barcelona last year', 'Barcelona this year', 'Amsterdam last year', 'Amsterdam this year'],
        rows: [
          ['Active listings', '18,200', '9,800', '9,500', '6,100'],
          ['Searches', '2.10M', '2.05M', '1.50M', '1.48M'],
          ['Search-to-booking conversion', '2.86%', '2.05%', '2.67%', '2.09%'],
          ['Average nightly price', 'EUR 142', 'EUR 171', 'EUR 168', 'EUR 196']
        ],
        note: 'Illustrative data.'
      }
    ],
    follow: [
      'Is this a demand problem or a supply problem? Prove it with Exhibit 2.',
      'How much of the total drop do the two cities explain?',
      'What does the growth in Catalan coast bookings tell you?',
      'Should marketing increase ad spend by 20%?',
      'Could the total-price display change also be playing a role? How would you check?',
      'What would you do in the next 3 months?'
    ],
    strong: [
      'Shows demand is intact: searches in both cities are nearly flat, but listings fell 46% (Barcelona) and 36% (Amsterdam), prices rose, and conversion fell; so it is a supply shock.',
      'Quantifies: Barcelona and Amsterdam lost 27k of the 32k total decline (about 84%).',
      'Spots substitution: Catalan coast grew 6k, meaning some Barcelona demand moved nearby; the underlying rest-of-Europe trend excluding that is about -3%, worth a separate check (e.g. total-price display, compared against a holdout).',
      'Argues against blanket ad spend: buying more searches into supply-constrained cities wastes money; instead redirect demand (nearby destinations, alternative dates), recruit licensed supply (aparthotels, serviced apartments), and help hosts comply.',
      'Mentions checking the total-price change via the pre/post holdout and by comparing cities without regulation.'
    ],
    traps: [
      'Accepting weather/FX explanations without segmenting by city.',
      'Recommending more marketing spend.',
      'Ignoring the substitution effect in Rest of Europe.'
    ],
    insight: 'This is a regulatory supply shock in Barcelona and Amsterdam (84% of the decline) with demand intact; the fix is redirecting demand and adding licensed supply, not more ad spend.'
  }
];

window.PM_CASES_A_SOURCES = [
  { name: 'Lenny\'s Newsletter - What is good retention?', url: 'https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29' },
  { name: 'Lenny\'s Newsletter - What is a good free-to-paid conversion rate?', url: 'https://www.lennysnewsletter.com/p/what-is-a-good-free-to-paid-conversion' },
  { name: 'Userpilot - Freemium to premium conversion benchmarks (citing Lenny / Kyle Poyar)', url: 'https://userpilot.com/blog/freemium-to-premium' },
  { name: 'Mixpanel - 2024 Benchmarks Report (DAU/MAU stickiness by industry)', url: 'https://mixpanel.com/wp-content/uploads/2024/01/2024_Benchmarks_Report.pdf' },
  { name: 'Mixpanel - Guardrail metrics guide', url: 'https://mixpanel.com/blog/guardrail-metrics/' },
  { name: 'Andrew Chen - New data shows losing 80% of mobile users is normal', url: 'https://andrewchen.com/new-data-shows-why-losing-80-of-your-mobile-users-is-normal-and-that-the-best-apps-do-much-better/' },
  { name: 'Baymard Institute - Cart abandonment rate statistics', url: 'https://baymard.com/lists/cart-abandonment-rate' },
  { name: 'Stripe - 14 key marketplace metrics', url: 'https://stripe.com/ie/resources/more/14-key-marketplace-metrics' },
  { name: 'a16z podcast - Breakout strategies with Deb Liu (marketplace take rates)', url: 'https://a16z.com/podcast/field-notes-breakout-strategies-with-deb-liu-part-2/' },
  { name: 'William Blair - Study of 300+ company take rates', url: 'https://williamblair.com/Insights/Proprietary-Study-of-300-Plus-Private-and-Public-Company-Take-Rates' },
  { name: 'Exponent - How to answer root cause questions', url: 'https://www.tryexponent.com/courses/analytical/how-to-answer-root-cause-questions' },
  { name: 'Exponent - Goal setting and north star metrics framework', url: 'https://www.tryexponent.com/courses/analytical/goal-setting-north-star-metrics-framework' },
  { name: 'Exponent - How to answer product design interview questions', url: 'https://tryexponent.com/blog/how-to-answer-product-design-interview-questions' },
  { name: 'IGotAnOffer - Product design interview questions (BUS framework)', url: 'https://igotanoffer.com/blogs/product-manager/product-design-questions' },
  { name: 'Inflection Point - A guide to root cause analysis problems', url: 'https://inflectionpointnewsletter.substack.com/p/a-guide-to-root-cause-analysis-problems' },
  { name: 'CleverTap - Brian Balfour (Reforge) on why retention matters', url: 'https://clevertap.com/blog/brian-balfour-reforge-retention-matters/' },
  { name: 'Fullcast - LTV to CAC ratio benchmarks', url: 'https://www.fullcast.com/content/ltv-to-cac-ratio/' }
];
