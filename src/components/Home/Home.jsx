// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import './Home.css'
// import 'swiper/swiper-bundle.css'; // Swiper CSS import

// function Home() {
//   return (
//     <div className='text-center slide'>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true} // Center the slide
//         slidesPerView={1} // Show only 1 slide at a time
//         loop={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//       >
//         <SwiperSlide className="item">
//           {/* Your slide content */}
//           <div>
//             <img src="images/image.png" alt="" />
//              {/* Rectangle background */}
//           </div>

//         </SwiperSlide>
//         <SwiperSlide className="item">
//           {/* Your slide content */}
//           <div>
//             <img src="images/image.png" alt="" />
//             <div className="slide-background"></div> {/* Rectangle background */}
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="item">
//           {/* Your slide content */}
//           <div>
//             <img src="images/image.png" alt="" />
//             <div className="slide-background"></div> {/* Rectangle background */}
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="item">
//           {/* Your slide content */}
//           <div>
//             <img src="images/image.png" alt="" />
//             <div className="slide-background"></div> {/* Rectangle background */}
//           </div>
//         </SwiperSlide>

//         {/* Add more slides here if needed */}
//       </Swiper>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
    <div className="text-center center">

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="images/image.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images/image.png" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="images/image.png" alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    </>
  );
};

export default Home;
