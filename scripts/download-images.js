const fs = require('fs');
const path = require('path');
const https = require('https');

const baseDir = path.join(__dirname, '..', 'public', 'images');

// Ensure directories exist
const dirs = ['offices', 'hero', 'hotels', 'airlines', 'portals', 'ziyarat'];
dirs.forEach(d => {
  const full = path.join(baseDir, d);
  if (!fs.existsSync(full)) fs.mkdirSync(full, { recursive: true });
});

// Image definitions: file relative to public/images, and curated photographic Unsplash photo IDs or local fallback copies
const images = [
  // 1. OFFICES (16 images)
  {
    file: 'offices/rahim-yar-khan-1.jpg',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/rahim-yar-khan-2.jpg',
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/rahim-yar-khan-3.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/bahawalpur-1.jpg',
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/bahawalpur-2.jpg',
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/multan-1.jpg',
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/multan-2.jpg',
    url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/multan-3.jpg',
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/lahore-1.jpg',
    url: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/lahore-2.jpg',
    url: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/lahore-3.jpg',
    url: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/faisalabad-1.jpg',
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/faisalabad-2.jpg',
    url: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/karachi-1.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/karachi-2.jpg',
    url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'offices/karachi-3.jpg',
    url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1400&q=80'
  },

  // 2. HERO (3 images)
  {
    file: 'hero/haram-night-1.jpg',
    localFallback: 'hero-kaaba-night.jpg',
    url: 'https://images.unsplash.com/photo-1565552070098-0073a87693cf?auto=format&fit=crop&w=1920&q=80'
  },
  {
    file: 'hero/haram-night-2.jpg',
    localFallback: 'kaaba.jpg',
    url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1920&q=80'
  },
  {
    file: 'hero/madina-dusk.jpg',
    localFallback: 'madina-nabawi-sunset.jpg',
    url: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1920&q=80'
  },

  // 3. HOTELS (9 images)
  {
    file: 'hotels/makkah-exterior-1.jpg',
    localFallback: 'hotel-makkah-exterior.jpg',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'hotels/makkah-room-1.jpg',
    localFallback: 'hotel-makkah-room.jpg',
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'hotels/makkah-lobby-1.jpg',
    localFallback: 'hotel-madina-lobby.jpg',
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'hotels/madina-exterior-1.jpg',
    localFallback: 'hotel.jpg',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'hotels/madina-room-1.jpg',
    localFallback: 'hotel-makkah-room.jpg',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'hotels/madina-lobby-1.jpg',
    localFallback: 'hotel-madina-lobby.jpg',
    url: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'hotels/dining-1.jpg',
    localFallback: 'hotel-buffet.jpg',
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'hotels/dining-2.jpg',
    localFallback: 'hotel-buffet.jpg',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'hotels/shuttle-1.jpg',
    localFallback: 'airport-terminal.jpg',
    url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1400&q=80'
  },

  // 4. AIRLINES (4 images)
  {
    file: 'airlines/widebody-dawn.jpg',
    localFallback: 'airline-saudia.jpg',
    url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'airlines/cabin-interior.jpg',
    localFallback: 'airline-saudia.jpg',
    url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'airlines/boarding-gate.jpg',
    localFallback: 'airport-terminal.jpg',
    url: 'https://images.unsplash.com/photo-1519074069444-1ba4edd16be1?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'airlines/baggage-check.jpg',
    localFallback: 'family-travel.jpg',
    url: 'https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&w=1400&q=80'
  },

  // 5. PORTALS (4 images)
  {
    file: 'portals/nusuk.jpg',
    localFallback: 'visa.jpg',
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'portals/tasheer.jpg',
    localFallback: 'visa.jpg',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'portals/mora.jpg',
    localFallback: 'visa.jpg',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'portals/absher.jpg',
    localFallback: 'visa.jpg',
    url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1400&q=80'
  },

  // 6. ZIYARAT (8 images)
  {
    file: 'ziyarat/masjid-quba.jpg',
    localFallback: 'masjid-quba.jpg',
    url: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'ziyarat/masjid-qiblatain.jpg',
    localFallback: 'masjid-qiblatain.jpg',
    url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'ziyarat/mount-uhud.jpg',
    localFallback: 'mount-uhud.jpg',
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'ziyarat/jabal-noor.jpg',
    localFallback: 'jabal-noor.jpg',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'ziyarat/jannat-al-baqi.jpg',
    localFallback: 'madina.jpg',
    url: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'ziyarat/mina-tents.jpg',
    localFallback: 'kaaba.jpg',
    url: 'https://images.unsplash.com/photo-1565552070098-0073a87693cf?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'ziyarat/arafat.jpg',
    localFallback: 'mount-uhud.jpg',
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1400&q=80'
  },
  {
    file: 'ziyarat/jeddah-albalad.jpg',
    localFallback: 'hotel-makkah-exterior.jpg',
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80'
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
  console.log(`Processing ${images.length} images...`);
  let successCount = 0;

  for (let i = 0; i < images.length; i++) {
    const item = images[i];
    const destPath = path.join(baseDir, item.file);

    try {
      console.log(`[${i+1}/${images.length}] Downloading: ${item.file}`);
      await downloadUrl(item.url, destPath);
      const stats = fs.statSync(destPath);
      console.log(`  ✓ Success (${(stats.size/1024).toFixed(1)} KB)`);
      successCount++;
    } catch (err) {
      console.error(`  ✗ Download failed: ${err.message}`);
      if (item.localFallback) {
        const fallbackPath = path.join(baseDir, item.localFallback);
        if (fs.existsSync(fallbackPath)) {
          fs.copyFileSync(fallbackPath, destPath);
          console.log(`  ✓ Used local fallback (${item.localFallback})`);
          successCount++;
        }
      }
    }
  }

  console.log(`\nCompleted! ${successCount}/${images.length} images ready.`);
}

processAll();
