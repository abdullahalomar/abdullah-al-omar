import servieShape from '/public/assets/img/service/service-shape.png'
import servie1 from '/public/assets/img/service/service-1.png'
import servie2 from '/public/assets/img/service/service-2.png'
import servie3 from '/public/assets/img/service/service-3.png'


const Services = () => {
    return (
        <div>
            <div className="tp-service-area pt-190 pb-100 grey-bg p-relative fix">
      <div className="tp-sv-shape-img z-index-1">
         <img src={servieShape} alt=""/>
      </div>
      <div className="circle-animation service">
         <span className="tp-circle-1"></span>
         <span className="tp-circle-2"></span>
      </div>
      <div className="circle-animation service-two">
         <span className="tp-circle-skye"></span>
      </div>
      <div className="container">
         <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
               <div className="tp-service-section-box mb-30 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                  <h5 className="tp-subtitle pb-10">What We Do?</h5>
                  <h2 className="tp-title">Experts in every aspect lifecycle </h2>
                  <a className="tp-btn" href="service-details.html">View All Services</a>
               </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
               <div className="tp-sv-box  wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                  <div className="tp-service-item d-flex mb-30">
                     <div className="tp-sv-img">
                        <img src={servie1} alt=""/>
                     </div>
                     <div className="tp-sv-content pl-60">
                        <h3 className=" tp-sv-title mb-35"><a href="service-details.html">Ideation & Evaluation</a></h3>
                        <p className="mb-30">At Collax we specialize in designing, building, shipping and scaling
                           beautiful,
                           usable products with blazing-fast</p>
                        <p>At Collax we specialize in designing, building, shipping and scaling...</p>
                        <div className="tp-sv-link mt-35">
                           <a href="service-details.html"><i className="far fa-arrow-right"></i> Learn More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
               <div className="tp-sv-box wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                  <div className="tp-service-item d-flex mb-30">
                     <div className="tp-sv-img">
                        <img src={servie2} alt=""/>
                     </div>
                     <div className="tp-sv-content pl-60">
                           <h3 className="tp-sv-title mb-35"><a href="service-details.html">Design, Development</a></h3>
                        <p className="mb-30">At Collax we specialize in designing, building, shipping and scaling
                           beautiful,
                           usable products with blazing-fast</p>
                        <p>At Collax we specialize in designing, building, shipping and scaling...</p>
                        <div className="tp-sv-link mt-35">
                           <a href="service-3.html"><i className="far fa-arrow-right"></i> Learn More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
               <div className="tp-sv-box wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.2s">
                  <div className="tp-service-item d-flex mb-30">
                     <div className="tp-sv-img">
                        <img src={servie3} alt=""/>
                     </div>
                     <div className="tp-sv-content pl-60">
                           <h3 className=" tp-sv-title mb-35"><a href="service-details.html">Online Marketing</a></h3>
                        <p className="mb-30">At Collax we specialize in designing, building, shipping and scaling
                           beautiful,
                           usable products with blazing-fast</p>
                        <p>At Collax we specialize in designing, building, shipping and scaling...</p>
                        <div className="tp-sv-link mt-35">
                           <a href="service-4.html"><i className="far fa-arrow-right"></i> Learn More</a>
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

export default Services;