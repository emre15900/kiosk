import React from "react";
import styles from "./LanguageSelector.module.css"; // veya './LanguageSelector.styles.ts' for Emotion

const languageOptions = [
  { code: "en", label: "English", flag: "en.png" },
  { code: "fr", label: "French", flag: "fr.png" },
  { code: "es", label: "Spanish", flag: "es.png" },
  // Diğer dil seçenekleri buraya eklenir
];

const LanguageSelector: React.FC = () => {
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    // Dil değiştirme işlemini burada gerçekleştirin
    console.log(`Selected language: ${selectedLanguage}`);
  };

  return (
    <div className={styles.languageSelector}>
      <select
        className={styles.selectElement}
        id="languageSelect"
        onChange={handleLanguageChange}
      >
        {languageOptions.map((option: any) => (
          <option key={option.code} value={option.code}>
            <img
              src="/images/us-flag.png"
              alt="Selected Language Flag"
              width={24} // Bayrak genişliği
              height={16} // Bayrak yüksekliği
            />
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
