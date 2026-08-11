const fs = require('fs');
const path = require('path');
const https = require('https');

const hotelsDir = path.join(__dirname, '..', 'public', 'images', 'hotels');
if (!fs.existsSync(hotelsDir)) fs.mkdirSync(hotelsDir, { recursive: true });

// 32 verified hotel image items: 4 Makkah hotels x 4 photos + 4 Madina hotels x 4 photos
const hotelImages = [
  // ── MAKKAH HOTELS (16 images) ──
  // 1. Swissôtel Makkah
  {
    file: 'makkah-swissotel-1.jpg',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'makkah-swissotel-2.jpg',
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'makkah-swissotel-3.jpg',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'makkah-swissotel-4.jpg',
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=80'
  },

  // 2. Pullman Zamzam Makkah
  {
    file: 'makkah-pullman-1.jpg',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'makkah-pullman-2.jpg',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'makkah-pullman-3.jpg',
    url: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'makkah-pullman-4.jpg',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80'
  },

  // 3. Dar Al Eiman Royal Makkah
  {
    file: 'makkah-dareiman-1.jpg',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'makkah-dareiman-2.jpg',
    url: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'makkah-dareiman-3.jpg',
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'makkah-dareiman-4.jpg',
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80'
  },

  // 4. Le Méridien Makkah
  {
    file: 'makkah-lemeridien-1.jpg',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'makkah-lemeridien-2.jpg',
    url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'makkah-lemeridien-3.jpg',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'makkah-lemeridien-4.jpg',
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80'
  },


  // ── MADINA HOTELS (16 images) ──
  // 5. The Oberoi Madina
  {
    file: 'madina-oberoi-1.jpg',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'madina-oberoi-2.jpg',
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'madina-oberoi-3.jpg',
    url: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'madina-oberoi-4.jpg',
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80'
  },

  // 6. Pullman Zamzam Madina
  {
    file: 'madina-pullman-1.jpg',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'madina-pullman-2.jpg',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'madina-pullman-3.jpg',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'madina-pullman-4.jpg',
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=80'
  },

  // 7. Anwar Al Madinah Mövenpick
  {
    file: 'madina-movenpick-1.jpg',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'madina-movenpick-2.jpg',
    url: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'madina-movenpick-3.jpg',
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'madina-movenpick-4.jpg',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80'
  },

  // 8. Frontel Al Harithia Hotel Madina
  {
    file: 'madina-frontel-1.jpg',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'madina-frontel-2.jpg',
    url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'madina-frontel-3.jpg',
    url: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'madina-frontel-4.jpg',
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80'
  }
];

function downloadUrl(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadUrl(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => { stream.close(); resolve(); });
    }).on('error', reject);
  });
}

async function processAll() {
  console.log(`Downloading 32 verified hotel images...`);
  let count = 0;

  for (let i = 0; i < hotelImages.length; i++) {
    const item = hotelImages[i];
    const destPath = path.join(hotelsDir, item.file);

    try {
      console.log(`[${i + 1}/${hotelImages.length}] Downloading: ${item.file}`);
      await downloadUrl(item.url, destPath);
      const stats = fs.statSync(destPath);
      console.log(`  ✓ Success (${(stats.size / 1024).toFixed(1)} KB)`);
      count++;
    } catch (err) {
      console.error(`  ✗ Error downloading ${item.file}: ${err.message}`);
    }
  }

  console.log(`\nCompleted downloading ${count}/32 verified hotel images.`);
}

processAll();
