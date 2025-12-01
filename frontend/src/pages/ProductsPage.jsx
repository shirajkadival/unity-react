import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/data/products';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesPrice = true;
    if (priceFilter === 'under-2000') matchesPrice = product.price < 2000;
    if (priceFilter === '2000-5000') matchesPrice = product.price >= 2000 && product.price <= 5000;
    if (priceFilter === 'above-5000') matchesPrice = product.price > 5000;

    return matchesCategory && matchesSearch && matchesPrice;
  });

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceFilter('all');
  };

  const activeFiltersCount = 
    (selectedCategory !== 'all' ? 1 : 0) +
    (searchQuery ? 1 : 0) +
    (priceFilter !== 'all' ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-95" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              Explore our extensive range of premium automotive parts and accessories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="section-container">
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              {/* Filter Toggle (Mobile) */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge className="ml-2 bg-accent text-white">{activeFiltersCount}</Badge>
                )}
              </Button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48 h-12">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger className="w-48 h-12">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-2000">Under ₹2000</SelectItem>
                    <SelectItem value="2000-5000">₹2000 - ₹5000</SelectItem>
                    <SelectItem value="above-5000">Above ₹5000</SelectItem>
                  </SelectContent>
                </Select>

                {activeFiltersCount > 0 && (
                  <Button
                    variant="ghost"
                    onClick={clearFilters}
                    className="text-accent hover:text-accent-dark"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                )}
              </div>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="lg:hidden overflow-hidden"
                >
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Category
                      </label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Price Range
                      </label>
                      <Select value={priceFilter} onValueChange={setPriceFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="Price Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Prices</SelectItem>
                          <SelectItem value="under-2000">Under ₹2000</SelectItem>
                          <SelectItem value="2000-5000">₹2000 - ₹5000</SelectItem>
                          <SelectItem value="above-5000">Above ₹5000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {activeFiltersCount > 0 && (
                      <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="w-full"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Clear All Filters
                      </Button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Active Filters Display */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="text-sm">
                  {categories.find(c => c.id === selectedCategory)?.name}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-2 hover:text-destructive"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {searchQuery && (
                <Badge variant="secondary" className="text-sm">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 hover:text-destructive"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {priceFilter !== 'all' && (
                <Badge variant="secondary" className="text-sm">
                  {priceFilter === 'under-2000' && 'Under ₹2000'}
                  {priceFilter === '2000-5000' && '₹2000 - ₹5000'}
                  {priceFilter === 'above-5000' && 'Above ₹5000'}
                  <button
                    onClick={() => setPriceFilter('all')}
                    className="ml-2 hover:text-destructive"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or search terms</p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;