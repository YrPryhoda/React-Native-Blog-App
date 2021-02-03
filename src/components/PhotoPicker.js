import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'

async function askForPermissions() {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.MEDIA_LIBRARY
  )

  if (status !== 'granted') {
    Alert.alert('Error', 'You did not accept camera permissions');
    return false
  } else {
    return true;
  }
}

const PhotoPicker = ({ onPick }) => {
  const [image, setimage] = useState(null)
  const takePhoto = async () => {
    const hasPermissions = await askForPermissions();

    if (!hasPermissions) {
      return
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9]
    })

    setimage(img.uri);
    onPick(img.uri);
  }

  return (
    <View style={styles.wrapper}>
      <Button title='Take photo' onPress={takePhoto} />
      {
        image && <Image source={{ uri: image }} style={styles.image} />
      }
    </View>
  )
}

export default PhotoPicker

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
})
