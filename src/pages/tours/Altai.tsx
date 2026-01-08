import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ImageGallery } from "@/components/ImageGallery";
import { BookingForm } from "@/components/BookingForm";
import { MapPin, Calendar, Users, Star } from "lucide-react";

import altaiHero from "@/assets/altai-hero.jpg";
import altai2 from "@/assets/altai-2.jpg";
import altai3 from "@/assets/altai-3.jpg";
import altai4 from "@/assets/altai-4.jpg";

const images = [
  { src: altaiHero, alt: "Горы Алтая" },
  { src: altai2, alt: "Белуха" },
  { src: altai3, alt: "Горное озеро" },
  { src: altai4, alt: "Чуйский тракт" },
];

const highlights = [
  "Гора Белуха",
  "Телецкое озеро",
  "Чуйский тракт",
  "Река Катунь",
  "Каменные грибы",
  "Марсианские пейзажи",
];

const Altai = () => {
  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[500px]">
        <img src={altaiHero} alt="Алтай" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary-foreground mb-4">Алтай</h1>
            <p className="text-xl text-primary-foreground/80">Золотые горы Сибири</p>
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
                  <span className="text-sm text-muted-foreground">Сибирь</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">7-14 дней</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">4-12 чел.</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Star className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Июнь-Сентябрь</span>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">Об Алтае</h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    Алтай — это «Золотые горы», объект Всемирного наследия ЮНЕСКО. Здесь сохранилась 
                    нетронутая природа невероятной красоты: заснеженные вершины, бирюзовые реки, 
                    альпийские луга и таёжные леса.
                  </p>
                  <p>
                    Гора Белуха (4506 м) — высочайшая точка Сибири и священная гора для многих народов. 
                    Чуйский тракт признан одной из самых красивых дорог мира, а река Катунь 
                    с её молочно-бирюзовой водой — символ Алтая.
                  </p>
                  <p>
                    Это место силы, куда едут за перезагрузкой и единением с природой. 
                    Рафтинг, конные походы, восхождения — или просто созерцание невероятных пейзажей.
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
                <BookingForm destination="Алтай" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Altai;
