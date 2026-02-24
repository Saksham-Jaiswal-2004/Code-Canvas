import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-16 px-4">
    <div className="container mx-auto max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Organizer */}
        <div>
          <h3 className="font-display font-bold text-foreground mb-3">Organized By</h3>
          <p className="text-sm text-muted-foreground mb-2">Code Canvas Team</p>
          <p className="text-xs text-muted-foreground">Promoting modern web development and digital identity building.</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display font-bold text-foreground mb-3">Contact Us</h3>
          <div className="space-y-2">
            <a href="mailto:hello@codecanvas.dev" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail size={14} /> hello@codecanvas.dev
            </a>
            <a href="https://wa.me/919999999999" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone size={14} /> WhatsApp Support
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-display font-bold text-foreground mb-3">Follow Us</h3>
          <div className="flex gap-3">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 Code Canvas. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
