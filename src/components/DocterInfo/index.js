import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const DoctorInfo = () => {
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
      <h1 className="Upcoming">Upcoming Appointments</h1>
      <Slider {...settings}>
        <div>
          <div className="info-container">
            <img
              src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665671383/samples/doctor_1_a54old.jpg"
              alt="doctor"
              className="doctor-img"
            />
            <div className="about-doctor">
              <p className="d-name">Dr.Pavan</p>
              <p className="role">Gynecologist</p>
              <div>
                <div className="availability date">
                  <p>17-oct</p>
                  <p>10:40 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="info-container">
            <img
              src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665824277/samples/Doct_2_wwcufz.jpg"
              alt="doctor"
              className="doctor-img"
            />
            <div className="about-doctor">
              <p className="d-name">Dr.Mary</p>
              <p className="role">ENT Specalist</p>
              <div className="availability date">
                <p>15-oct</p>
                <p>12:40 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="info-container">
            <img
              src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665824357/samples/doct_4_rsqk21.jpg"
              alt="doctor"
              className="doctor-img"
            />
            <div className="about-doctor">
              <p className="d-name">Dr.Tharaa</p>
              <p className="role">Cardiologist</p>
              <div className="availability date">
                <p>15-oct</p>
                <p>13:40 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="info-container">
            <img
              src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665825077/samples/doct-5_zdthxl.jpg"
              alt="doctor"
              className="doctor-img"
            />
            <div className="about-doctor">
              <p className="d-name">Dr.Albert</p>
              <p className="role">Dermatologist</p>
              <div className="availability date">
                <p>18-oct</p>
                <p>19:40 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="info-container">
            <img
              src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665825065/samples/doct-3_tkyjn4.jpg"
              alt="doctor"
              className="doctor-img"
            />
            <div className="about-doctor">
              <p className="d-name">Dr.John</p>
              <p className="role">Hematologist</p>
              <div className="availability date">
                <p>17-oct</p>
                <p>16:40 PM</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default DoctorInfo
