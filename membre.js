// Copie/colle dans <head> de toutes les pages sensibles
if (window.location.pathname.includes('membre')) {
  fetch('https://YOUR_SUPABASE_URL.supabase.co/auth/v1/user', { headers: { apikey: 'YOUR_PUBLIC_KEY' } })
    .then(r => r.json())
    .then(data => { if (!data.user) window.location = 'login.html'; });
}
