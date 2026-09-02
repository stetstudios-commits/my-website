import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="bg-white">
      <section className="min-h-[70vh] flex flex-col justify-center pt-32 pb-16">
        <div className="grid-container">
          <span className="text-label block mb-5">404</span>
          <h1 className="text-hero text-stet-black mb-8">
            This page
            <br />
            does not stand.
          </h1>
          <p className="text-body text-stet-black mb-10 max-w-[520px]">
            The URL is wrong, or the page has been removed. Start from the
            beginning, or go straight to a conversation.
          </p>
          <div className="flex flex-wrap gap-10">
            <Link to="/" className="text-cta text-stet-black cta-link">
              Back to home<span className="cta-arrow">→</span>
            </Link>
            <Link to="/contact" className="text-cta text-stet-grey-mid hover:text-stet-black transition-colors duration-200 cta-link">
              Start a conversation<span className="cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
