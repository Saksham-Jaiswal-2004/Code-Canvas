import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "v0.dev", href: "#v0dev" },
  { label: "Tips", href: "#tips" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find active section
      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="font-display text-xl font-bold text-gradient hover:scale-105 transition-transform duration-300">
          Code Canvas
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                activeSection === item.href.slice(1)
                  ? "text-primary after:w-full"
                  : "text-muted-foreground hover:text-primary after:w-0 hover:after:w-full"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://forms.gle/YzNrdNs2bu2HECzD7"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
          >
            Register
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } glass-strong border-t border-border/50 px-4`}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`block py-3 text-sm transition-colors ${
              activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://forms.gle/YzNrdNs2bu2HECzD7"
          onClick={() => setOpen(false)}
          className="block mt-2 mb-4 text-center text-sm font-medium px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
