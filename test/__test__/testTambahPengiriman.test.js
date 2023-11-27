/* eslint-disable no-undef */
import tambahPengiriman from "../component/testTambahPengiriman";

test("Test Fitur Tambah Pengiriman", async () => {

    const dataPengiriman = {
        id: 1000,
        alamat_pengiriman: "Jl. Ganesha no. 100",
        jenis_bunga: "Lavender",
        nomor_telp_pelanggan: "0822-1122-2211",
        kurir: "ibnu101",
        status_pengiriman: "Pick-up",
        laporan_masalah: null,
        catatan: null,
        image_url: "apa aja"
    }

    const result = await tambahPengiriman(dataPengiriman);

    expect(result).toEqual(dataPengiriman);
})
