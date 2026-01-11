import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { DestinationCard } from "@/components/DestinationCard";
import moscowHero from "@/assets/moscow-hero.jpg";
import spbHero from "@/assets/spb-hero.jpg";
import kazanHero from "@/assets/kazan-hero.jpg";
import sochiHero from "@/assets/sochi-hero.jpg";
import altaiHero from "@/assets/altai-hero.jpg";
import baikalHero from "@/assets/baikal-hero.jpg";
import kamchatkaHero from "@/assets/kamchatka-hero.jpg";
const destinations = [{
  title: "Москва",
  description: "Столица России с богатой историей, Красная площадь, Кремль, древние храмы и современные небоскрёбы Москва-Сити",
  image: moscowHero,
  href: "/tours/moscow"
}, {
  title: "Санкт-Петербург",
  description: "Культурная столица России с белыми ночами, дворцами Эрмитажа, разводными мостами и каналами над Невой",
  image: spbHero,
  href: "/tours/spb"
}, {
  title: "Казань",
  description: "Тысячелетний город на Волге, где гармонично сочетаются восточная и западная культуры, мечети и православные храмы",
  image: kazanHero,
  href: "/tours/kazan"
}, {
  title: "Сочи и Кавказ",
  description: "Черноморское побережье с субтропическим климатом и величественные горы Кавказа с горнолыжными курортами мирового уровня",
  image: sochiHero,
  href: "/tours/sochi"
}, {
  title: "Алтай",
  description: "Золотые горы Алтая — объект ЮНЕСКО, нетронутая природа Сибири, бирюзовые реки и древние петроглифы",
  image: altaiHero,
  href: "/tours/altai"
}, {
  title: "Байкал",
  description: "Самое глубокое озеро планеты с кристально чистой водой, уникальной флорой и фауной, включая нерпу",
  image: baikalHero,
  href: "/tours/baikal"
}, {
  title: "Камчатка",
  description: "Полуостров на краю света с действующими вулканами, гейзерами, термальными источниками и медведями",
  image: kamchatkaHero,
  href: "/tours/kamchatka"
}];
const Tours = () => {
  return <Layout>
      {/* Hero */}
      <section className="py-20 bg-deep-blue bg-cyan-200 text-primary pt-[60px] pb-[60px]">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-slate-800">
              Выберите ваше путешествие
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-slate-700">
              От культурных столиц до дикой природы — откройте Россию с нами
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-background pb-[60px] pt-[60px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => <DestinationCard key={destination.href} {...destination} index={index} />)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default Tours;