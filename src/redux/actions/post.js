import { DB } from "../../db"
import { ADD_POST, LOAD_POSTS, REMOVE_POST, TOOGLE_BOOKED } from "../types"
import * as FileSystem from 'expo-file-system';


export const loadPosts = () => async dispatch => {
  const posts = await DB.getPosts();

  dispatch({
    type: LOAD_POSTS,
    payload: posts
  })
}

export const toggleBooked = post => async dispatch => {

  await DB.updatePost(post)

  dispatch({
    type: TOOGLE_BOOKED,
    payload: post.id
  })
}

export const removePost = id => async dispatch => {

  await DB.removePost(id);

  dispatch({
    type: REMOVE_POST,
    payload: id
  })
}

export const addPost = post => async dispatch => {
  const fileName = post.img.split('/').pop();
  const newPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      to: newPath,
      from: post.img
    })
  } catch (error) {
    console.log(error, 'IMG load');
  }

  const payload = { ...post, img: newPath };
  const id = await DB.createPost(payload);
  payload.id = id;

  dispatch({
    type: ADD_POST,
    payload
  })
}