/**
 * Created by Elisa on 03/01/2018.
 */

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class CustomerDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.Customer);
        return (
            <View style={{borderTopColor: 'black', borderTopWidth: 2}}>
                <Text><Text style={{fontWeight: 'bold'}}> Name:</Text>{this.props.Customer.name}</Text>
                <Text><Text style={{fontWeight: 'bold'}}> Code: </Text>{this.props.Customer.code}</Text>
                <Text><Text style={{fontWeight: 'bold'}}> Cif: </Text>{this.props.Customer.cif}</Text>
                <Text><Text style={{fontWeight: 'bold'}}> Address: </Text>{this.props.Customer.address}</Text>
                <Text><Text style={{fontWeight: 'bold'}}> Phone: </Text>{this.props.Customer.phone1}</Text>
            </View>
        )
    }
}
