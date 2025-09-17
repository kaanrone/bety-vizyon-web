import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "905428327858"; // +90 542 832 78 58
  const message = "Merhaba, ürünleriniz hakkında bilgi almak istiyorum.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-float group"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        WhatsApp ile iletişime geç
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;