/* eslint-disable no-undef */
import tambahKurir from "../component/testTambahKurir";

test("Test Fitur Tambah Kurir", async () => {

    const dataKurir = {
        username: "tayo101",
        password: "123456",
        nama_lengkap: "Tayo si Bus Kecil yang Sangat Ramah",
        nik: "120120120",
        phone: "1111-1111-1111",
        alamat: "Jl. Ganesha no. 10",
        tanggal_lahir: "2001-01-01",
        image_url: "apa aja"
    }

    const result = await tambahKurir(dataKurir);

    expect(result).toEqual(dataKurir);
})