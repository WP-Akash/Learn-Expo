import { View, Text } from 'react-native'
import React from 'react'

const Parent = ({name}) => {
  return (
    <View>
      <Text>Parent {name}</Text>
    </View>
  )
}

export default Parent