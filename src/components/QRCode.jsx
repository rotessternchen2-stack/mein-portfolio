import PropTypes from 'prop-types';
import { useState } from 'react';

const QRCode = ({ url = "https://maria-wallberg-portfolio.de", size = 200, label = "Scan mich!" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // QR Code API verwenden (kostenfrei)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}&bgcolor=f0fdf4&color=166534`;

  return (
    <div className="relative group">
      <div 
        className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-4 border-primary-200 hover:border-primary-400 relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Organischer Hintergrund-Effekt */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        <div className="relative z-10">
          {/* Label */}
          <div className="text-center mb-4">
            <span className="inline-block text-primary-700 font-bold text-lg bg-primary-100 px-4 py-2 rounded-full">
              {label}
            </span>
          </div>
          
          {/* QR Code */}
          <div className={`relative transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}>
            <img 
              src={qrCodeUrl} 
              alt={`QR Code für ${url}`}
              className="w-full h-auto rounded-xl shadow-md"
              loading="lazy"
            />
            
            {/* Overlay mit Icon in der Mitte */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
              <span className="text-2xl">🌿</span>
            </div>
          </div>
          
          {/* URL anzeigen */}
          <div className="text-center mt-4">
            <p className="text-sm text-neutral-600 font-mono break-all">
              {url}
            </p>
          </div>
          
          {/* Hint */}
          <div className="text-center mt-3">
            <p className="text-xs text-primary-600 font-medium">
              📱 Scanne mit deiner Kamera-App
            </p>
          </div>
        </div>
      </div>
      
      {/* Easter Egg: Kleine Animation bei Hover */}
      {isHovered && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
          Probier's aus! 👆
        </div>
      )}
    </div>
  );
};

QRCode.propTypes = {
  url: PropTypes.string,
  size: PropTypes.number,
  label: PropTypes.string
};

export default QRCode;


