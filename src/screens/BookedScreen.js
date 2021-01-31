import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BookedScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Booked Screen</Text>
    </View>
  )
}

export default BookedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
