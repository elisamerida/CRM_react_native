/**
 * Created by Elisa on 03/01/2018.
 */
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';



export default class TargetElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.target);
        return (
            <View style={{borderTopColor: 'black', borderTopWidth: 1}}>
                <Text><Text style={{fontWeight: 'bold'}}> Target type: </Text>{this.props.target.TargetType.name}</Text>
                <Text><Text style={{fontWeight: 'bold'}}> Target notes: </Text>{this.props.target.notes}</Text>
                <Text><Text style={{fontWeight: 'bold'}}> Company name: </Text>{this.props.target.Company.name}</Text>
                <Text><Text style={{fontWeight: 'bold'}}> Company info: </Text>{this.props.target.Company.notes}</Text>
                <Text><Text style={{fontWeight: 'bold'}}> Company website: </Text>{this.props.target.Company.web1}</Text>
            </View>
        )
    }
}