import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    id: 1,
    name: "Karton Kutular",
    image: product1,
    description: "Dayanıklı ve çevre dostu karton ambalaj kutuları. Farklı boyut ve şekillerde mevcut.",
  },
  {
    id: 2,
    name: "Koruyucu Ambalajlar",
    image: product2,
    description: "Ürünlerinizi güvenle koruyan balonlu nylon ve koruyucu ambalaj malzemeleri.",
  },
  {
    id: 3,
    name: "Plastik Kaplar",
    image: product3,
    description: "Gıda güvenli plastik kaplar ve şişeler. Farklı hacim ve tasarım seçenekleri.",
  },
  {
    id: 4,
    name: "Özel Tasarım Kutular",
    image: product1,
    description: "Markanıza özel tasarlanmış, logolu ve renkli ambalaj kutuları.",
  },
  {
    id: 5,
    name: "Endüstriyel Ambalaj",
    image: product2,
    description: "Ağır sanayi ve endüstriyel kullanım için özel üretilmiş dayanıklı ambalajlar.",
  },
  {
    id: 6,
    name: "E-ticaret Ambalajları",
    image: product3,
    description: "Online satış için optimize edilmiş, güvenli kargo ambalaj çözümleri.",
  },
];

const Urunlerimiz = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ürünlerimiz
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-slide-up">
            Geniş ürün yelpazemiz ile tüm ambalaj ihtiyaçlarınıza çözüm
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Özel İhtiyaçlarınız İçin
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Yukarıdaki ürünlerin dışında özel tasarım ve boyutlarda ambalaj 
            çözümlerine ihtiyacınız var mı? Size özel çözümler üretebiliriz.
          </p>
          <a
            href="https://wa.me/905551234567?text=Özel%20ambalaj%20çözümleri%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-hover transition-colors duration-200"
          >
            Özel Çözüm Talep Et
          </a>
        </div>
      </section>
    </div>
  );
};

export default Urunlerimiz;