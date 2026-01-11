import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
const navLinks = [{
  href: "/",
  label: "Главная"
}, {
  href: "/tours",
  label: "Выбрать тур"
}, {
  href: "/tips",
  label: "Памятка туристу"
}, {
  href: "/contacts",
  label: "Контакты"
}];
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  return <header className="fixed top-0 left-0 right-0 z-50 bg-deep-blue/95 backdrop-blur-md border-b border-deep-blue-light/20">
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between mt-[15px] mb-[15px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <div className="relative flex items-baseline">
              <span className="font-heading font-bold text-5xl text-[#ff8c00]">
                orange
              </span>
              <span className="font-heading font-bold text-5xl text-primary-foreground">
                blue
              </span>
              <span className="font-script text-cream-travel ml-2 font-semibold mx-0 pb-[10px] mb-0 text-cyan-300 text-3xl">
                Travel
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex md:items-center md:justify-start">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={`text-sm font-medium transition-colors duration-300 relative group ${location.pathname === link.href ? "text-secondary" : "text-primary-foreground/80 hover:text-primary-foreground"}`}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" asChild>
              <Link to="/tours">Заказать тур</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-primary-foreground p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-deep-blue border-t border-deep-blue-light/20">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.href} to={link.href} onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium py-2 ${location.pathname === link.href ? "text-secondary" : "text-primary-foreground/80"}`}>
                  {link.label}
                </Link>)}
              <Button variant="hero" className="mt-4" asChild>
                <Link to="/tours" onClick={() => setIsMenuOpen(false)}>
                  Заказать тур
                </Link>
              </Button>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </header>;
};