import React from 'react';
import {SafeAreaView, Image, Dimensions, ScrollView} from 'react-native';
import {styles} from './style';
import ProductList from '../../components/productList';
import Slider from '../../components/slider';
import {useGetProductsQuery} from '../../api/services/product.service';
import {useGetSlidersQuery} from '../../api/services/slider.service';

const Home = () => {
  const {width: screenWidth} = Dimensions.get('window');
  const {data: products} = useGetProductsQuery();
  const {data: sliders} = useGetSlidersQuery();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.logo}
          source={require('../../assets/images/fexx-logo.png')}
        />

        <Slider sliders={sliders?.[0]?.items || []} screenWidth={screenWidth} />
        <ProductList
          products={products || []}
          title="Oyunun kurallarını belirle!"
          screenWidth={screenWidth}
        />
        <Image
          style={[styles.logo, {alignSelf: 'center'}]}
          source={require('../../assets/images/fexx-logo.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
