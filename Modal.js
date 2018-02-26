/**
 * Created by Elisa on 31/12/2017.
 */
import React from 'react';
import{View, Text} from 'react-native';

export default class Modal extends React.Component{
    render(){
        return(
            <View style = {{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text>Pantalla Modal</Text>
            </View>
        )
    }
}