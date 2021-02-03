import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { THEME } from '../theme'

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Small but great application for personal notes.</Text>
      <Text style={styles.created}> Created by Yaroslav P.</Text>
      <Text style={styles.created}> Version: <Text style={{ fontWeight: '700' }}>1.0.0</Text></Text>
      <Text style={styles.end}> See you soon</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingHorizontal: 20,
    fontFamily: 'coming-soon',
    fontSize: 22,
    textAlign: 'center'
  },
  created: {
    marginTop: 20,
    fontSize: 16,
    fontFamily: 'coming-soon'
  },
  end: {
    fontFamily: 'coming-soon',
    color: THEME.MAIN_COLOR,
    fontSize: 22,
  },
  bold: {

  }
})
