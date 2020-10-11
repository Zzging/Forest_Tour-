//This is an example code for Bottom Navigation//
import React, { Component } from 'react';
//import react in our code.
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity

} from 'react-native';
//import all the basic component we have used
import { SliderBox } from "react-native-image-slider-box";
export default class HomeScreen extends React.Component {
    //Home Screen to show in Home Option
    render() {
        return (
            this.state = {
                images: [
                    require('../Image/GTour.jpg'),
                    require('../Image/BTour.jpg'),
                    require('../Image/Lunch.jpg'),
                    require('../Image/Dinner.jpg'),
                ]
            },
            < ScrollView >
                <View>
                    <SliderBox
                        autoplay={true}
                        images={this.state.images}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                    <Text
                        style={{
                            marginTop: 150,
                            fontSize: 35
                        }}>Welcome To Forest Tour </Text>

                    {/* <View>
                        <WebView source={{ uri: 'https://thailandtourismdirectory.go.th/th/info/attraction/detail/itemid/21344' }}
                            style={{ marginTop: 20 }} />;
                    </View> */}
                </View>
            </ScrollView >

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF66',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },

});