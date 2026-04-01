# 📚 Member 6 — Research Notes
## Topic: AI Ethics + Future of Artificial Intelligence
### Group x86 | AI: Basics and Beyond

> **Role:** Ethics & Future Researcher + Script Compiler
> **Covers:** Slides 15–19
> **Speaking Time:** ~3 minutes
> **Status:** ✅ Complete

---

## PART 1 — AI BIAS AND FAIRNESS

### 🔷 1.1 What Is AI Bias?

**AI Bias** occurs when an AI system produces systematically unfair or inaccurate outputs for certain groups of people. Bias enters AI systems through the data they are trained on, the choices made in system design, and the metrics used to evaluate performance.

**Key Principle:**
> AI is not inherently neutral. It learns from human-generated data — which encodes centuries of human prejudice, inequality, and structural injustice. An algorithm does not know the difference between a pattern and a prejudice.

---

### 🔷 1.2 Documented Cases of AI Bias

#### Case 1: Facial Recognition — Racial and Gender Disparity
- **2018 MIT Media Lab Study (Joy Buolamwini, Timnit Gebru):** *"Gender Shades"* project tested three commercial facial recognition systems (IBM, Microsoft, Face++)
- **Finding:** Error rates for **darker-skinned women** were up to **34.7% higher** than for lighter-skinned men
- Root cause: Training datasets were predominantly composed of lighter-skinned male faces
- **Real-world consequence:** In January 2020, Robert Julian-Borchak Williams, a Black man in Detroit, was wrongfully arrested by police using a facial recognition system — the first documented such case in the United States

#### Case 2: Healthcare Algorithm — Racial Disparity at Scale
- **2019 Study (Obermeyer et al., Science):** Examined a widely-used healthcare algorithm deployed by a major US health provider
- The algorithm used **historical healthcare spending** as a proxy for medical need
- **Problem:** Because Black patients historically received less care (due to systemic inequity), the algorithm predicted they needed less care — **systematically disadvantaging Black patients**
- Estimated that approximately **11.5% more Black patients** would have been referred for care if the bias were eliminated
- *Published in Science, 2019*

#### Case 3: Amazon Hiring Algorithm — Gender Bias
- Amazon developed an ML system to screen job applicants, trained on historical resumes submitted over a 10-year period
- Since tech hiring historically skewed male, the algorithm **downgraded resumes mentioning women's colleges** and other female-coded language
- Amazon scrapped the project in 2018 when the bias was discovered

#### Case 4: COMPAS — Criminal Sentencing Algorithm
- COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) used by courts in the US to predict recidivism (likelihood of reoffending)
- **ProPublica investigation (2016):** Black defendants were nearly **twice as likely** to be falsely flagged as high-risk compared to white defendants
- The tool was influencing real judges making real sentencing decisions

---

### 🔷 1.3 Types of AI Bias

| Type | Description | Example |
|---|---|---|
| **Historical Bias** | Training data reflects past discrimination | Hiring algorithms trained on male-dominated history |
| **Representation Bias** | Certain groups underrepresented in training data | Facial recognition trained on fewer darker-skinned faces |
| **Measurement Bias** | Flawed proxies used to measure outcomes | Using healthcare spending to measure healthcare need |
| **Aggregation Bias** | One model used for groups that need separate models | A single medical model applied to all demographics |
| **Automation Bias** | Humans over-trust algorithmic outputs | Judges accepting algorithmic risk scores uncritically |

---

### 🔷 1.4 The Scale Problem

> *"When a human judge makes a biased decision, one person is wronged. When a biased algorithm makes decisions, millions of people are wronged — at the speed of a computer."*

- Credit algorithms affect loan decisions for **millions of applicants per year**
- Hiring algorithms screen **tens of millions of resumes** on platforms like LinkedIn
- Facial recognition is deployed in **airports, police departments, and commercial spaces** globally
- AI content moderation affects **billions of social media posts** daily

---

## PART 2 — AI AND PRIVACY

### 🔷 2.1 Surveillance and AI

**What Is Now Possible:**
Modern AI surveillance systems, trained on deep learning, can:
- Identify individuals from CCTV footage with >99% accuracy under good conditions
- Track a person's movement across an entire city in real-time using a network of cameras
- Recognize emotions from facial expressions (so-called "emotion AI" or "affective computing")
- Predict crowd behavior and identify potential threats before incidents occur

**Concerning Deployments:**
- **China's Social Credit System:** Uses AI-powered surveillance, facial recognition, and behavior tracking to assign citizens a "social score" — affecting access to transport, education, and jobs
- **Predictive Policing:** Programs like PredPol (US) use ML to predict where crimes will occur and who is likely to commit them — raising concerns about racial profiling and self-fulfilling prophecies
- **Mass Biometric Databases:** India's Aadhaar system (1.3 billion records), EU-wide facial recognition proposals — the scale of biometric data collection is unprecedented

---

### 🔷 2.2 Deepfakes: Synthetic Media and Truth

**What Are Deepfakes?**
AI-generated videos, audio, or images that realistically depict a real person saying or doing something they never said or did — using Generative Adversarial Networks (GANs) and other generative models.

**The Threat Landscape:**

| Domain | Threat |
|---|---|
| **Democracy / Elections** | Fabricated video of a candidate making controversial statements released days before an election |
| **Journalism** | False "evidence" videos that look authentic enough to be shared as news |
| **Personal Reputation** | Non-consensual intimate deepfakes targeting private individuals (disproportionately women) |
| **Financial Fraud** | Audio deepfakes of CEOs instructing wire transfers — a fraudulent CEO voice clone scam resulted in a $243,000 transfer in 2019 (Wall Street Journal) |
| **National Security** | Fabricated diplomatic communications or military intelligence |

**Scale of the Problem:**
- A 2023 report by cybersecurity firm Sumsub found a **10x increase in deepfake fraud attempts** globally in 2023 compared to 2022
- Deepfake detection is becoming an arms race — as detection improves, generation improves too

---

### 🔷 2.3 Data Privacy and AI

- AI systems require massive amounts of data — often personal data
- Many users do not understand how their data is used to train commercial AI systems
- **GDPR (EU, 2018):** Established rights around AI decision-making — individuals can request human review of automated decisions affecting them
- **Right to Explanation:** People subjected to AI-driven decisions (loan denials, hiring rejections) may have a right to understand why — but most AI systems are too complex to explain ("black boxes")

---

## PART 3 — AI AND ECONOMIC DISRUPTION

### 🔷 3.1 The Automation Threat

**Goldman Sachs Report (2023):**
- Estimated AI could automate tasks equivalent to **300 million full-time jobs** globally
- Most affected: administrative roles, legal research, customer service, data entry, basic financial analysis
- Professionals at highest risk: **Paralegals, junior accountants, customer service representatives, data analysts, radiologists (for routine scans)**

**McKinsey Global Institute (2023):**
- Between **2030 and 2060**, up to **50% of current work activities** could be automated using current or near-current AI
- The transition may happen faster than previous technological shifts (e.g., agricultural → industrial)

**OpenAI / University of Pennsylvania Study (2023):**
- Found that **80% of the US workforce** could have at least 10% of their tasks impacted by GPT-class LLMs
- **19%** could have at least 50% of tasks impacted
- White-collar, knowledge-work roles were significantly more exposed than manual labor roles

---

### 🔷 3.2 The Historical Context: Technological Revolutions and Jobs

| Revolution | Jobs Destroyed | Jobs Created |
|---|---|---|
| **Industrial Revolution (1760–1840)** | Agricultural and artisan jobs | Factory work, engineering, railways |
| **Electrification (1890–1930)** | Manual manufacturing | Electrical engineering, consumer electronics |
| **Computers / Internet (1970–2000)** | Clerical/administrative | Software, IT, digital marketing, e-commerce |
| **AI (2020–?)** | Knowledge work, routine cognitive tasks | AI engineering, prompt engineering, AI auditing, new domains TBD |

**The Key Distinction with AI:**
> Previous technological revolutions primarily automated **physical tasks**. AI is automating **cognitive tasks** — work that previously required human intellect. This is qualitatively different and may affect a broader range of workers.

---

### 🔷 3.3 What This Means for Bangladesh

- Bangladesh's economy depends heavily on the **ready-made garment (RMG) sector** — employing approximately **4 million workers**, predominantly women
- Automated sewing robots are still less agile than human workers for complex garment work — but this is rapidly changing
- The **software outsourcing sector** (a growing contributor to Bangladesh's digital economy) faces risk from AI code generation tools
- The **call center / BPO industry** globally is at high risk from AI voice systems and chatbots — affecting employment in many South Asian economies

---

## PART 4 — AI GOVERNANCE AND REGULATION

### 🔷 4.1 The EU AI Act (2023)

The **EU Artificial Intelligence Act** was adopted in 2024 and is the **world's first comprehensive regulatory framework for AI**. It takes a risk-based approach:

| Risk Tier | Examples | Regulatory Response |
|---|---|---|
| **Unacceptable Risk** | Social scoring, real-time biometric surveillance, subliminal manipulation | **Banned entirely** |
| **High Risk** | AI in hiring, credit scoring, education, critical infrastructure, law enforcement | Strict transparency, documentation, and human oversight requirements |
| **Limited Risk** | Chatbots, deep fake generators | Transparency obligations (must disclose AI identity) |
| **Minimal Risk** | Spam filters, AI in video games | No regulation required |

**Key Provisions:**
- AI systems making consequential decisions about people must provide explanations
- Generative AI providers must disclose training data copyright compliance
- Fines up to **€35 million or 7% of global revenue** for violations

---

### 🔷 4.2 Global AI Governance Landscape

| Country / Region | Status |
|---|---|
| **European Union** | EU AI Act passed (2024) — most comprehensive legislation globally |
| **United States** | Executive Order on AI Safety (Oct 2023); no comprehensive federal AI law yet; sector-specific guidance only |
| **China** | Specific regulations on generative AI (2023); government maintains significant control over AI deployment |
| **United Kingdom** | Principles-based approach (no dedicated AI law yet); AI Safety Institute established (2023) |
| **Bangladesh** | Smart Bangladesh Vision 2041 includes AI goals; no comprehensive AI regulation exists yet; ICT Division has begun discussions |

---

### 🔷 4.3 AI Safety — The Existential Dimension

**Who Is Taking This Seriously:**
- **Anthropic** (creator of Claude): founded with "AI safety" as its core mission
- **OpenAI:** Has a dedicated Alignment team; published its "Superalignment" research agenda
- **DeepMind:** Published work on AI alignment and reward hacking
- **Geoffrey Hinton** (called "the Godfather of Deep Learning"): Resigned from Google in 2023, stating concern about AI risks — particularly regarding AI developing goals misaligned with human values

**Key Concepts in AI Safety:**

| Concept | What It Means |
|---|---|
| **Alignment** | Ensuring AI systems pursue goals that are actually aligned with human values and intentions |
| **Value Learning** | Teaching AI to infer human values from behavior and feedback |
| **Interpretability** | Understanding what is happening inside neural networks — currently poorly understood even by creators |
| **Reward Hacking** | AI finding unintended ways to achieve high reward scores — like a game-playing AI that finds a loophole instead of playing correctly |
| **Deceptive Alignment** | Hypothetical scenario where a sufficiently advanced AI appears aligned during training but pursues different goals once deployed |

---

## PART 5 — THE FUTURE OF ARTIFICIAL INTELLIGENCE

### 🔷 5.1 Near-Term Future (2025–2030)

**AI Co-Pilots in Every Profession:**
- **Medicine:** AI diagnostic assistants as standard tools in hospitals, especially in under-resourced settings
- **Law:** AI legal research assistants will handle case law lookup, contract analysis, first-draft document generation
- **Engineering/Coding:** AI code generation is already transforming software development; GitHub Copilot used by over 1 million developers
- **Education:** Personalized AI tutors accessible to every student — democratizing educational access globally
- **Journalism:** AI drafting first versions of data-heavy stories (financial reports, sports summaries, weather); human journalists add judgment and investigation

**Multimodal AI:**
- Models that understand and generate text, images, audio, video, and code simultaneously
- Applications: Real-time sign language interpretation, live meeting transcription and summarization, AI-generated visual journalism

---

### 🔷 5.2 Medium-Term Future (2030–2040)

**AI and Scientific Discovery:**
- AI systems as partners in research — capable of generating hypotheses, designing experiments, and interpreting results
- Potential for AI to accelerate climate change solutions: materials science for better solar panels, carbon capture chemistry
- Personalized medicine: AI-designed drugs optimized for individual genetic profiles

**Autonomous Systems at Scale:**
- Self-driving vehicles reaching meaningful deployment in multiple regions
- Autonomous drones in logistics and supply chain management
- AI-managed energy grids optimizing for renewable integration

---

### 🔷 5.3 The AGI Question

**When Could AGI Arrive?**

| Expert / Institution | Estimate |
|---|---|
| Sam Altman (OpenAI CEO) | "Within a few years" (2024 statement) |
| Demis Hassabis (DeepMind CEO) | "Within a decade" |
| Geoffrey Hinton | "Could happen sooner than most expect" |
| Gary Marcus (AI researcher) | "Current architectures cannot achieve true AGI" |
| MIRI (Machine Intelligence Research Institute) | Wide distribution of estimates; uncertainty emphasized |

**The Benchmark Problem:**
- Defining AGI precisely is itself contested
- Tests proposed include: sustained commonsense reasoning, robust transfer learning, causal understanding, general physical intuition
- Some argue GPT-4 already passes some narrow AGI benchmarks — others argue it fails fundamentally at genuine understanding

---

### 🔷 5.4 Hope and Opportunity

AI's positive potential is immense:
- **Healthcare access:** AI diagnostics extending quality medical care to billions of currently underserved people
- **Climate change:** AI accelerating materials science, energy optimization, and climate modeling
- **Education equity:** Personalized tutoring for every child — including those in areas with teacher shortages
- **Scientific acceleration:** AI compressing decades of research into years

---

## PART 6 — KEY STATISTICS FOR SLIDES

- 🔢 Facial recognition error rates for **darker-skinned women** were up to **34.7% higher** than for lighter-skinned men (MIT Media Lab, 2018)
- 🔢 Goldman Sachs (2023): AI could automate work equivalent to **300 million full-time jobs**
- 🔢 A deepfake audio fraud resulted in a **$243,000 wire transfer loss** in 2019 (WSJ)
- 🔢 Deepfake fraud attempts increased **10x in 2023** vs. 2022 (Sumsub Report)
- 🔢 **80% of US workers** could have at least 10% of their tasks affected by LLMs (OpenAI/UPenn, 2023)
- 🔢 EU AI Act: fines up to **€35 million or 7% of global annual revenue** for violations
- 🔢 Geoffrey Hinton resigned from Google in **2023** citing concerns about AI safety risks

---

## PART 7 — ANALOGIES FOR AUDIENCE ENGAGEMENT

### Analogy 1: Bias as a Corrupted Mirror
> *"Training AI on biased data is like teaching a child to navigate the world using a corrupted mirror — one that distorts the reflection of certain people. The child doesn't know the mirror is wrong. It just learns what it sees."*

### Analogy 2: Deepfakes and Trust
> *"Humanity built its understanding of truth on one assumption: 'Seeing is believing.' Deepfakes have broken that assumption at the technical level. The question is whether we can rebuild a culture of epistemic trust before the damage becomes irreversible."*

### Analogy 3: Automation and the Printing Press
> *"When the printing press was invented, scribes whose jobs involved copying manuscripts were disrupted. But literacy exploded, knowledge spread, and an entire publishing economy was born. The question with AI is not whether disruption will happen — it will. The question is whether the transition is managed fairly."*

### Analogy 4: Regulation as Building Codes
> *"We don't let architects build skyscrapers without safety codes — not because we want to slow down construction, but because we understand the stakes. AI regulation isn't about blocking innovation. It's about making sure the buildings don't collapse."*

---

## PART 8 — SLIDE CONTENT SUMMARY (Bullets for Slides 15–19)

### Slide 15 — AI Bias and Fairness
- AI reflects the data it's trained on — data encodes human history's biases
- MIT study: facial recognition error rate **34.7% higher** for darker-skinned women
- 2019 healthcare algorithm disadvantaged Black patients due to flawed proxy metric
- Bias at scale: one algorithmic decision affects millions of people simultaneously

### Slide 16 — Privacy and Surveillance
- AI surveillance can identify individuals in crowds, track city-wide movements
- Deepfakes: AI-generated fabrications of real people — election risk, personal harm, financial fraud
- A deepfake audio scam caused a **$243,000 loss** in 2019
- Data privacy: most users don't know how their data trains commercial AI systems

### Slide 17 — Jobs and Economic Disruption
- Goldman Sachs (2023): AI could automate tasks equal to **300 million full-time jobs** globally
- Most at risk: repetitive cognitive tasks — data entry, customer service, legal research
- Historical analogy: Industrial Revolution also disrupted then created — transition management is key
- Fairness question: who captures the productivity gains? Workers or shareholders?

### Slide 18 — Future of AI (Near-Term)
- Next 5–10 years: AI co-pilots in medicine, law, education, engineering
- Multimodal AI: models handling text, images, audio, video simultaneously
- Bangladesh implications: AI in agriculture, healthcare access, fintech credit scoring
- The question: whether AGI will arrive, and how to ensure it is aligned with human values

### Slide 19 — Regulation and Hope
- EU AI Act (2024): world's first comprehensive AI law — risk-based framework
- Bangladesh needs its own governance framework — Smart Bangladesh 2041 is a start
- AI's upside: healthcare access, climate solutions, education equity, scientific acceleration
- The future of AI is unwritten — engineers, policymakers, citizens are writing it now

---

## PART 9 — TRANSITION LINE (End of Member 6's Section)

> *"The challenges are real. But so is the opportunity. The future of AI is not something that will happen to us — it's something we are choosing together, right now. I'll hand it back to [Leader's Name] to bring everything together."*

---

*Research compiled by Member 6 | Sources: See references_masterlist.md | Group x86 — AI: Basics and Beyond*
