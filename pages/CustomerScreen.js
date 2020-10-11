//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    StyleSheet
} from 'react-native';

import Sear from '../my_component/se';
import { SearchBar } from 'react-native-elements';
//import all the basic component we have used

export default class StaffScreen extends React.Component {
    state = {
        search: '',
    };
    componentDidMount() {
        return fetch(
            'http://172.16.156.150/API/get_tour_customer.php'
        )
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    updateSearch = (search) => {
        this.setState({ search });
    };


    //Detail Screen to show from any Open detail button
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>


                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 25
                    }}>CUSTOMER</Text>

                <View>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1 }}>

                                <Text>Customer ID : {item.CID}</Text>
                                <View style={{ width: 300, marginTop: 10, alignItems: 'center' }}>
                                    <Text>Name : {item.CName}</Text>
                                    <Text>Telephone : {item.CTelephone}</Text>
                                    <Text>Sex : {item.CSex}</Text>
                                </View>

                            </View>
                        )}
                    />
                </View>

            </View>


        );
    }
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
});