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
    <section className="min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 md:px-20 lg:px-20">
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Headline */}
        <div className="overflow-hidden mb-8">
          <h1
            className={`text-hero text-stet-black transition-all duration-700 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Most Nigerian businesses are
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1
            className={`text-hero text-stet-black transition-all duration-700 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '180ms' }}
          >
            world-class in product.
          </h1>
        </div>
        <div className="overflow-hidden mb-12">
          <h1
            className={`text-hero-italic text-stet-black transition-all duration-700 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '260ms' }}
          >
            Provincial in brand.
          </h1>
        </div>

        {/* Subline */}
        <p
          className={`font-primary font-light italic text-[clamp(24px,3vw,40px)] text-stet-grey-mid mb-8 transition-all duration-700 ease-expo-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '460ms' }}
        >
          STET closes that gap.
        </p>

        {/* Body */}
        <p
          className={`text-body text-stet-black mb-12 max-w-[560px] transition-all duration-700 ease-expo-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '560ms' }}
        >
          We don't design brands. We architect them — building strategic brand systems
          that command premium positioning, justify higher pricing, and stand for decades.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-10 transition-all duration-700 ease-expo-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '660ms' }}
        >
          <Link to="/contact" className="text-cta text-stet-black cta-link">
            Start with a Brand Audit<span className="cta-arrow">→</span>
          </Link>
          <Link to="/method" className="text-cta text-stet-grey-mid hover:text-stet-black transition-colors duration-200 cta-link">
            See how we work<span className="cta-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        <div className="w-px h-12 bg-[#CCCCCC] mb-2" />
        <span className="text-scroll">scroll</span>
      </div>
    </section>
  );
};

// The Problem Section
const ProblemSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left: Headline */}
          <div className="lg:col-span-5">
            <span
              className={`text-label block mb-5 transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              The Problem
            </span>
            <h2
              className={`text-section text-stet-black transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '70ms' }}
            >
              You're better than
              <br />
              your brand suggests.
            </h2>
          </div>

          {/* Right: Body */}
          <div className="lg:col-span-7 lg:pt-10">
            <div
              className={`transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '140ms' }}
            >
              <p className="text-body text-stet-black mb-6 max-w-[540px]">
                Your product is excellent. Your service is excellent.
                But the moment a potential customer encounters your brand —
                the website, the packaging, the pitch deck, the Instagram page —
                something is lost. They don't see what you know to be true.
              </p>
              <p className="text-body text-stet-black mb-6 max-w-[540px] font-normal">
                This isn't a design problem. It's a structural one.
              </p>
              <p className="text-body text-stet-black mb-10 max-w-[540px]">
                Nigerian businesses lose premium clients, justify discounts they
                shouldn't give, and stall on growth — not because of what they offer,
                but because their brand infrastructure wasn't built to communicate value.
              </p>
            </div>

            {/* Verdict */}
            <div
              className={`transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '210ms' }}
            >
              <p className="font-primary font-medium italic text-[clamp(22px,3vw,38px)] text-stet-black leading-tight">
                Decoration won't fix it.
              </p>
              <p className="font-primary font-medium italic text-[clamp(22px,3vw,38px)] text-stet-black leading-tight">
                Architecture will.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// The Difference Section
const DifferenceSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  const differences = [
    {
      num: '01',
      headline: 'Architecture Over Aesthetics',
      body: 'Most agencies deliver logos and websites. STET builds brand systems — the strategic infrastructure that connects your positioning, messaging, and identity into a single structure that scales as you grow.',
    },
    {
      num: '02',
      headline: 'Strategy Before Everything',
      body: "We don't design anything until we understand everything. Your market, your competitors, your audience, your real differentiation. Strategy is the load-bearing structure. We never build without it.",
    },
    {
      num: '03',
      headline: 'Built to Last',
      body: 'Trends collapse. Systems endure. We build brands rooted in strategic truth, not seasonal aesthetics. The result: a brand you won\'t need to rebuild in three years.',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        {/* Header */}
        <span
          className={`text-label block mb-5 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          What Makes STET Different
        </span>
        <h2
          className={`text-section text-stet-black mb-16 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          We start where
          <br />
          other agencies stop.
        </h2>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {differences.map((diff, index) => (
            <div
              key={diff.num}
              className={`relative px-6 py-8 first:pl-0 last:pr-0 ${
                index < differences.length - 1 ? 'md:border-r border-stet-grey-light' : ''
              } transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${140 + index * 70}ms` }}
            >
              <span className="text-column-num block mb-8">{diff.num}</span>
              <h3 className="text-column-headline text-stet-black mb-5">{diff.headline}</h3>
              <p className="text-column-body text-stet-black">{diff.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// The Etymology Section (Black)
const EtymologySection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-48 bg-stet-black">
      <div className="grid-container text-center">
        <h2
          className={`text-section-italic text-white mb-8 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          Stet. Latin for:
          <br />
          let it stand.
        </h2>

        <p
          className={`text-pullquote text-white/60 max-w-[700px] mx-auto mb-12 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          "Ignore the correction. Revert to the original. Let it stand."
        </p>

        <p
          className={`font-primary font-light text-lg text-white max-w-[580px] mx-auto leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          This is how we approach every brand we build. We uncover what is
          inherently right about your business. We protect it fiercely against
          trend-chasing, noise, and pressure to dilute. We build systems around
          it that endure.
        </p>

        <p
          className={`font-primary font-light text-lg text-white max-w-[580px] mx-auto leading-relaxed mt-6 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          When something is strategically sound and built to scale — it stands.
        </p>
      </div>
    </section>
  );
};

// Brand Audit CTA Section
const AuditCTASection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Where to Begin
        </span>
        <h2
          className={`text-section text-stet-black mb-16 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          Not ready for a full rebrand?
          <br />
          Start with a Brand Audit.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Deliverables */}
          <div
            className={`lg:col-span-5 transition-all duration-550 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '140ms' }}
          >
            <p className="phase-label mb-4">What you receive:</p>
            <ul className="emdash-list mb-10">
              <li>A clear picture of where your brand stands today</li>
              <li>Competitive landscape analysis</li>
              <li>Strategic recommendations with clear priority</li>
              <li>A defined scope if full brand architecture is the right next step</li>
            </ul>

            <div className="flex flex-wrap gap-12 mb-8">
              <div>
                <p className="phase-label mb-2">Timeline</p>
                <p className="font-primary font-light text-lg text-stet-black">2–3 weeks</p>
              </div>
              <div>
                <p className="phase-label mb-2">Investment</p>
                <p className="font-primary font-medium text-2xl text-stet-black">From ₦200,000</p>
              </div>
            </div>
          </div>

          {/* Right: Body + CTA */}
          <div
            className={`lg:col-span-7 lg:pl-12 lg:border-l border-stet-grey-light transition-all duration-550 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '210ms' }}
          >
            <p className="text-body text-stet-black mb-8">
              The STET Brand Audit is a comprehensive strategic diagnostic of your
              current brand. We assess what's working, what's broken, and what's
              holding your business back from premium positioning.
            </p>

            <Link to="/contact" className="text-cta text-stet-black cta-link inline-block mb-4">
              Book Your Brand Audit<span className="cta-arrow">→</span>
            </Link>
            <br />
            <Link
              to="/services"
              className="text-cta text-stet-grey-mid hover:text-stet-black transition-colors duration-200 cta-link inline-block"
            >
              Or explore full Brand Architecture<span className="cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Who We Serve Section
const WhoWeServeSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Who We Work With
        </span>
        <h2
          className={`text-section text-stet-black mb-10 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          We work with a
          <br />
          specific kind of business.
        </h2>

        <p
          className={`text-body text-stet-black mb-10 max-w-[640px] transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '140ms' }}
        >
          STET is built for growth-stage Nigerian companies and funded startups
          who are past survival mode and ready to compete on value, not effort.
        </p>

        <p
          className={`text-body text-stet-black mb-12 max-w-[640px] transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '210ms' }}
        >
          You're right for STET if you've been operating 3+ years and your brand
          hasn't kept pace with your business. If you're losing premium clients
          to competitors who simply look more credible. If you're discounting
          prices you shouldn't be discounting.
        </p>

        {/* Industry List */}
        <div
          className={`transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '280ms' }}
        >
          <div className="h-px bg-stet-grey-light mb-8" />
          <p className="text-industry">
            Real estate / Hospitality / Professional services / Luxury retail / Funded tech
          </p>
        </div>

        <p
          className={`text-body text-stet-black mt-12 mb-8 max-w-[640px] transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          We say no to rushed timelines, logo-only briefs, and brands built
          on personal preference rather than strategic truth.
        </p>

        <Link
          to="/services"
          className={`text-cta text-stet-black cta-link inline-block transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '420ms' }}
        >
          See Our Services<span className="cta-arrow">→</span>
        </Link>
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
          Ready to build something
          <br />
          that stands?
        </h2>

        <p
          className={`font-primary font-light text-lg text-white max-w-[520px] mx-auto mb-10 leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Start with a conversation. Tell us about your business and what
          you're building. We'll tell you honestly whether STET is the right fit.
        </p>

        <Link
          to="/contact"
          className={`text-cta text-white cta-link inline-block mb-4 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Start the Conversation<span className="cta-arrow">→</span>
        </Link>

        <p
          className={`font-primary font-light italic text-base text-white/50 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          hello@stet.ng
        </p>
      </div>
    </section>
  );
};

// Main Home Page
const Home = () => {
  return (
    <main className="bg-white">
      <Hero />
      <ProblemSection />
      <DifferenceSection />
      <EtymologySection />
      <AuditCTASection />
      <WhoWeServeSection />
      <ClosingCTASection />
    </main>
  );
};

export default Home;
