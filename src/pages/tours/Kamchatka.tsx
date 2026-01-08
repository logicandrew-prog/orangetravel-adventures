import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ImageGallery } from "@/components/ImageGallery";
import { BookingForm } from "@/components/BookingForm";
import { MapPin, Calendar, Users, Star } from "lucide-react";

import kamchatkaHero from "@/assets/kamchatka-hero.jpg";
import kamchatka2 from "@/assets/kamchatka-2.jpg";
import kamchatka3 from "@/assets/kamchatka-3.jpg";
import kamchatka4 from "@/assets/kamchatka-4.jpg";

const images = [
  { src: kamchatkaHero, alt: "Вулкан Камчатки" },
  { src: kamchatka2, alt: "Долина гейзеров" },
  { src: kamchatka3, alt: "Камчатский медведь" },
  { src: kamchatka4, alt: "Авачинская бухта" },
];

const highlights = [
  "Долина гейзеров",
  "Вулканы",
  "Курильское озеро",
  "Медведи",
  "Термальные источники",
  "Авачинская бухта",
];

const Kamchatka = () => {
  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[500px]">
        <img src={kamchatkaHero} alt="Камчатка" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary-foreground mb-4">Камчатка</h1>
            <p className="text-xl text-primary-foreground/80">Край вулканов и медведей</p>
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
                  <span className="text-sm text-muted-foreground">Дальний Восток</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">10-14 дней</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">6-12 чел.</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Star className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Июль-Сентябрь</span>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">О Камчатке</h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    Камчатка — полуостров на краю света, где сосредоточено около 300 вулканов, 
                    30 из которых — действующие. Это одно из самых геологически активных мест на Земле, 
                    включённое в список Всемирного наследия ЮНЕСКО.
                  </p>
                  <p>
                    Долина гейзеров — второе по величине гейзерное поле в мире после Йеллоустоуна. 
                    Сотни термальных источников бьют из-под земли, создавая инопланетные пейзажи. 
                    Здесь можно наблюдать бурых медведей во время нереста лосося.
                  </p>
                  <p>
                    Камчатка — это настоящее приключение: восхождения на вулканы, купание в термальных источниках, 
                    вертолётные экскурсии над кратерами, рыбалка и наблюдение за дикой природой.
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
                <BookingForm destination="Камчатка" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kamchatka;
