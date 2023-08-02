import AbShape1 from '/public/assets/img/breadcrum/ab-shape-1.1.jpg'
import BlogBig1 from '/public/assets/img/blog-details/blog-big-1.jpg'
import BlogBig2 from '/public/assets/img/blog-details/blog-big-2.jpg'
import BlogBig3 from '/public/assets/img/blog-details/blog-big-3.jpg'
import BlogSm1 from '/public/assets/img/blog-details/blog-sm-1.jpg'
import BlogSm2 from '/public/assets/img/blog-details/blog-sm-2.jpg'
import BlogSm3 from '/public/assets/img/blog-details/blog-sm-3.jpg'
import BlogSm4 from '/public/assets/img/blog-details/blog-sm-4.jpg'

const BlogArticles = () => {
    return (
        <div>
              <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative"
         data-background="assets/img/breadcrum/ab-1.1.jpg">
         <div className="ac-about-shape-img z-index-1">
            <img src={AbShape1} alt=""/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="breadcrumb__content p-relative z-index-1">
                     <h3 className="breadcrumb__title">Blog & Article</h3>
                      <a href="contact.html" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   
      <div className="postbox__area pt-120 pb-120">
         <div className="container">
            <div className="row">
               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="postbox__wrapper pr-20">
                     <article className="postbox__item format-image mb-50 transition-3">
                        <div className="postbox__thumb w-img">
                           <a href="blog-details.html">
                              <img src={BlogBig1} alt=""/>
                           </a>
                        </div>
                        <div className="postbox__content">
                           <div className="postbox__meta">
                              <span><a href="#"><i className="fal fa-user-circle"></i> Alextina </a></span>
                              <span><a href="#"><i className="fal fa-clock"></i> Dec 28, 2022</a></span>
                              <span><a href="#"><i className="fal fa-comment-alt-lines"></i>(04) Coments</a></span>
                              <span><a href="#"><i className="fal fa-eye"></i> 1,526 views</a></span>
                           </div>
                           <h3 className="postbox__title">
                              <a href="blog-details.html">How To Create A Vanilla JavaScript Gantt Chart: Adding Task Editing Features (Part 2)</a>
                           </h3>
                           <div className="postbox__text">
                              <p>Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory</p>
                           </div>
                           <div className="post__button">
                              <a className="tp-btn-yellow" href="blog-details.html"> READ MORE</a>
                           </div>
                        </div>
                     </article>
                     <article className="postbox__item format-image mb-50 transition-3 fix">
                        <div className="swiper-container blog-post-slider-active">
                           <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                 <img src={BlogBig1} alt=""/>
                              </div>
                              <div className="swiper-slide">
                                 <img src={BlogBig2} alt=""/>
                              </div>
                              <div className="swiper-slide">
                                 <img src={BlogBig3} alt=""/>
                              </div>
                           </div>
                           <div className="blog-post-slider-nav">
                              <div className="blog-nav-prev nav-button"><i className="fal fa-angle-left"></i></div>
                              <div className="blog-nav-next nav-button"><i className="fal fa-angle-right"></i></div>
                           </div>
                        </div>
                        <div className="postbox__content">
                           <div className="postbox__meta">
                              <span><a href="#"><i className="fal fa-user-circle"></i> Alextina </a></span>
                              <span><a href="#"><i className="fal fa-clock"></i> Dec 28, 2022</a></span>
                              <span><a href="#"><i className="fal fa-comment-alt-lines"></i>(04) Coments</a></span>
                              <span><a href="#"><i className="fal fa-eye"></i> 1,526 views</a></span>
                           </div>    
                           <h3 className="postbox__title">
                              <a href="blog-details.html">How To Apply UX Principles To Embedded Systems: Learnings From The Field</a>
                           </h3>
                           <div className="postbox__text">
                              <p>Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory</p>
                           </div>
                           <div className="post__button">
                              <a className="tp-btn-yellow" href="blog-details.html"> READ MORE</a>
                           </div>  
                        </div>
                     </article>
                     <article className="postbox__item format-video mb-50 transition-3">
                        <div className="postbox__thumb postbox__video w-img p-relative">
                           <a href="blog-details.html">
                              <img src={BlogBig3} alt=""/>
                           </a>
                           <a href="https://youtu.be/-WRZI63emjs" className="play-btn pulse-btn popup-video"><i className="fas fa-play"></i></a>
                        </div>
                        <div className="postbox__content">
                           <div className="postbox__meta">
                              <span><a href="#"><i className="fal fa-user-circle"></i> Alextina </a></span>
                              <span><a href="#"><i className="fal fa-clock"></i> Dec 28, 2022</a></span>
                              <span><a href="#"><i className="fal fa-comment-alt-lines"></i>(04) Coments</a></span>
                              <span><a href="#"><i className="fal fa-eye"></i> 1,526 views</a></span>
                           </div>
                           <h3 className="postbox__title">
                              <a href="blog-details.html">DevFest For Ukraine, A Charity Conference On The Future Of Tech </a>
                           </h3>
                           <div className="postbox__text">
                              <p>Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laboratory</p>
                           </div>
                           <div className="post__button">
                              <a className="tp-btn-yellow" href="blog-details.html"> READ MORE</a>
                           </div>
                        </div>
                     </article>
                     <div className="basic-pagination">
                        <nav>
                           <ul>
                              <li>
                                 <a href="blog.html">
                                    <i className="far fa-angle-left"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="blog.html">1</a>
                              </li>
                              <li>
                                 <span className="current">2</span>
                              </li>
                              <li>
                                 <a href="blog.html">3</a>
                              </li>
                              <li>
                                 <a href="blog.html">
                                    <i className="far fa-angle-right"></i>
                                 </a>
                              </li>
                           </ul>
                           </nav>
                     </div>
                  </div>
               </div>
               <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="sidebar__wrapper">
                     <div className="sidebar__widget mb-40">
                        <h3 className="sidebar__widget-title">Search Here</h3>
                        <div className="sidebar__widget-content">
                           <div className="sidebar__search">
                              <form action="#">
                                 <div className="sidebar__search-input-2">
                                    <input type="text" placeholder="Search your keyword..."/>
                                    <button type="submit"><i className="far fa-search"></i></button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div className="sidebar__widget mb-40">
                        <h3 className="sidebar__widget-title">Categories</h3>
                        <div className="sidebar__widget-content">
                           <ul>
                              <li><a href="blog.html">Web Design<span>26</span></a></li>
                              <li><a href="blog.html">Devlopment <span>30</span></a></li>
                              <li><a href="blog.html">Branding <span>71</span></a></li>
                              <li><a href="blog.html">MOtion Design <span>56</span></a></li>
                              <li><a href="blog.html">UI/UX Deisgn <span>60</span></a></li>
                              <li><a href="blog.html">Graphic Design <span>99</span></a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="sidebar__widget mb-40">
                        <h3 className="sidebar__widget-title">Pages</h3>
                        <div className="sidebar__widget-content">
                           <ul>
                              <li><a href="blog.html">Web Design <span><i className="fal fa-angle-right"></i></span></a></li>
                              <li><a href="blog.html">Devlopment <span><i className="fal fa-angle-right"></i></span></a></li>
                              <li><a href="blog.html">Branding <span><i className="fal fa-angle-right"></i></span></a></li>
                              <li><a href="blog.html">MOtion Design<span><i className="fal fa-angle-right"></i></span></a></li>
                              <li><a href="blog.html">UI/UX Deisgn  <span><i className="fal fa-angle-right"></i></span></a></li>
                              <li><a href="blog.html">Graphic Design  <span><i className="fal fa-angle-right"></i></span></a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="sidebar__widget mb-40">
                        <h3 className="sidebar__widget-title">Recent Post</h3>
                        <div className="sidebar__widget-content">
                           <div className="sidebar__post rc__post">
                              <div className="rc__post mb-20 d-flex align-items-center">
                                 <div className="rc__post-thumb mr-20">
                                    <a href="blog-details.html"><img src={BlogSm1} alt=""/></a>
                                 </div>
                                 <div className="rc__post-content">
                                    <div className="rc__meta">
                                       <span>4 March. 2022</span>
                                    </div>
                                    <h3 className="rc__post-title">
                                       <a href="blog-details.html">Don’t Underestimate The Software</a>
                                    </h3>
                                 </div>
                              </div>
                              <div className="rc__post mb-20 d-flex align-items-center">
                                 <div className="rc__post-thumb mr-20">
                                    <a href="blog-details.html"><img src={BlogSm2} alt=""/></a>
                                 </div>
                                 <div className="rc__post-content">
                                    <div className="rc__meta">
                                       <span>4 March. 2022</span>
                                    </div>
                                    <h3 className="rc__post-title">
                                       <a href="blog-details.html">Designing Human-Machine Interfaces..</a>
                                    </h3>
                                 </div>
                              </div>
                              <div className="rc__post mb-20 d-flex align-items-center">
                                 <div className="rc__post-thumb mr-20">
                                    <a href="blog-details.html"><img src={BlogSm3} alt=""/></a>
                                 </div>
                                 <div className="rc__post-content">
                                    <div className="rc__meta">
                                       <span>4 March. 2022</span>
                                    </div>
                                    <h3 className="rc__post-title">
                                       <a href="blog-details.html">Web Design Done Well: Excellent</a>
                                    </h3>
                                 </div>
                              </div>
                              <div className="rc__post mb-20 d-flex align-items-center">
                                 <div className="rc__post-thumb mr-20">
                                    <a href="blog-details.html"><img src={BlogSm4} alt=""/></a>
                                 </div>
                                 <div className="rc__post-content">
                                    <div className="rc__meta">
                                       <span>4 March. 2022</span>
                                    </div>
                                    <h3 className="rc__post-title">
                                       <a href="blog-details.html">Don’t Underestimate The Software </a>
                                    </h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="sidebar__widget mb-40">
                        <h3 className="sidebar__widget-title">Tags</h3>
                        <div className="sidebar__widget-content">
                           <div className="tagcloud">
                              <a href="blog.html">landing</a>
                              <a href="blog.html">Charity</a>
                              <a href="blog.html">apps</a>
                              <a href="blog.html">Education </a>
                              <a href="blog.html">data</a>
                              <a href="blog.html">book</a>
                              <a href="blog.html">Design</a>
                              <a href="blog.html">website</a>
                              <a href="blog.html">landing page</a>
                              <a href="blog.html">data</a>
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

export default BlogArticles;