import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//pages
import Home from './screens/Home';
import Questions from './screens/Questions';
import Ionicons from "@expo/vector-icons/Ionicons";
import AddButton from './components/AddButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detail from './screens/Detail';
import Login from './screens/Login';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'  >

                <Stack.Screen name="Home" component={Home} options={{
                    title: "Canlı Anketler",
                    headerTitleAlign: "center", headerStyle: { backgroundColor: "#D1CA75" }
                }} />
                <Stack.Screen name="Question" component={Questions} />
                <Stack.Screen name="Detail" component={Detail} options={{ title: "Canlı Anket Oylama", headerTitleAlign: "center", headerStyle: { backgroundColor: "#D1CA75" } }} />
                <Stack.Screen name="Login" options={{ title: "Giriş Yap", headerTitleAlign: "center", headerStyle: { backgroundColor: "#D1CA75" } }} component={Login} />
                <Stack.Screen name="Profile" component={Profile} options={{
                    title: "Profilim",
                    headerTitleAlign: "center", headerStyle: { backgroundColor: "#D1CA75" }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;