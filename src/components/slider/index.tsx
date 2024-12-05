import React from 'react';
import {FlatList, Linking} from 'react-native';
import {SliderItemModel} from '../../api/models/slider.model';
import SliderItem from '../sliderItem';

interface SliderProps {
  sliders: SliderItemModel[];
  screenWidth: number;
}

const Slider = ({sliders, screenWidth}: SliderProps) => {
  const onBannerPress = (url: string) => {
    Linking.openURL(url).catch(err =>
      console.error('Bağlantı açılırken hata:', err),
    );
  };

  return (
    <>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={sliders}
        renderItem={({item}) => (
          <SliderItem
            onBannerPress={onBannerPress}
            screenWidth={screenWidth}
            sliders={item}
          />
        )}
      />
    </>
  );
};

export default Slider;
