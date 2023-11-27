/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eluxpwnltqxkphfkolza.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdXhwd25sdHF4a3BoZmtvbHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NjEyMDksImV4cCI6MjAxNjAzNzIwOX0.2nmqqBa8VVkbzWtGJq4zA0nvMQxEWrR-6mYKJBAVaEY";

const supabase = createClient(supabaseUrl, supabaseKey);

const insertLaporan = async (laporan, idLaporan) => {

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
    
    const { id, alamat_pengiriman, jenis_bunga, nomor_telp_pelanggan, kurir, status_pengiriman, laporan_masalah, image_url } = dataPengiriman;
    
    await supabase
        .from('dataPengiriman')
        .insert([{id, alamat_pengiriman, jenis_bunga, nomor_telp_pelanggan, kurir, status_pengiriman, laporan_masalah, image_url  }]);

    const laporanObj = {
        id: idLaporan,
        laporan_masalah: laporan
    }

    const { data,  error } = await supabase
        .from('dataLaporan')
        .upsert([laporanObj])
        .select();
    
    const pengiriman = await supabase
		.from('dataPengiriman')
		.update({ laporan_masalah: laporanObj.id })
		.eq('id', id);

    if (data && pengiriman) {
        return "Berhasil Insert Laporan";
    } else {
        return "Gagal Insert Laporan";
    }
}

export default insertLaporan;