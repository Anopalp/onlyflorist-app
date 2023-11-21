import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eluxpwnltqxkphfkolza.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsdXhwd25sdHF4a3BoZmtvbHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NjEyMDksImV4cCI6MjAxNjAzNzIwOX0.2nmqqBa8VVkbzWtGJq4zA0nvMQxEWrR-6mYKJBAVaEY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;