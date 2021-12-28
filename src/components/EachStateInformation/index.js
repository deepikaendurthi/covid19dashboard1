import {Component} from 'react'

import DistrictsIndividual from '../DistrictsIndividual'

import Graph from '../Graph'

import './index.css'

class EachStateInformation extends Component {
  state = {
    districts: [],
    dates: [],
    ok: false,
  }

  componentDidMount() {
    this.getRequiredGraphs()
    const {stateData} = this.props
    const overAllDistricts = stateData.districts
    console.log(overAllDistricts)
    const singleDistrictList = Object.entries(overAllDistricts).map(each => ({
      district: each[0],
      conformed: each[1.0].total.confirmed,
    }))
    console.log(singleDistrictList)
    singleDistrictList.sort((a, b) => (b.conformed > a.conformed ? 1 : -1))
    this.setState({districts: singleDistrictList})
  }

  getRequiredGraphs = async () => {
    const {stateCode} = this.props
    const response = await fetch(
      `https://data.covid19india.org/v4/min/timeseries-${stateCode}.min.json`,
    )
    const data = await response.json()

    const fourMonths = []
    const n = 90

    ;[...Array(n)].map((elementInArray, index) =>
      fourMonths.push(
        Object.entries(data[stateCode].dates)[
          Object.entries(data[stateCode].dates).length - index
        ],
      ),
    )

    fourMonths.shift()
    fourMonths.shift()
    const datesList = fourMonths.map(e => ({
      date: e[0],
      conformed: e[1].delta.confirmed,
      deceased: e[1].delta.deceased,
      recovered: e[1].delta.recovered,
      tested: e[1].delta.tested,
      vaccinated1: e[1].delta.vaccinated1,
    }))
    this.setState({dates: datesList, ok: true})
  }

  render() {
    const {stateData, searchInput, backPage} = this.props
    const {districts, dates, ok} = this.state
    const goBack = () => {
      backPage(true)
    }

    return (
      <div className="bg-container-home">
        <div className="each-stateName">
          <div>
            <div className="state-names">
              <p className="state-name">{searchInput}</p>
            </div>
            <p className="date-test">
              Last update on
              <span className="original-date">
                {stateData.meta.tested.date}
              </span>
            </p>
          </div>
          <div className="each-state-information">
            <p className="tested">Tested</p>
            <p className="no-tested">
              {Intl.NumberFormat('en-IN').format(stateData.total.tested)}
            </p>
          </div>
        </div>
        <div className="main-index">
          <div className="confirmed-container card">
            <p className="main-para1">Confirmed</p>
            <img
              src="https://res.cloudinary.com/du6itsqqj/image/upload/v1625900037/Groupcorrect_yxzwl6.png"
              alt="Confirmed"
            />
            <p className="main-para2">
              {Intl.NumberFormat('en-IN').format(stateData.total.confirmed)}
            </p>
          </div>

          <div className="active-container card">
            <p className="main-para1">Active</p>
            <img
              src="https://res.cloudinary.com/du6itsqqj/image/upload/v1625900509/Outlinedeceased_ajrrnq.png"
              alt="Active"
            />
            <p className="main-para2">
              {Intl.NumberFormat('en-IN').format(
                stateData.total.confirmed - stateData.total.recovered,
              )}
            </p>
          </div>

          <div className="recover-container card">
            <p className="main-para1">Recovered</p>
            <img
              src="https://res.cloudinary.com/du6itsqqj/image/upload/v1625900524/recovered_1recovered_zpyn1w.png"
              alt="Recovered"
            />
            <p className="main-para2">
              {Intl.NumberFormat('en-IN').format(stateData.total.recovered)}
            </p>
          </div>

          <div className="deceased-container card">
            <p className="main-para1">Deceased</p>
            <img
              src="https://res.cloudinary.com/du6itsqqj/image/upload/v1625900509/Outlinedeceased_ajrrnq.png"
              alt="Deceased"
            />
            <p className="main-para2">
              {Intl.NumberFormat('en-IN').format(stateData.total.deceased)}
            </p>
          </div>
        </div>
        <div className="singleDistricts">
          <p className="single-Districts-Heading">Top Districts</p>
          <ul className="single-districts-OrderList">
            {districts.map(one => (
              <DistrictsIndividual one={one} key={one.district} />
            ))}
          </ul>
        </div>
        {ok ? (
          <div className="">
            <Graph dates={dates} />
          </div>
        ) : null}
        <button className="button" type="button" onClick={goBack}>
          Back
        </button>
      </div>
    )
  }
}

export default EachStateInformation
