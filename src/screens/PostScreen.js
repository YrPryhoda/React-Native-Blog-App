import React, { useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Image, Button, ScrollView, Alert } from 'react-native'
import { THEME } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBooked, removePost } from '../redux/actions/post';
import AppStarIcon from '../components/AppStarIcon';

const PostScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const postId = route.params?.postId;
  const post = useSelector(state => state.posts.allPosts.find(el => el.id === postId));

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post))
  }, [dispatch, post])

  const booked = useSelector(state => state.posts.bookedPosts.some(el => el.id === postId))

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <AppStarIcon booked={booked} onPress={toggleHandler} />
    })
  }, [toggleHandler, booked])


  const removeHandler = (post) => {
    Alert.alert(
      'Warning',
      `Are you sure to delete ${post.title}?`,
      [
        {
          text: 'Apply',
          onPress: () => {
            navigation.navigate('Main')
            dispatch(removePost(post.id))
          }
        },
        {
          text: 'Cancel',
          style: 'cancel'
        },
      ],
      { cancelable: false }
    );
  }

  return !post ? null : (
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
