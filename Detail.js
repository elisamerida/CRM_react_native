/**
 * Created by Elisa on 03/01/2018.
 */

import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import VisitDetail from "./VisitDetail";
import CustomerDetail from "./CustomerDetail";
import SalesmanDetail from "./SalesmanDetail";
import TargetDetail from "./TargetDetail";

export default class Detail extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:'Visit Detail',
    });

    render(){
        const {goBack} = this.props.navigation;
        //var nombre = this.props.navigation.state.params.name;
        //console.log(nombre);
        return (
            <ScrollView style = {style.container}>
                <Button title="Go back to Visit List" onPress={()=> goBack()}/>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}> INFO </Text>
                <VisitDetail visitID={this.props.navigation.state.params.visitID}
                            plannedFor={this.props.navigation.state.params.plannedFor}
                            fulfilledAt={this.props.navigation.state.params.fulfilledAt}/>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}> TARGETS</Text>
                <TargetDetail targets={this.props.navigation.state.params.targets}/>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}> CUSTOMER</Text>
                <CustomerDetail Customer = {this.props.navigation.state.params.Customer}/>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}> SALESMAN</Text>
                <SalesmanDetail Salesman = {this.props.navigation.state.params.Salesman}/>
            </ScrollView>

        );
    }
}
/*salesmanName={this.props.navigation.state.params.salesmanName}
 salesmanEmail= {this.props.navigation.state.params.salesmanEmail}
 salesmanID={this.props.navigation.state.params.salesmanID}
 salesmanPhone={this.props.navigation.state.params.salesmanPhone}/>
 */

/*customerName={this.props.navigation.state.params.customerName}
 customerCode={this.props.navigation.state.params.customerCode}
 customerCif={this.props.navigation.state.params.customerCif}
 customerAddress={this.props.navigation.state.params.customerAddress}
 customerPhone={this.props.navigation.state.params.customerPhone}*/
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        marginTop: 24,
    },

});

/*<Text>VisitID: {this.props.navigation.state.params.visitID}</Text>
 <Text> Planned for:  {this.props.navigation.state.params.plannedFor}</Text>
 <Text> Fulfilled at: {this.props.navigation.state.params.fulfilledAt}</Text>
 */
