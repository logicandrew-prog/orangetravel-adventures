import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Send } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-deep-blue-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-heading font-bold text-[#ff8c00]">
                orange
              </span>
              <span className="text-2xl font-heading font-bold text-primary-foreground">
                blue
              </span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Индивидуальные путешествия по самым красивым местам России. 
              Откройте для себя величие нашей страны вместе с нами.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Выбрать тур
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Памятка туристу
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Направления</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/tours/moscow" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Москва
                </Link>
              </li>
              <li>
                <Link to="/tours/spb" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Санкт-Петербург
                </Link>
              </li>
              <li>
                <Link to="/tours/kazan" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Казань
                </Link>
              </li>
              <li>
                <Link to="/tours/sochi" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Сочи и Кавказ
                </Link>
              </li>
              <li>
                <Link to="/tours/altai" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Алтай
                </Link>
              </li>
              <li>
                <Link to="/tours/baikal" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Байкал
                </Link>
              </li>
              <li>
                <Link to="/tours/kamchatka" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  Камчатка
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="flex-shrink-0 text-[#ff8c00]" />
                <span className="text-primary-foreground/70">Москва</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-[#ff8c00]" />
                <a href="tel:+74951234567" className="text-primary-foreground/70 hover:text-secondary transition-colors">+7 (495) </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-[#ff8c00]" />
                <a href="mailto:info@orangeblue.ru" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                  info@orangeblue.ru
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-deep-blue-light/50 flex items-center justify-center text-primary-foreground/70 hover:bg-secondary hover:text-secondary-foreground transition-all">
                
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-deep-blue-light/50 flex items-center justify-center text-primary-foreground/70 hover:bg-secondary hover:text-secondary-foreground transition-all">
                
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-deep-blue-light/50 flex items-center justify-center text-primary-foreground/70 hover:bg-secondary hover:text-secondary-foreground transition-all">
                <Send size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-deep-blue-light/20 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© 2025 orangeblue. Все права защищены.</p>
        </div>
      </div>
    </footer>;
};