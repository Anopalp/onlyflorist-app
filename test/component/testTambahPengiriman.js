/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eluxpwnltqxkphfkolza.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdXhwd25sdHF4a3BoZmtvbHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NjEyMDksImV4cCI6MjAxNjAzNzIwOX0.2nmqqBa8VVkbzWtGJq4zA0nvMQxEWrR-6mYKJBAVaEY";

const supabase = createClient(supabaseUrl, supabaseKey);

const tambahPengiriman = async (dataPengiriman) => {
    const { id, alamat_pengiriman, jenis_bunga, nomor_telp_pelanggan, kurir, status_pengiriman, laporan_masalah, image_url } = dataPengiriman;

    try {
        const { data, error } = await supabase
            .from('dataPengiriman')
            .insert([{id, alamat_pengiriman, jenis_bunga, nomor_telp_pelanggan, kurir, status_pengiriman, laporan_masalah, image_url  }])
            .select()

        if (error) {
            console.error("Error Inserting Data:", error);
            throw new Error("Failed to insert data into Supabase");
        }
    
        // Check if data is null or an empty array
        if (!data || data.length === 0) {
            console.error("No Data Inserted");
            throw new Error("No data inserted into Supabase");
        }

        const returnedData = {...data[0]}

        delete returnedData.waktu_dibuat

        return returnedData;
    } catch (error) {
        return null;
    }
}

export default tambahPengiriman;