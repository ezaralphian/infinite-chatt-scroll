import React, { Component } from 'react'
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native'
import BottomChatt from '../components/BottomChatt'
import { FlatList } from 'react-native-gesture-handler'
import { ChattItem } from '../components/ChattItem'
import { setChatt, getChatt } from '../redux/actions/chattActions'
import { connect } from "react-redux";

const user1 = {
  name: 'udin',
  id: 1
}

const user2 = {
  name: 'ujang',
  id: 2
}

export class Chatt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  sendChatt(text) {
    const user = this.props.chatt[0] ?.user.id === 1 ? user2 : user1
    const item = {
      user,
      text: text
    }
    console.log(JSON.stringify(this.props.chatt));

    this.props.setChatt(item)
  }

  loadMore() {
    console.log('load');
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.props.getChatt()
      this.setState({ isLoading: false })
    }, 5000);
    
  }

  render() {
    return (
      <View style={styles.wrapper} >
        <FlatList
          data={this.props.chatt}
          contentContainerStyle={{ padding: 10 }}
          renderItem={({ item }) => (
            <ChattItem {...item}
            />
          )}
          ListFooterComponent={this.state.isLoading && <ActivityIndicator />}
          inverted
          onEndReached={() => this.loadMore()}
          keyExtractor={(item, i) => i}
        />
        <BottomChatt onSend={text => this.sendChatt(text)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: "space-between"
  }
})

const mapStateToProps = state => {
  return {
    chatt: state.chatt
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setChatt: data => dispatch(setChatt(data)),
    getChatt: data => dispatch(getChatt(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatt)