import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1 className="heading">
          COVID19<span className="span-heading"> INDIA </span>
        </h1>
        <div className="link">
          <Link className="link1" to="/">
            Home
          </Link>
          <Link className="link2" to="/about">
            About
          </Link>
        </div>
      </div>
    )
  }
}
export default Navbar
