import React, { useEffect } from 'react'
import PostList from '../components/PostList';
import { useDispatch, useSelector } from 'react-redux'
import { loadPosts } from '../redux/actions/post';

const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.posts.allPosts);

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

  return <PostList data={allPosts} onOpen={openPostHandler} />
}

export default MainScreen
