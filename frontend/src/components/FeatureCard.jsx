import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card className="group border-border hover:border-accent hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="p-6 text-center flex flex-col items-center">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mb-4 shadow-accent"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};