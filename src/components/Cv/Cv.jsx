import ProjectZoom from '/public/assets/img/project/project-zoom-img.png'
import Cta1 from '/public/assets/img/cta/cta-1.png'
import CtaOne from '/public/assets/img/cta/1.png'
import CtaTwo from '/public/assets/img/cta/2.png'
import CtaThree from '/public/assets/img/cta/3.png'
import CtaFour from '/public/assets/img/cta/4.png'

const Cv = () => {
    return (
        <div>
            <div className="tp-cta-area black-bg p-relative fix">
      <div className="creative-shape-img-2">
         <img src={ProjectZoom} alt=""/>
      </div>
      <div className="project-shape-img">
         <img src={ProjectZoom} alt=""/>
      </div>
      <div className="container">
         <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
               <div className="tp-cta-section-title-box pl-60 pt-180 z-index wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                  <h5 className="tp-subtitle text-white">What We Do?</h5>
                  <h2 className="tp-title tp-white-text pb-10">Hi,👋 I am experts in every aspect lifecycle </h2>
                  <a className="tp-btn-border" href="contact.html">Download CV <i className="far fa-download"></i></a>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".8s">
               <div className="tp-cta-img-item z-index-1 pt-115 pl-10">
                  <img src={Cta1} alt=""/>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xl-12">
               <div className="tp-cta-bottom-wrapper">
                  <div className="row justify-content-center">
                     <div className="col-xl-3 col-lg-6 col-md-6 col-10">
                        <div className="tp-cta-social-info">
                           <a className="tp-btn-white-lg" href="#"><img className="mr-15" src={CtaOne} alt=""/> 8k
                              Followers</a>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-6 col-md-6 col-10">
                        <div className="tp-cta-social-info">
                           <a className="tp-btn-white-lg" href="#"><img className="mr-15" src={CtaTwo} alt=""/> 12k
                              Followers</a>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-6 col-md-6 col-10">
                        <div className="tp-cta-social-info">
                           <a className="tp-btn-white-lg" href="#"><img className="mr-15" src={CtaThree} alt=""/> 65k
                              Followers</a>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-6 col-md-6 col-10">
                        <div className="tp-cta-social-info">
                           <a className="tp-btn-white-lg" href="#"><img className="mr-15" src={CtaFour} alt=""/>1.5
                              M Followers</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
        </div>
    );
};

export default Cv;