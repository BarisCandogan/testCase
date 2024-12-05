import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/config';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    flex: 0.9,
    alignItems: 'center',
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginVertical: 15,

    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 5,
  },
  buttonContainer: {
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  closeButton: {
    width: '10%',
    backgroundColor: COLOR,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
