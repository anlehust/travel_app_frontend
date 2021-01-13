import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import CategoryListItem from '../components/CategoryListItem'

export default class Destinations extends React.Component {
  static navigationOptions ={
    title: 'Điểm đến dành cho bạn'
  }
  constructor(props){
    super(props);
    this.state = {
      destinations:[
        {id: 1, name:'Hồ Gươm'},
        {id: 2, name:'Nhà Hát Lớn'},
        {id: 3, name:'Hồ Tây'},
        {id: 4, name:'Lăng Hồ Chủ Tịch'},
        {id: 5, name:'Văn Miếu Quốc Tử Giám'},
      ]
    };
  }
  render(){
    const {navigation} = this.props;
    const {destinations} = this.state;
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={destinations}
        renderItem={({item}) => <CategoryListItem
        category = {item} 
        onPress = {()=>navigation.navigate('Destination',
        {destinationName:item.name}
        )}
         />}
        keyExtractor={item => `${item.id}`}
      />
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft:16,
    paddingRight: 16,
    paddingTop: 16
  }
});