import React, { useRef, useState } from 'react';
import aboutImage from '../../assets/images/about-image.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CustomPagination({ totalSlides, currentSlide, onDotClick }) {
    return (
        <div className="custom-pagination">
            {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                    key={index}
                    className={`dot-testimonial ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => onDotClick(index)}
                    role="button"
                    aria-label={`Go to slide ${index + 1}`}
                    tabIndex={0}
                />
            ))}
        </div>
    );
}

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

    const totalSlides = 2; // Dynamically set based on number of SwiperSlide components

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
    };

    const handleDotClick = (index) => {
        swiperRef.current?.slideToLoop(index);
    };

    const handlePrev = () => swiperRef.current?.slidePrev();
    const handleNext = () => swiperRef.current?.slideNext();

    return (
        <div>
            <section className="testimonials-area pt-95 rpt-70 pb-60">
                <div className="container container-1260">
                    <div className="row gap-120 align-items-center">
                        <div className="col-lg-6">
                            <div className="testimonial-one-right-part rmb-75">
                                <Swiper
                                    modules={[Navigation, Pagination, A11y, Autoplay]}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{ delay: 2000 }}
                                    onSlideChange={handleSlideChange}
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="testimonial-item style-three">
                                            <div className="rating style-two">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                            </div>
                                            <div className="author-speech">
                                                <p>
                                                    From the initial consultation to the final launch of my
                                                    website, G&amp;G took the time to understand my business
                                                    goals and target audience and developed a website that is
                                                    both visually appealing and user-friendly.
                                                </p>
                                            </div>
                                            <div className="middle-quote">
                                                <div className="icon">
                                                    <i className="fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                            <div className="testimonial-footer">
                                                <div className="testimonial-author">
                                                    <div className="author-info">
                                                        <h4>Karishma</h4>
                                                        <span className="designation">CEO &amp; Founder</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="testimonial-item style-three">
                                            <div className="rating style-two">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star-half-alt" />
                                            </div>
                                            <div className="author-speech">
                                                <p>
                                                    G&amp;G is a leading provider of expert, custom-tailored web
                                                    solutions. I have had the pleasure of working with them on
                                                    several projects, and am consistently impressed by their
                                                    professionalism, creativity, and expertise.
                                                </p>
                                            </div>
                                            <div className="middle-quote">
                                                <div className="icon">
                                                    <i className="fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                            <div className="testimonial-footer">
                                                <div className="testimonial-author">
                                                    <div className="author-info">
                                                        <h4>Hinen</h4>
                                                        <span className="designation">CEO &amp; Founder</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                                <div className="testimonial-controls style-three mt-65 rmt-40">
                                    <button className="testimonial-prev" onClick={handlePrev}>
                                        <i className="far fa-long-arrow-left" />
                                    </button>

                                    <div style={
                                        {
                                            display: 'flex',
                                            marginLeft: '35px',
                                            marginRight: '35px',
                                        }
                                    }>
                                        <CustomPagination
                                            totalSlides={totalSlides}
                                            currentSlide={currentSlide}
                                            onDotClick={handleDotClick}
                                        />
                                    </div>

                                    <button className="testimonial-next" onClick={handleNext}>
                                        <i className="far fa-long-arrow-right" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="testimonials-image">
                                <img
                                    src={aboutImage}
                                    alt="Customer Feedback"
                                    title="Building and Delivering High-Quality Solutions"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
