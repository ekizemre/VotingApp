import { StyleSheet, Text, View, Box } from 'react-native'
import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_QUESTION_DETAIL } from './queries';
import Loading from '../../components/Loading';
import { Heading } from 'native-base';
import Form from "./Form";
import Results from './Results';

const Detail = ({ route }) => {
    const [id, setId] = useState(route.params);
    const [isVoted, setIsVoted] = useState(false);
    console.log(id);
    const { loading, data } = useQuery(GET_QUESTION_DETAIL, {
        variables: {
            id,
        },
    });

    if (loading) {
        return <Loading />;
    }

    const { text, options } = data.questions_by_pk;



    return (
        <View style={styles.detail}>
            <Heading>{text}</Heading>
            {!isVoted ? <Form options={options}
                setIsVoted={setIsVoted} /> : <Results id={id} />}

        </View>
    )
}

export default Detail;

const styles = StyleSheet.create({
    detail: {
        padding: 15,
    }
})