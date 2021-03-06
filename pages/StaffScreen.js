//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
} from 'react-native';

import Sear from '../my_component/se';
import { SearchBar, Button } from 'react-native-elements';
//import all the basic component we have used

export default class StaffScreen extends React.Component {
    state = {
        search: '',
    };
    componentDidMount() {
        return fetch(
            'http://172.16.156.150/API/get_tour_sraff.php',
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

                <View style={{ marginTop: 200, width: 400 }}>
                    <SearchBar
                        placeholder="search Staff..."
                        onChangeText={this.updateSearch}
                        value={this.state.search}
                    />

                </View>

                <Button
                    title="Search"
                    type="outline"
                    onPress={() =>
                        this.props.navigation.navigate('Search', {
                            params: this.state.search,
                        })
                    }
                />

                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 25
                    }}>STAFF </Text>


                <View>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1 }}>

                                <Text>Staff ID : {item.SID}</Text>
                                <Image source={require('../Image/7501.jpg')} />
                                <View style={{ width: 300, marginTop: 10, alignItems: 'center' }}>
                                    <Text>Name : {item.SName}</Text>
                                    <Text>Telephone : {item.STelephone}</Text>
                                    <Text>Photo : {item.SPhoto}</Text>
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