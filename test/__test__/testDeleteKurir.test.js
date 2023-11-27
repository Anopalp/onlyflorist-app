import deleteKurir from "../component/testDeleteKurir";

test("Test Fitur Hapus Kurir", async () => {

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

    const result = await deleteKurir(dataKurir);

    expect(result).toBe("Deletion Berhasil");

})

