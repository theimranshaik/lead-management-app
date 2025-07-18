import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.5/+esm';

const supabaseUrl = 'https://wectlainkathzkumjfmo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlY3RsYWlua2F0aHprdW1qZm1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MjExNzQsImV4cCI6MjA2ODM5NzE3NH0.jhs8bFxDu8xS2uHw_ZzE6z47RZ717UIp2sDXVx98CM8';
const supabase = createClient(supabaseUrl, supabaseKey);

// Minimal fetch logic
async function fetchLeads() {
  const { data } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
  console.log(data);
}

fetchLeads();
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-btn");
  const closeBtn = document.getElementById("close-btn");
  const popup = document.getElementById("popup");

  openBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});
