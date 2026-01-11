import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { BookingForm } from "@/components/BookingForm";
import { MapPin, Mail, Clock, MessageCircle } from "lucide-react";
const contactInfo = [{
  icon: MapPin,
  title: "Адрес",
  value: "Москва",
  href: null
}, {
  icon: Mail,
  title: "Email",
  value: "info@orangeblue.ru",
  href: "mailto:info@orangeblue.ru"
}, {
  icon: Clock,
  title: "Время работы",
  value: "Пн-Пт: 10:00 - 19:00",
  href: null
}];
const Contacts = () => {
  return <Layout>
      {/* Hero */}
      <section className="py-20 bg-deep-blue">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Мы всегда рады помочь с планированием вашего путешествия
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-8">
              <div>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                  Контактная информация
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Оставьте заявку, и наши менеджеры свяжутся с вами в течение 24 часов. 
                  Мы поможем подобрать идеальный маршрут, учитывая все ваши пожелания и бюджет.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map(item => <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-deep-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#ff8c00]" />
                    </div>
                    <div>
                      <span className="block text-sm text-muted-foreground mb-1">
                        {item.title}
                      </span>
                      {item.href ? <a href={item.href} className="text-lg font-medium text-foreground hover:text-secondary transition-colors">
                          {item.value}
                        </a> : <span className="text-lg font-medium text-foreground">
                          {item.value}
                        </span>}
                    </div>
                  </div>)}
              </div>

              {/* Quick Contact */}
              <div className="bg-ice-blue rounded-2xl p-6 mt-8">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="w-8 h-8 text-[#ff8c00]" />
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    Быстрый ответ
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Напишите нам в мессенджер для оперативного ответа
                </p>
                <div className="flex gap-4">
                  <a href="#" className="px-6 py-3 bg-deep-blue text-primary-foreground rounded-lg font-medium hover:bg-deep-blue-light transition-colors">
                    Telegram
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <BookingForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-[#ff8c00]" />
            <p className="text-muted-foreground">
              Здесь будет интерактивная карта
            </p>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Contacts;