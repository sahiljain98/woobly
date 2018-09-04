import React from 'react';
import { View, FlatList, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import parkingIcon from '../../../../resources/icons/parking.png';

export default ({ premiumPrivilagesList }) =>
    <View
        style={{ paddingVertical: 12 }}>
        <View
            style={{ position: 'absolute', start: 0, end: 0, top: 0, bottom: 0, zIndex: 0, backgroundColor: 'black', opacity: 0.4 }} />
        <Text
            style={{ fontSize: 14, color: 'white', paddingHorizontal: 16, fontWeight: 'bold', marginBottom: 16 }}>
            {'WOOBLY PREMIUM PRIVILEGES'}
        </Text>

        <FlatList
            numColumns={3}
            data={premiumPrivilagesList}
            renderItem={({ item, index }) =>  
             <TouchableOpacity style={{ width: Dimensions.get('screen').width / 3 - 12, justifyContent: 'space-around', alignItems: 'center', margin: 4, padding: 8 }}>
            <Image
                source={parkingIcon}
                style={{ height: 36, width: 36, paddingTop: 16 }} />
            <Text
                style={{ fontSize: 12, color: 'white', textAlign: 'center', fontWeight: 'bold', margin: 4 }}
                numberOfLines={2}
                ellipsizeMode='tail'>
                {item.name.toUpperCase()}
            </Text>
        </TouchableOpacity>}
        />
    </View>

  