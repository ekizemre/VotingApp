import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Questions from '../Questions';
import AddButton from '../../components/AddButton';
import AddNewModal from '../Questions/AddNewModal';

const Home = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <AddButton
                    icon_name={'add-circle-outline'}
                    onPress={() => setModalVisible(true)}
                />
            ),
            headerLeft: () => (
                <AddButton
                    icon_name={'person-circle-outline'}
                    onPress={() => navigation.navigate('Profile')}
                />
            ),
        });
    }, [navigation]);
    return (
        <View>
            <Questions />
            <Modal
                isVisible={modalVisible}
                swipeDirection="down" // sayfayı kapatmak için aşağı kaydırabilirsiniz.
                onSwipeComplete={() => setModalVisible(false)}
                style={{ justifyContent: 'flex-end', margin: 0 }}>
                <AddNewModal closeModal={() => setModalVisible(false)} />
            </Modal>
        </View>
    );
};

export default Home;
