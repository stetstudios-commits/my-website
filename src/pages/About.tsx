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
    <section className="min-h-[65vh] flex flex-col justify-center pt-32 pb-16">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 transition-all duration-550 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          About STET
        </span>

        <div className="overflow-hidden mb-8">
          <h1
            className={`text-hero text-stet-black transition-all duration-700 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            An architecture firm
          </h1>
        </div>
        <div className="overflow-hidden mb-10">
          <h1
            className={`text-hero text-stet-black transition-all duration-700 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '180ms' }}
          >
            for brands.
          </h1>
        </div>

        <p
          className={`font-primary font-light italic text-[clamp(20px,2.5vw,34px)] text-stet-grey-mid transition-all duration-700 ease-expo-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          Not a metaphor. A methodology.
        </p>
      </div>
    </section>
  );
};

// Philosophy Section
const PhilosophySection = () => {
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
              What We Believe
            </span>
            <h2
              className={`text-section text-stet-black transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '70ms' }}
            >
              Branding is not decoration.
              <br />
              <span className="italic">It is infrastructure.</span>
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
              <p className="text-body text-stet-black mb-6">
                Your brand should function like the architecture of a well-designed
                building. Every element serves a purpose. All systems interlock and
                scale. The structure guides how people move and interact. Form follows
                function, always. Built to stand for decades, not seasons.
              </p>
              <p className="text-body text-stet-black mb-6">
                Most agencies sell decoration — prettier logos, trendier colour
                palettes, websites that look good until they don't. STET sells
                architecture: the strategic infrastructure that makes a brand
                actually work as a business asset.
              </p>
            </div>

            <div
              className={`transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '210ms' }}
            >
              <p className="font-primary font-light text-lg text-stet-black mb-2">
                Infrastructure guides decisions.
              </p>
              <p className="font-primary font-light text-lg text-stet-black mb-2">
                Infrastructure justifies premium pricing.
              </p>
              <p className="font-primary font-light text-lg text-stet-black mb-2">
                Infrastructure builds loyalty.
              </p>
              <p className="font-primary font-light text-lg text-stet-black">
                Infrastructure scales.
              </p>
            </div>

            <p
              className={`font-primary font-normal italic text-lg text-stet-black mt-8 transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '280ms' }}
            >
              Decoration does none of these things.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Founder Section
const FounderSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          The Founder
        </span>
        <h2
          className={`text-section text-stet-black mb-16 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          Built by an architect
          <br />
          who saw a gap.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Image placeholder */}
          <div className="lg:col-span-5">
           <img 
  src="founder.png"
  alt="Efe Olakpe" 
  className="aspect-[3/4] object-cover w-full h-full" 
/>
          </div>

          {/* Right: Body */}
          <div className="lg:col-span-7">
            <div
              className={`transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '140ms' }}
            >
              <p className="text-body text-stet-black mb-6">
                STET Studio was founded by Efe Olakpe — a trained architect who spent years
                watching Nigerian businesses with genuinely excellent products struggle
                to communicate that excellence through their brands.
              </p>
              <p className="text-body text-stet-black mb-6">
                The problem wasn't talent. It wasn't product quality. It was approach.
              </p>
              <p className="text-body text-stet-black mb-6">
                <span className="font-normal italic">
                  Branding was being treated as decoration:
                </span>{' '}
                make it look nice, pick some colours, design a logo, move on. Nobody was
                applying structural thinking to brand development. Nobody was asking the
                load-bearing questions first.
              </p>
              <p className="text-body text-stet-black mb-6">
                Architecture school teaches you to understand the site before designing
                the building. To define structural requirements before choosing finishes.
                To build systems that interlock, scale, and endure. To see form and
                function as inseparable.
              </p>
              <p className="text-body text-stet-black">
                These principles apply perfectly — completely — to brand development.
              </p>
            </div>

            <p
              className={`text-body text-stet-black mt-6 transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '210ms' }}
            >
              So STET was built to do exactly that: apply architectural systems
              thinking to the challenge of building brands for ambitious Nigerian
              businesses. Not decoration. Infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Atlas System Section (Black)
const AtlasSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-stet-black">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 text-white/60 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          How We Work
        </span>
        <h2
          className={`text-section text-white mb-16 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          We use AI.
          <br />
          We'll tell you exactly how.
        </h2>

        <p
          className={`font-primary font-light text-lg text-white max-w-[640px] mb-16 leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '140ms' }}
        >
          STET operates with a hybrid intelligence model called Atlas — a
          coordinated system of AI-powered tools that handles the research,
          data synthesis, competitive analysis, and pattern recognition that
          typically takes traditional agencies weeks.
        </p>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div
            className={`transition-all duration-700 ease-expo-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '210ms' }}
          >
            <p className="phase-label text-white/60 mb-6">What Atlas handles:</p>
            <ul className="emdash-list">
              <li className="text-white">Market and competitor research</li>
              <li className="text-white">Data collection and pattern recognition</li>
              <li className="text-white">Strategic documentation and drafting</li>
              <li className="text-white">Analysis and synthesis of large datasets</li>
            </ul>
          </div>

          <div
            className={`transition-all duration-700 ease-expo-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '280ms' }}
          >
            <p className="phase-label text-white/60 mb-6">What STET's human team handles:</p>
            <ul className="emdash-list">
              <li className="text-white">All strategic interpretation and decision-making</li>
              <li className="text-white">Cultural and contextual understanding</li>
              <li className="text-white">Positioning and messaging architecture</li>
              <li className="text-white">Client relationships and creative direction</li>
              <li className="text-white">Final quality control on every deliverable</li>
            </ul>
          </div>
        </div>

        {/* Mantra */}
        <div className="text-center">
          <p
            className={`font-primary font-normal italic text-[clamp(18px,2vw,28px)] text-white mb-10 transition-all duration-700 ease-expo-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '350ms' }}
          >
            Atlas processes data. Humans create strategy.
          </p>
          <p
            className={`font-primary font-normal italic text-[clamp(18px,2vw,28px)] text-white mb-10 transition-all duration-700 ease-expo-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '420ms' }}
          >
            Atlas identifies patterns. Humans apply context.
          </p>
          <p
            className={`font-primary font-normal italic text-[clamp(18px,2vw,28px)] text-white transition-all duration-700 ease-expo-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '490ms' }}
          >
            Atlas suggests directions. Humans make decisions.
          </p>
        </div>

        <p
          className={`font-primary font-light text-lg text-white/70 max-w-[640px] mx-auto mt-16 text-center leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '560ms' }}
        >
          We're transparent about this because our clients invest significantly
          in brand infrastructure and deserve to know exactly how that investment
          creates value.
        </p>
      </div>
    </section>
  );
};

// Values Section
const ValuesSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  const values = [
    {
      num: '01',
      headline: 'Strategy First, Always',
      body: "We do not skip discovery. We do not rush strategy. If a client wants to bypass the strategic phases to move faster, we decline the project. A brand without strategic foundation is preparing for failure.",
    },
    {
      num: '02',
      headline: 'Radical Transparency',
      body: "About our methods, our tools, our reasoning, our limitations. If we don't have expertise in an area, we say so. If we can't serve a client well, we tell them honestly. Trust is built on honesty.",
    },
    {
      num: '03',
      headline: 'Restraint Over Addition',
      body: 'The best editorial decision is often to leave something unchanged. The best design decision is often to remove, not add. We build brands where every element has a reason to exist and nothing exists merely for decoration.',
    },
    {
      num: '04',
      headline: 'Built for Longevity',
      body: "We're not building for the next trend cycle. Every strategic framework, every visual system, every brand guideline we produce is built for a 3–5 year horizon minimum. We think in decades, not seasons.",
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          What Guides Us
        </span>
        <h2
          className={`text-section text-stet-black mb-16 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          Four principles.
          <br />
          Non-negotiable.
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {values.map((value, index) => (
            <div
              key={value.num}
              className={`p-10 ${
                index % 2 === 0 ? 'md:border-r border-stet-grey-light' : ''
              } ${index < 2 ? 'border-b border-stet-grey-light' : ''} transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${140 + index * 70}ms` }}
            >
              <span className="font-primary font-light italic text-[13px] text-stet-grey-mid block mb-6">
                {value.num}
              </span>
              <h3 className="text-column-headline text-stet-black mb-5">{value.headline}</h3>
              <p className="text-column-body text-stet-black">{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Ibadan Position Section
const IbadanSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Where We Are
        </span>
        <h2
          className={`text-section text-stet-black mb-10 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          We operate from Ibadan.
          <br />
          This is strategic.
        </h2>

        <p
          className={`text-body text-stet-black mb-6 max-w-[640px] transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '140ms' }}
        >
          While Lagos agencies chase trends and rush deliverables in the noise
          of constant networking and market chaos, STET has the distance to
          think architecturally.
        </p>

        <div
          className={`transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '210ms' }}
        >
          <p className="font-primary font-light text-lg text-stet-black mb-2">
            Strategic thinking requires stepping back from the noise.
          </p>
          <p className="font-primary font-light text-lg text-stet-black mb-2">
            Deep work requires space.
          </p>
          <p className="font-primary font-light text-lg text-stet-black mb-6">
            Clarity requires distance.
          </p>
        </div>

        <p
          className={`text-body text-stet-black mb-10 max-w-[640px] transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '280ms' }}
        >
          Our lower overhead also means we invest in quality — in research,
          in tools, in thinking time — rather than in offices designed to
          impress clients at first visit.
        </p>

        <div
          className={`transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <p className="font-primary font-medium text-[clamp(22px,3vw,38px)] text-stet-black leading-tight">
            We're here to build brands that impress clients for decades.
          </p>
          <p className="font-primary font-normal italic text-[clamp(22px,3vw,38px)] text-stet-black leading-tight">
            Not lobbies that impress them for minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

// Vision Section (Black)
const VisionSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-stet-black">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 text-white/60 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Where We're Going
        </span>
        <h2
          className={`text-section-italic text-white mb-10 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          We're building an institution.
          <br />
          Not an agency.
        </h2>

        <p
          className={`font-primary font-light text-lg text-white max-w-[640px] mb-6 leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '140ms' }}
        >
          In 10 years, STET will be Nigeria's reference point for strategic brand
          architecture — known for pioneering AI-augmented brand strategy, for
          producing brands that genuinely compete internationally, and for raising
          the standard of what strategic branding means on this continent.
        </p>

        <p
          className={`font-primary font-light text-lg text-white max-w-[640px] mb-10 leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '210ms' }}
        >
          We're not a freelance design service with a studio name.
          We're not building toward acquisition or a quick exit.
        </p>

        <p
          className={`font-primary font-light text-lg text-white max-w-[640px] mb-12 leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '280ms' }}
        >
          We're building something that still matters in 20 years — because
          it's built on principles that endure, not trends that fade.
        </p>

        <div
          className={`flex flex-wrap gap-10 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <Link to="/services" className="text-cta text-white cta-link">
            See Our Services<span className="cta-arrow">→</span>
          </Link>
          <Link to="/method" className="text-cta text-white/70 hover:text-white transition-colors duration-200 cta-link">
            Read About Our Method<span className="cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Main About Page
const About = () => {
  return (
    <main className="bg-white">
      <Hero />
      <PhilosophySection />
      <FounderSection />
      <AtlasSection />
      <ValuesSection />
      <IbadanSection />
      <VisionSection />
    </main>
  );
};

export default About;
