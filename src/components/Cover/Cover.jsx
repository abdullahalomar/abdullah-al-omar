import '../Cover/Cover.css'
import shape1 from '/public/assets/img/hero/shape-1.png'
import hero2 from '/public/assets/img/hero/hero-2.png'

const Cover = () => {
    return (
        <div>
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
      <div className="tp-hero-shape">
         <div className="shape-circle-yellow d-none"></div>
         <div className="shape-circle-blue"></div>
         <div className="shape-one"><img src={shape1} alt=""/></div>
      </div>
      <div className="tp-hero-wapper">
         <div className="container">
            <div className="row align-items-center">
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
               <div className="col-xl-5 col-lg-5">
                  <div className="tp-hero-big-img wow fadeInRight"  data-wow-duration=".7s" data-wow-delay="1.2s">
                     <img src={hero2} alt=""/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
        </div>
    );
};

export default Cover;