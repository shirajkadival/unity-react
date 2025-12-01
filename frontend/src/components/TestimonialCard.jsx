import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="p-6 flex flex-col">
          <Quote className="w-10 h-10 text-accent/30 mb-4" />
          <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
            "{testimonial.review}"
          </p>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating
                    ? 'fill-accent text-accent'
                    : 'text-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center space-x-3 mt-auto">
            <Avatar className="w-12 h-12 border-2 border-accent">
              <AvatarImage src={testimonial.avatar} />
              <AvatarFallback className="bg-accent text-white">
                {testimonial.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};