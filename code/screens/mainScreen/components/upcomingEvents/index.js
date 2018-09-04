import React from 'react';
import { View, FlatList, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

export default ({ eventList }) =>
    <View
        style={{ paddingVertical: 12 }}>
        <View
            style={{ position: 'absolute', start: 0, end: 0, top: 0, bottom: 0, zIndex: 0, backgroundColor: 'black', opacity: 0.4 }} />
        <Text
            style={{ fontSize: 14, color: 'white', paddingHorizontal: 16, fontWeight: 'bold', marginBottom: 16 }}>
            {'UPCOMING EVENTS'}
        </Text>

        <FlatList
            horizontal
            data={eventList}
            renderItem={({ item, index }) =>
                <TouchableOpacity style={{ width: Dimensions.get('screen').width / 3 - 6, justifyContent: 'space-around', margin: 8, padding: 8, }}>
                    <Image
                        source={{ uri: item.image }}
                        style={{ height: Dimensions.get('screen').width / 3 - 12, width: Dimensions.get('screen').width / 3 - 12, alignSelf: 'center', borderRadius: 8 }} />
                    <Text
                        style={{ fontSize: 12, color: 'white', fontWeight: 'bold', marginVertical: 4 ,marginTop:8}}
                        numberOfLines={2}
                        ellipsizeMode='tail'>
                        {item.name.toUpperCase()}
                    </Text>
                    <Text
                        style={{ fontSize: 12, color: 'grey', fontWeight: 'bold' }}>
                        {item.date}
                    </Text>
                    <Text
                        style={{ fontSize: 12, color: 'grey', marginVertical: 4, fontWeight: 'bold' }}>
                        {item.time}
                    </Text>
                </TouchableOpacity>}
        />
    </View>

