
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import testi7 from '/public/assets/img/testimonial/testi-7.png'

const Testimonials = () => {
    return (
        <div>
         <div className="container">
         <div className="row justify-content-center">
            <div className=" col-xl-8 col-lg-8 col-md-10 col-12 ">
               <div className="tp-testimonial-section-box-two text-center pb-20">
                  <h5 className="tp-subtitle">Testimonial</h5>
                  <h2 className="tp-title">Client feedback</h2>
               </div>
              
               <div className="testimonial-slider-dots text-center"></div>
            </div>
         </div>
      </div>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         
        <SwiperSlide>
        <div className="tp-testimonial-slider-two mb-50">
                  <div className="swiper-container testimonial-slider-two">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="tp-testimonial-item-two text-center">
                              <div className="tp-testimonial-info">
                                 <img src={testi7} alt=""/>
                                 <h4>Alextina Diterson</h4>
                                 <span>CEO of (Orix)
                                    <i className="fas fa-star fa-stars-1"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </span>
                                 <p>Absolutely amazing. we  believe how incredible this turned out. Yetta Thomas is
                                    a
                                    true professional. he is such a honest, decent and reliable and satisfied</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="tp-testimonial-slider-two mb-50">
                  <div className="swiper-container testimonial-slider-two">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="tp-testimonial-item-two text-center">
                              <div className="tp-testimonial-info">
                                 <img src={testi7} alt=""/>
                                 <h4>Alextina Diterson</h4>
                                 <span>CEO of (Orix)
                                    <i className="fas fa-star fa-stars-1"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </span>
                                 <p>Absolutely amazing. we  believe how incredible this turned out. Yetta Thomas is
                                    a
                                    true professional. he is such a honest, decent and reliable and satisfied</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="tp-testimonial-slider-two mb-50">
                  <div className="swiper-container testimonial-slider-two">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="tp-testimonial-item-two text-center">
                              <div className="tp-testimonial-info">
                                 <img src={testi7} alt=""/>
                                 <h4>Alextina Diterson</h4>
                                 <span>CEO of (Orix)
                                    <i className="fas fa-star fa-stars-1"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </span>
                                 <p>Absolutely amazing. we  believe how incredible this turned out. Yetta Thomas is
                                    a
                                    true professional. he is such a honest, decent and reliable and satisfied</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="tp-testimonial-slider-two mb-50">
                  <div className="swiper-container testimonial-slider-two">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="tp-testimonial-item-two text-center">
                              <div className="tp-testimonial-info">
                                 <img src={testi7} alt=""/>
                                 <h4>Alextina Diterson</h4>
                                 <span>CEO of (Orix)
                                    <i className="fas fa-star fa-stars-1"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </span>
                                 <p>Absolutely amazing. we  believe how incredible this turned out. Yetta Thomas is
                                    a
                                    true professional. he is such a honest, decent and reliable and satisfied</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="tp-testimonial-slider-two mb-50">
                  <div className="swiper-container testimonial-slider-two">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="tp-testimonial-item-two text-center">
                              <div className="tp-testimonial-info">
                                 <img src={testi7} alt=""/>
                                 <h4>Alextina Diterson</h4>
                                 <span>CEO of (Orix)
                                    <i className="fas fa-star fa-stars-1"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </span>
                                 <p>Absolutely amazing. we  believe how incredible this turned out. Yetta Thomas is
                                    a
                                    true professional. he is such a honest, decent and reliable and satisfied</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="tp-testimonial-slider-two mb-50">
                  <div className="swiper-container testimonial-slider-two">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="tp-testimonial-item-two text-center">
                              <div className="tp-testimonial-info">
                                 <img src={testi7} alt=""/>
                                 <h4>Alextina Diterson</h4>
                                 <span>CEO of (Orix)
                                    <i className="fas fa-star fa-stars-1"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </span>
                                 <p>Absolutely amazing. we  believe how incredible this turned out. Yetta Thomas is
                                    a
                                    true professional. he is such a honest, decent and reliable and satisfied</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="tp-testimonial-slider-two mb-50">
                  <div className="swiper-container testimonial-slider-two">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="tp-testimonial-item-two text-center">
                              <div className="tp-testimonial-info">
                                 <img src={testi7} alt=""/>
                                 <h4>Alextina Diterson</h4>
                                 <span>CEO of (Orix)
                                    <i className="fas fa-star fa-stars-1"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </span>
                                 <p>Absolutely amazing. we  believe how incredible this turned out. Yetta Thomas is
                                    a
                                    true professional. he is such a honest, decent and reliable and satisfied</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="tp-testimonial-slider-two mb-50">
                  <div className="swiper-container testimonial-slider-two">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="tp-testimonial-item-two text-center">
                              <div className="tp-testimonial-info">
                                 <img src={testi7} alt=""/>
                                 <h4>Alextina Diterson</h4>
                                 <span>CEO of (Orix)
                                    <i className="fas fa-star fa-stars-1"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </span>
                                 <p>Absolutely amazing. we  believe how incredible this turned out. Yetta Thomas is
                                    a
                                    true professional. he is such a honest, decent and reliable and satisfied</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="tp-testimonial-slider-two mb-50">
                  <div className="swiper-container testimonial-slider-two">
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="tp-testimonial-item-two text-center">
                              <div className="tp-testimonial-info">
                                 <img src={testi7} alt=""/>
                                 <h4>Alextina Diterson</h4>
                                 <span>CEO of (Orix)
                                    <i className="fas fa-star fa-stars-1"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                 </span>
                                 <p>Absolutely amazing. we  believe how incredible this turned out. Yetta Thomas is
                                    a
                                    true professional. he is such a honest, decent and reliable and satisfied</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Testimonials;