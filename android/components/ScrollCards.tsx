import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default function ScrollCards() {
    return (
        <View>
            <Text style={styles.headingText}>Scroll Cards</Text>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.card, styles.elevated]}>
                    <Text>tap</Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>scroll</Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>more</Text>
                </View>
                <View style={[styles.card, styles.elevated]}>
                    <Text>🤩</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 8,
    },
    container: {
      padding: 8,
    },
    elevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowRadius: 2,
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
      paddingTop: 24,
    }
  })
  
