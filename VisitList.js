/**
 * Created by Elisa on 31/12/2017.
 */
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import VisitListElement from './VisitListElement';

export default class VisitList extends React.Component {

    // Contructor
    constructor(props) {
        super(props);
        this.visitListClick = this.visitListClick.bind(this);
        this.saveDataVisitList = this.saveDataVisitList.bind(this);
        this.removeDataVisitList = this.removeDataVisitList.bind(this);
    }

    visitListClick(visitSelected){
        this.props.appClick(visitSelected)
    }

    saveDataVisitList(visit) {
        this.props.saveDataApp(visit);
    }

    removeDataVisitList(visit) {
        this.props.removeDataApp(visit);
    }


    render() {
        var visits = this.props.visits;
        //console.log(visits)
        var lista =[];
        if (visits == null) {
            return (
                <Text>Cargando..</Text>
            );
        }else if(visits.length ==0){
            return (
                <Text>No hay visitas almacenadas</Text>
            );

        }else{
                return(
                    <View style={{flex: 1, marginTop: 25}}>
                        <FlatList
                            data={visits}
                            renderItem={({item}) =>
                            <View style={{borderTopColor: 'black', borderTopWidth: 2}}>
                              <VisitListElement visit={item} visitListClick={this.visitListClick}
                                                saveDataVisitList = {this.saveDataVisitList}
                                                removeDataVisitList = {this.removeDataVisitList}/>
                            </View>
                    }
                        />
                    </View>
                )


        }


    }
}

/*<Text style={{fontSize: 20, fontWeight:'bold'}}>
Visit ID:{item.id}
</Text>
<Text>Date: {item.plannedFor.toString().split('T')[0]}</Text>
<Text>Customer: {item.Customer.name}</Text>
<Text>Salesman: {item.Salesman.fullname}</Text>
<Text>Favourite: {item.favourite.toString()}</Text>*/
