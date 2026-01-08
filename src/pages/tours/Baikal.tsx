import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ImageGallery } from "@/components/ImageGallery";
import { BookingForm } from "@/components/BookingForm";
import { MapPin, Calendar, Users, Star } from "lucide-react";

import baikalHero from "@/assets/baikal-hero.jpg";
import baikal2 from "@/assets/baikal-2.jpg";
import baikal3 from "@/assets/baikal-3.jpg";
import baikal4 from "@/assets/baikal-4.jpg";

const images = [
  { src: baikalHero, alt: "Лёд Байкала" },
  { src: baikal2, alt: "Остров Ольхон" },
  { src: baikal3, alt: "Нерпа" },
  { src: baikal4, alt: "Закат на Байкале" },
];

const highlights = [
  "Остров Ольхон",
  "Скала Шаманка",
  "Листвянка",
  "Кругобайкальская ж/д",
  "Нерпинарий",
  "Прозрачный лёд",
];

const Baikal = () => {
  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[500px]">
        <img src={baikalHero} alt="Байкал" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary-foreground mb-4">Байкал</h1>
            <p className="text-xl text-primary-foreground/80">Жемчужина Сибири</p>
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
                  <span className="text-sm text-muted-foreground">Восточная Сибирь</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">5-10 дней</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">4-15 чел.</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Star className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Круглый год</span>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">О Байкале</h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    Байкал — самое глубокое озеро на планете (1642 м) и крупнейший резервуар пресной воды. 
                    Его возраст — около 25 миллионов лет, что делает его одним из древнейших озёр мира.
                  </p>
                  <p>
                    Зимой Байкал замерзает, образуя невероятно прозрачный лёд с причудливыми узорами. 
                    Летом — это бирюзовая вода удивительной чистоты, можно видеть дно на глубине 40 метров. 
                    Остров Ольхон со скалой Шаманка — священное место силы.
                  </p>
                  <p>
                    Нерпа — байкальский тюлень — единственное млекопитающее озера и символ Байкала. 
                    Кругобайкальская железная дорога — инженерное чудо XIX века с десятками тоннелей и мостов.
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
                <BookingForm destination="Байкал" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Baikal;
