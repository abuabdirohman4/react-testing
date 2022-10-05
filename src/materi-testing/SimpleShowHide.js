import React, { useState } from "react";

export const SimpleShowHide = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <p>Saya Sedang {show ? "Muncul" : "Sembunyi"} </p>
      <button onClick={toggleShow}>{show ? "Sembunyikan" : "Munculkan"}</button>
    </div>
  );
};
