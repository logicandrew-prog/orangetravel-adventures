import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { FileText, Plane, Hotel, Compass, Shield, Phone, Sun, Thermometer, CreditCard, Luggage, Map, Camera } from "lucide-react";
const tips = [{
  icon: FileText,
  title: "Документы",
  items: ["Паспорт (для внутренних рейсов)", "Загранпаспорт (для некоторых регионов)", "Страховой полис", "Бронирования отелей и билеты"]
}, {
  icon: Luggage,
  title: "Что взять с собой",
  items: ["Удобная обувь для прогулок", "Одежда по сезону с запасом", "Солнцезащитные очки и крем", "Аптечка с личными лекарствами"]
}, {
  icon: CreditCard,
  title: "Финансы",
  items: ["Банковские карты принимают везде", "Наличные для малых городов", "СБП работает повсеместно", "Уведомите банк о поездке"]
}, {
  icon: Phone,
  title: "Связь",
  items: ["Мобильная связь почти везде", "На Камчатке и Алтае — перебои", "Wi-Fi в отелях и кафе", "Скачайте офлайн-карты"]
}, {
  icon: Thermometer,
  title: "Климат",
  items: ["Россия — страна контрастов", "Лето: от +15 до +35°C", "Зима: от -5 до -40°C", "Проверяйте прогноз заранее"]
}, {
  icon: Shield,
  title: "Безопасность",
  items: ["Оформите страховку", "Держите копии документов отдельно", "Сообщайте близким о маршруте", "Следуйте рекомендациям гида"]
}];
const regionTips = [{
  region: "Москва и Санкт-Петербург",
  icon: Hotel,
  tips: ["Бронируйте музеи заранее", "В Питере — зонт обязателен", "Метро — лучший транспорт"]
}, {
  region: "Сочи и Кавказ",
  icon: Sun,
  tips: ["Летом — крем от загара", "Горная обувь для походов", "Документы для погранзоны"]
}, {
  region: "Алтай и Байкал",
  icon: Compass,
  tips: ["Тёплая одежда даже летом", "Репелленты обязательны", "Будьте готовы к бездорожью"]
}, {
  region: "Камчатка",
  icon: Map,
  tips: ["Только вертолёт или внедорожник", "Гид обязателен", "Медвежья безопасность"]
}];
const Tips = () => {
  return <Layout>
      {/* Hero */}
      <section className="py-20 bg-deep-blue bg-cyan-200">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-stone-800">
              Памятка туристу
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-slate-700">
              Полезные советы для путешествий по России
            </p>
          </motion.div>
        </div>
      </section>

      {/* General Tips */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="font-heading font-bold text-3xl text-foreground mb-12 text-center">
            Общие рекомендации
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => <motion.div key={tip.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-card p-6 rounded-2xl shadow-card">
                <div className="w-12 h-12 bg-deep-blue rounded-xl flex items-center justify-center mb-4">
                  <tip.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  {tip.title}
                </h3>
                <ul className="space-y-2">
                  {tip.items.map(item => <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>)}
                </ul>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Regional Tips */}
      <section className="py-20 bg-ice-blue">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="font-heading font-bold text-3xl text-foreground mb-12 text-center">
            Советы по регионам
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionTips.map((region, index) => <motion.div key={region.region} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-card p-6 rounded-2xl shadow-card flex gap-6">
                <div className="w-14 h-14 bg-deep-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <region.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {region.region}
                  </h3>
                  <ul className="space-y-2">
                    {region.tips.map(tip => <li key={tip} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                        {tip}
                      </li>)}
                  </ul>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-deep-blue bg-cyan-200">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-deep-blue-light/30 rounded-2xl p-8 text-center bg-cyan-300">
            <Camera className="w-12 h-12 mx-auto mb-4 text-[#ff8c00]" />
            <h3 className="font-heading font-bold text-2xl mb-4 text-slate-800">
              Главный совет
            </h3>
            <p className="text-lg max-w-2xl mx-auto text-slate-700">
              Россия — огромная и разнообразная страна. Каждый регион уникален. 
              Мы поможем подготовиться к путешествию и расскажем обо всех нюансах 
              при планировании вашего тура.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>;
};
export default Tips;