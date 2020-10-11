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
//import all the basic component we have used

export default class BookingsScreen extends React.Component {
    //Home Screen to show in Home Option
    state = {
        search: '',
    };
    componentDidMount() {
        return fetch(
            'http://172.16.156.150/API/get_tour_booking.php',
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
                    }}>ฺBookings</Text>

                <View>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1 }}>

                                <Text>Bookings ID : {item.CID}</Text>
                                <View style={{ width: 300, marginTop: 10, alignItems: 'center' }}>
                                    <Text>GTour : {item.GTour}</Text>
                                    <Text>BTour : {item.BTour}</Text>
                                    <Text>Lunch : {item.Lunch}</Text>
                                    <Text>Dinner : {item.Dinner}</Text>
                                    <Text>Date : {item.Date}</Text>
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