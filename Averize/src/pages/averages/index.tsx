import { Box, Heading, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackParamList } from '../../types/StackNavigation';

type RouteProps = RouteProp<StackParamList, 'averages'>;

interface Notas {
    M1: string;
    M2: string;
    MF: string;
}

export default function Averages() {
    const route = useRoute<RouteProps>();
    const { subject } = route.params;

    // Estado local para armazenar as notas recuperadas do AsyncStorage
    const [notas, setNotas] = useState<Notas>({ M1: '', M2: '', MF: '' });

    useEffect(() => {
        AsyncStorage.getItem(`notas_${subject}`)
            .then((storedNotas) => {
                if (storedNotas) {
                    const parsedNotas: Notas = JSON.parse(storedNotas);
                    setNotas(parsedNotas);
                }
            })
            .catch((error) => {
                console.error('Erro ao recuperar as notas: ', error);
            });
    }, [subject]);

    return (
        <Box
            backgroundColor={'white'}
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
        >
            <Box width={'2/3'}>
                <Heading fontSize={'2xl'} marginBottom={10} textAlign={'center'}>
                    Médias parciais de {subject.toLowerCase()}
                </Heading>
                <Text marginBottom={5} fontSize={'lg'}>
                    Média do 1° bimestre: {route.params.M1}
                </Text>
                <Text marginBottom={5} fontSize={'lg'}>
                    Média do 2° bimestre: {route.params.M2}
                </Text>
                <Text marginBottom={5} fontSize={'lg'}>
                    Média final: {route.params.MF}
                </Text>
            </Box>
        </Box>
    );
}