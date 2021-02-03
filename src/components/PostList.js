import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
import Post from './Post';

const PostList = ({ data, onOpen }) => {
  return <View style={styles.container}>
    {
      !data.length ? (
        <Text style={styles.empty}>No posts yet</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={post => post.id.toString()}
          renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
        />)
    }
  </View>

}

export default PostList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  empty: {
    fontFamily: 'coming-soon',
    fontSize: 24,
    textAlign: 'center'
  }
})
