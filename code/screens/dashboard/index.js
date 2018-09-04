import React from 'react';
import { View, Text, Dimensions, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';

import ImageSlider from '../../components/react-native-image-slider';

import Controller from '../../controller';
import Styles from '../../resources/styles';

import PremiumPrivilages from './components/premiumFeatures';
import UpcomingEvents from './components/upcomingEvents';
import AboutView from './components/about';
import PhotosVideos from './components/photosVideos';
import Music from './components/music';

export default class Dashboard extends React.Component {

    state = {
        defaultText: 'Loading...',
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
        let { item, premiumPrivilagesList, upcomingEventList } = this.state;
        return (

            item ?
                <ScrollView style={Styles.defaultContainer}>

                    <View style={{ flex: 1 }}>
                        {/* background image slider */}
                        {this.getBackgroundImageSlider(item)}

                        {/* main container */}
                        {this.getMainContainer(item)}
                    </View>

                    {/* premium features */}
                    <View
                        style={{ marginTop: 32 }}>
                        <PremiumPrivilages premiumPrivilagesList={premiumPrivilagesList} />
                        {this.getLineSeperator()}
                    </View>

                    {/* upcomming events */}
                    <View
                        style={Styles.marginContainer}>
                        <UpcomingEvents eventList={upcomingEventList} />
                        {this.getLineSeperator()}
                    </View>

                    {/* about */}
                    <View
                        style={Styles.marginContainer}>
                        <AboutView {...item} />
                        {this.getLineSeperator()}
                    </View>

                    {/* photos and videos */}
                    <View
                        style={Styles.marginContainer}>
                        <PhotosVideos images={item.images} />
                        {this.getLineSeperator()}
                    </View>

                    {/* music */}
                    <View
                        style={{ marginVertical: 24 }}>
                        <Music />
                    </View>

                    {/* booking */}
                    <View style={{ height: 1, backgroundColor: 'grey' }} />
                    {this.getBookingButtonView()}

                </ScrollView> :
                this.getDefaultView()
        )
    }

    componentDidMount() {
        // hit api to get event details
        Controller.getDataPoints(this.updateCallbackState, this.errorHandler);
    }


    /*----------------------------------- view functions ------------------------------------*/

    /**
     * get default view
     */
    getDefaultView = () =>
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            <Text>{this.state.defaultText}</Text>
        </View>

    /**
     * get background image slider
     * @param {*} item item
     */
    getBackgroundImageSlider = (item) =>
        <ImageSlider
            style={{ width: '100%', height: Dimensions.get('screen').height }}
            images={item.story}
            autoPlayWithInterval={4000}
            blurImageRadius={2.5}
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

    /**
     * get main container
     * @param {*} item item
     */
    getMainContainer = (item) =>
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


    /**
     * get booking button view
     */
    getBookingButtonView = () =>
        <View
            style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }} >
            <View style={{ flexDirection: 'row', padding: 16 }}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>₹1800</Text>
                <Text style={{ color: 'white', fontSize: 16 }}> per person</Text>
            </View>
            <TouchableOpacity
                style={{ backgroundColor: 'white', height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', margin: 8 }}>
                <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', padding: 12 }}>BOOK A TABLE</Text>
            </TouchableOpacity>

        </View>

    /**
     * get line seperator
     */
    getLineSeperator = () =>
        <View style={{ height: 2, backgroundColor: 'grey', marginHorizontal: 18, borderRadius: 4, marginTop: 4 }} />


    /*---------------------------------- utility functions -------------------------------- */

    /**
     * update callback state
     * @param {*} item event item
     */
    updateCallbackState = item => {
        console.log('response : ', item);
        this.setState({ item })
    }

    /**
     * error handler function
     * @param {*} e error
     */
    errorHandler = e => {
        console.log('error ocured : ', e);
        this.setState({ defaultText: e })
    }
}