import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ImageGallery } from "@/components/ImageGallery";
import { BookingForm } from "@/components/BookingForm";
import { MapPin, Calendar, Users, Star } from "lucide-react";

import sochiHero from "@/assets/sochi-hero.jpg";
import sochi2 from "@/assets/sochi-2.jpg";
import sochi3 from "@/assets/sochi-3.jpg";
import sochi4 from "@/assets/sochi-4.jpg";

const images = [
  { src: sochiHero, alt: "Побережье Сочи" },
  { src: sochi2, alt: "Горы Кавказа" },
  { src: sochi3, alt: "Роза Хутор" },
  { src: sochi4, alt: "Олимпийский парк" },
];

const highlights = [
  "Олимпийский парк",
  "Роза Хутор",
  "Красная Поляна",
  "Гора Ахун",
  "Дендрарий",
  "Агурские водопады",
];

const Sochi = () => {
  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[500px]">
        <img src={sochiHero} alt="Сочи" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary-foreground mb-4">Сочи и Кавказ</h1>
            <p className="text-xl text-primary-foreground/80">Море и горы в одном путешествии</p>
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
                  <span className="text-sm text-muted-foreground">Чёрное море</span>
                </div>
                <div className="bg-card p-4 rounded-xl shadow-card text-center">
                  <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">5-10 дней</span>
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
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">О Сочи и Кавказе</h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    Сочи — главный курорт России, уникальное место, где субтропическое побережье Чёрного моря 
                    соседствует с заснеженными вершинами Кавказских гор. После Олимпиады 2014 года город 
                    преобразился и стал курортом мирового уровня.
                  </p>
                  <p>
                    Летом — это пляжи, яхты, дайвинг и водные виды спорта. Зимой — горнолыжные курорты 
                    Красная Поляна и Роза Хутор с трассами любой сложности. А субтропический климат 
                    позволяет наслаждаться пальмами и магнолиями круглый год.
                  </p>
                  <p>
                    Кавказские горы — это отдельный мир с древними традициями, потрясающими пейзажами, 
                    горными озёрами и водопадами. Эльбрус — высочайшая вершина Европы — манит альпинистов 
                    со всего мира.
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
                <BookingForm destination="Сочи и Кавказ" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sochi;
