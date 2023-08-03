import './Header.css'
import logoBlue from '/public/assets/img/logo/letter-logo.png'

const Header = () => {
    return (
        <div>   
         <header className="d-none d-lg-block">
      <div id="header-sticky" className="tp-header-area-two header-transparent header-space-three pl-115 pr-115">
         <div className="container-fluid">
            <div className="row align-items-center header-space-two">
               <div className="col-xxl-3 col-xl-3 col-lg-3">
                  <div className="tp-logo text-start">
                     <a href="/"><img src={logoBlue} alt=""/></a>
                  </div>
               </div>
               <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="tp-main-menu text-center">
                     <nav id="mobile-menu">
                        <ul>
                           <li className="has-dropdown"><a href="/">Home</a></li>
                           <li className="has-dropdown "><a href="portfolio.html">Portfolio</a> 
                              <ul className="submenu text-start">
                                 <li><a href="portfolio-2.html">Portfolio Filter 01</a></li>
                                 <li><a href="portfolio-details.html">Portfolio Details</a></li>
                              </ul>
                           </li>
                           <li className="has-dropdown has-mega-menu "><a href="/about">About</a></li>
                           <li className="has-dropdown "><a href="blog.html">Blog</a>
                              <ul className="submenu text-start">
                                 <li><a href="/blogs">Blogs</a></li>
                                 <li><a href="/blogDetails">Blog Details</a></li>
                              </ul>
                           </li>
                           <li><a href="/contact">Contact</a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
               <div className="col-xxl-3 col-xl-3 col-lg-3">
                  <div className="tp-header-button text-end">
                     <a className="tp-btn" href="contact.html">Let’s Talk 👋</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
         
        </div>
    );
};

export default Header;