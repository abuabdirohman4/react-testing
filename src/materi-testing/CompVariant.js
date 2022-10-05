import React, { useEffect, useState } from "react";

export const data = [
  "senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
];

export const CompVariant = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser("Abu");
    }, 1000);
  }, []);

  return (
    <>
      {user ? <p>Selamat Datang {user}</p> : null}
      <p>Hari-hari yang ada: </p>
      {data.map((hari, i) => {
        return (
          <p key={i} data-testid="hari">
            {hari}
          </p>
        );
      })}
    </>
  );
};
