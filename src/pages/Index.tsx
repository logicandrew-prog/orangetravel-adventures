import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { DestinationCard } from "@/components/DestinationCard";
import heroMain from "@/assets/hero-main.jpg";
import moscowHero from "@/assets/moscow-hero.jpg";
import spbHero from "@/assets/spb-hero.jpg";
import kazanHero from "@/assets/kazan-hero.jpg";
import sochiHero from "@/assets/sochi-hero.jpg";
import altaiHero from "@/assets/altai-hero.jpg";
import baikalHero from "@/assets/baikal-hero.jpg";
import kamchatkaHero from "@/assets/kamchatka-hero.jpg";
const destinations = [{
  title: "Москва",
  description: "Столица России с богатой историей, Красная площадь, Кремль и современные небоскрёбы",
  image: moscowHero,
  href: "/tours/moscow"
}, {
  title: "Санкт-Петербург",
  description: "Культурная столица с белыми ночами, дворцами и мостами над Невой",
  image: spbHero,
  href: "/tours/spb"
}, {
  title: "Казань",
  description: "Древний город на Волге, где восток встречается с западом",
  image: kazanHero,
  href: "/tours/kazan"
}, {
  title: "Сочи и Кавказ",
  description: "Черноморский курорт и величественные горы Кавказа",
  image: sochiHero,
  href: "/tours/sochi"
}, {
  title: "Алтай",
  description: "Золотые горы и нетронутая природа Сибири",
  image: altaiHero,
  href: "/tours/altai"
}, {
  title: "Байкал",
  description: "Самое глубокое озеро планеты с кристально чистой водой",
  image: baikalHero,
  href: "/tours/baikal"
}, {
  title: "Камчатка",
  description: "Край вулканов, гейзеров и дикой природы на краю света",
  image: kamchatkaHero,
  href: "/tours/kamchatka"
}];
const features = [{
  icon: Compass,
  title: "Индивидуальный подход",
  description: "Каждый маршрут составляем под ваши интересы и пожелания"
}, {
  icon: Shield,
  title: "Безопасность",
  description: "Проверенные маршруты и опытные гиды на всех направлениях"
}, {
  icon: Heart,
  title: "Любовь к делу",
  description: "Мы сами путешествуем по России и знаем лучшие места"
}];
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroMain} alt="Путешествия по России" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
              Откройте Россию
              <span className="block text-[#ff8c00]">с новой стороны</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Индивидуальные путешествия по самым красивым местам нашей страны. 
              От Москвы до Камчатки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/tours">
                  Выбрать направление
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 1
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <motion.div animate={{
            y: [0, 12, 0]
          }} transition={{
            repeat: Infinity,
            duration: 1.5
          }} className="w-1.5 h-1.5 bg-secondary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-ice-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="text-center p-8 bg-card rounded-2xl shadow-card">
                <div className="w-16 h-16 mx-auto mb-6 bg-deep-blue rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
              Популярные направления
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите место, которое давно хотели посетить, и мы организуем незабываемое путешествие
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination, index) => <DestinationCard key={destination.href} {...destination} index={index} />)}
          </div>

          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/tours">
                Смотреть все направления
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-deep-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-[#cdfafe]">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10 bg-cyan-200">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 text-slate-800 pl-0 pt-[10px] py-[15px]">
              Готовы к приключениям?
            </h2>
            <p className="text-xl mb-10 text-slate-700">
              Оставьте заявку, и мы подберём идеальный тур специально для вас. 
              Бесплатная консультация.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contacts">
                Оставить заявку
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default Index;