/**
 * Created by ElisaSofia on 03/01/2018.
 */
import React from 'react';
import { AsyncStorage, FlatList, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import VisitList from "./VisitList";

export default class AppScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visitas: null,
            storedVisits: []};
        this.downloadVisits = this.downloadVisits.bind(this);
        this.appClick = this.appClick.bind(this);
        this.saveDataApp = this.saveDataApp.bind(this);
        this.removeDataApp = this.removeDataApp.bind(this);
        this.removeStoredVisits = this.removeStoredVisits.bind(this);
        this.loadStoredVisits = this.loadStoredVisits.bind(this);
        this.loadCRM = this.loadCRM.bind(this);
    }

    appClick(visitSelected){
        this.setState({
            visitSelected: visitSelected,
        });
        var fullfilledAt = (visitSelected.fulfilledAt == undefined) ? "<Empty>" : visitSelected.fulfilledAt.toString().split('T')[0];
        var targets = (visitSelected.Targets.length == 0) ? null : visitSelected.Targets;

        this.props.navigation.navigate('Detail', {
            visitID: [visitSelected.id],
            plannedFor: [visitSelected.plannedFor.toString().split('T')[0]],
            fulfilledAt: [fullfilledAt],
            Customer: visitSelected.Customer,
            Salesman : visitSelected.Salesman,
            targets: targets

        })
        console.log(visitSelected.id)
    }

    async saveDataApp(visit){
        try {
            var pos = this.state.storedVisits.indexOf(visit);
            //Si es igual a -1 significa que no esta y hay que meterlo
            if(pos == -1) {
                var currentVisit = JSON.stringify(visit);
                await AsyncStorage.setItem('@P7_2017_IWEB:visits', currentVisit);
                this.setState(
                    {
                        storedVisit: this.state.storedVisits.push(visit)
                    }
                );
            }
            console.log(this.state.storedVisits);
        } catch (error) { // Error saving data
            console.log(error);
            alert("Error guardando la visita");
        }
    }
//Aqui deberia removeItem con asyncstorage?? esque como se guarda
    //Todo con la misma clave se borraria todo
    async removeDataApp(visit){
        try {
            var pos = this.state.storedVisits.indexOf(visit);
            console.log(pos);
            //Si es disitinto de -1 significa que esta y hay que borrarla
            if(pos != -1) {
                await AsyncStorage.removeItem('@P7_2017_IWEB:visits');
                var currentVisit = null;
                var auxStoredVisits = [];
                for(var i=0; i<this.state.storedVisits.length; i++){
                    if(i!=pos) {
                        currentVisit = JSON.stringify(this.state.storedVisits[i]);
                        await AsyncStorage.setItem('@P7_2017_IWEB:visits', currentVisit);
                        auxStoredVisits.push(this.state.storedVisits[i]);
                    }
                }
                this.setState({
                    storedVisits: auxStoredVisits
                });

            }
            console.log(this.state.storedVisits);
        } catch (error) { // Error saving data
            alert("Error borrando la visita");
        }
    }

    async removeStoredVisits(){
        try {
            await AsyncStorage.removeItem('@P7_2017_IWEB:visits');
            this.loadCRM();
            this.setState({
                storedVisits: [],
            });

            console.log(this.state.storedVisits);
        } catch (error) { // Error saving data
            alert("Error borrando la visita");
        }

    }

    async loadStoredVisits(){
        try {
            var storedState = await AsyncStorage.getItem('@P7_2017_IWEB:visits');

                this.setState({
                    visitas: this.state.storedVisits
                });
                console.log(this.state.visitas);

        } catch (error) {
// Error retrieving state
            alert("Error cargando las visitas");
        }
    }

    loadCRM(){
        this.downloadVisits().then(function(visitas){
            if ((typeof visitas == "object") && (visitas instanceof Array)) {
                for (let i = 0; i < visitas.length; i++) {
                    visitas[i].key = i;
                }
                this.setState({visitas: visitas});
            }

        }.bind(this)).catch(function(exception){
            alert("Exception: '" + exception + "'");
        });

    }
    componentDidMount(){
        this.downloadVisits().then(function(visitas){
            if ((typeof visitas == "object") && (visitas instanceof Array)) {
                for (let i = 0; i < visitas.length; i++) {
                    visitas[i].key = i;
                }
                this.setState({visitas: visitas});
            }

        }.bind(this)).catch(function(exception){
            alert("Exception: '" + exception + "'");
        });
    }
    async downloadVisits(){
        var url =  'https://dcrmt.herokuapp.com/api/visits/flattened?token=2071ed41fff101fb2bd5';
        return await fetch(url, {
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res)=> res.json())
            .then((responseJson)=>{
                this.state.visitas = responseJson; //Esto no seria un setState????
                console.log('Se ha descargado');
                return responseJson;
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style ={styles.header}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 15}}>Welcome to the CRM</Text>
                </View>
                <TouchableHighlight style ={styles.button} onPress={this.loadCRM}>
                    <Text style={{fontWeight: 'bold'}}>Load CRM visits</Text>
                </TouchableHighlight>
                <TouchableHighlight style ={styles.button} onPress={this.loadStoredVisits}>
                    <Text style={{fontWeight: 'bold'}}>Load stored visits</Text>
                </TouchableHighlight>
                <TouchableOpacity  style ={styles.button}onPress={this.removeStoredVisits}>
                    <Text style={{fontWeight: 'bold'}}>Remove stored visits</Text>
                </TouchableOpacity>
                <VisitList visits={this.state.visitas} appClick={this.appClick}
                           saveDataApp={this.saveDataApp}
                           removeDataApp={this.removeDataApp}/>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        left: 10
    },
    header:{
        alignItems: 'center',
        justifyContent: 'center',
        left: -10,
    },
    button:{
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        justifyContent: 'center'
    }
});