import React from 'react';
import { View, FlatList, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

export default ({ images }) =>
    <View
        style={{ paddingVertical: 12 }}>
        <View
            style={{ position: 'absolute', start: 0, end: 0, top: 0, bottom: 0, zIndex: 0, backgroundColor: 'black', opacity: 0.4 }} />
        <Text
            style={{ fontSize: 14, color: 'white', paddingHorizontal: 16, fontWeight: 'bold', marginBottom: 16 }}>
            {'PHOTOS & VIDEOS'}
        </Text>

        <FlatList
            horizontal
            data={images}
            renderItem={({ item, index }) =>
                <TouchableOpacity style={{ width: Dimensions.get('screen').width / 2 - 6, justifyContent: 'space-around', margin: 8, padding: 8, }}>
                    <Image
                        source={{ uri: item }}
                        style={{ height: Dimensions.get('screen').width / 2 - 12, width: Dimensions.get('screen').width / 2 - 12, alignSelf: 'center', borderRadius: 8 }} />
                </TouchableOpacity>}
        />
    </View>

