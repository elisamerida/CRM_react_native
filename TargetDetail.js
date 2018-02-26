/**
 * Created by Elisa on 03/01/2018.
 */
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import TargetElement from "./TargetElement";

export default class TargetDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var targets= this.props.targets;
        console.log(targets);
        if(targets == null){
            return(
                <View style={{borderTopColor: 'black', borderTopWidth: 2}}>
                    <Text>No hay targets</Text>
                </View>
            )
        }else {
            return (
                <View style={{borderTopColor: 'black', borderTopWidth: 2}}>
                    <FlatList
                        data={targets}
                        renderItem={({item}) =>
                            <View>
                                <TargetElement target={item}/>
                            </View>
                        }
                    />
                </View>
            )
        }
    }
}