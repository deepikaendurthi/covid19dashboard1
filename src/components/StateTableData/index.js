import {Component} from 'react'

import './index.css'

class StateTableData extends Component {
  componentDidMount() {
    const {requiredData, counting} = this.props

    counting(
      requiredData.total.confirmed,
      requiredData.total.confirmed - requiredData.total.recovered,
      requiredData.total.recovered,
      requiredData.total.deceased,
    )
  }

  render() {
    const {requiredData, each} = this.props
    return (
      <li className="list-state">
        <div className="table-column1">
          <p className="stateTable-name">{each.state_name}</p>
          <p className="stateTable-para1 num-Confirmed">
            {Intl.NumberFormat('en-IN').format(requiredData.total.confirmed)}
          </p>
          <p className="stateTable-para1 num-Active">
            {Intl.NumberFormat('en-IN').format(requiredData.total.recovered)}
          </p>
          <p className="stateTable-para1 num-Recovered">
            {Intl.NumberFormat('en-IN').format(
              requiredData.total.confirmed - requiredData.total.recovered,
            )}
          </p>
          <p className="stateTable-para1 num-Deceased">
            {Intl.NumberFormat('en-IN').format(requiredData.total.deceased)}
          </p>
          <p className="stateTable-para1 num-Population">
            {Intl.NumberFormat('en-IN').format(requiredData.meta.population)}
          </p>
        </div>
      </li>
    )
  }
}
export default StateTableData
