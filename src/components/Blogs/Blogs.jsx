import blog1 from '/public/assets/img/blog/blog-1.jpg'
import blog2 from '/public/assets/img/blog/blog-2.jpg'

const Blogs = () => {
    return (
        <div>
            <div className="tp-blog-area pt-130 pb-120 p-relative">
      <div className="circle-animation blog-animation">
         <span className="tp-circle-3"></span>
      </div>
      <div className="container">
         <div className="row">
            <div className="col-xl-12">
               <div className="tp-blog-section-box text-center pb-15">
                  <h5 className="tp-subtitle">Blog & Article</h5>
                  <h2 className="tp-title">Recent blog post</h2>
               </div>
            </div>
         </div>
         <div className="row gx-40">
            <div className="col-xl-6 col-lg-6">
               <div className="tp-blog-box mb-30 wow tpfadeLeft" data-wow-duration=".6s" data-wow-delay=".4s">
                  <div className="tp-blog-item">
                     <div className="tp-blog-img fix mb-35">
                        <a href="#"> <img className="w-100" src={blog1} alt=""/></a>
                     </div>
                     <div className="tp-blog-meta d-flex justify-content-between mb-30">
                        <a href="#">Tutorilas</a>
                        <a className="tp-blog-meta-color" href="#">February. 20.2022</a>
                     </div>
                     <div className="tp-blog-info">
                        <h3 className="tp-blog-title"><a href="blog-details.html">How to add a count up animation the webflow site.</a>
                        </h3>
                        <p>At Collax we specialize in designing, building, shipping and scaling beautiful, usable
                           products
                           with blazing-fast</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="tp-blog-box mb-30 wow tpfadeRight" data-wow-duration=".7s" data-wow-delay=".6s">
                  <div className="tp-blog-item">
                     <div className="tp-blog-img fix mb-35">
                        <a href="#"><img className="w-100" src={blog2} alt=""/></a>
                     </div>
                     <div className="tp-blog-meta d-flex justify-content-between mb-30">
                        <a href="#">Business</a>
                        <a className="tp-blog-meta-color" href="#">February. 20.2022</a>
                     </div>
                     <div className="tp-blog-info">
                        <h3 className="tp-blog-title"><a href="blog-details.html">How to grow your business with collax digital
                              solution.</a></h3>
                        <p>At Collax we specialize in designing, building, shipping and scaling beautiful, usable
                           products
                           with blazing-fast</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xl-12">
               <div className="tp-blog-button text-center mt-30">
                  <a className="tp-btn" href="blog-details.html">View Case Studies</a>
               </div>
            </div>
         </div>
      </div>
   </div>
        </div>
    );
};

export default Blogs;