import React from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar, View, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'
import moment from 'moment'



const City = ({ weatherData }) => {
    const { container, imageLayout, cityName, countryName, cityText, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout } = styles

    const { name, country, population, sunrise, sunset } = weatherData



    const sunriseMoment = moment(sunrise * 1000);
    const sunsetMoment = moment(sunset * 1000);

    console.log("Sunrise:", sunriseMoment.format('h:mm:ss a'));
    console.log("Sunset:", sunsetMoment.format('h:mm:ss a'));




    console.log(weatherData)
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city-background.jpg')} style={imageLayout}>

                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName={'user'}
                        iconColor={'red'}
                        bodyText={`Population: ${population}`}
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]} >
                    <IconText
                        iconName={'sunrise'}
                        iconColor={'white'}
                        bodyText={sunriseMoment.format('h:mm:ss a')}
                        bodyTextStyles={riseSetText}
                    />
                    <IconText
                        iconName='sunset'
                        iconColor='white'
                        bodyText={sunsetMoment.format('h:mm:ss a')}
                        bodyTextStyles={riseSetText}
                    />
                </View>

            </ImageBackground>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentWweight || 0,

    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default City

