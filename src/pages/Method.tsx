import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

// Hero Section
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 pb-16">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 transition-all duration-550 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          The STET Method
        </span>

        <div className="overflow-hidden mb-8">
          <h1
            className={`text-hero text-stet-black transition-all duration-700 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Five phases.
          </h1>
        </div>
        <div className="overflow-hidden mb-10">
          <h1
            className={`text-hero-italic text-stet-black transition-all duration-700 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '180ms' }}
          >
            No shortcuts.
          </h1>
        </div>

        <p
          className={`font-primary font-light italic text-[clamp(18px,2.5vw,30px)] text-stet-grey-mid max-w-[680px] transition-all duration-700 ease-expo-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          Every STET engagement follows the same architectural logic: understand
          the site completely before designing the building. This is not a
          template — it is a deliberate sequence built over years of work.
        </p>
      </div>
    </section>
  );
};

// Intro Section
const IntroSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        <p
          className={`font-primary font-light italic text-[clamp(20px,2.5vw,30px)] text-stet-black max-w-[680px] mx-auto text-center leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          Most branding agencies start with mood boards. They show you colour
          palettes and logo sketches in the first week, then build strategy
          backward from whatever the client reacts to.
        </p>

        <p
          className={`font-primary font-light italic text-[clamp(20px,2.5vw,30px)] text-stet-black max-w-[680px] mx-auto text-center leading-relaxed mt-8 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <span className="font-normal">This is not architecture. It's decoration with a timeline.</span>
        </p>

        <p
          className={`font-primary font-light italic text-[clamp(20px,2.5vw,30px)] text-stet-black max-w-[680px] mx-auto text-center leading-relaxed mt-8 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          STET works differently. We define structural requirements before
          choosing finishes. We build strategy before we sketch a single mark.
          We move in sequence because the sequence matters — each phase creates
          the foundation the next one builds on.
        </p>

        <p
          className={`font-primary font-medium italic text-[clamp(20px,2.5vw,30px)] text-stet-black max-w-[680px] mx-auto text-center leading-relaxed mt-8 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          You cannot rush this process without compromising the result.
          We don't compress timelines. We don't skip phases.
        </p>

        <p
          className={`font-primary font-light italic text-[clamp(20px,2.5vw,30px)] text-stet-grey-mid max-w-[680px] mx-auto text-center leading-relaxed mt-8 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          What we do: show visible progress every 1–2 weeks so you're
          never left wondering where we are.
        </p>
      </div>
    </section>
  );
};

// Phase Component
interface PhaseProps {
  number: string;
  headline: string;
  subheadline: string;
  timeline: string;
  body: string;
  deliverables: string[];
  parallel: string;
  isDark?: boolean;
  criticalNote?: string;
}

const Phase = ({
  number,
  headline,
  subheadline,
  timeline,
  body,
  deliverables,
  parallel,
  isDark = false,
  criticalNote,
}: PhaseProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className={`py-32 ${isDark ? 'bg-stet-black' : 'bg-white'} relative overflow-hidden`}
    >
      {/* Background Number */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 left-0 font-primary font-light text-[clamp(96px,14vw,180px)] leading-none select-none pointer-events-none ${
          isDark ? 'text-[#161616]' : 'text-[#F0F0F0]'
        }`}
      >
        {number}
      </div>

      <div className="grid-container relative z-10">
        <span
          className={`text-label block mb-5 ${isDark ? 'text-white/60' : 'text-stet-grey-mid'} transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Phase {number}
        </span>

        <h2
          className={`text-section ${isDark ? 'text-white' : 'text-stet-black'} mb-4 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          {headline}
        </h2>

        <p
          className={`font-primary font-normal italic text-[clamp(18px,2vw,28px)] ${
            isDark ? 'text-white/70' : 'text-stet-grey-mid'
          } mb-4 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '140ms' }}
        >
          {subheadline}
        </p>

        <p
          className={`font-primary font-light italic text-[15px] ${
            isDark ? 'text-white/70' : 'text-stet-grey-mid'
          } mb-10 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '210ms' }}
        >
          Timeline: {timeline}
        </p>

        <p
          className={`text-body ${isDark ? 'text-white' : 'text-stet-black'} mb-10 max-w-[640px] transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '280ms' }}
        >
          {body}
        </p>

        <div
          className={`transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <p className={`font-primary font-normal italic text-base ${isDark ? 'text-white' : 'text-stet-black'} mb-4`}>
            What you receive:
          </p>
          <ul className="emdash-list mb-10">
            {deliverables.map((item, index) => (
              <li key={index} className={isDark ? 'text-white' : 'text-stet-black'}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Architectural Parallel */}
        <div
          className={`transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '420ms' }}
        >
          <p
            className={`font-primary font-normal italic text-[15px] ${
              isDark ? 'text-white/60' : 'text-[#888888]'
            } border-l-2 ${isDark ? 'border-[#333333]' : 'border-stet-grey-light'} pl-5`}
          >
            {parallel}
          </p>
        </div>

        {/* Critical Note (Phase 2 only) */}
        {criticalNote && (
          <div
            className={`mt-10 border-l-2 border-white pl-5 transition-all duration-550 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '490ms' }}
          >
            <p className="font-primary font-medium italic text-lg text-white">
              {criticalNote}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

// Total Timeline Section
const TotalTimelineSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        <h2
          className={`text-section text-stet-black mb-10 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          3–4 months,
          <br />
          <span className="italic">start to finish.</span>
        </h2>

        <p
          className={`text-body text-stet-black mb-6 max-w-[640px] transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          Discovery to implementation. This is not a long timeline — it is
          the correct timeline for strategic work done properly.
        </p>

        <p
          className={`text-body text-stet-black mb-6 max-w-[640px] transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '140ms' }}
        >
          We show progress constantly. Visual and strategic checkpoints every
          1–2 weeks mean you always know where we are and what's coming next.
          You are never left in the dark.
        </p>

        <p
          className={`text-body text-stet-black max-w-[640px] transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '210ms' }}
        >
          <span className="font-normal">What we don't do:</span> compress the process to meet an arbitrary deadline.
          Brand infrastructure built in six weeks will require a full rebuild
          in two years. Brand infrastructure built properly will still be
          working in ten.
        </p>
      </div>
    </section>
  );
};

// Closing CTA Section (Black)
const ClosingCTASection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-stet-black">
      <div className="grid-container text-center">
        <h2
          className={`text-section-italic text-white mb-8 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          Ready to start?
        </h2>

        <p
          className={`font-primary font-light text-lg text-white max-w-[520px] mx-auto mb-10 leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Most clients begin with a Brand Audit — a 2–3 week strategic
          diagnostic before committing to full brand architecture.
          It's the lowest-risk way to experience the STET process
          and determine whether we're the right fit.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          <Link
            to="/contact"
            className={`text-cta text-white cta-link transition-all duration-700 ease-expo-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Book a Brand Audit<span className="cta-arrow">→</span>
          </Link>
          <Link
            to="/services"
            className={`text-cta text-white/70 hover:text-white transition-colors duration-200 cta-link transition-all duration-700 ease-expo-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            View Services<span className="cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Main Method Page
const Method = () => {
  const phases = [
    {
      number: '01',
      headline: 'Discovery',
      subheadline: 'Understanding the structure',
      timeline: '2–3 weeks',
      body: "Before we design anything, we understand everything. We conduct a deep investigation into your business, your market, your competitors, and your audience. We use our Atlas research system to process competitive data, market positioning, and audience patterns at a depth and speed that would take traditional research weeks to achieve. This phase answers the foundational questions: What market are you actually in? Who is your real audience and what do they actually value? Where is the genuine strategic opportunity? What do competitors own, and what is available?",
      deliverables: [
        'Comprehensive market analysis',
        'Competitive landscape mapping (5–8 competitors)',
        'Audience research and persona development',
        'Strategic opportunity map',
        'Discovery document (60–80 pages)',
      ],
      parallel: 'The architectural parallel: Site analysis — terrain, constraints, climate, opportunity.',
      isDark: false,
    },
    {
      number: '02',
      headline: 'Strategy',
      subheadline: 'Defining the blueprint',
      timeline: '3–4 weeks',
      body: "This is where most brands fail — and where STET wins. Strategy is the load-bearing structure of your brand. Everything else — the logo, the website, the campaign, the packaging — builds on what is defined here. If strategy is weak, vague, or wrong, no amount of beautiful design will save the brand. We define your positioning with precision: who you serve, what you offer them that no one else does, how you say it, and what your brand stands for at its core. Every decision is documented with clear rationale. Nothing is arbitrary.",
      deliverables: [
        'Brand positioning statement',
        'Value proposition framework',
        'Messaging architecture (primary, secondary, tertiary messages)',
        'Brand personality definition',
        'Tone of voice standards',
        'Strategic direction document (40–50 pages)',
      ],
      parallel: 'The architectural parallel: Blueprint — structural plans before construction begins.',
      isDark: true,
      criticalNote: 'Strategy cannot be rushed.',
    },
    {
      number: '03',
      headline: 'Systems Mapping',
      subheadline: 'Designing the architecture',
      timeline: '2–3 weeks',
      body: "A brand is not a logo. It is a system. In this phase, we map how your brand shows up across every touchpoint — digital, physical, and experiential — and design the architecture that connects everything into a coherent whole. We define the brand hierarchy (how your main brand relates to any sub-brands or product lines), the messaging cascade (how different messages are used at different stages of the customer journey), and the visual system structure that will guide the identity work in the next phase.",
      deliverables: [
        'Brand architecture and hierarchy map',
        'Messaging framework and cascade',
        'Touchpoint map across all brand expressions',
        'Visual system structure plan',
      ],
      parallel: 'The architectural parallel: Systems design — electrical, plumbing, structural all interconnecting.',
      isDark: false,
    },
    {
      number: '04',
      headline: 'Identity Creation',
      subheadline: 'Building the form',
      timeline: '4–6 weeks',
      body: "Design without strategy is styling. Design with strategy is architecture. Every visual and verbal decision in this phase emerges directly from the strategy defined in Phase 2. Every element has a reason to exist. Every choice can be explained. Nothing is here because it looks nice or follows a trend. The result might be bold and vibrant if strategy demands visibility and energy. It might be minimal and restrained if strategy demands authority and trust. What matters is strategic appropriateness — not designer preference.",
      deliverables: [
        'Complete logo system (primary, secondary, icon variations)',
        'Typography system (display, body, functional)',
        'Colour system with usage guidelines',
        'Visual language and photography/imagery direction',
        'Brand voice and tone standards',
        'Core brand asset suite',
      ],
      parallel: 'The architectural parallel: Construction — bringing the blueprint into physical form.',
      isDark: true,
    },
    {
      number: '05',
      headline: 'Implementation',
      subheadline: 'Making it stand',
      timeline: '3–4 weeks',
      body: "A brand only works if it's applied correctly and consistently. The final phase takes everything we've built and deploys it into the real world — creating the primary digital presence, designing the core touchpoints, producing comprehensive guidelines, and training your team so that brand integrity is maintained long after our engagement ends. The knowledge doesn't leave when we do. The documentation, the rationale, the guidelines — all of it stays with you. You should be able to make every future brand decision confidently, guided by the strategic foundation we built together.",
      deliverables: [
        'Comprehensive brand guidelines (60–80 pages)',
        'Website design (5–7 pages)',
        'Social media templates',
        'Sales and pitch collateral templates',
        'Internal team training session',
        'Launch support and consultation',
      ],
      parallel: 'The architectural parallel: Handover — ensuring the building is occupied and maintained properly.',
      isDark: false,
    },
  ];

  return (
    <main className="bg-white">
      <Hero />
      <IntroSection />
      {phases.map((phase) => (
        <Phase key={phase.number} {...phase} />
      ))}
      <TotalTimelineSection />
      <ClosingCTASection />
    </main>
  );
};

export default Method;
