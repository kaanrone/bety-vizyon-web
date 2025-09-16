const Hakkimizda = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Hakkımızda
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-slide-up">
            Ambalaj sektöründeki deneyimimiz ve vizyonumuz
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-right">
            <h2 className="text-3xl font-bold text-foreground">
              Misyonumuz
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bety Ambalaj olarak, müşterilerimizie en kaliteli ve güvenilir ambalaj 
              çözümlerini sunmayı amaçlıyoruz. Modern teknoloji ve deneyimli kadromuzla, 
              her türlü ambalaj ihtiyacınıza profesyonel çözümler üretiyoruz.
            </p>
            
            <h3 className="text-2xl font-semibold text-foreground mt-8">
              Vizyonumuz
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ambalaj sektöründe öncü bir firma olarak, sürdürülebilir ve çevre dostu 
              çözümlerle geleceğin ambalaj standartlarını belirlemeyi hedefliyoruz.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div className="text-center p-6 bg-card rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Yıl Deneyim</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-md">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Mutlu Müşteri</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Ürün Çeşidi</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-md">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Müşteri Desteği</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Kalite</h3>
              <p className="text-muted-foreground">
                En yüksek kalite standartlarını koruyarak müşteri memnuniyetini sağlıyoruz.
              </p>
            </div>
            
            <div className="p-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">İnovasyon</h3>
              <p className="text-muted-foreground">
                Sürekli gelişim ve yeniliklerle sektöre öncülük ediyoruz.
              </p>
            </div>
            
            <div className="p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-success rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Güvenilirlik</h3>
              <p className="text-muted-foreground">
                Sözümüzde duran, zamanında teslimat yapan güvenilir bir partner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hakkimizda;