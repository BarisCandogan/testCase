import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  title: {
    color: 'black',
    marginLeft: 30,
    marginTop: 40,
    fontSize: 35,
    fontWeight: 'bold',
  },
  loaderContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  logo: {
    height: 60,
    width: 150,
    resizeMode: 'contain',
  },
  bottomLogo: {
    alignSelf: 'center',
    marginBottom: 20,
    height: 100,
    width: 150,
    resizeMode: 'contain',
  },
});
