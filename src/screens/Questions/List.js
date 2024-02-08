import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from "firebase/app";

// ...

const List = ({ data }) => {
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
                setUserEmail(user.id);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <View style={styles.main}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Detail", item.id)}>
                        <View style={styles.item}>
                            <Text style={styles.questionText}>{item.text}</Text>
                            <Text style={styles.userText}>By:{item.id} </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

// ...


const styles = StyleSheet.create({
    item: {
        padding: 17,
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        textAlign: 'center',
        elevation: 3,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#088AD1',
    },
    questionText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    userText: {
        color: '#ccc',
        fontSize: 12,
        marginTop: 5,
    },
    main: {
        backgroundColor: '#0EDDD1',
        height: "100%",
    }
});

export default List;
