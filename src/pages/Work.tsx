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
    <section className="min-h-[60vh] flex flex-col justify-center pt-32 pb-16">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 transition-all duration-550 ease-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Our Work
        </span>

        <div className="overflow-hidden mb-10">
          <h1
            className={`text-hero text-stet-black transition-all duration-700 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Selected Projects.
          </h1>
        </div>

        <p
          className={`font-primary font-light italic text-[clamp(18px,2.5vw,30px)] text-stet-grey-mid max-w-[640px] transition-all duration-700 ease-expo-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Strategic brand architecture for ambitious Nigerian businesses.
        </p>
      </div>
    </section>
  );
};

// Placeholder Section
const PlaceholderSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        <p
          className={`text-body text-stet-black mb-8 max-w-[640px] transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          STET Studio opened for client work in early 2026. Our first projects
          are currently in development and will be published here as case studies
          upon completion.
        </p>

        <p
          className={`text-body text-stet-black mb-10 max-w-[640px] transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          Case studies will document not just the final visual identity, but
          the full strategic process: the discovery findings, the positioning
          decisions, the strategic rationale behind every design choice.
          Because the thinking is as important as the result.
        </p>

        <p
          className={`text-date transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '140ms' }}
        >
          Expected: Q2–Q3 2026
        </p>
      </div>
    </section>
  );
};

// Terrene Project Card
const TerreneCard = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        <div
          className={`border border-stet-grey-light p-16 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="text-label block mb-6">Strategic Exploration</span>

          <h2 className="text-hero text-stet-black mb-8">TERRENE</h2>

          <p className="font-primary font-light italic text-lg text-stet-black mb-8 max-w-[640px]">
            A conceptual exploration of brand architecture principles applied
            to a premium Nigerian real estate development brand. Documenting
            the full STET five-phase method from discovery through implementation.
          </p>

          <p className="font-primary font-light italic text-sm text-stet-grey-mid mb-8">
            *Strategic exploration. Full case study in development.*
          </p>

          <Link to="#" className="text-cta text-stet-black cta-link">
            View Project Preview<span className="cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

// LinkedIn CTA Section (Black)
const LinkedInSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-stet-black">
      <div className="grid-container">
        <h2
          className={`text-section-italic text-white mb-10 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          See the thinking
          <br />
          before the work.
        </h2>

        <p
          className={`font-primary font-light text-lg text-white max-w-[640px] mb-10 leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          The best way to understand what STET produces is to follow
          the strategic thinking we publish publicly. Our LinkedIn
          presence documents the frameworks, principles, and strategic
          insights that inform every project we build.
        </p>

        <a
          href="https://linkedin.com/company/stet-studio"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-cta text-white cta-link inline-block mb-16 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Follow STET on LinkedIn<span className="cta-arrow">→</span>
        </a>

        <div
          className={`h-px bg-white/20 mb-16 transition-all duration-700 ease-expo-out ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}
          style={{ transitionDelay: '300ms', transformOrigin: 'left' }}
        />

        <p
          className={`font-primary font-light text-lg text-white/70 max-w-[640px] mb-8 leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Or start a conversation about your own brand. An audit
          takes 2–3 weeks and gives you a clear picture of where
          your brand stands before you commit to anything larger.
        </p>

        <Link
          to="/contact"
          className={`text-cta text-white cta-link inline-block transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          Book a Brand Audit<span className="cta-arrow">→</span>
        </Link>
      </div>
    </section>
  );
};

// Main Work Page
const Work = () => {
  return (
    <main className="bg-white">
      <Hero />
      <PlaceholderSection />
      <TerreneCard />
      <LinkedInSection />
    </main>
  );
};

export default Work;
