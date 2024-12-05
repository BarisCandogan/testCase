import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {SliderItemModel} from '../../api/models/slider.model';

interface SliderProps {
  sliders: SliderItemModel;
  screenWidth: number;
  onBannerPress: (url: string) => void;
}

const SliderItem = ({onBannerPress, screenWidth, sliders}: SliderProps) => {
  return (
    <TouchableOpacity
      onPress={() => onBannerPress(sliders.link)}
      style={{width: screenWidth}}>
      <Image
        style={styles.image}
        source={{uri: `https:${sliders?.imageUrl}`}}
      />
      <View style={{marginLeft: 20}}>
        <Text style={styles.sliderTitle}>
          {'Slider Başlık ' + sliders.index}
        </Text>
        <Text style={styles.sliderText}>{sliders.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SliderItem;
