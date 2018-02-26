/**
 * Created by Elisa on 03/01/2018.
 */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render (){
        return(
        <View style={{borderTopColor:'black', borderTopWidth:2}}>
            <Text><Text style={{fontWeight: 'bold'}}> VisitID: </Text>{this.props.visitID}</Text>
            <Text><Text style={{fontWeight: 'bold'}}> Planned for: </Text>{this.props.plannedFor}</Text>
            <Text><Text style={{fontWeight: 'bold'}}> Fulfilled at: </Text>{this.props.fulfilledAt}</Text>
        </View>
        );
    }


}
