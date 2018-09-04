import React from 'react';
import { View, Text, Dimensions, ScrollView, TouchableHighlight, Image, FlatList } from 'react-native';

import ImageSlider from '../../components/react-native-image-slider';
import Controller from '../../controller';

import PremiumPrivilages from './components/premiumFeatures';
import UpcomingEvents from './components/upcomingEvents';
import AboutView from './components/about';
import PhotosVideos from './components/photosVideos';
import Music from './components/music';

export default class MainScreen extends React.Component {
    state = {
        defaultText: 'Loading...',
        stories: ["https:\/\/b.zmtcdn.com\/data\/pictures\/3\/18157413\/850fd0753b38552e155254309551e8b2.jpg?fit=around%7C800%3A1200&crop=800%3A1200%3B%2A%2C%2A", "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/3\/18157413\/3e696cce94c5ccceebad0a6b14c2a360.jpg?fit=around%7C800%3A1200&crop=800%3A1200%3B%2A%2C%2A"],
        premiumPrivilagesList: [
            { name: 'free valet parking', key: '1' },
            { name: 'assured premium tables', key: '12' },
            { name: 'woobly hangout kit', key: '13' },
            { name: 'free welcome drinks', key: '14' },
            { name: 'extended happy hours', key: '15' },
        ],
        upcomingEventList: [
            { name: 'Back to School- DJ set by irin', key: '1', date: "22nd june", time: "10pm onwards", image: "https://previews.123rf.com/images/dzein/dzein1507/dzein150700001/42099736-volver-a-la-escuela-t%C3%ADtulo-palabras-con-art%C3%ADculos-escolares-realistas-con-l%C3%A1pices-de-colores-tijera-pluma-.jpg" },
            { name: 'Back to School', key: '12', date: "22nd june", time: "10pm onwards", image: "https://previews.123rf.com/images/dzein/dzein1507/dzein150700001/42099736-volver-a-la-escuela-t%C3%ADtulo-palabras-con-art%C3%ADculos-escolares-realistas-con-l%C3%A1pices-de-colores-tijera-pluma-.jpg" },
            { name: 'Back to School', key: '14', date: "22nd june", time: "10pm onwards", image: "https://previews.123rf.com/images/dzein/dzein1507/dzein150700001/42099736-volver-a-la-escuela-t%C3%ADtulo-palabras-con-art%C3%ADculos-escolares-realistas-con-l%C3%A1pices-de-colores-tijera-pluma-.jpg" },
            { name: 'Back to School', key: '15', date: "22nd june", time: "10pm onwards", image: "https://previews.123rf.com/images/dzein/dzein1507/dzein150700001/42099736-volver-a-la-escuela-t%C3%ADtulo-palabras-con-art%C3%ADculos-escolares-realistas-con-l%C3%A1pices-de-colores-tijera-pluma-.jpg" },
            { name: 'Back to School', key: '16', date: "22nd june", time: "10pm onwards", image: "https://previews.123rf.com/images/dzein/dzein1507/dzein150700001/42099736-volver-a-la-escuela-t%C3%ADtulo-palabras-con-art%C3%ADculos-escolares-realistas-con-l%C3%A1pices-de-colores-tijera-pluma-.jpg" },
        ]
    }

    render() {
        let { defaultText, item, premiumPrivilagesList, upcomingEventList } = this.state;
        return (

            item ?
                <ScrollView style={{ flex: 1, backgroundColor: "#000000" }}>

                    <View style={{ flex: 1 }}>

                        {/* background image slider */}
                        <ImageSlider
                            style={{ width: '100%', height: Dimensions.get('screen').height }}
                            images={item.story}
                            autoPlayWithInterval={4000}
                            blurImageRadius={4}
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

                                                <View style={{ margin: 4, width: Dimensions.get('screen').width / 5 - 14, borderRadius: 4, height: 2, backgroundColor: (position === index) ? "white" : "grey" }} />

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
                    {/* premium features */}
                    <View
                        style={{ marginTop: 32 }}>
                        <PremiumPrivilages premiumPrivilagesList={premiumPrivilagesList} />
                        <View style={{ height: 2, backgroundColor: 'grey', marginHorizontal: 18, borderRadius: 4, marginTop: 4 }} />
                    </View>
                    {/* upcomming events */}
                    <View
                        style={{ marginTop: 24 }}>
                        <UpcomingEvents eventList={upcomingEventList} />
                        <View style={{ height: 2, backgroundColor: 'grey', marginHorizontal: 18, borderRadius: 4, marginTop: 4 }} />
                    </View>

                    {/* about */}
                    <View
                        style={{ marginTop: 24 }}>
                        <AboutView {...item} />
                        <View style={{ height: 2, backgroundColor: 'grey', marginHorizontal: 18, borderRadius: 4, marginTop: 4 }} />
                    </View>

                    {/* photos and videos */}
                    <View
                        style={{ marginTop: 24 }}>
                        <PhotosVideos images={item.images} />
                        <View style={{ height: 2, backgroundColor: 'grey', marginHorizontal: 18, borderRadius: 4, marginTop: 4 }} />
                    </View>

                    {/* music */}
                    <View
                        style={{ marginVertical: 24 }}>
                        <Music />
                    </View>

                    {/* booking */}
                    <View style={{ height: 1, backgroundColor: 'grey' }} />
                    <View
                        style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }} >
                        <View style={{ flexDirection: 'row', padding: 16 }}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>₹1800</Text>
                            <Text style={{ color: 'white', fontSize: 16 }}> per person</Text>
                        </View>
                        <View
                            style={{ backgroundColor: 'white', height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', margin: 8 }}>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', padding: 12 }}>BOOK A TABLE</Text>
                        </View>

                    </View>



                </ScrollView> :
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <Text>{defaultText}</Text>
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
    errorHandler = e => {
        console.log('error ocured : ', e);
        this.setState({ defaultText: e })
    }
}