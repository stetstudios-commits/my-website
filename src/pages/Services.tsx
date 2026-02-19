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
          Services
        </span>

        <div className="overflow-hidden mb-8">
          <h1
            className={`text-hero text-stet-black transition-all duration-700 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Two ways to work
          </h1>
        </div>
        <div className="overflow-hidden mb-10">
          <h1
            className={`text-hero text-stet-black transition-all duration-700 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '180ms' }}
          >
            with STET.
          </h1>
        </div>

        <p
          className={`font-primary font-light italic text-[22px] text-stet-grey-mid max-w-[640px] transition-all duration-700 ease-expo-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          Both built on the same foundation: strategic rigour, honest process,
          and brand infrastructure that actually works.
        </p>
      </div>
    </section>
  );
};

// Brand Audit Service Section
const BrandAuditSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Where Most Clients Begin
        </span>
        <h2
          className={`text-section text-stet-black mb-16 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          Brand Audit <span className="italic">&</span>
          <br />
          Strategic Consultation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Deliverables */}
          <div
            className={`lg:col-span-5 transition-all duration-550 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '140ms' }}
          >
            <p className="text-body text-stet-black mb-10">
              A comprehensive diagnostic of your current brand. We assess your
              positioning, messaging, visual identity, competitive landscape, and
              audience alignment — then give you a clear, prioritised roadmap
              for what needs to change and why.
            </p>

            <p className="phase-label mb-4">What you receive:</p>
            <ul className="emdash-list mb-10">
              <li>Current brand assessment across all major touchpoints</li>
              <li>Competitive landscape analysis (5–8 direct competitors)</li>
              <li>Audience alignment review</li>
              <li>Strategic gap identification</li>
              <li>Prioritised recommendations with clear rationale</li>
              <li>Estimated scope if full brand architecture is the right next step</li>
              <li>15–20 page strategic presentation</li>
            </ul>
          </div>

          {/* Right: Details */}
          <div
            className={`lg:col-span-7 lg:pl-12 lg:border-l border-stet-grey-light transition-all duration-550 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '210ms' }}
          >
            <p className="text-body text-stet-black mb-10">
              This is not a superficial review. It is a genuine strategic assessment
              conducted with the same rigour we apply to full brand architecture projects.
            </p>

            <p className="font-primary font-normal italic text-base text-stet-black mb-4">
              Who this is for:
            </p>
            <p className="text-body text-stet-black mb-10">
              Businesses unsure whether they need a full rebrand. Founders who
              want an honest outside assessment before committing to a larger
              investment. Companies that have rebranded before and want to
              understand why it didn't hold.
            </p>

            <div className="flex flex-wrap gap-12 mb-10">
              <div>
                <p className="phase-label mb-2">Timeline</p>
                <p className="font-primary font-light text-lg text-stet-black">2–3 weeks</p>
              </div>
              <div>
                <p className="phase-label mb-2">Investment</p>
                <p className="font-primary font-medium text-[26px] text-stet-black">From ₦200,000</p>
              </div>
            </div>

            <Link to="/contact" className="text-cta text-stet-black cta-link inline-block">
              Book a Brand Audit<span className="cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Full Brand Architecture Section
const FullArchitectureSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-white border-t border-stet-grey-light">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          The Full Engagement
        </span>
        <h2
          className={`text-section text-stet-black mb-16 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          Full Brand Architecture
          <br />
          (The STET Method)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Deliverables */}
          <div
            className={`lg:col-span-5 transition-all duration-550 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '140ms' }}
          >
            <p className="text-body text-stet-black mb-10">
              Our complete five-phase process. From deep discovery through to
              full implementation — positioning, messaging, visual identity,
              brand guidelines, primary digital presence, and team training.
            </p>

            <p className="text-body text-stet-black mb-10">
              This is not a logo and website package. This is strategic brand
              infrastructure built to scale your business, command premium
              positioning, and last for years without requiring a full rebuild.
            </p>

            <p className="phase-label mb-4">What you receive:</p>

            <p className="phase-label mb-3">Discovery & Research</p>
            <ul className="emdash-list mb-6">
              <li>Comprehensive market analysis</li>
              <li>Competitive landscape mapping</li>
              <li>Audience research and persona development</li>
              <li>Strategic opportunity identification</li>
            </ul>

            <p className="phase-label mb-3">Brand Strategy</p>
            <ul className="emdash-list mb-6">
              <li>Brand positioning statement</li>
              <li>Value proposition framework</li>
              <li>Messaging architecture</li>
              <li>Brand personality and voice definition</li>
            </ul>

            <p className="phase-label mb-3">Systems Architecture</p>
            <ul className="emdash-list mb-6">
              <li>Brand hierarchy and sub-brand structure (if applicable)</li>
              <li>Touchpoint mapping across digital and physical</li>
              <li>Visual system framework</li>
            </ul>

            <p className="phase-label mb-3">Identity Creation</p>
            <ul className="emdash-list mb-6">
              <li>Complete logo system</li>
              <li>Typography and colour system</li>
              <li>Visual language and design principles</li>
              <li>Brand voice and tone standards</li>
              <li>Core brand asset suite</li>
            </ul>

            <p className="phase-label mb-3">Implementation</p>
            <ul className="emdash-list">
              <li>Comprehensive brand guidelines (60–80 pages)</li>
              <li>Website design (5–7 pages)</li>
              <li>Social media templates</li>
              <li>Sales and pitch collateral templates</li>
              <li>Internal team training</li>
              <li>Launch support</li>
            </ul>
          </div>

          {/* Right: Details */}
          <div
            className={`lg:col-span-7 lg:pl-12 lg:border-l border-stet-grey-light transition-all duration-550 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '210ms' }}
          >
            <p className="font-primary font-normal italic text-base text-stet-black mb-4">
              Who this is for:
            </p>
            <p className="text-body text-stet-black mb-10">
              Growth-stage businesses ready to invest in brand infrastructure
              that supports serious expansion. Founders who understand that
              brand is competitive advantage, not marketing expense.
            </p>

            <div className="flex flex-wrap gap-12 mb-6">
              <div>
                <p className="phase-label mb-2">Timeline</p>
                <p className="font-primary font-light text-lg text-stet-black">3–4 months</p>
              </div>
              <div>
                <p className="phase-label mb-2">Investment</p>
                <p className="font-primary font-medium text-[26px] text-stet-black">₦1,500,000 – ₦3,000,000</p>
              </div>
            </div>

            <p
              className={`font-primary font-light italic text-[15px] text-stet-grey-mid mb-10 transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: '280ms' }}
            >
              *Most Full Brand Architecture clients begin with a Brand Audit.*
            </p>

            <div className="flex flex-wrap gap-10">
              <Link to="/contact" className="text-cta text-stet-black cta-link">
                Start with an Audit First<span className="cta-arrow">→</span>
              </Link>
              <Link to="/contact" className="text-cta text-stet-grey-mid hover:text-stet-black transition-colors duration-200 cta-link">
                Discuss Full Architecture<span className="cta-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Monthly Retainer Section
const RetainerSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="section-padding bg-stet-grey-subtle">
      <div className="grid-container">
        <span
          className={`text-label block mb-5 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          For Ongoing Support
        </span>
        <h2
          className={`text-section text-stet-black mb-10 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          Monthly Strategic Retainer
        </h2>

        <p
          className={`text-body text-stet-black mb-10 max-w-[640px] transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '140ms' }}
        >
          For existing STET clients or businesses with established brand
          infrastructure who need ongoing strategic brand support — content
          direction, campaign alignment, brand evolution guidance, and quarterly
          strategic review.
        </p>

        <div
          className={`transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '210ms' }}
        >
          <p className="phase-label mb-2">Investment</p>
          <p className="font-primary font-medium text-2xl text-stet-black mb-8">
            ₦500,000 – ₦800,000 / month
          </p>
        </div>

        <p
          className={`text-body text-stet-black transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
          style={{ transitionDelay: '280ms' }}
        >
          <Link to="/contact" className="text-cta text-stet-black cta-link">
            Contact us to discuss<span className="cta-arrow">→</span>
          </Link>{' '}
          whether a retainer engagement is right for your business.
        </p>
      </div>
    </section>
  );
};

// Who We Say No To Section (Black)
const WhoWeSayNoToSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-stet-black">
      <div className="grid-container text-center">
        <span
          className={`text-label block mb-5 text-white/60 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          Honest Disclosure
        </span>
        <h2
          className={`text-section-italic text-white mb-10 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '70ms' }}
        >
          We decline certain projects.
          <br />
          Here's why.
        </h2>

        <p
          className={`font-primary font-light text-lg text-white max-w-[600px] mx-auto mb-6 leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '140ms' }}
        >
          STET only takes on work we can execute excellently. This means we
          say no to clients who want 2-week turnarounds, logo-only briefs,
          or brands built on what the founder personally likes rather than
          what the market strategically requires.
        </p>

        <p
          className={`font-primary font-light text-lg text-white max-w-[600px] mx-auto mb-10 leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '210ms' }}
        >
          Every project we decline protects our ability to go deep on the
          projects we accept. It's how we maintain standards — and why our
          clients get our full strategic attention.
        </p>

        <p
          className={`font-primary font-normal italic text-xl text-white transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '280ms' }}
        >
          If you're unsure whether we're the right fit, the Brand Audit is
          the lowest-risk way to find out.
        </p>

        <Link
          to="/contact"
          className={`text-cta text-white cta-link inline-block mt-10 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          Book a Brand Audit<span className="cta-arrow">→</span>
        </Link>
      </div>
    </section>
  );
};

// Main Services Page
const Services = () => {
  return (
    <main className="bg-white">
      <Hero />
      <BrandAuditSection />
      <FullArchitectureSection />
      <RetainerSection />
      <WhoWeSayNoToSection />
    </main>
  );
};

export default Services;
