import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';

type WeatherLocate = {
    latitude: number,
    longitude: number,
    weather: any,
};

class Weather extends Component<{}, WeatherLocate> {
    constructor(props: any) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            weather: 0,
        }
    }

    success = (pos: any) => {
        let crd = pos.coords;
        const lat: number = crd.latitude;
        const lon: number = crd.longitude;
        this.setState({
            latitude: lat,
            longitude: lon
        });

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=94c4053757aa25e641718ed53762993c`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                weather: data.main.temp
            })
            console.log('this.state.weather: ', this.state.weather);
        });
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success);
    }

    render() {
        return (
            <div>
                <WeatherDisplay weather={this.state.weather} />
                {/* <h3>{this.state.latitude}</h3>
                <h3>{this.state.longitude}</h3> */}
            </div>
        )
    }
}

export default Weather;