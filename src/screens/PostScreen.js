import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, Button, ScrollView, Alert, Dimensions } from 'react-native'
import { DATA } from '../data';
import { THEME } from '../theme';

const PostScreen = ({ navigation, route }) => {
  const postId = route.params?.postId;
  const post = DATA.find(el => el.id === postId)

  const removeHandler = (post) => {
    Alert.alert(
      'Warning',
      `Are you sure to delete ${post.title}?`,
      [
        {
          text: 'Apply',
          onPress: () => console.log('Ask me later pressed')
        },
        {
          text: 'Cancel',
          style: 'cancel'
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: post.img }} style={styles.img} />
      <View style={styles.postBody}>
        <ScrollView style={styles.textWrap}>
          <Text style={styles.title}>
            {post.text}
          </Text>
        </ScrollView>
        <Button
          title='Delete'
          color={THEME.DANGER_COLOR}
          onPress={() => removeHandler(post)}
        />
      </View>
    </View>
  )
}

export default PostScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img: {
    width: '100%',
    minHeight: 200,
    maxHeight: 400
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: 'open-regular'
  },
  postBody: {
    flex: 1
  }
})
