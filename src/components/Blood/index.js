import {RiArrowDropRightLine} from 'react-icons/ri'

import './index.css'

const Blood = () => (
  <div className="B">
    <img
      src="https://res.cloudinary.com/dvzyuazyg/image/upload/v1665827074/samples/synevo-logo-2_xmatku.webp"
      alt="Blood"
      className="blood-img"
    />
    <div>
      <h1 className="blood-hd">Your Blood Test is ready!</h1>
    </div>
    <RiArrowDropRightLine className="arrow" />
  </div>
)
export default Blood
