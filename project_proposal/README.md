# Proposal : Sistem Informasi & Pendaftaran Online Pesantren Habiburrahman Banyuresmi Garut

## Permasalahan
- Banyak calon santri yang ingin mendafatar tetapi tidak tahu syarat, tahapan, serta biaya pendaftarannya.
- Calon santri ingin mengetahui profil pesantren serta profil pengajarnya.
- Calon santri ingin mengetahui jadwal kegiatan, apa saja kitab yang dikaji serta ekstrakulikuler yang ada di pesantren.

## Rancangan Solusi
- Membuat web informasi & pendaftaran online pesantren, yang kemudian santri dapat mendaftar & membayar biaya pendaftaran serta biaya bulanan secara online.

## Use Case
No. | Use case | Prioritas (1 - 5)
---|---|---
1| Santri dapat melihat jadwal kegiatan, apa saja kitab yang dikaji serta ekstrakulikuler yang ada di pesantren. | ⭐⭐⭐⭐⭐
2| User (Santri & Admin) dapat register dan login pada website. | ⭐⭐⭐⭐
3| Santri dapat mendaftar di pesantren & membayar biaya pendaftaran secara online. | ⭐⭐⭐⭐
4| Santri dapat membayar biaya bulanan secara online dan melihat riwayat pembayaran. | ⭐⭐⭐
5| Admin dapat memverifikasi pembayaran santri. | ⭐⭐⭐
6| User (Santri & Admin) dapat melihat profil. | ⭐⭐
7| Admin dapat mengatur jadwal kegiatan dan kitab yang dikaji. | ⭐⭐

## Struktur Data

### Users (Santri & Admin)
Atribut|Tipe Data|Contoh
---|---|---
id_user| INT | 3132948433 
email| STRING | ricky03senju@gmail.com 
password| STRING | admin1234 
is_admin| INT | 1 
nama_lengkap| STRING | ricky muhammad ridwan 
no_telepon| STRING | 085861874609 
alamat| STRING | Kp.Ciduga RT 02 RW 09 Des.Margahayu Kec.Leuwigoong Kab.Garut
photo| STRING | picture.jpeg 

### Pembayaran
Atribut|Tipe Data|Contoh
---|---|---
id_pembayaran | INT | 670988078998798
kode_pembayaran | INT | 789
id_jenis_pemb | INT| 3
tanggal_bayar |DATE |03/03/2022
img_barcode | STRING|barcode.jpg
status |STRING |paid

### jenis_pembayaran
Atribut|Tipe Data|Contoh
---|---|---
id_jenis_pemb| INT| 3
nama_pembayaran| STRING|DANA
metode_pembayaran| STRING|e-wallet
## dll

## UX Wireframe
**Coming soon**

![judul](https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/old-blog-uploads/mapping-out-a-user-flow-by-hand.jpg)