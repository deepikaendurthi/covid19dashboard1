import {Component} from 'react'

import AllQuestions from '../AllQuestions'
import './index.css'

const url = 'https://data.covid19india.org/website_data.json'

class About extends Component {
  state = {
    questionsAndAnswers: [],
  }

  componentDidMount() {
    this.getTheQuestions()
  }

  getTheQuestions = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.faq)
    this.setState({questionsAndAnswers: data.faq})
  }

  render() {
    const {questionsAndAnswers} = this.state
    return (
      <div className="bg-container1-about">
        <div>
          <p className="about-Heading">About</p>
          <p className="about-Para">
            COVID-19 vaccines be ready for distribution
          </p>
          <ul className="about-orderList">
            {questionsAndAnswers.map(eachQuestion => (
              <AllQuestions
                eachQuestion={eachQuestion}
                key={eachQuestion.qno}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default About
