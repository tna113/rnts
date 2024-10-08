import React, { PropsWithChildren, useState } from 'react';
import { Text, StyleSheet, View, ImageSourcePropType, Image, TouchableOpacity, Pressable } from 'react-native';

import DiceOne from '../../assets/one.png';
import DiceTwo from '../../assets/two.png';
import DiceThree from '../../assets/three.png';
import DiceFour from '../../assets/four.png';
import DiceFive from '../../assets/five.png';
import DiceSix from '../../assets/six.png';

type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType,
}>

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
    return(
        <View style={styles.diceContainer}>
            <Image style={styles.diceImage} source={imageUrl} />
        </View>
    )
}

export default function Proj4 () {
    const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

    const rollDiceOnTap = () => {
        let randomNumber = Math.floor(Math.random() * 6) + 1; //1-6

        switch (randomNumber) {
            case 1: 
                setDiceImage(DiceOne);
                break;
            case 2: 
                setDiceImage(DiceTwo);
                break;
            case 3: 
                setDiceImage(DiceThree);
                break;
            case 4: 
                setDiceImage(DiceFour);
                break;
            case 5: 
                setDiceImage(DiceFive);
                break;
            case 6: 
                setDiceImage(DiceSix);
                break;
            default:
                setDiceImage(DiceOne);
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Dice imageUrl={diceImage} />
            <Pressable onPress={rollDiceOnTap} style={styles.button}>
                <Text style={styles.buttonText}>roll the dice</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -40,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    diceImage: {
        height: 200,
        width: 200,
    },
    diceContainer: {},
    button: {
        borderColor: 'gold',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 16,
    },
    buttonText:{
        backgroundColor: 'gold',
        paddingHorizontal: 32,
        paddingVertical: 16,
        color: 'black',
    }
})
