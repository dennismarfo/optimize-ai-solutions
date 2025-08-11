
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CountrySelector } from '@/components/CountrySelector';
import { Menu, X } from 'lucide-react';

export const NewHeader = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.process', href: '#process' },
    { key: 'nav.case', href: '#case' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-aiDark/95 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-white font-bold text-xl">
              OptiAI<span className="text-aiBlue">-Solutions</span>
            </a>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Country Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <CountrySelector />
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-aiBlue transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-aiDark/95 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="px-3 py-2">
                <CountrySelector />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
