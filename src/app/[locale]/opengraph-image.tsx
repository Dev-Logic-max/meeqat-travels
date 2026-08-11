import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import ratesData from '@/content/rates.json';

export const alt =
  'Meeqat Travel & Tours — Licensed Hajj & Umrah operator, Rahim Yar Khan';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  // Embedded at build time so the card is a single self-contained PNG.
  const photo = await readFile(
    join(process.cwd(), 'public/images/hero-kaaba-night.jpg')
  );
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#063528',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '630px',
            objectFit: 'cover',
          }}
        />
        {/* Readability wash — dark on the left where the type sits */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '630px',
            display: 'flex',
            background:
              'linear-gradient(100deg, rgba(6,53,40,0.95) 0%, rgba(6,53,40,0.86) 42%, rgba(6,53,40,0.35) 78%, rgba(6,53,40,0.15) 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 68px',
            width: '1200px',
            height: '630px',
          }}
        >
          {/* Wordmark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '62px',
                height: '62px',
                borderRadius: '8px',
                backgroundColor: '#0B4D3B',
                border: '2px solid rgba(185,139,60,0.55)',
                color: '#E3C77E',
                fontSize: '34px',
              }}
            >
              M
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{ fontSize: '30px', color: '#FFFFFF', letterSpacing: '-0.5px' }}
              >
                Meeqat Travel &amp; Tours
              </div>
              <div
                style={{
                  fontSize: '17px',
                  color: '#E3C77E',
                  letterSpacing: '2.4px',
                }}
              >
                RAHIM YAR KHAN · PAKISTAN
              </div>
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                display: 'flex',
                width: '92px',
                height: '3px',
                backgroundColor: '#B98B3C',
              }}
            />
            <div
              style={{
                fontSize: '66px',
                color: '#FFFFFF',
                lineHeight: 1.08,
                letterSpacing: '-1.6px',
                maxWidth: '760px',
                display: 'flex',
              }}
            >
              Umrah packages &amp; visas, handled end to end
            </div>
            <div
              style={{
                fontSize: '27px',
                color: 'rgba(255,255,255,0.82)',
                maxWidth: '700px',
                display: 'flex',
              }}
            >
              Licensed operator — not an agent. Nusuk-verified hotels, flights,
              ziyarat and Saudi visit visas.
            </div>
          </div>

          {/* Fact strip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {['Licensed operator', 'Makkah · Madina · Jeddah', 'Package builder'].map(
              (label) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                    fontSize: '20px',
                    color: '#E3C77E',
                    border: '1px solid rgba(227,199,126,0.42)',
                    borderRadius: '999px',
                    padding: '9px 20px',
                  }}
                >
                  {label}
                </div>
              )
            )}
            <div
              style={{
                display: 'flex',
                flexShrink: 0,
                whiteSpace: 'nowrap',
                marginLeft: 'auto',
                fontSize: '24px',
                color: '#FFFFFF',
              }}
            >
              {ratesData.agency.phonePrimary}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
