import React from 'react';
import { View, Text, Dimensions, ScrollView, TouchableHighlight } from 'react-native';

import ImageSlider from '../../components/react-native-image-slider';
import Controller from '../../controller';

export default class MainScreen extends React.Component {
    state = {
        stories: ["https:\/\/b.zmtcdn.com\/data\/pictures\/3\/18157413\/850fd0753b38552e155254309551e8b2.jpg?fit=around%7C800%3A1200&crop=800%3A1200%3B%2A%2C%2A", "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/3\/18157413\/3e696cce94c5ccceebad0a6b14c2a360.jpg?fit=around%7C800%3A1200&crop=800%3A1200%3B%2A%2C%2A"]
    }

    render() {
        let { item } = this.state;
        return (

            item ?
                <ScrollView style={{ flex: 1, backgroundColor: "#000000" }}>

                    <View style={{ flex: 1 }}>
                        
                        {/* background image slider */}
                        <ImageSlider
                            style={{ width: '100%', height: Dimensions.get('screen').height }}
                            images={item.images}
                            autoPlayWithInterval={4000}
                            blurImageRadius={0}
                            customButtons={(position, move) => (

                                <View style={{
                                    zIndex: 1, marginHorizontal: 12, justifyContent: 'center', alignItems: 'center', flexDirection: 'row',
                                }}>
                                    {/* show scoller */}
                                    {(item.images.map((image, index) => {

                                        return (
                                            <TouchableHighlight
                                                key={index}
                                                underlayColor="#000000"
                                                onPress={() => move(index)}
                                                style={{ opacity: 0.9, marginBottom: 60, marginTop: -60, alignItems: 'center', justifyContent: 'center' }}>

                                                <View style={{ margin: 4, width: Dimensions.get('screen').width / 5 - 14, height: 2, backgroundColor: (position === index) ? "white" : "grey" }} />

                                            </TouchableHighlight>
                                        );
                                    }))}
                                </View>
                            )}
                        />
                        {/* main container */}
                        <View
                            style={{ width: '100%', marginTop: -156 }}>
                            {/* type */}
                            <Text
                                style={{ color: 'white', fontSize: 14, paddingHorizontal: 16 }}>
                                {item.type.toUpperCase()}
                            </Text>
                            {/* title */}
                            <Text
                                style={{ color: 'white', fontSize: 22, fontWeight: 'bold', paddingHorizontal: 16, paddingVertical: 8 }}>
                                {item.name}
                            </Text>
                            {/* location */}
                            <Text
                                style={{ color: 'white', fontSize: 14, paddingHorizontal: 16 }}>
                                {'sector 29 Gurgaon'}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{ width: '100%', height: 200, backgroundColor: 'red', marginTop: 40 }}>
                        <Text>
                            {this.state.item && this.state.item.description}
                        </Text>
                    </View>



                </ScrollView> :
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <Text>Loading...</Text>
                </View>
        )
    }



    componentDidMount() {
        Controller.getDataPoints(this.updateCallbackState, this.errorHandler);
    }

    updateCallbackState = item => {
        console.log('response : ', item);
        this.setState({ item })
    }
    errorHandler = (e) => {
        console.log('error ocured : ', e);

    }
}