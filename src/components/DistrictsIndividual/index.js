import {Component} from 'react'

import './index.css'

class Vara extends Component {
  render() {
    const {one} = this.props
    return (
      <li className="districts-list-req">
        <p className="districts-effected">
          {Intl.NumberFormat('en-IN').format(one.conformed)}
        </p>
        <p className="districts-name">{one.district}</p>
      </li>
    )
  }
}
export default Vara
