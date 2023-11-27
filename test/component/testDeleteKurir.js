/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eluxpwnltqxkphfkolza.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdXhwd25sdHF4a3BoZmtvbHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NjEyMDksImV4cCI6MjAxNjAzNzIwOX0.2nmqqBa8VVkbzWtGJq4zA0nvMQxEWrR-6mYKJBAVaEY";

const supabase = createClient(supabaseUrl, supabaseKey);

const deleteKurir = async (dataKurir) => {
    const { username } = dataKurir;
    try {
        const { dataPengiriman } = await supabase
            .from('dataPengiriman')
            .delete()
            .eq('kurir', username);

        const { data, error } = await supabase
            .from('dataKurir')
            .delete()
            .eq('username', username);
        
        const { dataCurrent } = await supabase
            .from('dataKurir')
            .select()
            .eq('username', username);

        if (!dataCurrent) {
            return "Deletion Berhasil";
        } else {
            return "Deletion Gagal";
        }
    } catch (error) {
        return "Deletion Gagal";
    }
}

export default deleteKurir;