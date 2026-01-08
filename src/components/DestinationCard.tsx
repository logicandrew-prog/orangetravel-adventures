import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  index: number;
}

export const DestinationCard = ({
  title,
  description,
  image,
  href,
  index,
}: DestinationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={href}
        className="group block relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-500"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-dark/90 via-deep-blue-dark/20 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2 group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="text-primary-foreground/70 text-sm line-clamp-2 mb-4">
            {description}
          </p>
          <div className="flex items-center gap-2 text-secondary font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span>Подробнее</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
