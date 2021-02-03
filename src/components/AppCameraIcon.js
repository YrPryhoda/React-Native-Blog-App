import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderIcon from './AppHeaderIcon';
import { useNavigation } from '@react-navigation/native'

const AppCameraIcon = () => {
  const navigation = useNavigation();


  return (
    <HeaderButtons
      HeaderButtonComponent={AppHeaderIcon}
    >
      <Item
        title='Take photo'
        iconName="ios-camera"
        onPress={() => {
          navigation.navigate('Create')
        }}
      />
    </HeaderButtons>
  )
}

export default AppCameraIcon
