import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <span className="font-display font-bold text-lg text-primary-foreground">
                  H
                </span>
              </div>
              <span className="font-display font-bold text-xl">
                Horrizon Hoppers
              </span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Your trusted partner for studying abroad. We guide students to top
              universities, helping them seek greater horizons.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Scholarships", path: "/scholarships" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Destinations</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <span>United Kingdom</span>
              <span>United States</span>
              <span>Canada</span>
              <span>Australia</span>
              <span>New Zealand</span>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>team@horizonhoppers.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (513) 307-8342</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Molyko, Buea</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Horrizon Hoppers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
