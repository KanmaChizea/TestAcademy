import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AirtimeScreen from '../screens/AirtimeScreen';
import BillsScreen from '../screens/BillsScreen';
import TransferScreen from '../screens/TransferScreen';
import CardsScreen from '../screens/CardsScreen';
import DataScreen from '../screens/DataScreen';
import LoansScreen from '../screens/LoansScreen';
import QrPayScreen from '../screens/QrPayScreen';
import { HomeApp } from '../components/module/home/HomeApp';

const Stack = createNativeStackNavigator();
const navigation = useNavigation();
export type NavigationProps = {
  navigation: any;
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cards">
        <Stack.Screen name="Home" component={HomeApp} />
        <Stack.Screen name="Airtime" component={AirtimeScreen} />
        <Stack.Screen name="Bills" component={BillsScreen} />
        <Stack.Screen name="Cards" component={CardsScreen} />
        <Stack.Screen name="Data" component={DataScreen} />
        <Stack.Screen name="Loans" component={LoansScreen} />
        <Stack.Screen name="QrPay" component={QrPayScreen} />
        <Stack.Screen name="Transfer" component={TransferScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
