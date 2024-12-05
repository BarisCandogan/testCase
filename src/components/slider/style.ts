import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  separator: {
    width: 12,
  },
  paginationContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
  },
});
