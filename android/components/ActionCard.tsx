import React from 'react'
import { Text, StyleSheet, View, Linking, TouchableOpacity, Image } from 'react-native'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    return (
        <View>
          <Text style={styles.headingText}>Action Card</Text>
          <View style={[styles.card, styles.elevated]}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>question in space</Text>
            </View>
            <Image 
                style={styles.cardImage}
                source={{
                    uri: 'https://i.natgeofe.com/n/ae3d4faf-17d1-40a1-9323-22dd47e74f49/STScI-01H5309J2AAYSABKVQ89R7V44T-2.jpg',
                }}
            />

            <View style={styles.bodyContainer}>
                <Text style={styles.body} numberOfLines={4}>
                    The James Webb Space Telescope has captured a spectacular new image of a pair of actively forming stars about 1,470 light-years away. But beneath the breathtaking phenomenon, some viewers noticed a peculiar shape among the backdrop of celestial objects: a glowing question mark. The image quickly went viral on social media, with jokes about its origin ranging from aliens to a glitch in the Matrix.
                </Text>
            </View>

            <View style={styles.footerContainer}>
                <TouchableOpacity
                    onPress={() => openWebsite('https://www.smithsonianmag.com/smart-news/what-is-this-cosmic-question-mark-captured-by-the-james-webb-space-telescope-180982761/')}>
                    <Text style={styles.footerLinkText}>read more</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => openWebsite('https://www.instagram.com/')}>
                    <Text style={styles.footerLinkText}>follow me</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      )
}

const styles = StyleSheet.create({
    footerLinkText: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    footerContainer: {
        backgroundColor: '#bdcfb0',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        paddingVertical: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 0,
        width: "100%",
    },
    bodyContainer: {
        padding: 10,
    },
    body: {
        fontSize: 16,
    },
    cardImage: {
        height: 100,
    },
    headerContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        textTransform: 'capitalize',
        fontSize: 20,
        fontWeight: '600',
    },
    card: {
        height: 320,
        width: 470,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevated: {
        backgroundColor: '#d0e3c1',
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
      paddingTop: 24,
    },
})
