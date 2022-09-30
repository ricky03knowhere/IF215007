import React from "react";
import { AppJudul } from "./shared/components/AppJudul";
import { MenuBawah } from "./shared/components/AppMenuBawah";

// Mengurai kompleksitas
// Memudahkan berbagai pakai komponen
// Misal komponen TabelCanggih, bisa dipake dimana saja, tinggal ganti struktur datanya.

const App = () => {
  return (
    <div className="App">
      {/* Judul */}
      <AppJudul title={"Rekam Lokasi"} />
      
      {/* Peta */}

      {/* Menu Bawah */}
      <MenuBawah />
    </div>
  );
};

export default App;
