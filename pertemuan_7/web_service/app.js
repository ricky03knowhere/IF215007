const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pengajar", (req, res) => {
  res.json([
    {
      id: 1,
      picture: "unnamed2.png",
      name: "Ust.Mamat Xavier S.Ag",
      position: "pengurus",
      birthDate: "24 Juni 2002",
      status: "mahasiswa",
      address: "Kp.Ciduga RT 02 RW 09 Des.Margahayu Kec.Leuwigoong Kab.Garut",
      education: [
        "SMK Al-ghifari Banyuresmi (RPL) : 2017 ~ 2020",
        " UIN Sunan Gunung Djati Bandung (Teknik Informatika) : 2020 ~ 2024",
      ],
      socials: ["#", "#", "#"],
    },
    {
      id: 2,
      picture: "unnamed2.png",
      name: "Ust.Ucok Tabok",
      position: "Sekretaris",
      birthDate: "24 Juni 2002",
      status: "Guru Swasta",
      address: "Kp.Ciduga RT 02 RW 09 Des.Margahayu Kec.Leuwigoong Kab.Garut",
      education: ["SMK Al-ghifari Banyuresmi (RPL) : 2017 ~ 2020"],
      socials: ["#", "#", "#"],
    },
    {
      id: 3,
      picture: "unnamed2.png",
      name: "Mang Aceng",
      position: "Bendahara",
      birthDate: "24 Juni 2002",
      status: "Wiraswasta",
      address: "Kp.Ciduga RT 02 RW 09 Des.Margahayu Kec.Leuwigoong Kab.Garut",
      education: [
        "SMK Al-ghifari Banyuresmi (RPL) : 2017 ~ 2020",
        "Institut Teknologi Garut (Teknik Informatika) : 2020 ~ 2024",
      ],
      socials: ["#", "#", "#"],
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
