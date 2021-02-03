import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const AppHeaderIcon = (props) => {
  return (
    <HeaderButton
      iconSize={24}
      color={'#fff'}
      IconComponent={Ionicons}
      {...props}
    >

    </HeaderButton>
  )
}

export default AppHeaderIcon
