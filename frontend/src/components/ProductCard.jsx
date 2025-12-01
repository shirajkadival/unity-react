import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 flex flex-col h-full">
        <div className="relative overflow-hidden aspect-square bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.isNew && (
            <Badge className="absolute top-3 left-3 bg-accent text-white">
              New
            </Badge>
          )}
          {product.discount && (
            <Badge className="absolute top-3 right-3 bg-destructive text-white">
              -{product.discount}%
            </Badge>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-primary/80 flex items-center justify-center space-x-2"
          >
            <Link to={`/products/${product.id}`}>
              <Button
                size="sm"
                variant="secondary"
                className="shadow-lg"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </Link>
          </motion.div>
        </div>
        <CardContent className="p-4 flex-grow">
          <h3 className="font-semibold text-lg text-foreground mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-accent">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 mt-auto">
          {/* <Button className="w-full bg-accent hover:bg-accent-dark text-white group">
            <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Add to Cart
          </Button> */}
        </CardFooter>
      </Card>
    </motion.div>
  );
};