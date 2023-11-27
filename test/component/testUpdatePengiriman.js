/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eluxpwnltqxkphfkolza.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdXhwd25sdHF4a3BoZmtvbHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NjEyMDksImV4cCI6MjAxNjAzNzIwOX0.2nmqqBa8VVkbzWtGJq4zA0nvMQxEWrR-6mYKJBAVaEY";

const supabase = createClient(supabaseUrl, supabaseKey);

const updatePengiriman = async (id, status) => {
    
    if (status === 'Delivered') {
        const { data } = await supabase
            .from('dataPengiriman')
            .select()
            .eq('id', id);
        
        await supabase
            .from('dataPengiriman')
            .delete()
            .eq('id', id);

        const riwayat = {
            ...data[0],
        }

        delete riwayat.waktu_dibuat
		delete riwayat.status_pengiriman

        const tambahRiwayat = await supabase
			.from('dataRiwayat')
			.insert([riwayat])
			.select();

        if (tambahRiwayat) {

            await supabase
                .from('dataRiwayat')
                .delete()
                .eq('id', id);

            return "Update Berhasil";
        } else {
            return "Update Gagal"
        }

    } else {
        const { data, error } = await supabase
			.from('dataPengiriman')
			.update({ status_pengiriman: status })
			.eq('id', id)
			.select();
        
            if (data) {

                await supabase
                    .from('dataPengiriman')
                    .delete()
                    .eq('id', id);

                return "Update Berhasil";
            } else {
                return "Update Gagal"
            }
    }
}

export default updatePengiriman;

