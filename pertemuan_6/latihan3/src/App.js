import axios from "axios";
import dayjs from "dayjs";
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";


const userAtom = atom({ id: 2323, username: "mamat basreng" });

const HalamanDepan = () => {
  const [catFact, setCatFact] = useState("");
  const currentDate = dayjs();

  const getCactFact = () => {
    console.log("test");
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => setCatFact(res.data["fact"]));
  };

  useEffect(() => {
    getCactFact();
  }, []);

  return (
    <div>
      <h2>Cat Fact</h2>
      <i>{currentDate.locale("AR").format("DD MMMM YYYY")}</i>
      <p>{catFact}</p>
      <button onClick={() => getCactFact()}>Get other fact</button>
    </div>
  );
};

const HalamanListBuku = () => {

  const [user, setUser] = useAtom(userAtom);
useEffect(() => {
  setUser(user)
})
  return (
    <div>
      <h2>Welcome {user.username} to CatFact</h2>
      ini halaman list buku
    </div>
  );
};
const HalamanTambahBuku = () => {
  return <div>ini halaman tambah buku</div>;
};
const HalamanUbahBuku = () => {
  return <div>ini halaman ubah buku</div>;
};

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HalamanDepan />} />
        <Route path="/buku/tambah" element={<HalamanTambahBuku />} />
        <Route path="/buku/list" element={<HalamanListBuku />} />
        <Route path="/buku/ubah/:idBuku" element={<HalamanUbahBuku />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
