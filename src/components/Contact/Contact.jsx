import ab1 from '/public/assets/img/breadcrum/ab-1.1.jpg'
import shape1 from '/public/assets/img/breadcrum/ab-shape-1.1.jpg'
import contact from '/public/assets/img/contact/contact-1.jpg'

const Contact = () => {
    return (
        <div>
             <div>
             <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative"
         data-background={ab1}>
         <div className="ac-about-shape-img z-index-1">
            <img src={shape1} alt=""/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="breadcrumb__content p-relative z-index-1">
                     <h3 className="breadcrumb__title">About Collax</h3>
                      <a href="contact.html" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <div className="tp-contact-area pt-135 pb-130">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-6 ">
                 <div className="tp-contct-wrapper contact-space-40">
                  <div className="tp-contact-thumb mb-60">
                     <img src={contact} alt=""/>
                  </div>
                  <div className="tp-contact-info mb-40">
                     <h4 className="contact-title">Mail Address</h4>
                     <span><a href="mailto:(webmail@gmail.com)">(webmail@gmail.com)</a></span>
                     <span><a href="mailto:(infoweb@gmail.com)">(infoweb@gmail.com)</a></span>
                  </div>
                  <div className="tp-contact-info mb-40">
                     <h4 className="contact-title">Phone Number</h4>
                     <span><a href="tel:(+1255-568-6523)">(+1255 - 568 - 6523)</a></span>
                     <span><a href="tel:(+1255-568-6523)">(+1255 - 568 - 6523)</a></span>
                  </div>
                  <div className="tp-contact-info">
                     <h4 className="contact-title">Address line</h4>
                     <span><a href="https://www.google.com/maps" target="blank">Bowery St, New York, NY 10013,USA. Bowery Steae</a></span>
                  </div>
                 </div>
               </div>
               <div className="col-xl-6 col-lg-6">
                  <div className="tpcontact">
                     <h4 className="tp-contact-big-title">Let’s Talk...</h4>
                     <div className="tpcontact__form tpcontact__form-3">
                        <form id="contact-form" action="https://weblearnbd.net/tphtml/collax/collax-rtl/assets/mail.php">
                           <input name="name" type="text" placeholder="Enter your Name"/>
                           <input name="email" type="email" placeholder="Enter your Mail"/>
                           <textarea name="message" placeholder="Enter your Message"></textarea>
                        </form>
                        <button type="submit" className="tp-btn-yellow">Send Message</button>
                     </div>
                     <p className="ajax-response"></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
             </div>
        </div>
       
    );
};

export default Contact;