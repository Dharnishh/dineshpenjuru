// dharnishh/dineshpenjuru/dineshpenjuru-61f31d163d67f0757ff94b209afed6c793e4caa3/src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import dineshProfile from "/lovable-uploads/edbf57cc-59e4-4b54-ae2c-8c41861472ed.png";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

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
      // Check if we're on the home section
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        setIsHomePage(rect.bottom > window.innerHeight * 0.3);
      }
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
      {/* Navigation bar - hidden on home page, visible on other sections */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHomePage ? "opacity-0 pointer-events-none" : "opacity-100"
        } ${scrolled || !isHomePage ? "glass-card backdrop-blur-xl" : "bg-transparent"} px-2 sm:px-0`}
      >
        <div className="w-full h-1 bg-gradient-primary"></div>
        <div className="container-width px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Avatar */}
            <div className="flex items-center">
              <img
                src={dineshProfile}
                alt="P.V. Dinesh"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-primary/20"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-sm xl:text-base"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Theme Toggle & Contact Button */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full w-8 h-8 xl:w-10 xl:h-10"
              >
                {darkMode ? <Sun className="h-4 w-4 xl:h-5 xl:w-5" /> : <Moon className="h-4 w-4 xl:h-5 xl:w-5" />}
              </Button>
              <Button variant="contact" size="sm" asChild className="text-sm xl:text-base px-4 xl:px-8">
                <a href="#contact">Contact</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
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
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 glass-card backdrop-blur-xl border-t border-white/10 mx-2 sm:mx-0 rounded-b-2xl">
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
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
