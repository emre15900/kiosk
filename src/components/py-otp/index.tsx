import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function PyOtp() {
  const [otp, setOtp] = useState("");

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      //   renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      shouldAutoFocus
      inputStyle={{
        width: "5rem",
        height: "5rem",
        margin: "0 1rem",
        fontSize: "2rem",
        borderRadius: "50%",
        border: "1px solid rgba(68, 64, 148, 1)",
      }}
    />
  );
}
