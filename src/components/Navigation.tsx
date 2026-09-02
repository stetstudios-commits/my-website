import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/method', label: 'The Method' },
    { path: '/work', label: 'Work' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <nav className="grid-container">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'py-4' : 'py-6'
            }`}
          >
            <Link to="/" className="text-nav-brand text-stet-black">
              STET
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-nav-link transition-colors duration-200 ${
                    isActive(link.path) ? 'text-nav-link-active' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              className="hidden md:block text-button border border-stet-black px-6 py-2 transition-all duration-250 hover:bg-stet-black hover:text-white"
            >
              Start a Project
            </Link>

            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              type="button"
            >
              <span className="w-6 h-px bg-stet-black"></span>
              <span className="w-6 h-px bg-stet-black"></span>
              <span className="w-6 h-px bg-stet-black"></span>
            </button>
          </div>
        </nav>

        <div
          className={`h-px w-full transition-colors duration-300 ${
            isScrolled ? 'bg-stet-grey-border' : 'bg-stet-grey-light'
          }`}
        />
      </header>

      <div
        className={`fixed inset-0 z-[100] bg-stet-black transition-opacity duration-250 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-white text-3xl font-primary font-light"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
          type="button"
        >
          ×
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            to="/"
            className={`font-primary font-light text-white italic text-4xl transition-opacity duration-200 ${
              isActive('/') ? 'opacity-100' : 'opacity-70'
            }`}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-primary font-light text-white italic text-4xl transition-opacity duration-200 ${
                isActive(link.path) ? 'opacity-100' : 'opacity-70'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
