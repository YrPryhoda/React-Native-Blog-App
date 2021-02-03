import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { THEME } from '../theme';
import { addPost } from '../redux/actions/post';
import { useDispatch } from 'react-redux';
import PhotoPicker from '../components/PhotoPicker';

const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [input, setinput] = useState('')
  const [imageUrl, setImageUrl] = useState(null)

  const pickHandler = uri => setImageUrl(uri);

  const createPostHandler = () => {
    const post = {
      text: input,
      date: new Date().toJSON(),
      img: imageUrl,
      booked: false
    }

    dispatch(addPost(post));
    navigation.navigate('Main')
  };


  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.title}> Create new post</Text>
          <TextInput
            style={styles.textArea}
            placeholder={'Type post description'}
            value={input}
            onChangeText={setinput}
            multiline
          />
          <PhotoPicker onPick={pickHandler} />
          <Button
            title='Create post'
            color={THEME.MAIN_COLOR}
            onPress={createPostHandler}
            disabled={!input || !imageUrl}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'coming-soon'
  },
  textArea: {
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#ccc'
  }
})
