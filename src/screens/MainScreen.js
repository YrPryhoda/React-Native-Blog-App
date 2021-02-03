import React, { useEffect } from 'react'
import PostList from '../components/PostList';
import { useDispatch, useSelector } from 'react-redux'
import { loadPosts } from '../redux/actions/post';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { THEME } from '../theme';


const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.posts.allPosts);
  const loading = useSelector(state => state.posts.loading);

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  const openPostHandler = (post) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked
    })
  }

  return loading ? (
    <View style={styles.loading}>
      <ActivityIndicator size='large' color={THEME.MAIN_COLOR} />
    </View>
  ) : (
    <PostList data={allPosts} onOpen={openPostHandler} />
  )
}

export default MainScreen

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})