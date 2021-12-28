import {Component} from 'react'
import './index.css'

class StateList extends Component {
  render() {
    const {eachStates, requiredSingleState} = this.props
    const stateList = {
      stateCode: eachStates.state_code,
      stateName: eachStates.state_name,
    }
    const singleState = () => {
      requiredSingleState(stateList.stateName, stateList.stateCode)
    }
    return (
      <li className="bg-container-stateList" onClick={singleState}>
        <p className="stateName">{stateList.stateName}</p>
        <div className="stateCodeContainer">
          <p className="stateCode">{stateList.stateCode}</p>
          <div className="symbolContainer">
            <p className="symbol"> &#62; </p>
          </div>
        </div>
      </li>
    )
  }
}

export default StateList
