import React from "react";
import { Grid, Typography } from "@mui/material";

const languageOptions = [
  { code: "en", label: "English", flag: "en.png" },
  { code: "fr", label: "French", flag: "fr.png" },
  { code: "es", label: "Spanish", flag: "es.png" },
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
    <Grid sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <img
        src="/images/us-flag.png"
        alt="Selected Language Flag"
        width={24}
        height={16}
      />
      <select
        className="custom-select"
        onChange={handleLanguageChange}
        style={{
          color: "#444094",
          fontSize: "20px",
          fontWeight: 300,
          outline: "none", //
        }}
      >
        {languageOptions.map((option: any) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>
    </Grid>
  );
};

export default LanguageSelector;
