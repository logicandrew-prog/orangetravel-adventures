import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ImageGallery } from "@/components/ImageGallery";
import { BookingForm } from "@/components/BookingForm";
import { MapPin, Calendar, Users, Star } from "lucide-react";

import spbHero from "@/assets/spb-hero.jpg";
import spb2 from "@/assets/spb-2.jpg";
import spb3 from "@/assets/spb-3.jpg";
import spb4 from "@/assets/spb-4.jpg";

const images = [
  { src: spbHero, alt: "Эрмитаж" },
  { src: spb2, alt: "Петергоф" },
  { src: spb3, alt: "Спас на Крови" },
  { src: spb4, alt: "Разводные мосты" },
];

const highlights = [
  "Эрмитаж",
  "Петергоф",
  "Спас на Крови",
  "Исаакиевский собор",
  "Разводные мосты",
  "Невский проспект",
];

const SPB = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <img src={spbHero} alt="Санкт-Петербург" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary-foreground mb-4">
              Санкт-Петербург
            </h1>
            <p className="text-xl text-primary-foreground/80">Культурная столица России</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <MapPin className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Северо-Запад</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">4-7 дней</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">1-15 чел.</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Star className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Белые ночи</span>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">О Санкт-Петербурге</h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    Санкт-Петербург — северная столица России, один из красивейших городов мира. Основанный Петром I в 1703 году, 
                    город стал окном в Европу и воплощением имперского величия.
                  </p>
                  <p>
                    Эрмитаж — один из крупнейших музеев мира с коллекцией в 3 миллиона экспонатов. 
                    Дворцы Петергофа с их знаменитыми фонтанами, величественные соборы и разводные мосты над Невой — 
                    всё это создаёт неповторимую атмосферу города.
                  </p>
                  <p>
                    Белые ночи — уникальное явление, когда солнце практически не заходит за горизонт с конца мая по середину июля, 
                    создавая магическую атмосферу для прогулок по набережным.
                  </p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">Что посмотреть</h2>
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">Фотогалерея</h2>
                <ImageGallery images={images} />
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <BookingForm destination="Санкт-Петербург" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SPB;
