import './index.css'

const SocialInformation = () => (
  <div className="social_bg-container">
    <h1 className="social_heading">
      COVID19<span className="social-span">INDIA</span>
    </h1>
    <p className="social-para">
      We stand with everyone fighting on the front lines
    </p>

    <div className="social-icons">
      <img
        src="https://res.cloudinary.com/du6itsqqj/image/upload/v1628258660/Vector_ebe9sd.png"
        alt="cat"
        className="cat"
      />
      <br />
      <img
        src="https://res.cloudinary.com/du6itsqqj/image/upload/v1628258808/instagram_swyevc.png"
        alt="instagram"
        className="instagram"
      />
      <br />
      <img
        src="https://res.cloudinary.com/du6itsqqj/image/upload/v1628258830/path3611_vz9cjc.png"
        alt="twitter"
        className="twitter"
      />
    </div>
  </div>
)
export default SocialInformation
