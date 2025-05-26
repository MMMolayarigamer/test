import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-darker shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="md:hidden">
          <button className="text-light" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <a href="#" className="flex items-center order-2 md:order-1">
          <div className="relative w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-dark-darker font-heading font-extrabold text-lg md:text-xl">AE</span>
          </div>
          <span className="mr-3 text-xl font-heading font-bold hidden sm:block">اکتیو لجندز</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block order-1 md:order-2">
          <ul className="flex space-x-6">
            <li><a href="#" className="nav-link active">خانه</a></li>
            <li><a href="#about" className="nav-link">درباره بازی</a></li>
            <li><a href="#features" className="nav-link">ویژگی‌ها</a></li>
            <li><a href="#gallery" className="nav-link">گالری</a></li>
            <li><a href="#contact" className="nav-link">تماس با ما</a></li>
          </ul>
        </nav>

        <div className="hidden md:block order-3">
          <a href="#" className="btn btn-primary flex items-center">
            <span>دانلود</span>
            <Gamepad2 className="mr-2 h-5 w-5" />
          </a>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-dark-darker z-40 md:hidden transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="container py-20">
            <ul className="flex flex-col space-y-6">
              <li><a href="#" className="text-xl nav-link active" onClick={toggleMenu}>خانه</a></li>
              <li><a href="#about" className="text-xl nav-link" onClick={toggleMenu}>درباره بازی</a></li>
              <li><a href="#features" className="text-xl nav-link" onClick={toggleMenu}>ویژگی‌ها</a></li>
              <li><a href="#gallery" className="text-xl nav-link" onClick={toggleMenu}>گالری</a></li>
              <li><a href="#contact" className="text-xl nav-link" onClick={toggleMenu}>تماس با ما</a></li>
            </ul>
            <div className="mt-8">
              <a href="#" className="btn btn-primary flex items-center justify-center">
                <span>دانلود دمو</span>
                <Gamepad2 className="mr-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;