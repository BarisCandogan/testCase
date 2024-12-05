import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  logo: {
    height: 60,
    width: 150,
    resizeMode: 'contain',
  },
  noResultText: {
    marginTop: 100,
    fontSize: 25,
    textAlign: 'center',
  },
  resultItem: {
    justifyContent: 'center',
    marginLeft: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#888',
  },
  resultText: {
    fontSize: 20,
  },
});
