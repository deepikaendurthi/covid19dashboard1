import {Component} from 'react'
import StateList from '../StateList'
import StateTableData from '../StateTableData'
import SocialInformation from '../SocialInformation'
import EachStateInformation from '../EachStateInformation'

import './index.css'

const url = 'https://data.covid19india.org/v4/min/data.min.json'

class Home extends Component {
  state = {
    output: false,
    searchInput: '',
    requiredData: '',
    box: false,
    confirmed: 0,
    deceased: 0,
    recovered: 0,
    active: 0,
    final: true,
    stateCode: '',
  }

  componentDidMount = () => {
    this.getRequiredQuery()
  }

  getRequiredQuery = async () => {
    const response = await fetch(url)
    const data = await response.json()

    this.setState({requiredData: data, box: true})
  }

  counting = (first, second, third, forth) => {
    this.setState(prevState => ({
      confirmed: prevState.confirmed + first,
      active: prevState.active + second,
      recovered: prevState.recovered + third,
      deceased: prevState.deceased + forth,
    }))
  }

  backPage = value => {
    this.setState({final: value, searchInput: ''})
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
    if (event.target.value.length > 0) {
      this.setState({
        output: true,
      })
    } else {
      this.setState({
        output: false,
      })
    }
  }

  requiredSingleState = (name, code) => {
    this.setState({
      searchInput: name,
      output: false,
      final: false,
      stateCode: code,
    })
  }

  render() {
    const {statesList} = this.props
    const {
      output,
      searchInput,
      requiredData,
      box,
      confirmed,
      active,
      recovered,
      deceased,
      stateCode,
      final,
    } = this.state
    const searchResult = statesList.filter(eachState =>
      eachState.state_name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <>
        {final ? (
          <div className="bg-container-home">
            <div className="input-bg-container">
              <img
                src="https://res.cloudinary.com/deqohhami/image/upload/v1624025781/search-3_lihgsr.png"
                alt="search"
                className="image1"
              />
              <input
                type="search"
                className="search"
                placeholder="Enter The State"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            {output ? (
              <ul className="state-search">
                {searchResult.map(eachStates => (
                  <StateList
                    key={eachStates.state_code}
                    eachStates={eachStates}
                    requiredSingleState={this.requiredSingleState}
                  />
                ))}
              </ul>
            ) : null}

            <div className="main-index">
              <div className="confirmed-container card">
                <p className="main-para1">Confirmed</p>
                <img
                  src="https://res.cloudinary.com/du6itsqqj/image/upload/v1625900037/Groupcorrect_yxzwl6.png"
                  alt="Confirmed"
                />
                <p className="main-para2">
                  {Intl.NumberFormat('en-IN').format(confirmed)}
                </p>
              </div>

              <div className="active-container card">
                <p className="main-para1">Active</p>
                <img
                  src="https://res.cloudinary.com/du6itsqqj/image/upload/v1625900509/Outlinedeceased_ajrrnq.png"
                  alt="Active"
                />
                <p className="main-para2">
                  {Intl.NumberFormat('en-IN').format(active)}
                </p>
              </div>

              <div className="recover-container card">
                <p className="main-para1">Recovered</p>
                <img
                  src="https://res.cloudinary.com/du6itsqqj/image/upload/v1625900524/recovered_1recovered_zpyn1w.png"
                  alt="Recovered"
                />
                <p className="main-para2">
                  {Intl.NumberFormat('en-IN').format(recovered)}
                </p>
              </div>

              <div className="deceased-container card">
                <p className="main-para1">Deceased</p>
                <img
                  src="https://res.cloudinary.com/du6itsqqj/image/upload/v1625900509/Outlinedeceased_ajrrnq.png"
                  alt="Deceased"
                />
                <p className="main-para2">
                  {Intl.NumberFormat('en-IN').format(deceased)}
                </p>
              </div>
            </div>

            <div className="table">
              <div className="table-column">
                <p className="para1">States/UT</p>
                <p className="para2">Confirmed</p>
                <p className="para3">Active</p>
                <p className="para3">Recovered</p>
                <p className="para3">Decreased</p>
                <p className="para3">Population</p>
              </div>
              <hr className="hr" />
              {box ? (
                <ul className="box-container">
                  {statesList.map(each => (
                    <StateTableData
                      each={each}
                      key={each.state_code}
                      requiredData={requiredData[each.state_code]}
                      counting={this.counting}
                    />
                  ))}
                </ul>
              ) : null}
            </div>
            <SocialInformation />
          </div>
        ) : (
          <EachStateInformation
            stateData={requiredData[stateCode]}
            searchInput={searchInput}
            stateCode={stateCode}
            backPage={this.backPage}
          />
        )}
      </>
    )
  }
}

export default Home
