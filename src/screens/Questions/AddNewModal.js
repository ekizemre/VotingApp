import React, { useState } from 'react';
import { Box, Heading, Input, Button, useToast } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ADD_NEW_QUESTION_MUTATION } from './queries';
import { useMutation } from '@apollo/client';

const AddNewModal = ({ closeModal }) => {
    const toast = useToast();

    const [addNewQuestion, { loading, error }] = useMutation(
        ADD_NEW_QUESTION_MUTATION);
    const [title, setTitle] = useState("");
    const [options, setOptions] = useState([{ text: '' }, { text: '' }]);

    const handleOptionChange = (val, i) => {
        const updatedOptions = [...options];
        updatedOptions[i].text = val;
        setOptions(updatedOptions);
    }

    const handleNewOption = () => {
        if (options.length >= 5) {
            return;
        }
        setOptions((prev) => [...prev, { text: "" }]);
    };

    const handleSubmit = async () => {
        const filteredOptions = options.filter((item) => item.text !== "");

        if (!title || filteredOptions.length < 2) {
            return;
        }

        const result = await addNewQuestion({
            variables: {
                title,
                options: filteredOptions,
            },
        });

        closeModal();
        toast.show({
            title: "Sorunuz Eklendi",
            placement: "top",
            status: "success",
        });
        console.log("result", result);
    };

    return (
        <Box p={6} backgroundColor="#f0f0f0" flex={1}>
            <Heading mb={4} fontSize={24} color="#333">
                Yeni Soru Ekle
            </Heading>

            <Input
                mb={4}
                placeholder="Soru Başlığı"
                fontSize={20}
                borderColor="#686565"
                value={title}
                onChangeText={setTitle}
            />

            <Heading mb={4} fontSize={20} color="#333">
                Cevaplar
            </Heading>

            {options.map((item, i) => (
                <Input
                    mb={3}
                    key={i}
                    placeholder={`Seçenek ${i + 1}`}
                    fontSize={15}
                    borderColor="#686565"
                    value={item.text}
                    onChangeText={(val) => handleOptionChange(val, i)}
                />
            ))}

            <Button
                mt={3}
                colorScheme="red"
                leftIcon={<Ionicons size={20} name="add-circle-outline" />}
                onPress={handleNewOption}
                disabled={options.length >= 5}
            >
                Seçenek Ekle
            </Button>

            <Button
                mt={5}
                colorScheme="green"
                onPress={handleSubmit}
                isLoading={loading}
            >
                Kaydet
            </Button>
        </Box>
    );
};

export default AddNewModal;
