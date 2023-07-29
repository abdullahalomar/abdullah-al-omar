import ab from '/public/assets/img/breadcrum/ab-1.1.jpg'
import abShape from '/public/assets/img/breadcrum/ab-shape-1.1.jpg'
import about from '/public/assets/img/about/about-8.1.jpg'

const AboutMe = () => {
    return (
        <div>
            <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative"
         data-background={ab}>
         <div className="ac-about-shape-img">
            <img src={abShape} alt=""/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="breadcrumb__content p-relative z-index-1">
                     <h3 className="breadcrumb__title">Ritarexa Diramen</h3>
                      <a href="contact.html" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </section>


      <div className="am-about-me-area pt-110 pb-100">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-5 col-lg-5 col-12">
                  <div className="ac-ab-img fix">
                     <img src={about} alt=""/>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-7 col-12">
                  <div className="row">
                     <div className="col-xl-7 col-lg-8 col-md-6">
                        <div className="amaboutinfo">
                           <div className="amaboutinfo__client-info">
                              <h4>Ritarexa Ditarmen</h4>
                              <span>UI/UX Designer</span>
                              <p>Phasellus in libero et nunc malesuada tincidu Morbi auctor tristique semper. Nunc
                                 condimentum dapibus felis</p>
                           </div>
                           <div className="amaboutinfo__experience">
                              <p><b>Expertise:</b> Genetic Specialist</p>
                              <p><b>Experience:</b> 5 Years</p>
                              <p><a href="mailto:webmail.info@gmail.com"><b>E-mail:</b> webmail.info@gmail.com</a></p>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-4 col-md-6">
                        <div className="amaboutsocial text-start text-md-end">
                           <div className="amaboutsocial__icon mb-30">
                              <a href="#" className="si-btn-link">
                                 <div className="tp-si-wrapper d-flex justify-content-end">
                                    <div className="tp-si__text"><span>Facebook</span></div>
                                    <div className="tp-si__icon"><i className="fab fa-facebook-f"></i></div>
                                 </div>
                              </a>
                           </div>
                           <div className="amaboutsocial__icon mb-30">
                              <a href="#" className="si-btn-link">
                                 <div className="tp-si-wrapper d-flex justify-content-end">
                                    <div className="tp-si__text tp-si-color-1"><span>Pintarest</span></div>
                                    <div className="tp-si__icon tp-si-color-1"><i
                                             className="fab fa-pinterest-p"></i></div>
                                 </div>
                              </a>
                           </div>
                           <div className="amaboutsocial__icon mb-30">
                              <a href="#" className="si-btn-link">
                                 <div className="tp-si-wrapper d-flex justify-content-end">
                                    <div className="tp-si__text  tp-si-color-2"><span>Behance</span></div>
                                    <div className="tp-si__icon  tp-si-color-2"><i className="fab fa-behance"></i></div>
                                 </div>
                              </a>
                           </div>
                           <div className="amaboutsocial__icon mb-30">
                              <a href="#" className="si-btn-link">
                                 <div className="tp-si-wrapper d-flex justify-content-end">
                                    <div className="tp-si__text  tp-si-color-3"><span>Twitter</span></div>
                                    <div className="tp-si__icon  tp-si-color-3"><i className="fab fa-twitter"></i>
                                    </div>
                                 </div>
                              </a>
                           </div>
                           <div className="amaboutsocial__icon mb-30">
                              <a href="#" className="si-btn-link">
                                 <div className="tp-si-wrapper d-flex justify-content-end">
                                    <div className="tp-si__text  tp-si-color-4"><span>Youtube</span></div>
                                    <div className="tp-si__icon  tp-si-color-4"><i className="fab fa-youtube"></i>
                                    </div>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
 
      <div className="tp-skill-area">
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <div className="amskill">
                     <div className="amskill__title">
                        <h3 className="am-skill-title">Personal Experience</h3>
                        <p className="pb-10"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                           doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                           quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                           sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                           voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                        </p>
                        <p>Must explain to you how all this mistaken idea of denouncing works pleasure and praising uts
                           pain was born and I will gives you a itself completed account of the system, and sed expounds
                           the ut actual teachings of that greater sed explores truth. Denouncing works pleasures and
                           praising pains was us born and I will gives you a completed ut workers accounts of the
                           system. sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                           ratione voluptatem sequi nesciunt.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row feature-bottom-space">
               <div className="col-xl-4 col-lg-4">
                  <div className="amfeature">
                     <div className="amfeature__item">
                        <h4 className="am-skill-sm-title">Skills</h4>
                        <p className=" am-p-space-1">Must explain to you how all praising uts pain was born and I will gives
                           you a itself
                           completed account of the system, and sed expounds the ut actual teachings of that greater</p>
                     </div>
                     <div className="amfeature__list">
                        <ul>
                           <li><i className="fal fa-check"></i> Extramural Funding</li>
                           <li><i className="fal fa-check"></i> Bacteria Markers</li>
                           <li><i className="fal fa-check"></i> Type of system involved</li>
                           <li><i className="fal fa-check"></i> Nam nec mi euismod euismod</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4">
                  <div className="amfeature am-fea-space">
                     <div className="amfeature__item">
                        <h4 className="am-skill-sm-title">Education</h4>
                        <p className=" am-p-space-2">Must explain to you how all praising uts pain was born and I will gives
                           you a itself
                           completed account of the system, and sed expounds the ut actual teachings of that greater</p>
                     </div>
                     <div className="amfeature__list">
                        <ul>
                           <li><i className="fal fa-check"></i> Extramural Funding</li>
                           <li><i className="fal fa-check"></i> Bacteria Markers</li>
                           <li><i className="fal fa-check"></i> Type of system involved</li>
                           <li><i className="fal fa-check"></i> Nam nec mi euismod euismod</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4">
                  <div className="amfeature am-fea-space-2">
                     <div className="amfeature__item">
                        <h4 className="am-skill-sm-title">Awards</h4>
                        <p className="am-p-space-3">Must explain to you how all praising uts pain was born and I will gives
                           you a itself
                           completed account of the system, and sed expounds the ut actual teachings of that greater</p>
                     </div>
                     <div className="amfeature__list">
                        <ul>
                           <li><i className="fal fa-check"></i> Extramural Funding</li>
                           <li><i className="fal fa-check"></i> Bacteria Markers</li>
                           <li><i className="fal fa-check"></i> Type of system involved</li>
                           <li><i className="fal fa-check"></i> Nam nec mi euismod euismod</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="am-contact-area pb-130">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="am-contact-info p-relative">
                     <div>
                        <h4 className="am-contact-title">Direct Message me!</h4>
                     </div>
                     <div className="am-border-shape">
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="contact-form text-center">
                     <form action="#">
                        <div className="row">
                           <div className="col-md-6 col-12">
                              <div className="input">
                                 <input type="text" placeholder="Enter your Name"/>
                              </div>
                           </div>
                           <div className="col-md-6 col-12">
                              <div className="input">
                                 <input type="email" placeholder="Enter you mail"/>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="textarea">
                                 <textarea placeholder="Enter your Message"></textarea>
                              </div>
                           </div>
                        </div>
                        <input className="tp-btn-lg-yellow" type="submit" value="Send Message"/>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </div>
    );
};

export default AboutMe;