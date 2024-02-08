import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

const AddButton = ({ onPress, icon_name }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name={icon_name} size={32} color="green"></Ionicons>
        </TouchableOpacity>


    )
}

export default AddButton

