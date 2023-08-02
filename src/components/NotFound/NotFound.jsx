import Ab1 from '/public/assets/img/breadcrum/ab-1.1.jpg'
import Not from '/public/assets/img/contact/404.png'

const NotFound = () => {
    return (
        <div>
            <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative"
         data-background="">
         <div className="ac-about-shape-img z-index-1">
            <img src={Ab1} alt=""/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="breadcrumb__content p-relative z-index-1">
                     <h3 className="breadcrumb__title">404 Page</h3>
                      <a href="contact.html" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   

      <div className="tp-404-area tp-404-circle sky-bg pt-200 pb-150 fix">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="tp-404-thumb d-flex justify-content-center align-items-center z-index-1">
                     <img src={Not} alt=""/>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </div>
    );
};

export default NotFound;