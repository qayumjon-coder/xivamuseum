import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: '/images/xiva-1.jpg',
    fallback: 'https://picsum.photos/seed/khiva1/1400/700',
    title: "ICHAN QAL'A",
    location: 'Xorazm viloyati Xiva shahri',
  },
  {
    image: '/images/xiva-2.jpg',
    fallback: 'https://picsum.photos/seed/khiva2/1400/700',
    title: 'KALTA MINOR',
    location: 'Xorazm viloyati Xiva shahri',
  },
  {
    image: '/images/xiva-3.jpg',
    fallback: 'https://picsum.photos/seed/khiva3/1400/700',
    title: 'ISLAM XOJA MINORASI',
    location: 'Xorazm viloyati Xiva shahri',
  },
];

const BigSwiper = () => {
  return (
    <div style={{ width: '100%', height: 560 }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        effect="fade"
        style={{ width: '100%', height: 500, borderRadius: 12 }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              onError={(e) => (e.target.src = slide.fallback)}
            />
            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
              }}
            />
            {/* Matn */}
            <div
              style={{
                position: 'absolute',
                bottom: 40,
                left: 40,
              }}
            >
              <h2
                style={{
                  color: '#ffffff',
                  fontSize: '3rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  lineHeight: 1.15,
                  textShadow: '0 2px 12px rgba(0,0,0,0.4)',
                }}
              >
                {slide.title}
              </h2>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginTop: 12,
                }}
              >
                <span
                  style={{
                    display: 'block',
                    width: 40,
                    height: 2,
                    backgroundColor: '#ffffff',
                    borderRadius: 2,
                    opacity: 0.8,
                  }}
                />
                <svg
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  style={{ opacity: 0.85 }}
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                  }}
                >
                  {slide.location}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigatsiya */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          marginTop: 16,
        }}
      >
        <button
          className="swiper-button-prev-custom"
          style={{
            padding: '8px 14px',
            borderRadius: 6,
            backgroundColor: 'var(--accent)',
            color: 'var(--on-accent)',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = 'var(--accent)')
          }
        >
          <i className="fa-solid fa-chevron-left" />
        </button>

        <div className="swiper-pagination-custom" style={{ display: 'flex', gap: 10 }} />

        <button
          className="swiper-button-next-custom"
          style={{
            padding: '8px 14px',
            borderRadius: 6,
            backgroundColor: 'var(--accent)',
            color: 'var(--on-accent)',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = 'var(--accent)')
          }
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default BigSwiper;