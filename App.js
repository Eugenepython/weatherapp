
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'



const App = () => {
  const [loading, error, weather] = useGetWeather()



  if (loading) {
    return (
      <View style={styles.container}>
        {loading ?
          <ActivityIndicator
            size={'large'}
            color={'pink'}
          />
          : <ErrorItem />}
      </View>
    )
  }

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
})


export default App
