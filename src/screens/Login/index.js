import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const firebaseConfig = {
    apiKey: "AIzaSyDonFXRWPNsgHloRP6c6I4QIPK0ZsfiWi8",
    authDomain: "fir-auth-7696e.firebaseapp.com",
    projectId: "fir-auth-7696e",
    storageBucket: "fir-auth-7696e.appspot.com",
    messagingSenderId: "408904262158",
    appId: "1:408904262158:web:cd2d425486f5dbb6a7525f"
};

initializeApp(firebaseConfig);
const auth = getAuth();


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [animationVisible, setAnimationVisible] = useState(true);
    const navigation = useNavigation();



    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("User registered:", user);
                Alert.alert(
                    "Giriş Başarılı",

                );
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error registering user:", errorCode, errorMessage);
                Alert.alert("Error", errorMessage);
            });
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("User logged in:", user);
                navigation.navigate('Home');
                setAnimationVisible(false);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error logging in:", errorCode, errorMessage);
                Alert.alert("Error", errorMessage);
            });
    };




    return (

        <View style={styles.container}>
            {animationVisible && (
                <LottieView
                    source={require('../Login/login.json')}  // Animasyonunuzun yolunu düzenleyin
                    autoPlay
                    loop={true}
                    onAnimationFinish={() => setAnimationVisible(false)}
                    style={styles.animation}
                />
            )}

            <Text style={styles.title}>Giriş Yap</Text>
            <TextInput
                style={styles.input}
                placeholder="E-posta"
                onChangeText={(text) => setEmail(text)}
                value={email}

            />
            <TextInput
                style={styles.input}
                placeholder="Şifre"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
                <Text style={styles.buttonText} onPress={handleLogin}  >Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={handleRegister}  >Hızlı Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 8,
    },
    button: {
        backgroundColor: 'black',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    registerText: {
        marginTop: 16,
        color: 'blue',
    },
    animation: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
});

export default LoginScreen;
