import React from 'react';
import { Heading, Box, Progress, Text, VStack } from 'native-base';

const Item = ({ item, total }) => {
    const percentage = ((item.answers_aggregate.aggregate.count * 100) / total).toFixed(1);

    return (
        <VStack space={3} alignItems="flex-start">
            <Heading size="sm" mb={1}>
                {item.text}
            </Heading>

            <Box flexDirection="row" alignItems="center">
                <Text fontWeight="bold">{item.answers_aggregate.aggregate.count}</Text>
                <Text ml={1}>Oy</Text>
            </Box>

            <Box width="100%">
                <Progress
                    value={item.answers_aggregate.aggregate.count}
                    max={total}
                    colorScheme="teal"
                    height={8}
                    borderRadius={4}
                />
            </Box>

            <Box flexDirection="row" justifyContent="space-between" width="100%">
                <Text fontSize="sm" color="gray.500">
                    %{percentage} Oy Oranı
                </Text>
                <Text fontSize="sm" color="gray.500">
                    Toplam: {total} Oy
                </Text>
            </Box>
        </VStack>
    );
};

export default Item;
