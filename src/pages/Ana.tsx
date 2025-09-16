import HeroSlideshow from "@/components/HeroSlideshow";

const Ana = () => {
  return (
    <div>
      <HeroSlideshow />
      
      {/* Additional home page content can be added here */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Neden Bety Ambalaj?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Yılların deneyimi ve modern teknoloji ile müşterilerimize en kaliteli 
            ambalaj çözümlerini sunuyoruz. Güvenilir, hızlı ve profesyonel hizmet 
            anlayışımızla işinizin büyümesine katkıda bulunuyoruz.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Ana;