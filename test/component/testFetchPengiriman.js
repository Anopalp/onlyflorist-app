/* eslint-disable no-unused-vars */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eluxpwnltqxkphfkolza.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdXhwd25sdHF4a3BoZmtvbHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NjEyMDksImV4cCI6MjAxNjAzNzIwOX0.2nmqqBa8VVkbzWtGJq4zA0nvMQxEWrR-6mYKJBAVaEY";

const supabase = createClient(supabaseUrl, supabaseKey);

const fetchDataPengiriman = async () => {

    try {
        const { data, error } = await supabase
            .from('dataPengiriman')
            .select()

        if (data) {
            return "Fetch Berhasil";
        } else {
            return "Fetch Gagal";
        }
    } catch (error) {
        return "Fetch Gagal";
    }
}

export default fetchDataPengiriman;