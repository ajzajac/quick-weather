import React, { Component } from 'react'
import Details from './Details'

export default class MainContainer extends Component {

    state = {
        city: '',
        temperature: null,
        feelsLike: null,
        highTemp: null,
        lowTemp: null,
        sunrise: null,
        sunset: null,
        humidity: null,
        description: null,
        cityTitle: null,
        country: null,
    }

    fetchWeather = (event) => {
        event.preventDefault()
        fetch(`https://rapidapi.p.rapidapi.com/weather?q=${this.state.city}`, {
                "method": "GET",
                "headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "8438c1aaccmsh00107ef5defee46p19f9f8jsnbaaaa08bc316"
	}
        })
        .then(response => response.json())
        .then(resp => {
            console.log(resp)
            this.setState({
                temperature: ((resp.main.temp-273.15)*1.8)+32,
                feelsLike: ((resp.main.feels_like-273.15)*1.8)+32,
                highTemp: ((resp.main.temp_max-273.15)*1.8)+32,
                lowTemp: ((resp.main.temp_min-273.15)*1.8)+32,
                humidity: resp.main.humidity,
                description: resp.weather[0].description,
                cityTitle: resp.name,
                country: resp.sys.country,
                dateTime: new Date(resp.dt),
                sunrise: resp.sys.sunrise,
                sunset: resp.sys.sunset
            })
        })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    render() {
        return (
            <div className='mainContainer'>
            <h1>Quick Weather</h1>
            <form onSubmit={this.fetchWeather}><input name='city' autoFocus placeholder="City Name Here, e.g. `London`" onChange={this.handleChange} value={this.state.city}></input><button type='submit' name='submit'>Submit</button></form>
                <h2>{this.state.cityTitle}</h2>
                <p>{this.state.country}</p>
                {/* <p>{this.state.dateTime}</p> */}
                <Details {...this.state}/>
            </div>
        )
    }
}
