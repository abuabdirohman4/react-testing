import React, { useState } from "react";

export const CompUserEvent = ({onSubmit}) => {
  const [value, setValue] = useState("");
//   const onSubmit = () => {
//     console.log("Call API SUbmit");
//   };
  return (
    <div>
      <p>Anda mengetik {value}</p>
      <input
        placeholder="Text input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <p data-testid="text-submit" onClick={onSubmit}>Submit</p>
    </div>
  );
};
