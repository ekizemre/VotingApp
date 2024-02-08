import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Radio, Box, Button, } from "native-base";
import { useMutation } from '@apollo/client';
import { NEW_ANSWER_MUTATION } from './queries';


const Form = ({ options, setIsVoted }) => {
    const [selected, setSelected] = useState("");

    const [newAnswer, { loading }] = useMutation(NEW_ANSWER_MUTATION);

    const handleSubmit = async () => {
        if (!selected) {
            return;
        }
        await newAnswer({
            variables: {
                option_id: selected,
            },
        });
        setIsVoted(true);
    };
    return (
        <Box py={"4"}>
            <Radio.Group value={selected} onChange={setSelected}>
                {options.map(option => (
                    <Radio key={option.id} value={option.id}
                        my={1}>{option.text}</Radio>
                ))}


            </Radio.Group>
            <Button
                mt={5}
                onPress={handleSubmit}
                isLoading={loading}
                colorScheme="blue"
                _text={{ color: "white", fontWeight: "bold" }}
                _loading={{ bg: "blue.500" }}
                _pressed={{ bg: "blue.700" }}
                rounded="md"
                borderWidth={1}
                borderColor="blue.500"
                bg="blue.500"
            >
                Gönder
            </Button>
        </Box>
    )
}

export default Form

const styles = StyleSheet.create({})