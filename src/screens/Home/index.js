import { StyleSheet, View, Modal } from 'react-native'
import { Button, Text } from "native-base";
import React, { useState } from 'react';
import Questions from '../Questions';
import AddButton from '../../components/AddButton';
import AddNewModal from '../Questions/AddNewModal';


const Home = ({ navigation }) => {


    const [modalVisible, setModalVisible] = useState(false);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <AddButton icon_name={"add-circle-outline"} onPress={() => setModalVisible((prev) => !prev)} />
            ),
            headerLeft: () => (
                <AddButton icon_name={"person-circle-outline"} onPress={() => navigation.navigate("Profile")} />
            ),
        });
    }, [navigation]);
    return (
        <View>
            <Questions />
            <Modal
                animationType="slide"
                visible={modalVisible}
                presentationStyle={"pageSheet"}
                onRequestClose={() => setModalVisible(false)}
            >
                <AddNewModal closeModal={() => setModalVisible(false)} />
            </Modal>
        </View>
    );
};

export default Home

