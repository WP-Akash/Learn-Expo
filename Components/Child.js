import { View, Text } from 'react-native'
import React from 'react'

const Child = ({click}) => {
  return (
    <View>
      <Text onPress={click}>Child</Text>
    </View>
  )
}

export default Child