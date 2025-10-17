import { Mail, Phone, MapPin, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-candles.jpg";

const candles = [
  {
    name: "MINI CHOCOLATE ICE CREAM",
    fragrance: "Rich Chocolate",
    description: "Indulgent chocolate aroma that brings sweet comfort to any space.",
  },
  {
    name: "MINI STRAWBERRY ICE CREAM",
    fragrance: "Fresh Strawberry",
    description: "Sweet strawberry scent reminiscent of summer days and fresh berries.",
  },
  {
    name: "MINI BLUEBERRY ICE CREAM",
    fragrance: "Wild Blueberry",
    description: "Delightful blueberry fragrance with hints of creamy sweetness.",
  },
  {
    name: "MINI FLOWER",
    fragrance: "Garden Bouquet",
    description: "Soft floral blend bringing the freshness of a spring garden indoors.",
  },
  {
    name: "MINI GREEN GARDEN",
    fragrance: "Fresh Herbs & Greenery",
    description: "Crisp garden scent with notes of fresh herbs and green leaves.",
  },
  {
    name: "MINI LOVE HEART",
    fragrance: "Rose & Vanilla",
    description: "Romantic blend of soft rose petals and warm vanilla notes.",
  },
  {
    name: "Set of 6 Mini Jar",
    fragrance: "Assorted Collection",
    description: "Perfect variety set featuring our most popular mini candle fragrances.",
  },
  {
    name: "CHOCOLATE ICE CREAM CUP",
    fragrance: "Decadent Chocolate",
    description: "Rich, creamy chocolate scent that fills your home with warmth.",
  },
  {
    name: "ROASTED COFFEE BEANS",
    fragrance: "Fresh Ground Coffee",
    description: "Authentic coffee aroma capturing the essence of freshly roasted beans.",
  },
  {
    name: "Blue Daisy Flower",
    fragrance: "Wild Daisy",
    description: "Light floral fragrance with fresh, uplifting daisy notes.",
  },
  {
    name: "GOLDEN DAISY FLOWER",
    fragrance: "Sunlit Daisy",
    description: "Bright floral scent bringing sunshine and joy to your space.",
  },
  {
    name: "MINI BLUEBERRY BOWL",
    fragrance: "Sweet Blueberry",
    description: "Fresh blueberry fragrance with a touch of natural sweetness.",
  },
  {
    name: "COFFEE HEART",
    fragrance: "Coffee & Cream",
    description: "Warm coffee blend with smooth, creamy undertones.",
  },
];

const Index = () => {
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {candles.map((candle, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-48 bg-secondary rounded-lg flex items-center justify-center">
                    <Flame className="h-20 w-20 text-accent/30" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-playfair font-semibold text-foreground">{candle.name}</h3>
                    <p className="text-sm font-medium text-accent">{candle.fragrance}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{candle.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
