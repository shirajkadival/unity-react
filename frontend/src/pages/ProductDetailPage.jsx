import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Check, Package, Shield, TrendingUp, Star } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { products } from '@/data/products';
import { toast } from 'sonner';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Product not found</h2>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    toast.success('Added to cart!', {
      description: `${quantity}x ${product.name} added to your cart`
    });
  };

  const benefits = [
    { icon: Package, text: 'Fast Delivery' },
    { icon: Shield, text: 'Quality Assured' },
    { icon: TrendingUp, text: 'Best Price' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="section-container py-24">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back
        </Button>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-accent text-white">
                  New Arrival
                </Badge>
              )}
              {product.discount && (
                <Badge className="absolute top-4 right-4 bg-destructive text-white text-lg">
                  -{product.discount}% OFF
                </Badge>
              )}
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 bg-muted rounded-lg"
                >
                  <benefit.icon className="w-6 h-6 text-accent mb-2" />
                  <span className="text-xs font-medium text-muted-foreground">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-4">
              <Badge variant="secondary" className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(125 reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-4xl font-bold text-accent">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
            </div>

            <Separator className="my-6" />

            {/* Quantity Selector */}
            {/* <div className="mb-8">
              <label className="text-sm font-medium text-foreground mb-2 block">
                Quantity
              </label>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div> */}

            {/* Action Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="flex-1 bg-accent hover:bg-accent-dark text-white shadow-accent group"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Add to Cart
              </Button>
              <Link to="/contact" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Get Bulk Quote
                </Button>
              </Link>
            </div>

            <Separator className="my-6" /> */}

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Specifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-sm font-medium text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-sm font-semibold text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <Card className="mb-20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Related <span className="text-accent">Products</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;