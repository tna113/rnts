import React, { Component, PropsWithChildren } from 'react';
import { Text, StyleSheet, View, ImageSourcePropType, Image } from 'react-native';

import DiceOne from '../assets/one.png';
import DiceTwo from '../assets/two.png';
import DiceThree from '../assets/three.png';
import DiceFour from '../assets/four.png';
import DiceFive from '../assets/five.png';
import DiceSix from '../assets/six.png';

type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType,
}>

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
    return(
        <View>
            <Image style={styles.diceImage} source={imageUrl} />
        </View>
    )
}

export default function Proj4 () {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>dice roller</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    diceImage: {
        height: 200,
        width: 200,
    },
})
