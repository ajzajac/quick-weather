import React from 'react'

export default function Details(props) {
    return (
        <div className='detailsList'>
            <div><p><b>Weather:</b> {props.description}</p></div>
            <div><p><b>Feels like:</b> {props.feelsLike ? props.feelsLike.toFixed(0) : null}ºF</p></div>
            <div><p><b>High:</b> {props.highTemp ? props.highTemp.toFixed(0) : null}ºF</p></div>
            <div><p><b>Low:</b> {props.lowTemp ? props.lowTemp.toFixed(0) : null}ºF</p></div>
            <div><p><b>Sunrise:</b> {props.sunrise}</p></div>
            <div><p><b>Sunset:</b> {props.sunset}</p></div>
            <div><p><b>Humidity:</b> {props.humidity}%</p></div>
        </div>
    )
}
