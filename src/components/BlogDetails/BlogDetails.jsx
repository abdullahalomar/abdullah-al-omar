import abShape1 from '/public/assets/img/breadcrum/ab-shape-1.1.jpg'
import blogBig1 from '/public/assets/img/blog-details/blog-big-1.jpg'
import blogBig4 from '/public/assets/img/blog-details/blog-big-4.jpg'
import blogSm5 from '/public/assets/img/blog-details/blog-sm-5.jpg'
import testi42 from '/public/assets/img/testimonial/testi-4.2.png'
import testi5 from '/public/assets/img/testimonial/testi-4.5.png'
import testi41 from '/public/assets/img/testimonial/testi-4.1.png'
import blogSm1 from '/public/assets/img/blog-details/blog-sm-1.jpg'
import blogSm2 from '/public/assets/img/blog-details/blog-sm-2.jpg'
import blogSm3 from '/public/assets/img/blog-details/blog-sm-3.jpg'
import blogSm4 from '/public/assets/img/blog-details/blog-sm-4.jpg'

const BlogDetails = () => {
    return (
        <div>
             <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative"
         data-background="assets/img/breadcrum/ab-1.1.jpg">
         <div className="ac-about-shape-img z-index-1">
            <img src={abShape1} alt=""/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="breadcrumb__content p-relative z-index-1">
                     <h3 className="breadcrumb__title">Blog Details</h3>
                      <a href="contact.html" className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <div className="postbox__area pt-120 pb-120">
         <div className="container">
            <div className="row">
               <div className="col-xxl-8 col-xl-8 col-lg-8 col-12">
                  <div className="postbox__wrapper">
                     <article className="postbox__item format-image transition-3">
                        <div className="postbox__content">
                           <p><img className="w-100" src={blogBig1} alt=""/></p>
                           <div className="postbox__meta">
                              <span><a href="#"><i className="fal fa-user-circle"></i> Alextina </a></span>
                              <span><a href="#"><i className="fal fa-clock"></i> Dec 28, 2022</a></span>
                              <span><a href="#"><i className="fal fa-comment-alt-lines"></i>(04) Coments</a></span>
                              <span><a href="#"><i className="fal fa-eye"></i> 1,526 views</a></span>
                           </div>
                           <h3 className="postbox__title">
                            How To Create A Vanilla JavaScript Gantt Chart: Adding Task Editing Features (Part 2)
                           </h3>
                           <div className="postbox__text">
                              <p>One in four people in the world will be affected by mental or neurological disorders at some point in their lives, says the World Health Organization. Still, we spend more time brushing our teeth than taking care of our mental health, said Guy Winch in his TED talk.
                              </p>
                              <p>We tend to neglect our mental well-being because of the stigma of mental health care. But as societies become wiser and more self-aware, there is a greater need to redefine the meaning of mental health care. Naomi Hirabayashi and Marah Lidey do exactly that by drawing attention to the aspect of preventing mental health issues. The application they built makes mental self-care easy and accessible. of this year of the best law and his a part of this years.</p>

                              <p>We tend to neglect our mental well-being because of the stigma of mental health care. But as societies become wiser and more self-aware, there is a greater need to redefine the meaning of mental health care. Naomi Hirabayashi and Marah Lidey do exactly that by drawing attention to the aspect of preventing mental health issues. The application they built makes mental self-care easy and accessible. of this year of the best law and his a part of this years.</p>
                           </div>

                           <div className="postbox__thumb2">
                              <div className="row gx-50">
                                 <div className="col-xl-6">
                                    <p><img src={blogBig4} alt=""/></p>
                                 </div>
                                 <div className="col-xl-6">
                                    <p><img src={blogSm5} alt=""/></p>
                                 </div>
                              </div>
                           </div>
                           <div className="postbox__social-wrapper">
                              <div className="row">
                                 <div className="col-xl-8 col-lg-12">
                                    <div className="postbox__tag tagcloud">
                                       <span>Tag</span>
                                       <a href="blog-details.html">Business</a>
                                       <a href="blog-details.html">Design</a>
                                       <a href="blog-details.html">apps</a>
                                       <a href="blog-details.html">data</a>
                                    </div>
                                 </div>
                                 <div className="col-xl-4 col-lg-12">
                                    <div className="postbox__social text-xl-end text-start">
                                       <span>Share</span>
                                       <a href="blog-details.html"><i className="fab fa-linkedin tp-linkedin"></i></a>
                                       <a href="blog-details.html"><i className="fab fa-pinterest tp-pinterest"></i></a>
                                       <a href="blog-details.html"><i className="fab fa-facebook tp-facebook" ></i></a>
                                       <a href="blog-details.html"><i className="fab fa-twitter tp-twitter"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </article>
                     <div className="postbox__comment mb-65">
                        <h3 className="postbox__comment-title">(04) Comment</h3>
                        <ul>
                           <li>
                              <div className="postbox__comment-box d-flex">
                                 <div className="postbox__comment-info ">
                                    <div className="postbox__comment-avater mr-20">
                                       <img src={testi42} alt=""/>
                                    </div>  
                                 </div>
                                 <div className="postbox__comment-text">
                                    <div className="postbox__comment-name">
                                       <h5>Kristin Watson</h5>
                                       <span className="post-meta"> July 14, 2022</span>
                                    </div>
                                    <p>Patient Comments are a collection of comments submitted by viewers in <br/> response to a question posed by a MedicineNet doctor.</p>
                                    <div className="postbox__comment-reply">
                                       <a href="#">Reply</a>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li className="children">
                              <div className="postbox__comment-box  d-flex">
                                 <div className="postbox__comment-info">
                                    <div className="postbox__comment-avater mr-20">
                                       <img src={testi5} alt=""/>
                                    </div> 
                                 </div>
                                 <div className="postbox__comment-text">
                                    <div className="postbox__comment-name">
                                       <h5>Farhan Firoz</h5>
                                       <span className="post-meta"> July 14, 2022</span>
                                    </div>
                                    <p>Include anecdotal examples of your experience, or things you took notice of that <br/> you feel others would find useful.</p>
                                    <div className="postbox__comment-reply">
                                       <a href="#">Reply</a>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div className="postbox__comment-box d-flex">
                                 <div className="postbox__comment-info ">
                                    <div className="postbox__comment-avater mr-20">
                                       <img src={testi41} alt=""/>
                                    </div>
                                 </div>
                                 <div className="postbox__comment-text">
                                    <div className="postbox__comment-name">
                                       <h5>Salim Rana</h5>
                                       <span className="post-meta"> July 14, 2022</span>
                                    </div>
                                    <p>Include anecdotal examples of your experience, or things you took notice of that <br/> you feel others would find useful.</p>
                                    <div className="postbox__comment-reply">
                                       <a href="#">Reply</a>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div className="postbox__comment-form">
                        <h3 className="postbox__comment-form-title">Leave a Reply</h3>
                        <form action="#">
                           <div className="row">
                              <div className="col-xxl-6 col-xl-6 col-lg-6">
                                 <div className="postbox__comment-input">
                                    <input type="text" placeholder="Your Name"/>
                                 </div>
                              </div>
                              <div className="col-xxl-6 col-xl-6 col-lg-6">
                                 <div className="postbox__comment-input">
                                    <input type="email" placeholder="Your Email"/>
                                 </div>
                              </div>
                              <div className="col-xxl-6 col-xl-6 col-lg-6">
                                 <div className="postbox__comment-input">
                                    <input type="text" placeholder="number"/>
                                 </div>
                              </div>
                              <div className="col-xxl-6 col-xl-6 col-lg-6">
                                 <div className="postbox__comment-input">
                                    <input type="text" placeholder="Website"/>
                                 </div>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__comment-input">
                                    <textarea placeholder="Enter your comment ..."></textarea>
                                 </div>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__comment-agree d-flex align-items-start mb-20">
                                    <input className="e-check-input" type="checkbox" id="e-agree"/>
                                    <label className="e-check-label">Save my name, email, and website in this browser for the next time I comment.</label>
                                 </div>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__comment-btn">
                                    <button type="submit" className="tp-btn-yellow">Post comment</button>
                                 </div>
                              </div>
                           </div>
                        </form>
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
                                    <a href="blog-details.html"><img src={blogSm1} alt=""/></a>
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
                                    <a href="blog-details.html"><img src={blogSm2} alt=""/></a>
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
                                    <a href="blog-details.html"><img src={blogSm3} alt=""/></a>
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
                                    <a href="blog-details.html"><img src={blogSm4} alt=""/></a>
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

export default BlogDetails;