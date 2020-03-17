import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NavigationService from '../navigation/NavigationService'

export class Home extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.btnChatt} onPress={()=> NavigationService.navigate('Chatt') } >
          <Text>Chatt</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center"
  },
  btnChatt: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: '#eee'
  }
})

export default Home
