import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Create Screen</Text>
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
