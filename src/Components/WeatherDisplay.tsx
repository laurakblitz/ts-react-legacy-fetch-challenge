import React from 'react';

const WeatherDisplay = (props: any) => {
    return(
        <div>
            <h3>Current Temperature: {props.weather}</h3>
        </div>
    )
}

export default WeatherDisplay;