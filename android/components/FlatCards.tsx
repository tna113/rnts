import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function  FlatCards() {
    return (
      <View>
        <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.red]}>
            <Text>red</Text>
          </View>
          <View style={[styles.card, styles.blue]}>
            <Text>blue</Text>
          </View>
          <View style={[styles.card, styles.green]}>
            <Text>green</Text>
          </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingTop: 24,
  }
})
