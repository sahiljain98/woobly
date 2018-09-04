import React from 'react';
import { View, Text } from 'react-native';


export default (item) =>
    <View
        style={{ width: '100%', paddingVertical: 12,paddingHorizontal:4 }}>
        <View
            style={{ position: 'absolute', start: 0, end: 0, top: 0, bottom: 0, zIndex: 0, backgroundColor: 'black', opacity: 0.4 }} />
        <Text
            style={{ fontSize: 14, color: 'white', paddingHorizontal: 16, fontWeight: 'bold' }}>
            {'ABOUT ' + item.name.toUpperCase()}
        </Text>
        <Text
            style={{ fontSize: 14, color: 'white', padding: 16, textAlign: 'justify' }}
            numberOfLines={6}
            ellipsizeMode="tail">
            {item.description}
        </Text>
    </View>