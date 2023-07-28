
import shape2 from '/public/assets/img/hero//shape-2.png'
import creativeHand from '/public/assets/img/creative/creative-hand.png'
import creativeCircle from '/public/assets/img/creative/creative-circle-img.png'

const Creative = () => {
    return (
        <div>
            <div className="p-relative">
      <div className="shape-two z-index-1">
         <img src={shape2} alt=""/>
      </div>
      <div className="tp-creative-area p-relative black-bg pt-140 pb-135 fix">
         <div className="circle-animation testimonial">
            <span className="tp-circle-1"></span>
            <span className="tp-circle-2"></span>
         </div>
         <div className="creative-shape-img">
            <img src={creativeHand} alt=""/>
         </div>
         <div className="creative-shape-img-2">
            <img src={creativeCircle} alt=""/>
         </div>
         <div className="container creative-z-index ">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-creative-box text-center">
                     <div className="tp-creative-content mb-110">
                        <h4 className="tp-creative-title">We deploy world-class <b>Creative Design team</b> on demand.
                           that can design, build, ship and
                           scale your vision in the most efficient way.</h4>
                     </div>
                     <div className="tp-play-button mb-150">
                        <a className="popup-video" href="https://youtu.be/Um1RqC-b4JA"><i
                              className="fal fa-play"></i></a>
                        <span>Play Take a look behind the scenes</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="creative-box pl-40 pr-40">
               <div className="row gx-5">
                  <div className="col-lg-4 col-md-12 col-xs-12 mb-30">
                     <div className="tp-creative-item wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                        <div className="tp-creative-yellow d-flex align-items-center">
                           <div className="tp-creative-icon mr-35">
                              <i className="flaticon-satisfaction"></i>
                           </div>
                           <div className="counter-text">
                              <span>100%</span>
                              <p className="m-0">Client Setisfaction</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-xs-12 mb-30">
                     <div className="tp-creative-item tp-creative-blue wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                        <div className="tp-creative-yellow d-flex align-items-center">
                           <div className="tp-creative-icon mr-35">
                              <i className="flaticon-clipboard"></i>
                           </div>
                           <div className="counter-text">
                              <span>1200+</span>
                              <p className="m-0">Complete Project</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-12 col-xs-12 mb-30">
                     <div className="tp-creative-item tp-creative-pink wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                        <div className="tp-creative-yellow d-flex align-items-center">
                           <div className="tp-creative-icon mr-35">
                              <i className="flaticon-setting"></i>
                           </div>
                           <div className="counter-text">
                              <span>1800+</span>
                              <p className="m-0">Design Resource</p>
                           </div>
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

export default Creative;