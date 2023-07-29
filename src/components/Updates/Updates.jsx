import news1 from '/public/assets/img/news/news-1.png'
import shape2 from '/public/assets/img/news/news-shape-2.png'

const Updates = () => {
    return (
        <div>
            <div className="tp-news-letter-area pb-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".4s">
      <div className="container">
         <div className="tp-news-letter-box p-relative" data-background="assets/img/news/news-shape.png">
            <div className="row">
               <div className="col-xl-6 col-lg-6 col-md-8 col-12  ">
                  <div className="tp-news-wrapper pl-90 z-index-1">
                     <div className="tp-news-letter-section-box">
                        <h5 className="tp-subtitle subtitle-secondary-color">Get update</h5>
                        <h2 className="tp-title tp-white-text">Get latest updates and deals</h2>
                     </div>
                     <div className="tp-news-button p-relative">
                        <form action="#">
                           <input type="text" placeholder="Enter your mail"/>
                           <button className="tp-submit-button tp-btn-yellow-semilar" type="submit">Subscribe <i
                                 className="far fa-arrow-right"></i></button>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 text-lg-end col-md-4  ">
                  <div className="tp-news-letter-img">
                     <img src={news1} alt=""/>
                  </div>
               </div>
            </div>
            <div className="tp-news-shape-img">
               <img src={shape2} alt=""/>
            </div>
         </div>
      </div>
   </div>
        </div>
    );
};

export default Updates;