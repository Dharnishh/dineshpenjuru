// dharnishh/dineshpenjuru/dineshpenjuru-61f31d163d67f0757ff94b209afed6c793e4caa3/src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import dineshProfile from "/lovable-uploads/de0d7241-7455-4ed7-aceb-a1c99d3c6a7b.png";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false); // Always show navbar

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills-section" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Always show navbar - removed home section check
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when a navigation item is clicked
  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation bar - floating popup style */}
      <nav
        className="fixed top-4 left-4 right-4 z-50 transition-all duration-300 opacity-100"
      >
        <div className="max-w-4xl mx-auto glass-card backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 px-2">
            {/* Avatar */}
            <div className="flex items-center">
              <img
                src={dineshProfile}
                alt="P.V. Dinesh"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover object-center border-2 border-primary/20"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-xs lg:text-sm xl:text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Theme Toggle & Contact Button */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10"
              >
                {darkMode ? <Sun className="h-4 w-4 lg:h-4 lg:w-4 xl:h-5 xl:w-5" /> : <Moon className="h-4 w-4 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />}
              </Button>
              <Button variant="contact" size="sm" asChild className="text-xs lg:text-sm xl:text-sm px-3 lg:px-4 xl:px-6">
                <a href="#contact">Contact</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full w-8 h-8"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-full w-8 h-8"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu - Enhanced Styling */}
          <div className={`md:hidden mt-2 glass-card backdrop-blur-2xl bg-background/80 border border-white/20 rounded-2xl shadow-2xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            {isMenuOpen && (
              <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    // Added more padding, rounded corners, and a distinct hover state
                    className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-3 px-4 rounded-lg text-center hover:bg-primary/10"
                    onClick={handleNavItemClick} // Close menu on click
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-2">
                  <Button variant="contact" className="w-full" asChild>
                    <a href="#contact" onClick={handleNavItemClick}> {/* Close menu on click */}
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
