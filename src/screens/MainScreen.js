import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import Post from '../components/Post';
import { DATA } from '../data';

const MainScreen = ({ navigation }) => {

  const openPostHandler = (post) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date
    })
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }
})
