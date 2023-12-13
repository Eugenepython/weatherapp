import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const RowText = ({ containerStyles, messageOneStyles, messageTwoStyles, messageOne, messageTwo }) => {


    return (
        <View style={containerStyles}>
            <Text style={messageOneStyles}>{messageOne}</Text>
            <Text style={messageTwoStyles}>{messageTwo}</Text>

        </View>
    )
}


export default RowText;
