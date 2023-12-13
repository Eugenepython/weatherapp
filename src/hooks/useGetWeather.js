import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location';  // Import Expo Location module
import { WEATHER_API_KEY } from '@env' // Import API_KEY from .env file

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
            const data = await res.json()
            // console.log(data)
            setWeather(data)
        } catch (error) {
            console.log(error)
            setError('could not fetch weather')
        }
        finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Access to location was denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLat(location.coords.latitude)
            setLon(location.coords.longitude)
            setLocation(location)
            await fetchWeatherData()
        })()
    }, [lat, lon])
    return [loading, error, weather]
}
