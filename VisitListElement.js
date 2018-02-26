/**
 * Created by Elisa on 31/12/2017.
 */
import React from 'react';
import { StyleSheet, AsyncStorage, FlatList, Text, View, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class VisitListElement extends React.Component {
    // Contructor
    constructor(props) {
        super(props);
        this.visitElementClicked= this.visitElementClicked.bind(this);
        this.saveDataVisitElement=this.saveDataVisitElement.bind(this);
        this.removeDataVisitElement=this.removeDataVisitElement.bind(this);
    }

    visitElementClicked(){
        this.props.visitListClick(this.props.visit);
    }

    _onPressButton(){
        console.log("Has pulsado")
    }

    saveDataVisitElement() {
        this.props.saveDataVisitList(this.props.visit);
    }

    removeDataVisitElement() {
        this.props.removeDataVisitList(this.props.visit);
    }

        render() {

            return (
                    <View>
                        <Text style={{fontSize: 20, fontWeight:'bold'}}>
                            Visit ID:{this.props.visit.id}
                        </Text>
                        <Text><Text style={{fontWeight: 'bold'}}>Date: </Text>{this.props.visit.plannedFor.toString().split('T')[0]}</Text>
                        <Text><Text style={{fontWeight: 'bold'}}>Customer: </Text>{this.props.visit.Customer.name}</Text>
                        <Text><Text style={{fontWeight: 'bold'}}>Salesman: </Text>{this.props.visit.Salesman.fullname}</Text>
                        <Text><Text style={{fontWeight: 'bold'}}>Favourite: </Text>{this.props.visit.favourite.toString()}</Text>
                        <TouchableHighlight style ={styles.button} onPress={this.visitElementClicked}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>Show Details</Text>
                        </TouchableHighlight>
                        <TouchableOpacity style ={styles.button} onPress={this.saveDataVisitElement}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>Save visit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style ={styles.button} onPress={this.removeDataVisitElement}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>Remove visit</Text>
                        </TouchableOpacity>
                    </View>



            );

    }
}

const styles = StyleSheet.create({

    button:{
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center'
    }
});