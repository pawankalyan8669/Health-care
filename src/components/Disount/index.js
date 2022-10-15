import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const Discount = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="slider-container">
      <h1 className="Discount-hd">Discounts</h1>
      <Slider {...settings}>
        <div>
          <div className="Discount-container">
            <h1 className="hd2">Comprehensive cardiological examination</h1>
            <div className="discount-image">
              <img
                src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665822823/samples/dicount-1_swqudx.jpg"
                alt="viva"
                className="discount-logo"
              />
              <div>
                <p className="discount-para">-20%</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Discount-container">
            <h1 className="hd2">Blood Tests</h1>
            <div className="discount-image">
              <img
                src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665827074/samples/synevo-logo-2_xmatku.webp"
                alt="sunevo"
                className="discount-logo"
              />
              <div>
                <p className="discount-para">-80%</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Discount-container">
            <h1 className="hd2">Sugar Tests</h1>
            <div className="discount-image">
              <img
                src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665831531/samples/mid_e6javn.jpg"
                alt="mid-plus"
                className="discount-logo"
              />
              <div>
                <p className="discount-para">-80%</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Discount-container">
            <h1 className="hd2">Full Body Checkups</h1>
            <div className="discount-image">
              <img
                src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665831540/samples/apollo_tnugbc.jpg"
                alt="pos"
                className="discount-logo"
              />
              <div>
                <p className="discount-para">-80%</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Discount-container">
            <h1 className="hd2">Heart Tests</h1>
            <div className="discount-image">
              <img
                src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665831519/samples/po_bxggqe.jpg"
                alt="Apollo"
                className="discount-logo"
              />
              <div>
                <p className="discount-para">-90%</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Discount
