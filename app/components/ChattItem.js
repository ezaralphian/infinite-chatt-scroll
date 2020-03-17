import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 0.1,
    marginBottom: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
})

export const ChattItem = (props) => {
  const isUser1 = props.user.id === 1
  return (
    <View style={{  justifyContent: isUser1 ? "flex-start" : "flex-end", flexDirection: 'row' }} >
      <View style={[styles.wrapper,{backgroundColor: isUser1? '#fff': '#9878'}]} >
        <Text style={{flexWrap: "wrap"}} >{props.text}</Text>
      </View>
    </View>
  )
}