import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function CategoryListItem(props){
    const { category, onPress } = props
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.rank}>{category.id}</Text>
                <Text style={styles.name_destination}>{category.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'flex-start',
        flexDirection:'row',
        padding:16,
        top: 16,
        borderRadius: 4,
        backgroundColor:'#FFF',
        shadowColor:'#000',
        shadowOpacity:0.3,
        shadowRadius:10,
        shadowOffset:{width: 0, height:0},
        marginBottom: 16
    },
    rank: {
        flexGrow:1
    },
    name_destination:{
        flexGrow:10
    }
})