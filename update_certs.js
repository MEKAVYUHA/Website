import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Simple .env parser
const envContent = fs.readFileSync(join(__dirname, '.env'), 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    env[match[1].trim()] = match[2].trim();
  }
});

const supabaseUrl = env['VITE_SUPABASE_URL'];
const supabaseKey = env['VITE_SUPABASE_ANON_KEY'];

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateCertificates() {
  console.log("Fetching existing certificates...");
  const { data: certificates, error } = await supabase.from('certificates').select('*');
  
  if (error) {
    console.error("Error fetching certificates:", error);
    return;
  }
  
  if (!certificates || certificates.length === 0) {
    console.log("No certificates found.");
    return;
  }
  
  console.log(`Found ${certificates.length} certificates. Updating IDs...`);
  
  for (const cert of certificates) {
    if (cert.certificate_id.startsWith('MEK-CERT-') || cert.certificate_id.includes('/')) {
      const year = new Date(cert.created_at).getFullYear();
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const newId = `MKV-INT-${year}-${randomNum}`;
      
      console.log(`Updating ${cert.certificate_id} -> ${newId}`);
      
      const { error: updateError } = await supabase
        .from('certificates')
        .update({ certificate_id: newId })
        .eq('id', cert.id);
        
      if (updateError) {
        console.error(`Failed to update ${cert.id}:`, updateError);
      }
    } else {
      console.log(`Skipping ${cert.certificate_id} (already in good format)`);
    }
  }
  
  console.log("Done updating certificates!");
}

updateCertificates();
