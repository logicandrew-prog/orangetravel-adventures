import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface BookingFormProps {
  destination?: string;
}

export const BookingForm = ({ destination }: BookingFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-8 shadow-card"
    >
      <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
        Заказать тур
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Ваше имя
          </label>
          <Input
            type="text"
            placeholder="Иван Иванов"
            required
            className="bg-background"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Телефон
          </label>
          <Input
            type="tel"
            placeholder="+7 (999) 123-45-67"
            required
            className="bg-background"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Email
          </label>
          <Input
            type="email"
            placeholder="example@mail.ru"
            required
            className="bg-background"
          />
        </div>

        {destination && (
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Направление
            </label>
            <Input
              type="text"
              value={destination}
              readOnly
              className="bg-muted"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Пожелания к туру
          </label>
          <Textarea
            placeholder="Расскажите, какой тур вы хотите..."
            rows={4}
            className="bg-background resize-none"
          />
        </div>

        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Отправить заявку"}
        </Button>
      </form>
    </motion.div>
  );
};
