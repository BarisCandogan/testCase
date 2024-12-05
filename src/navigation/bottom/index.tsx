import React, {useMemo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Search from '../../screens/search';
import homeIcon from '../../assets/images/home.png';
import searchIcon from '../../assets/images/search.png';
import webIcon from '../../assets/images/web.png';
import {COLOR} from '../../constants/config';
import Web from '../../screens/web';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}: {route: {name: string}}) => ({
        headerShown: false,
        tabBarIcon: ({focused}: {focused: boolean}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = homeIcon;
          } else if (route.name === 'Web') {
            iconName = webIcon;
          } else if (route.name === 'Search') {
            iconName = searchIcon;
          }

          return (
            <View style={styles.iconContainer}>
              <Image
                source={iconName}
                style={[styles.icon, {tintColor: focused ? COLOR : 'grey'}]}
              />
            </View>
          );
        },
        tabBarActiveTintColor: COLOR,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarLabelStyle: {fontSize: 9, fontWeight: '700'},
        tabBarStyle: styles.tabBar,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Web" component={Web} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  iconContainer: {
    height: '100%',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  tabBar: {
    height: 60,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderColor: 'grey',
    position: 'absolute',
    borderLeftWidth: 0.2,
    paddingHorizontal: 20,
    borderRightWidth: 0.2,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.28,
    shadowRadius: 11.0,
    elevation: 24,
  },
});
