import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default class Destination extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('destinationName')
    };
  };
  render() {
    return (
      <View><Text>Destination</Text></View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});