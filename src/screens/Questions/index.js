import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useSubscription } from '@apollo/client'
import { GET_QUESTİONS_SUBSCRIPTION } from './queries'
import List from './List';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Loading from '../../components/Loading';

const Questions = () => {

    const { loading, data } = useSubscription(GET_QUESTİONS_SUBSCRIPTION);

    if (loading) {
        return <Loading />
    }
    console.log('data', data)

    return <List data={data.questions} />

}




export default Questions

