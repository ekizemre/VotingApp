import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Box } from 'native-base';

const Item = ({ item }) => {
    const navigation = useNavigation();
    return (
        <Box>
            <TouchableOpacity style={styles.item}
                onPress={() => navigation.navigate("Detail")}>
                <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Sil</Text>
            </TouchableOpacity>
        </Box>

    )
}

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 1,
        borderColor: "#fff",
        padding: 16,
    },
    text: {
        fontSize: 20,
    },
});
export default Item