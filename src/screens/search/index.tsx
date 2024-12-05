import React, {useState} from 'react';
import {View, Text, FlatList, SafeAreaView, Image} from 'react-native';
import SearchInput from '../../components/searchInput';
import {styles} from './style';
import {COLOR} from '../../constants/config';
import {useSearchCategoriesQuery} from '../../api/services/category.service';

const Search = () => {
  const [query, setQuery] = useState<string>('');
  const {data: searchResults = [], isFetching} = useSearchCategoriesQuery(
    query,
    {
      skip: query.length === 0,
    },
  );

  const handleSearch = (text: string) => {
    setQuery(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/fexx-logo.png')}
      />
      <SearchInput onSearch={handleSearch} />
      <FlatList
        data={query.length > 0 ? searchResults : []}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={
          <Text
            style={[
              styles.noResultText,
              {color: query.length > 0 ? 'red' : COLOR},
            ]}>
            {query.length > 0 ? 'Sonuç bulunamadı' : 'Aramaya Başlayın'}
          </Text>
        }
        renderItem={({item}) => (
          <View style={styles.resultItem}>
            <Text style={styles.resultText}>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
