import React from "react";
import {
  MuiTelInput,
  MuiTelInputCountry,
  MuiTelInputInfo,
  MuiTelInputContinent,
} from "mui-tel-input";

function TelInput() {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (newValue: string, info: MuiTelInputInfo) => {
    setValue(newValue);
  };

  return (
    <MuiTelInput
      defaultCountry="US"
      forceCallingCode
      focusOnSelectCountry
      flagSize="medium"
      value={value}
      onChange={handleChange}
      sx={{
        width: "100%",
        borderRadius: "30px",
        borderColor: "#444094",
        "& .MuiOutlinedInput-root": {
          borderRadius: "30px",
          color: "#444094",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#444094",
        },
        "& .MuiTelInput-Flag": {
          borderRadius: "30px",
        },
      }}
    />
  );
}

export default TelInput;
