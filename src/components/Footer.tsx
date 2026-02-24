import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border/50 py-16 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
    <div className="container mx-auto max-w-5xl relative">
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
            <a href="mailto:hello@codecanvas.dev" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300">
              <Mail size={14} /> hello@codecanvas.dev
            </a>
            <a href="https://wa.me/919999999999" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300">
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
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:neon-glow transition-all duration-300"
              >
                <Icon size={16} />
              </motion.a>
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
