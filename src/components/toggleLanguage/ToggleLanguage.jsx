import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ToggleLanguage = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    const newLanguage = isEnglish ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const ballPosition = isEnglish ? 'translate-x-full' : 'translate-x-0';

  return (
    <div className="relative inline-block w-20 h-8 bg-gray-300 rounded-full cursor-pointer" onClick={toggleLanguage}>
      {/* Toggle background */}
      <div className={`absolute w-full h-full bg-gray-300 rounded-full transition-opacity duration-300`}>
        {/* Bandera de España */}
        <img
          src="https://img.icons8.com/?size=40&id=Qb3hI60dMM5e&format=png&color=000000"
          alt="Spanish Flag"
          className={`absolute left-0 w-8 h-8 ml-1 transition-opacity duration-300 ${isEnglish ? 'opacity-50' : 'opacity-0'}`}
        />
        {/* Bandera de Inglaterra */}
        <img
          src="https://img.icons8.com/?size=40&id=aRiu1GGi6Aoe&format=png&color=000000"
          alt="English Flag"
          className={`absolute right-0 w-8 h-8 mr-1 transition-opacity duration-300 ${isEnglish ? 'opacity-0' : 'opacity-50'}`}
        />
      </div>
      {/* Ball */}
      <div className={`absolute w-10 h-8 bg-white rounded-full shadow transition-transform duration-300 ${ballPosition}`} />
    </div>
  );
};

export default ToggleLanguage;
