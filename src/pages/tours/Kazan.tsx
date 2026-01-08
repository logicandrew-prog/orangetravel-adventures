import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ImageGallery } from "@/components/ImageGallery";
import { BookingForm } from "@/components/BookingForm";
import { MapPin, Calendar, Users, Star } from "lucide-react";

import kazanHero from "@/assets/kazan-hero.jpg";
import kazan2 from "@/assets/kazan-2.jpg";
import kazan3 from "@/assets/kazan-3.jpg";
import kazan4 from "@/assets/kazan-4.jpg";

const images = [
  { src: kazanHero, alt: "Казанский Кремль" },
  { src: kazan2, alt: "Башня Сююмбике" },
  { src: kazan3, alt: "Улица Баумана" },
  { src: kazan4, alt: "Дворец земледельцев" },
];

const highlights = [
  "Казанский Кремль",
  "Мечеть Кул-Шариф",
  "Башня Сююмбике",
  "Улица Баумана",
  "Храм всех религий",
  "Дворец земледельцев",
];

const Kazan = () => {
  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[500px]">
        <img src={kazanHero} alt="Казань" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary-foreground mb-4">Казань</h1>
            <p className="text-xl text-primary-foreground/80">Третья столица России</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <MapPin className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Поволжье</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">2-5 дней</span>
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

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">О Казани</h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    Казань — древний город с более чем тысячелетней историей, столица Республики Татарстан. 
                    Здесь уникальным образом переплетаются две культуры — русская и татарская, 
                    православие и ислам, Восток и Запад.
                  </p>
                  <p>
                    Казанский Кремль — объект Всемирного наследия ЮНЕСКО, где мечеть Кул-Шариф соседствует 
                    с Благовещенским собором. Легендарная башня Сююмбике хранит множество легенд, 
                    а пешеходная улица Баумана — казанский Арбат — приглашает на прогулку.
                  </p>
                  <p>
                    Казань славится своей кухней: эчпочмаки, чак-чак, губадия — вкус Татарстана, 
                    который невозможно забыть. Город также известен как спортивная столица России.
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
                <BookingForm destination="Казань" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kazan;
