import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';



const loading = () => {
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay
                style={{
                    width: 350,
                    height: 300,
                }}
                source={require('./animations/loading.json')}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

});

export default loading