import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ImageGallery } from "@/components/ImageGallery";
import { BookingForm } from "@/components/BookingForm";
import { MapPin, Calendar, Users, Star } from "lucide-react";

import moscowHero from "@/assets/moscow-hero.jpg";
import moscow2 from "@/assets/moscow-2.jpg";
import moscow3 from "@/assets/moscow-3.jpg";
import moscow4 from "@/assets/moscow-4.jpg";

const images = [
  { src: moscowHero, alt: "Красная площадь" },
  { src: moscow2, alt: "ГУМ" },
  { src: moscow3, alt: "Москва-Сити" },
  { src: moscow4, alt: "Большой театр" },
];

const highlights = [
  "Красная площадь и Кремль",
  "Храм Василия Блаженного",
  "Третьяковская галерея",
  "Москва-Сити",
  "Большой театр",
  "Парк Зарядье",
];

const Moscow = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img
          src={moscowHero}
          alt="Москва"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary-foreground mb-4">
              Москва
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Сердце России
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <MapPin className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Центр России</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">3-7 дней</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">1-15 чел.</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Star className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Круглый год</span>
                </div>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                  О Москве
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    Москва — столица и крупнейший город России, её политический, экономический и культурный центр. 
                    История города насчитывает более 870 лет, и каждая эпоха оставила свой неповторимый след в его облике.
                  </p>
                  <p>
                    Красная площадь с храмом Василия Блаженного и Кремлём — символ России, известный во всём мире. 
                    Здесь величественные соборы соседствуют с футуристическими небоскрёбами Москва-Сити, 
                    а старинные улочки — с современными парками и общественными пространствами.
                  </p>
                  <p>
                    Москва — это бесконечные музеи, театры мирового уровня, уникальная кухня и 
                    атмосфера города, который никогда не спит. Здесь каждый найдёт что-то своё.
                  </p>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                  Что посмотреть
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                  Фотогалерея
                </h2>
                <ImageGallery images={images} />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <BookingForm destination="Москва" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Moscow;
