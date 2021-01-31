import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'

const Post = ({ post, onOpen }) => {

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onOpen(post)}>
      <View style={styles.section}>
        <ImageBackground source={{ uri: post.img }} style={styles.img}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

export default Post

const styles = StyleSheet.create({
  section: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 200
  },
  textWrap: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: '#fff',
    fontFamily: 'coming-soon'
  }
})
