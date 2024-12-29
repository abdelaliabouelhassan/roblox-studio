'use client'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export function SecondSection() {

    const splideOptions = {
        type: 'slide',
        perPage: 3,
        perMove: 1,
        gap: '1rem',
        pagination: true,
        arrows: true,
        rewind: true,
    };

    return (
        <div className="relative r-container px-12 pb-24 space-y-24">
            <div className=' w-full text-center'>
                <h3 className=' text-wrap font-bold text-5xl text-effect'>
                    Latest Releases Game
                </h3>
            </div>
            <Splide
                hasTrack={false}
                options={splideOptions}
                aria-label="My Favorite Images"
            >
                {/* Added more slides for demonstration */}
                <SplideTrack>
                    <SplideSlide>
                        <div className='w-[370px] h-[475px] bg-red-400 rounded-lg'></div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='w-[370px] h-[475px] bg-red-400 rounded-lg'></div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='w-[370px] h-[475px] bg-red-400 rounded-lg'></div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='w-[370px] h-[475px] bg-red-400 rounded-lg'></div>
                    </SplideSlide>

                </SplideTrack>

                <div className=' relative  max-w-[324px] mx-auto'>
                    <div className="splide__arrows absolute -bottom-20 w-full flex items-center">
                        <button className="splide__arrow splide__arrow--prev">
                            <img src='/assets/arrow-right.png' className=' w-[24px] h-[24px] object-cover' />
                        </button>
                        <div className=' pt-10'>
                            <ul className="splide__pagination"></ul>
                        </div>
                        <button className="splide__arrow splide__arrow--next">
                            <img src='/assets/arrow-right.png' className=' w-[24px] h-[24px] object-cover  rotate-180' />
                        </button>
                    </div>

                </div>

            </Splide>
        </div>
    );
}