import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomNavigator from './src/navigation/bottom';
import {store, useTypedSelector} from './src/store/store';
import {Provider} from 'react-redux';
import Loading from './src/components/loading';

const GlobalLoader = () => {
  const isLoading = useTypedSelector(
    state =>
      state.apiService.queries &&
      Object.values(state.apiService.queries).some(
        query => query?.status === 'pending',
      ),
  );

  return isLoading ? <Loading /> : null;
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GlobalLoader />
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
