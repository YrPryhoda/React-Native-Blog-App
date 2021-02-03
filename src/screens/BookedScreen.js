import React, { useEffect } from 'react'
import PostList from '../components/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts } from '../redux/actions/post';

const BookedScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const bookedPosts = useSelector(state => state.posts.bookedPosts)

  useEffect(() => {
    if (!bookedPosts.length) {
      dispatch(loadPosts())
    }
  }, [dispatch])

  const openPostHandler = (post) => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked
    })
  }

  return <PostList data={bookedPosts} onOpen={openPostHandler} />
}

export default BookedScreen
