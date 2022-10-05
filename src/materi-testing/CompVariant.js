import React, { useEffect, useState } from "react";

export const CompVariant = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUser("Abu");
    }, 1000);
  }, []);

  return <>{user ? <p>Selamat Datang {user}</p> : null}</>;
};
