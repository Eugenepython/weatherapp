import React from 'react';
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/WeatherType';


const CurrentWeather = ({ weatherData }) => {
    const { bodyWrapper, highLow, highLowWrapper, container, tempStyles, feels, wrapper, description, message } = styles;
    const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData;
    const weatherCondition = weather[0]?.main;



    return (
        <SafeAreaView style={[wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor }]}>
            <View style={container}>
                <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
                <Text style={temp}>{temp}</Text>
                <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
                <RowText
                    messageOne={`High: ${temp_max}° `}
                    messageTwo={`Low: ${temp_min}°`}
                    containerStyles={highLowWrapper}
                    messageOneStyles={highLow}
                    messageTwoStyles={highLow}
                />
            </View>

            <RowText
                messageOne={weather[0]?.description}
                messageTwo={weatherType[weatherCondition].message}
                containerStyles={bodyWrapper}
                messageOneStyles={description}
                messageTwoStyles={message}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    tempStyles: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: 'black',
    },
    highLow: {
        color: 'black',
        fontSize: 20
    },
    highLowWrapper: {
        flexDirection: 'row',
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
    },
    description: {
        fontSize: 48,
        color: 'white',
    },
    message: {
        fontSize: 30,
        color: 'white',
    }
});

export default CurrentWeather;


