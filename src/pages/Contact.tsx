import { useEffect, useState } from 'react';
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
          Contact
        </span>

        <div className="overflow-hidden mb-8">
          <h1
            className={`text-hero text-stet-black transition-all duration-700 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Let's find out if
          </h1>
        </div>
        <div className="overflow-hidden mb-10">
          <h1
            className={`text-hero-italic text-stet-black transition-all duration-700 ease-expo-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '180ms' }}
          >
            we're the right fit.
          </h1>
        </div>

        <p
          className={`font-primary font-light italic text-[clamp(18px,2.5vw,30px)] text-stet-grey-mid max-w-[640px] transition-all duration-700 ease-expo-out ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          We're selective about the projects we take on — not because we're
          precious, but because deep strategic work requires full commitment
          from both sides. The conversation below helps us understand
          whether this is the right match.
        </p>
      </div>
    </section>
  );
};

// Form Section
const FormSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    businessDescription: '',
    challenge: '',
    budget: '',
    source: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    'Under ₦200k',
    '₦200k–₦500k',
    '₦500k–₦1.5M',
    '₦1.5M+',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData((prev) => ({ ...prev, budget }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.businessDescription) {
      alert('Please fill in all required fields.');
      return;
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section ref={ref} className="section-padding bg-white">
        <div className="grid-container">
          <div className="max-w-[640px] mx-auto text-center">
            <h2 className="text-section text-stet-black mb-6">Thank you.</h2>
            <p className="text-body text-stet-black">
              We've received your message and will respond within 2 business days
              with an honest assessment of how STET can help.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="grid-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Intro */}
          <div
            className={`lg:col-span-5 transition-all duration-550 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <p className="text-body text-stet-black mb-10">
              Tell us about your business and what you're trying to build.
              We'll respond within 2 business days with an honest assessment
              of how STET can help — or whether another approach might
              serve you better.
            </p>

            <div className="mb-10">
              <p className="phase-label mb-4">Prefer to reach out directly?</p>
              <a
                href="mailto:hello@stet.ng"
                className="font-primary font-light text-[15px] text-stet-grey-mid hover:text-stet-black hover:underline transition-colors duration-200 block mb-2"
              >
                hello@stet.ng
              </a>
              <a
                href="https://linkedin.com/company/stet-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-primary font-light text-[15px] text-stet-grey-mid hover:text-stet-black hover:underline transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>

            <p className="font-primary font-light italic text-sm text-stet-grey-mid">
              We don't do discovery calls before understanding the basics
              of your brief. The form above ensures our first conversation
              is substantive rather than exploratory.
            </p>
          </div>

          {/* Right: Form */}
          <div
            className={`lg:col-span-7 transition-all duration-550 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: '70ms' }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label htmlFor="name" className="text-form-label block mb-3">
                  Your name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="businessName" className="text-form-label block mb-3">
                  Business name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="email" className="text-form-label block mb-3">
                  Email address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="businessDescription" className="text-form-label block mb-3">
                  What does your business do? *
                </label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleChange}
                  className="form-input resize-none"
                  rows={3}
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="challenge" className="text-form-label block mb-3">
                  What's the primary brand challenge you're facing?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  className="form-input resize-none"
                  rows={3}
                />
              </div>

              <div className="mb-8">
                <label className="text-form-label block mb-3">
                  What's your approximate budget range?
                </label>
                <div className="flex flex-wrap gap-3">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleBudgetSelect(option)}
                      className={`budget-toggle ${formData.budget === option ? 'active' : ''}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <label htmlFor="source" className="text-form-label block mb-3">
                  How did you hear about STET?
                </label>
                <input
                  type="text"
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <button type="submit" className="btn-submit">
                Send →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// What Happens Next Section
const WhatHappensNextSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  const steps = [
    {
      num: '01',
      title: 'We review your brief (1–2 days)',
      body: "We read everything you've shared and assess whether your goals, budget, and timeline align with what STET does best.",
    },
    {
      num: '02',
      title: 'We respond honestly (within 2 business days)',
      body: "If we're a strong fit, we'll propose a clear next step — usually a Brand Audit. If we're not the right fit, we'll tell you that too, and suggest what might serve you better.",
    },
    {
      num: '03',
      title: 'We begin with structure',
      body: 'Every engagement starts with discovery — understanding your business completely before designing anything. No shortcuts.',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-white border-t border-stet-grey-light">
      <div className="grid-container">
        <h2
          className={`text-section text-stet-black mb-16 transition-all duration-550 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          What to expect
          <br />
          after you reach out.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`transition-all duration-550 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${70 + index * 70}ms` }}
            >
              <span className="text-step-num block mb-6">{step.num}</span>
              <h3 className="font-primary font-medium text-[22px] text-stet-black mb-4">
                {step.title}
              </h3>
              <p className="text-column-body text-stet-black">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Closing Section (Black)
const ClosingSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-32 bg-stet-black">
      <div className="grid-container text-center">
        <h2
          className={`text-section-italic text-white mb-8 transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          Not ready to reach out yet?
        </h2>

        <p
          className={`font-primary font-light text-lg text-white max-w-[520px] mx-auto mb-10 leading-relaxed transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Follow our strategic content on LinkedIn. We publish
          frameworks, insights, and brand thinking regularly —
          the same depth of thinking that goes into every
          client project.
        </p>

        <a
          href="https://linkedin.com/company/stet-studio"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-cta text-white cta-link inline-block transition-all duration-700 ease-expo-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Follow on LinkedIn<span className="cta-arrow">→</span>
        </a>
      </div>
    </section>
  );
};

// Main Contact Page
const Contact = () => {
  return (
    <main className="bg-white">
      <Hero />
      <FormSection />
      <WhatHappensNextSection />
      <ClosingSection />
    </main>
  );
};

export default Contact;
