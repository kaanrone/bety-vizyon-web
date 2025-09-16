import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-industrial text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">Bety Ambalaj</h3>
            <p className="text-industrial-light mb-4">
              Modern ve kaliteli ambalaj çözümleri sunan profesyonel firma. 
              Müşteri memnuniyeti odaklı hizmet anlayışımızla sektörde lider konumdayız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Hızlı Linkler</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-industrial-light hover:text-white transition-colors">
                Ana Sayfa
              </Link>
              <Link to="/hakkimizda" className="block text-industrial-light hover:text-white transition-colors">
                Hakkımızda
              </Link>
              <Link to="/urunlerimiz" className="block text-industrial-light hover:text-white transition-colors">
                Ürünlerimiz
              </Link>
              <Link to="/iletisim" className="block text-industrial-light hover:text-white transition-colors">
                İletişim
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">İletişim Bilgileri</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-industrial-light">+90 555 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-industrial-light">info@betyambalaj.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-industrial-light">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-industrial-light/20 mt-8 pt-8 text-center">
          <p className="text-industrial-light">
            © 2024 Bety Ambalaj. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;