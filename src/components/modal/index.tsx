import React from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import {styles} from './style';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  productImage: string;
  productName?: string;
  productDetails?: string;
}

const ProductModal = ({
  visible,
  onClose,
  productImage,
  productName,
  productDetails,
}: ProductModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>
          {productImage && (
            <Image
              style={styles.image}
              source={{uri: `https:${productImage}`}}
            />
          )}
          <Text
            style={[
              styles.modalText,
              {textTransform: 'capitalize', fontSize: 30},
            ]}>
            {productName}
          </Text>
          <Text style={[styles.modalText, {fontSize: 22}]}>
            {productDetails}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default ProductModal;
