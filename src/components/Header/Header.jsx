import '../Header/Header.css'
import logoBlue from '/public/assets/img/logo/logo-blue.png'
import logo from '/public/assets/img/logo/logo.png'
import logoWhite from '/public/assets/img/logo/logo-white.png'
import insta1 from '/public/assets/img/offcanvas/insta-1.jpg'
import insta2 from '/public/assets/img/offcanvas/insta-2.jpg'
import insta4 from '/public/assets/img/offcanvas/insta-4.jpg'

const Header = () => {
    return (
        <div>   
          <header className="d-none d-lg-block">
      <div id="header-sticky" className="tp-header-area header-transparent pl-165 pr-165 pt-35">
         <div className="container-fluid">
            <div className="row align-items-center">
               <div className="col-xl-3 col-lg-3">
                  <div className="tp-logo">
                     <a href="index.html"><img src={logoBlue} alt=""/></a>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-7">
                  <div className="tp-main-menu">
                     <nav id="mobile-menu">
                        <ul>
                           <li className="has-dropdown"><a href="/">Home</a> 
                           </li>
                           <li className="has-dropdown "><a href="portfolio.html">Portfolio</a> 
                              <ul className="submenu text-start">
                                 <li><a href="portfolio.html">Portfolio Full Width</a></li>
                                 <li><a href="portfolio-2.html">Portfolio Filter 01</a></li>
                                 <li><a href="portfolio-3.html">Portfolio Filter 02</a></li>
                                 <li><a href="portfolio-mesonary.html">Portfolio Masonry</a></li>
                                 <li><a href="portfolio-details.html">Portfolio Details</a></li>
                              </ul>
                           </li>
                           <li className="has-dropdown has-mega-menu"><a href="#">Pages</a>
                              <ul className="submenu text-start">
                                 <li><a href="about.html">About</a></li>
                                 <li><a href="about-me.html">About Me</a></li>
                                 <li><a href="job.html">Job</a></li>
                                 <li><a href="job-details.html">Job Details</a></li>
                                 <li><a href="product.html">Product</a></li>
                                 <li><a href="product-details.html">Product Details</a></li>
                                 <li><a href="service-1.html">Service 01</a></li>
                                 <li><a href="service-2.html">Service 02</a></li>
                                 <li><a href="service-3.html">Service 03</a></li>
                                 <li><a href="service-4.html">Service 04</a></li>
                                 <li><a href="service-details.html">Service Details</a></li>
                                 <li><a href="testimonial.html">Testimonial</a></li>
                                 <li><a href="price.html">Price</a></li>
                                 <li><a href="faq.html">Faq</a></li>
                                 <li><a href="login.html">Login</a></li>
                                 <li><a href="registration.html">Register</a></li>
                                 <li><a href="404.html">404</a></li>
                              </ul>
                           </li>
                           <li className="has-dropdown "><a href="blog.html">Blog</a>
                              <ul className="submenu text-start">
                                 <li><a href="blog.html">Blog Sidebar</a></li>
                                 <li><a href="blog-details.html">Blog Details</a></li>
                              </ul>
                           </li>
                           <li><a href="/contact">Contact</a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div className="col-xl-2 col-lg-2">
                  <div className="tp-menu-bar text-end">
                     <button><i className="fal fa-bars"></i></button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>

   <div id="header-sticky-mobile" className="tp-md-menu header-transparent d-lg-none pt-40 pb-40">
      <div className="container-fluid">
         <div className="row align-items-center">
            <div className="col-6">
               <div className="tp-logo">
                  <a href="#"><img src={logo} alt=""/></a>
               </div>
            </div>
            <div className="col-6">
               <div className="bar text-end">
                  <button className="tp-menu-bar" type="submit"><i className="fal fa-bars"></i></button>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div className="tp-offcanvas-area">
      <div className="tpoffcanvas">
         <div className="tpoffcanvas__logo">
            <a href="index.html">
               <img src={logoWhite} alt=""/>
            </a>
         </div>
         <div className="tpoffcanvas__close-btn">
            <a className="close-btn" href="javascript:void(0)"><i className="fal fa-times-hexagon"></i></a>
         </div>
         <div className="tpoffcanvas__content d-none d-sm-block">
            <p>We deploy world-class Creative <br/> on demand.</p>
         </div>
         <div className="mobile-menu">

         </div>
         <div className="tpoffcanvas__contact">
            <span>Contact us</span>
            <ul>
               <li><i className="fas fa-star"></i> <a href="https://goo.gl/maps/abHegV4AoiJA6Syd8" >Melbone
                     st, Australia, Ny 12099</a></li>
               <li><i className="fas fa-star"></i> <a href="tel:8180012345678">+81 800 123 456 78</a></li>
               <li><i className="fas fa-star"></i> <a href="mailto:Collaxmail@gmail.com">Collaxmail@gmail.com</a></li>
            </ul>
         </div>
         <div className="tpoffcanvas__input d-none d-sm-block">
            <p>Get UPdate</p>
            <form className="p-relative" action="#">
               <input type="text" placeholder="Enter mail"/>
               <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
         </div>
         <div className="tpoffcanvas__instagram d-none d-sm-block">
            <p>Check Instagram POst</p>
           <div className="tp-insta">
            <div className="row">
               <div className="col-3 col-sm-3"><a href="#"><img src={insta1} alt=""/></a></div>
               <div className="col-3 col-sm-3"><a href="#"><img src={insta2} alt=""/></a></div>
               <div className="col-3 col-sm-3"><a href="#"><img src={insta4} alt=""/></a></div>
               <div className="col-3 col-sm-3"><a href="#"><img src={insta4} alt=""/></a></div>
            </div>
           </div>
         </div>
      </div>
   </div>

   <div className="body-overlay"></div>
        </div>
    );
};

export default Header;