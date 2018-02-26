/**
 * Created by Elisa on 03/01/2018.
 */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SalesmanDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{borderTopColor: 'black', borderTopWidth: 2}}>
                <Text><Text style={{fontWeight: 'bold'}}> Name: </Text>{this.props.Salesman.fullname}</Text>
                <Text><Text style={{fontWeight: 'bold'}}> E-mail: </Text>{this.props.Salesman.email1}</Text>
                <Text><Text style={{fontWeight: 'bold'}}> ID: </Text>{this.props.Salesman.id}</Text>
                <Text><Text style={{fontWeight: 'bold'}}> Phone: </Text>{this.props.Salesman.phone1}</Text>
            </View>
        )
    }
}