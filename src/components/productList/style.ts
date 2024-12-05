import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingLeft: 10,
    paddingVertical: 50,
  },

  productTitle: {
    color: '#fff',
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  flatListContentContainer: {
    alignItems: 'center',
  },
  image: {
    height: 300,
    marginRight: 20,
    width: 300,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  paginationContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: 13,
  },

  button: {
    marginTop: 20,
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  productText: {
    fontSize: 40,
    color: '#fff',
    marginRight: 20,
    fontWeight: '400',
  },
  buttonText: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
