import React, { Component } from 'react';
import { Location } from './Location';
import { WeatherData } from './WeatherData';
import './styles.css';
import {
    SUN,
    WINDY,
} from '../../constants/weathers'

const location = 'Medellin,co';
const API_KEY = '47077845362b5e8298891c24150e4fa8';
const URL = 'api.openweathermap.org/data/2.5/weather';

const API_WEATHER = `${ URL }?q=${ location }&appid=${ API_KEY }`;

const data = {
    temperature: 22,
    weatherState: SUN,
    humidity: 15,
    wind: '10 m/s',
};

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 20,
    wind: '15 m/s',
};

export class WeatherLocation extends Component {

    constructor () {
        super();
        this.state = {
            city: 'Medellín',
            data: data,
        };
    }

    handleUpdateClick = () => {

        fetch(API_WEATHER);

        console.log('Actualizado');

        this.setState({
            city: 'Medellín!',
            data: data2
        });
    }

    render() {
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city = { city }/>
                <WeatherData data = { data }/>
                <button 
                    onClick = { this.handleUpdateClick }>
                    Actualizar
                </button>
            </div>
        )
    }
}
