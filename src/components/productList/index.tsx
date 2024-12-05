import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View, Text, Alert} from 'react-native';
import {ProductModel} from '../../api/models/product.model';
import {styles} from './style';
import {useGetProductDetailQuery} from '../../api/services/product.service';
import ProductModal from '../modal';

interface ProductListProps {
  products: ProductModel[];
  screenWidth: number;
  title: string;
}

const ProductList = ({products, screenWidth, title}: ProductListProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null,
  );

  const handleProductPress = (product: ProductModel) => {
    if (product?.detail?.id) {
      setModalVisible(true);
      setSelectedProductId(product.detail.id);
    } else {
      Alert.alert('Hata', JSON.stringify(error.data.errorMessage));
    }
  };
  const {data: productDetail, error} = useGetProductDetailQuery(
    modalVisible ? selectedProductId || 0 : 0,
    {},
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.productTitle}>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Alışverişe Başla {'  ->'}</Text>
        </TouchableOpacity>
        <FlatList
          horizontal
          contentContainerStyle={styles.flatListContentContainer}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{paddingTop: 30}}
              onPress={() => handleProductPress(item)}>
              <Text style={styles.productText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        <ProductModal
          visible={modalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
          productImage={productDetail?.product?.image || ''}
          productName={productDetail?.product?.fullName}
          productDetails={productDetail?.extraDetails}
        />
      </View>
    </>
  );
};

export default ProductList;
