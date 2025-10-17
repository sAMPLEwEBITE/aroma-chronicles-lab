import { Mail, Phone, MapPin, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import heroImage from "@/assets/hero-candles.jpg";
import chocolateIceCream from "@/assets/candles/chocolate-ice-cream.jpg";
import strawberryIceCream from "@/assets/candles/strawberry-ice-cream.jpg";
import blueberryIceCream from "@/assets/candles/blueberry-ice-cream.jpg";
import flower from "@/assets/candles/flower.jpg";
import greenGarden from "@/assets/candles/green-garden.jpg";
import loveHeart from "@/assets/candles/love-heart.jpg";
import miniJarSet from "@/assets/candles/mini-jar-set.jpg";
import chocolateCup from "@/assets/candles/chocolate-cup.jpg";
import coffeeBeans from "@/assets/candles/coffee-beans.jpg";
import blueDaisy from "@/assets/candles/blue-daisy.jpg";
import goldenDaisy from "@/assets/candles/golden-daisy.jpg";
import blueberryBowl from "@/assets/candles/blueberry-bowl.jpg";
import coffeeHeart from "@/assets/candles/coffee-heart.jpg";

const candles = [
  {
    name: "MINI CHOCOLATE ICE CREAM",
    fragrance: "Rich Chocolate",
    description: "Indulgent chocolate aroma that brings sweet comfort to any space.",
    image: chocolateIceCream,
  },
  {
    name: "MINI STRAWBERRY ICE CREAM",
    fragrance: "Fresh Strawberry",
    description: "Sweet strawberry scent reminiscent of summer days and fresh berries.",
    image: strawberryIceCream,
  },
  {
    name: "MINI BLUEBERRY ICE CREAM",
    fragrance: "Wild Blueberry",
    description: "Delightful blueberry fragrance with hints of creamy sweetness.",
    image: blueberryIceCream,
  },
  {
    name: "MINI FLOWER",
    fragrance: "Garden Bouquet",
    description: "Soft floral blend bringing the freshness of a spring garden indoors.",
    image: flower,
  },
  {
    name: "MINI GREEN GARDEN",
    fragrance: "Fresh Herbs & Greenery",
    description: "Crisp garden scent with notes of fresh herbs and green leaves.",
    image: greenGarden,
  },
  {
    name: "MINI LOVE HEART",
    fragrance: "Rose & Vanilla",
    description: "Romantic blend of soft rose petals and warm vanilla notes.",
    image: loveHeart,
  },
  {
    name: "Set of 6 Mini Jar",
    fragrance: "Assorted Collection",
    description: "Perfect variety set featuring our most popular mini candle fragrances.",
    image: miniJarSet,
  },
  {
    name: "CHOCOLATE ICE CREAM CUP",
    fragrance: "Decadent Chocolate",
    description: "Rich, creamy chocolate scent that fills your home with warmth.",
    image: chocolateCup,
  },
  {
    name: "ROASTED COFFEE BEANS",
    fragrance: "Fresh Ground Coffee",
    description: "Authentic coffee aroma capturing the essence of freshly roasted beans.",
    image: coffeeBeans,
  },
  {
    name: "Blue Daisy Flower",
    fragrance: "Wild Daisy",
    description: "Light floral fragrance with fresh, uplifting daisy notes.",
    image: blueDaisy,
  },
  {
    name: "GOLDEN DAISY FLOWER",
    fragrance: "Sunlit Daisy",
    description: "Bright floral scent bringing sunshine and joy to your space.",
    image: goldenDaisy,
  },
  {
    name: "MINI BLUEBERRY BOWL",
    fragrance: "Sweet Blueberry",
    description: "Fresh blueberry fragrance with a touch of natural sweetness.",
    image: blueberryBowl,
  },
  {
    name: "COFFEE HEART",
    fragrance: "Coffee & Cream",
    description: "Warm coffee blend with smooth, creamy undertones.",
    image: coffeeHeart,
  },
];

const Index = () => {
  const [selectedCandle, setSelectedCandle] = useState<typeof candles[0] | null>(null);

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-accent" />
            <h1 className="text-xl font-playfair font-bold text-foreground">Vimi Wick</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">Home</a>
            <a href="#collection" className="text-foreground hover:text-accent transition-colors">Collection</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-hero">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground leading-tight">
                Handcrafted Candles
                <span className="block text-accent">Made with Love</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Discover our collection of artisanal scented candles, carefully crafted using natural ingredients to bring warmth and ambiance to your home.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant transition-all hover:scale-105"
                onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Collection
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src={heroImage} 
                alt="Beautiful handcrafted scented candles" 
                className="rounded-3xl shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">Our Signature Collection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each candle is hand-poured with premium soy wax and infused with carefully selected fragrances to create the perfect atmosphere.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {candles.map((candle, index) => (
              <Card 
                key={index} 
                className="group bg-card border-border hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 animate-fade-in cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedCandle(candle)}
              >
                <CardContent className="p-0 space-y-0">
                  <div className="relative h-80 bg-gradient-to-br from-secondary/50 to-secondary overflow-hidden">
                    <img 
                      src={candle.image} 
                      alt={candle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-playfair font-bold text-foreground group-hover:text-accent transition-colors">{candle.name}</h3>
                    <p className="text-sm font-semibold text-accent uppercase tracking-wide">{candle.fragrance}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{candle.description}</p>
                    <p className="text-xs text-accent/70 font-medium pt-2">Click to view details →</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Candle Details Dialog */}
      <Dialog open={!!selectedCandle} onOpenChange={(open) => !open && setSelectedCandle(null)}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-playfair text-foreground">{selectedCandle?.name}</DialogTitle>
            <DialogDescription className="text-base font-semibold text-accent uppercase tracking-wide pt-2">
              {selectedCandle?.fragrance}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary">
              <img 
                src={selectedCandle?.image} 
                alt={selectedCandle?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">About This Candle</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedCandle?.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Material</p>
                  <p className="text-sm text-muted-foreground">100% Natural Soy Wax</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Burn Time</p>
                  <p className="text-sm text-muted-foreground">20-25 Hours</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Wick Type</p>
                  <p className="text-sm text-muted-foreground">Cotton Wick</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Handmade</p>
                  <p className="text-sm text-muted-foreground">Small Batch</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vimi Wick was born from a passion for creating beautiful, sustainable home fragrances. 
              Every candle is handcrafted in small batches using 100% natural soy wax, premium fragrance oils, 
              and cotton wicks. We believe in quality over quantity, ensuring each candle meets our high standards 
              for scent throw and burn time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to sustainability means we use eco-friendly packaging and source our materials responsibly. 
              When you light a Vimi Wick candle, you're not just illuminating your space – you're supporting 
              artisanal craftsmanship and environmentally conscious practices.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have questions about our candles or want to place a custom order? We'd love to hear from you!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="flex flex-col items-center space-y-3">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <a href="mailto:hello@pureglowcandles.com" className="text-muted-foreground hover:text-accent transition-colors">
                  hello@pureglowcandles.com
                </a>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors">
                  (123) 456-7890
                </a>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">
                  Based in Your City
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="h-5 w-5" />
            <p className="font-playfair font-semibold">Vimi Wick</p>
          </div>
          <p className="text-sm opacity-80">
            Handcrafted with love © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
