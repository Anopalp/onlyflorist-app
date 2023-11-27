<div align="center">
    <h1 align="center">
    <span style="color: white; font-weight: bold;">TUGAS BESAR IF3152 REKAYASA PERANGKAT LUNAK</span>
    </h1>
</div>

<div align="center">
    <!-- Typing SVG by DenverCoder1 - https://github.com/DenverCoder1/readme-typing-svg -->
    <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=747B2E&center=true&vCenter=true&width=700&lines=Kelompok+9+-+K1;Sistem+dan+Teknologi+Informasi;OnlyFlorist" alt="Typing SVG" />
    </a>
</div>

## **Author**

<p align="center"> 
<table>
    <tr>
        <td colspan=4 align="center">Kelompok 9</td>
    </tr>
    <tr>
        <td>No.</td>
        <td>Nama</td>
        <td>NIM</td>
        <td>Email</td>
    </tr>
    <tr>
        <td>1.</td>
        <td>Ibnu Khairy Algifari</td>
        <td>18221091</td>
        <td><a href="mailto:18221091@std.stei.itb.ac.id">18221091@std.stei.itb.ac.id</a></td>
    </tr>
    <tr>
        <td>2.</td>
        <td>Muhammad Aliefnaufal Permana</td>
        <td>18221105</td>
        <td><a href="mailto:18221105@std.stei.itb.ac.id">18221105@std.stei.itb.ac.id</a></td>
    </tr>
    <tr>
        <td>3.</td>
        <td>Samuel Eric Yonatan</td>
        <td>18221133</td>
        <td><a href="mailto:18221133@std.stei.itb.ac.id">18221133@std.stei.itb.ac.id</a></td>
    </tr>
    <tr>
        <td>6.</td>
        <td>Luthfi Hanif</td>
        <td>18221151</td>
        <td><a href="mailto:18221151@std.stei.itb.ac.id">18221151@std.stei.itb.ac.id</a></td>
    </tr>
</table>
</p>

<br>

## **App Specification**
<p>
    OnlyFlorist merupakan sebuah aplikasi manajemen pengiriman bunga
    yang dibuat atas dasar kebutuhan manajer pemilik sebuah toko bunga
    terkenal di Kota Bandung. OnlyFlorist bekerja dengan mengolah data
    pengiriman agar pengiriman bunga dapat lebih efisien dan efektif.
    Onlyflorist ditujukan sebagai aplikasi berbasis web agar dapat
    kompatibel dengan semua perangkat pengguna. Diharapkan adanya
    OnlyFlorist dapat membantu manajer pemiliki toko bunga ini.
</p>

<br>

## **How to Run**
1. Open terminal</br>

2. Clone repository ini</br>
```bash
    git clone https://gitlab.informatika.org/k1_g9/if3152-2023-k01-9-onlyflorist.git
```

3. Masuk ke local repository folder</br>
```bash
    cd IF3152-2023-K01-9-OnlyFlorist
```

4. Install all dependencies</br>
```bash
    npm install
```

5. Run aplikasi</br>
```bash
    npm run dev
```

<br>

## **Implemented Use Case**

<p align="center"> 
<table>
    <tr>
        <td colspan=4 align="center">List of Use Case</td>
    </tr>
    <tr>
        <td align="center">Nama</td>
        <td align="center">NIM PJ</td>
        <td align="center">Nama PJ</td>
    </tr>
    <tr>
        <td>Mengelola akun kurir</td>
        <td>18221091</td>
        <td>Ibnu Khairy Algifari</td>
    </tr>
    <tr>
        <td>Memperbarui status pengiriman</td>
        <td>18221091</td>
        <td>Ibnu Khairy Algifari</td>
    </tr>
    <tr>
        <td>Melakukan Login</td>
        <td>18221133</td>
        <td>Samuel Eric Yonatan</td>
    </tr>
    <tr>
        <td>Mengakses daftar pengiriman keseluruhan</td>
        <td>18221133</td>
        <td>Samuel Eric Yonatan</td>
    </tr>
    <tr>
        <td>Mengakses daftar pengiriman per kurir</td>
        <td>18221133</td>
        <td>Samuel Eric Yonatan</td>
    </tr>
    <tr>
        <td>Mengakses detail pengiriman</td>
        <td>18221105</td>
        <td>Muhammad Aliefnaufal Permana</td>
    </tr>
    <tr>
        <td>Memasukkan detail pesanan pelanggan</td>
        <td>18221105</td>
        <td>Muhammad Aliefnaufal Permana</td>
    </tr>
    <tr>
        <td>Mengirimkan laporan masalah pada pengiriman</td>
        <td>18221151</td>
        <td>Luthfi Hanif</td>
    </tr>
    <tr>
        <td>Mengakses laporan masalah terkait pengiriman</td>
        <td>18221151</td>
        <td>Luthfi Hanif</td>
    </tr>
</table>
</p>

<br>

## **App Screenshot**
Tampilan layar : 
![Test](/doc/DashboardKurir%20(1).jpeg)

<br>

## **Implemented Database Tables**
<p align="center"> 
<table>
    <tr>
        <td colspan=4 align="center">List of Database Tables</td>
    </tr>
    <tr>
        <td align="center">Nama</td>
        <td align="center">Atribut</td>
    </tr>
    <tr>
        <td>dataKurir</td>
        <td>
            <p>username: text</p>
            <p>password: text</p>
            <p>nama_lengkap: text</p>
            <p>nik: text</p>
            <p>phone: text</p>
            <p>tanggal_lahir: date</p>
            <p>alamat: text</p>
            <p>image_url: text</p>
        </td>
    </tr>
    <tr>
        <td>dataLaporan</td>
        <td>
            <p>id: int8</p>
            <p>laporan_masalah: text</p>
            <p>waktu: timestamptz</p>
        </td>
    </tr>
    <tr>
        <td>dataPengiriman</td>
        <td>
            <p>id: int8</p>
            <p>alamat_pengiriman: text</p>
            <p>jenis_bunga: text</p>
            <p>no_telp_pelanggan: text</p>
            <p>kurir: varchar</p>
            <p>status_pengiriman: text</p>
            <p>laporan_masalah: int8</p>
            <p>catatan: text</p>
            <p>waktu_dibuat: timestamptz</p>
            <p>image_url: text</p>
        </td>
    </tr>
    <tr>
        <td>dataRiwayat</td>
        <td>
            <p>id: int8</p>
            <p>waktu_selesai: timestamptz</p>
            <p>alamat_pengiriman: text</p>
            <p>jenis_bunga: text</p>
            <p>nomor_telp_pelanggan: text</p>
            <p>catatan: text</p>
            <p>kurir: varchar</p>
            <p>laporan_masalah: int8</p> 
            <p>image_url: text</p> 
        </td>
    </tr>
</table>
</p>

<br>