import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'

export default function FancyCards() {
    return (
        <View>
          <Text style={styles.headingText}>Palawan, Philippines</Text>
          <ScrollView horizontal>
            <View style={[styles.card, styles.elevated]}>
                <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1531761535209-180857e963b9?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }}
                style={styles.image}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardtitle}>el nido</Text>
                    <Text style={styles.cardSubtitle}>gateway to the bacuit archipelago</Text>
                    <Text style={styles.cardDescription}>
                        El Nido is a Philippine municipality on Palawan island. It’s known for white-sand beaches, coral reefs and as the gateway to the Bacuit archipelago, a group of islands with steep karst cliffs. The area has many dive sites, including Dilumacad Island’s long tunnel leading to an underwater cavern. ― Google
                    </Text>
                    <Text style={styles.cardFooter}>12 minutes away</Text>
                </View>
            </View>

            <View style={[styles.card, styles.elevated]}>
                <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1602587921225-3cca658d31bb?q=80&w=1590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }}
                style={styles.image}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardtitle}>puerto princesa</Text>
                    <Text style={styles.cardSubtitle}>puerto princesa subterranean river national park</Text>
                    <Text style={styles.cardDescription}>
                        Puerto Princesa is a coastal city on Palawan Island in the western Philippines. It's a base for boat trips through the massive limestone caves and underground river of the biodiverse Puerto Princesa Subterranean River National Park. ― Google
                    </Text>
                    <Text style={styles.cardFooter}>12 minutes away</Text>
                </View>
            </View>
          </ScrollView>
        </View>
      )
}

const styles = StyleSheet.create({
    card: {
        height: 350,
        width: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevated: {
        backgroundColor: 'white',
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardtitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'capitalize',
    },
    cardSubtitle: {
        fontSize: 14,
        marginBottom: 12,
        textTransform: 'capitalize',
    },
    cardDescription: {
        color: 'black',
        fontSize: 12,
        marginBottom: 12,
        flexShrink: 1,
    },
    cardFooter: {
        position: 'absolute',
        bottom: 0,
        color: 'black',
        fontSize: 14,
        marginHorizontal: 8,
        marginVertical: 10,
    },
    image: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        marginBottom: 8,
        height: 180,
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
      paddingTop: 24,
    }
  })