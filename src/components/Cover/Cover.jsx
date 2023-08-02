import '../Cover/Cover.css'
// import shape1 from '/public/assets/img/hero/shape-1.png'
// import hero2 from '/public/assets/img/hero/profile.png'
import shape51 from '/public/assets/img/hero/hero-shape-5.1.png'
import shape4 from '/public/assets/img/hero/hero-shape-4.png'
import shape52 from '/public/assets/img/hero/hero-shape-5.2.png'
import hero51 from '/public/assets/img/hero/hero-5.1.png'


const Cover = () => {
    return (
        <div>
         <div className="tp-hero-area tp-hero-border p-relative">
         <div className="bp-hero-shape-1 d-none d-xxl-block">
            <img src={shape51} alt=""/>
         </div>
         <div className="bp-hero-shape-2 d-none d-xxl-block">
            <img src={shape4} alt=""/>
         </div>
         <div className="bp-hero-shape-3 d-none d-xxl-block">
            <img src={shape4} alt=""/>
         </div>
         <div className="bp-hero-shape-4 d-none d-xxl-block">
            <img src={shape52} alt=""/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xl-7 col-lg-7">
                  <div className="tp-hero-section-box-five">
                     <div className="tp-hero-section-box-five__subtitle-wrapper d-flex justify-content-between align-items-center mb-40 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
                       
                        
                     </div>
                     <div className="tp-hero-section-box-five__title pb-45">
                        <h3 className="tp-hero-bs-title wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">Business Planing
                           <span className="tp-highlight">
                              <svg className="highlight-space" width="266" height="12" viewBox="0 0 266 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 0L266 12H0V0Z" fill="#FFDC60"/>
                              </svg>
                              <i>Advisors</i>
                           </span>
                        </h3>
                        <p className="wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">At collax we specialize in designing, building, shipping and scaling <br/> beautiful, usable
                           products with blazing.</p>
                     </div>
                     <div className="tp-hero-section-box-five__input  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                        <form action="#">
                           <input type="text" placeholder="themepure@gmail.com"/>
                           <button className="tp-btn-sky" type="submit">Free Consultation</button>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5 ">
                  <div className="tp-hero-right-side-five p-relative pt-100">
                     <div className="tp-yellow-circle-five"></div>
                     <div className="tp-hero-right-side-five__img wow tpfadeRight"  data-wow-duration=".9s" data-wow-delay="1.2s">
                        <img src={hero51} alt=""/>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-hero-icon-five">
               <div className="tp-hero-social bp-hero-social tp-hero-social-bg-color">
                  <a className="social-icon-1" href="#"><i className="fab fa-facebook-f social-icon-1"></i><span>Facebook</span></a>
                  <a className="social-icon-3" href="#"><i className="fab fa-youtube social-icon-3"></i><span>youtube</span></a>
                  <a className="social-icon-2" href="#"><i className="fab fa-twitter social-icon-2"></i><span>twitter</span></a>
                  <a className="social-icon-2 d-md-none" href="#"><i className="fab fa-behance social-icon-2"></i><span>twitter</span></a>
               </div>
            </div>
         </div>
      </div>
    {/* <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
      <div className="tp-hero-shape">
         <div className="shape-circle-yellow d-none"></div>
         <div className="shape-circle-blue"></div>
         <div className="shape-one"><img src={shape1} alt=""//></div>
      </div>
      <div className="tp-hero-wapper">
         <div className="container">
            <div className="row">
            <div className="col-xl-5 col-lg-5">
                  <div className="tp-hero-big-img wow fadeInRight"  data-wow-duration=".7s" data-wow-delay="1.2s">
                     <img src={hero2} alt=""//>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-7">
                  <div className="tp-hero-content">
                     <div className="tp-hero-text">
                        <h2 className="tp-hero-title wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">We make things look good</h2>
                        <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">At Collax we specialize in designing, building, shipping and scaling beautiful, <br/>
                           usable products with blazing-fast efficiency</p>
                        <div className="tp-hero-button mb-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                           <a className="tp-btn mr-30" href="portfolio-details.html">Visit Case Studies</a>
                           <a className="tp-btn-grey" href="about-me.html">About Collax <i className="far fa-arrow-right"></i></a>
                        </div>
                        <div className="tp-hero-social pb-30 wow tpfadeIn" data-wow-duration=".7s" data-wow-delay="1.2s">
                           <div className="tp-hero-social bp-hero-social">
                              <a className="social-icon-1" href="#">
                                 <i className="fab fa-facebook-f social-icon-1"></i><span>Facebook</span>
                              </a>
                              <a className="social-icon-3" href="#"><i
                                    className="fab fa-youtube social-icon-3"></i><span>youtube</span></a>
                              <a className="social-icon-2" href="#"><i
                                    className="fab fa-twitter social-icon-2"></i><span>twitter</span></a>
                              <a className="social-icon-4" href="#"><i
                                    className="fab fa-behance social-icon-4"></i><span>behance</span></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
      </div>
   </div> */}
        </div>
    );
};

export default Cover;