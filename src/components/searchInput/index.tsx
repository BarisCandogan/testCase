import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './style';
import useDebounce from '../../hooks/useDebounce';

interface SearchInputProps {
  onSearch: (value: string) => void;
}

const SearchInput = ({onSearch}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue]);

  const handleTextChange = (text: string) => {
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}
        placeholder="Aramak istediğiniz kategoriyi yazın..."
        onChangeText={handleTextChange}
      />
    </View>
  );
};

export default SearchInput;
