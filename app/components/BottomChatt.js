import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxHeight: 100,
    paddingHorizontal: 5,
    paddingBottom: 5,
    alignItems: "flex-end"
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  btnSend: {
    backgroundColor: '#57bb51',
    height: 40,
    width: 60,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  }
})

const BottomChatt = (props) => {
  const [message, setMessage] = useState('')

  const onSend = () => {
    setMessage('')
    props.onSend(message)

  }

  return (
    <View style={styles.wrapper}>
      <TextInput
        multiline={true}
        style={styles.input}
        placeholder={'Input text here'}
        value={message}
        onChangeText={val => setMessage(val)}
      />
      <TouchableOpacity
        disabled={message === ''}
        style={styles.btnSend}
        onPress={onSend}
      >
        <Text>send</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomChatt