/**
 * Created by ElisaSofia on 03/01/2018.
 */
import React from 'react';
//import { FlatList, Text, View } from 'react-native';
//import VisitList from "./VisitList";

import {StackNavigator} from 'react-navigation';

import AppScreen from './AppScreen';
import Detail from './Detail';

export default App = StackNavigator({
    Index: {
        screen: AppScreen
    },
    Detail: {
        screen: Detail
    }
},{
    headerMode:'none'
})

/*export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visitas: null};
        this.downloadVisits = this.downloadVisits.bind(this);
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
            <View style={{flex: 1, marginTop: 25}}>
                <VisitList visits={this.state.visitas}/>
            </View>


        )
    }
}*/

/*<View style={{flex: 1, marginTop: 25}}>
 <FlatList
 data={this.state.visitas}
 renderItem={({item}) =>
 <View>
 <Text style={{fontSize: 20, fontWeight:'bold'}}>
 Visit ID:{item.id}
 </Text>
 <Text>Date: {item.plannedFor.toString().split('T')[0]}</Text>
 <Text>Customer: {item.Customer.name}</Text>
 <Text>Salesman: {item.Salesman.fullname}</Text>
 <Text>Favourite: {item.favourite.toString()}</Text>
 <VisitList visits={this.state.visits}/>
 </View>

 }

 />
 </View>*/





/*import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
//2071ed41fff101fb2bd5
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {movies:[]};
    }

    componentDidMount(){
        this.getMoviesFromAPI().then(function(movies){
            if((typeof movies == "object")&&(movies instanceof Array)){
                for(let i=0; i<movies.length; i++){movies[i].key = i;}
                this.setState({movies: movies});
            }
        }.bind(this)).catch(function(exception){
            alert("Exception"+exception+"");
        });
    }
    async getMoviesFromAPI(){
        var url = "https://facebook.github.io/react-native/movies.json";
        //var url = "https://dcrmt.herokuapp.com/api/visits/flattened?token=2071ed41fff101fb2bd5";
        var response = await fetch(url,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json',
            }
        });
        var responseJson = await response.json();
        return responseJson.movies;
    }


  render() {
      //var visitas = [{key:'Visita1'}, {key:'Visita2'}, {key:'Visita 3'}]
    return (
        <View style{{flex:1, marginTop:25}}>
        <FlatList data={this.state.movies} renderItem={({item})=>
        <Text style={{fontSize:30}}>{item.title}</Text>}>

        </FlatList>
        </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
