// Copie/colle dans <head> de toutes les pages sensibles
if (window.location.pathname.includes('membre')) {
  fetch('https://YOUR_SUPABASE_URL.supabase.co/auth/v1/user', { headers: { apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNseWx3cHF3dXRzbG9teXVsb3BwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3ODg2NjAsImV4cCI6MjA2OTM2NDY2MH0.PgMpOD8iJSLAM-6-_dJrlSoIrgEsfi0M3fRgs3ojMOQ' } })
    .then(r => r.json())
    .then(data => { if (!data.user) window.location = 'login.html'; });
}
