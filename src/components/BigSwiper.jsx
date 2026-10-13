import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'; import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
const BigSwiper = () => {
    return (
        <div className='w-full h-150!'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                effect="fade"
                className="rounded-2xl"
            >
                <SwiperSlide className='relative! bg-[url("/images/xiva-1.jpg")] h-150! bg-cover bg-no-repeat rounded-2xl'>
                    <div className='absolute  w-full h-full bg-black/40'>
                        <div className='absolute bottom-10 left-10'>
                            <h2 className='text-white text-[48px] uppercase'>Ichan-Qal'a</h2>

                            <div className='flex items-center gap-2.5 mt-4'>
                                <span className='w-10 h-0.5 bg-text-wt block rounded-full'></span>
                                <div className='flex items-center gap-5 text-text-wt'>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p className='text-xl'>Xorazm viloyati Xiva shahri</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative! bg-[url("/images/xiva-2.jpg")] h-150! bg-cover bg-no-repeat rounded-2xl'>
                    <div className='absolute bottom-0 left-0 w-full h-full bg-black/40'>
                        <div className='absolute bottom-10 left-10'>
                            <h2 className='text-white text-[49px] uppercase'>Arda Khiva – Tarixiy Xivada zamonaviy hayot</h2>

                            <div className='flex items-center gap-2.5 mt-4'>
                                <span className='w-10 h-0.5 bg-text-wt block rounded-full'></span>
                                <div className='flex items-center gap-5 text-text-wt'>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p className='text-xl'>Xorazm viloyati Xiva shahri</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative! bg-[url("/images/xiva-3.jpg")] h-150! bg-cover bg-no-repeat rounded-2xl'>
                    <div className='absolute bottom-0 left-0 w-full h-full bg-black/40'>
                        <div className='absolute bottom-10 left-10'>
                            <h2 className='text-white text-[48px] uppercase'>Kalta Minor – Xivaning tugallanmagan ramzi</h2>

                            <div className='flex items-center gap-2.5 mt-4'>
                                <span className='w-10 h-0.5 bg-text-wt block rounded-full'></span>
                                <div className='flex items-center gap-5 text-text-wt'>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p className='text-xl'>Xorazm viloyati Xiva shahri</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='flex items-center justify-center gap-2.5 mt-4'>
                <div className='flex-wrapper-swpr flex items-center justify-center gap-5 mt-4'>
                    <button className="swiper-button-prev-custom py-2.5 px-3 rounded-md bg-accent text-text-wt cursor-pointer">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <div className="swiper-pagination-custom flex gap-5"></div>
                    <button className="swiper-button-next-custom py-2.5 px-3 rounded-md bg-accent text-text-wt cursor-pointer">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BigSwiper