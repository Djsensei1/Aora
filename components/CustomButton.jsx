import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, ContainerStyles, textStyes, isLoading }) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7} className={`bg-secondary rounded-xl min-h-[62] items-center justify-center ${ContainerStyles} ${isLoading ? 'opacity-50' : ''}`} disabled={isLoading}>
      <Text className={`text-primary font-psemibold text-lg ${textStyes}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton