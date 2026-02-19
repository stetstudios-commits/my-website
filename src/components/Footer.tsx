import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/method', label: 'The Method' },
    { path: '/work', label: 'Work' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-white border-t border-stet-grey-light">
      <div className="grid-container py-16">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="font-primary font-medium text-[28px] text-stet-black block mb-2">
              STET
            </Link>
            <p className="font-primary font-light italic text-sm text-stet-grey-mid">
              Strategic Brand Architecture
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-primary font-light text-[15px] text-stet-grey-mid hover:text-stet-black hover:underline transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:hello@stet.ng"
              className="font-primary font-light text-[15px] text-stet-grey-mid hover:text-stet-black hover:underline transition-colors duration-200"
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

          {/* Column 4: Location */}
          <div>
            <p className="font-primary font-light italic text-[15px] text-stet-grey-mid">
              Ibadan, Nigeria
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-stet-grey-light my-10" />

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-primary font-normal italic text-base text-stet-grey-mid">
            We don't design brands. We architect them.
          </p>
          <p className="text-footer-copy">
            © 2026 STET Studio Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
