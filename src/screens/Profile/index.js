import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'; // useState eklenmiş
import { Box, Heading, Button } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const Profile = () => {
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
    const navigation = useNavigation();

    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUserEmail(user.email);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <Box justifyContent={"center"} alignItems={"center"} flex={1}>
            <Text>Hoş Geldiniz {userEmail} </Text>
            <Button my={6} colorScheme={"success"} onPress={() => navigation.navigate("Home")}>Profil Güncelle</Button>
            <Button colorScheme={"success"} onPress={() => navigation.navigate("Home")}>Canlı Anketlere Dön</Button>
            <Button my={6} colorScheme={"danger"} onPress={() => navigation.navigate("Login")}>Çıkış Yap</Button>


        </Box>
    );
};

export default Profile;

const styles = StyleSheet.create({});
