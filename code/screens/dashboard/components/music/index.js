import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import playIcon from '../../../../resources/icons/play-button.png';
import moreIcon from '../../../../resources/icons/more.png';

export default () =>
    <View
        style={{ paddingVertical: 12 }}>
        <View
            style={{ position: 'absolute', start: 0, end: 0, top: 0, bottom: 0, zIndex: 0, backgroundColor: 'black', opacity: 0.4 }} />
        <Text
            style={{ fontSize: 14, color: 'white', paddingHorizontal: 16, fontWeight: 'bold', marginBottom: 16 }}>
            {'MUSIC'}
        </Text>

        {/* for now playing */}
        <View style={{ flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 8 }}>
            <Image
                source={playIcon}
                style={{ height: 36, width: 36, resizeMode: 'cover' }} />
            <View style={{ justifyContent: 'center', paddingHorizontal: 16 }}>
                <Text style={{ fontSize: 12, color: 'cyan' }}>Now playing...</Text>
                <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold', marginTop: 4 }}>Retro 90's Hit</Text>
            </View>
        </View>

        {/* queue */}
        <View style={{ flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 12 }}>
            <Image
                source={moreIcon}
                style={{ height: 36, width: 36, resizeMode: 'cover' }} />
            <View style={{ justifyContent: 'center', paddingHorizontal: 16 }}>
                <Text style={{ fontSize: 12, color: 'grey' }}>Also played here</Text>
                <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold', marginTop: 4 }}>House, Top 40, Chill House</Text>
            </View>
        </View>

    </View>

