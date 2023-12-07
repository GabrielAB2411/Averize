import { RouteProp, useRoute } from '@react-navigation/native'
import { Box, Heading, Input, Text, HStack, IconButton, ArrowForwardIcon } from 'native-base'
import { StackParamList } from '../../types/StackNavigation'
import { Controller, useForm } from 'react-hook-form'
import { useRatingsScreen } from '../../hooks/useRatingsScreen'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RouteProps = RouteProp<StackParamList, 'ratings'>

export default function Ratings() {
    const route = useRoute<RouteProps>()
    const { subject } = route.params
    const { control, handleSubmit, setValue, getValues } = useForm()

    const { calculateM1, calculateM2, calculateMF, nextPage } = useRatingsScreen()

    const [inputStatus, setInputStatus] = useState({
        FBN1: 'default',
        FBN2: 'default',
        SBN1: 'default',
        SBN2: 'default',
        AF: 'default',
    });

    useEffect(() => {
        // Recuperar as notas do AsyncStorage quando o componente for montado
        AsyncStorage.getItem(`notas_${subject}`)
            .then((storedNotas) => {
                if (storedNotas) {
                    const parsedNotas = JSON.parse(storedNotas);

                    // Preencher os campos de entrada com as notas recuperadas
                    Object.keys(parsedNotas).forEach((fieldName) => {
                        setValue(fieldName, parsedNotas[fieldName]);
                    });
                }
            })
            .catch((error) => {
                console.error('Erro ao recuperar as notas: ', error);
            });
    }, []);

    const handleRatingsInput = (fieldName: string, value: string) => {
        let numericValue = parseFloat(value);
        let status = 'default';

        if (numericValue > 10 || numericValue < 0) {
            status = 'invalid';
        } else if (!isNaN(numericValue)) {
            status = 'valid';
        }

        setInputStatus({ ...inputStatus, [fieldName]: status });
    };

    function handleRatings(data: any) {
        const M1 = calculateM1(parseFloat(data.FBN1), parseFloat(data.FBN2))
        const M2 = calculateM2(data.SBN1, data.SBN2, data.AF)
        const MF = calculateMF(M1, M2)
        const averages = {
            subject: subject,
            M1: M1.toPrecision(2),
            M2: M2.toPrecision(2),
            MF: MF.toPrecision(2),
        };

        // Salvar as notas no AsyncStorage
        AsyncStorage.setItem(`notas_${subject}`, JSON.stringify(data))
            .then(() => {
                nextPage(averages);
            })
            .catch((error) => {
                console.error('Erro ao salvar as notas: ', error);
            });
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Box
                    backgroundColor={'white'}
                    flex={1}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Box width={'2/3'}>
                        <Heading fontSize={'2xl'} marginBottom={10} textAlign={'center'}>{subject}</Heading>
                        <Text marginBottom={5} fontSize={'lg'}>1° bimestre</Text>
                        <HStack space={3} marginBottom={5}>
                            <Controller control={control} name='FBN1' render={({ field: { onChange, value } }) => (
                                <Input
                                    keyboardType='decimal-pad'
                                    placeholder='N1'
                                    w={'1/4'}
                                    maxLength={4}
                                    onChangeText={(text) => {
                                        const sanitizedText = text.replace(',', '.');
                                        setValue('FBN1', sanitizedText);
                                        handleRatingsInput('FBN1', sanitizedText);
                                    }}
                                    value={getValues('FBN1')}
                                    bgColor={inputStatus.FBN1 === 'invalid' ? 'red.50' : (inputStatus.FBN1 === 'valid' ? 'blue.50' : 'white')}
                                    borderColor={inputStatus.FBN1 === 'invalid' ? 'red.500' : (inputStatus.FBN1 === 'valid' ? 'blue.500' : 'black')}
                                />
                            )} />
                            <Controller control={control} name='FBN2' render={({ field: { onChange, value } }) => (
                                <Input
                                    keyboardType='decimal-pad'
                                    placeholder='N2'
                                    w={'1/4'}
                                    maxLength={4}
                                    onChangeText={(text) => {
                                        const sanitizedText = text.replace(',', '.');
                                        setValue('FBN2', sanitizedText);
                                        handleRatingsInput('FBN2', sanitizedText);
                                    }}
                                    value={getValues('FBN2')}
                                    bgColor={inputStatus.FBN2 === 'invalid' ? 'red.50' : (inputStatus.FBN2 === 'valid' ? 'blue.50' : 'white')}
                                    borderColor={inputStatus.FBN2 === 'invalid' ? 'red.500' : (inputStatus.FBN2 === 'valid' ? 'blue.500' : 'black')}
                                />
                            )} />
                        </HStack>
                        <Text marginBottom={5} fontSize={'lg'}>2° bimestre</Text>
                        <HStack space={3} marginBottom={5}>
                            <Controller control={control} name='SBN1' render={({ field: { onChange, value } }) => (
                                <Input
                                    keyboardType='decimal-pad'
                                    placeholder='N1'
                                    w={'1/4'}
                                    maxLength={4}
                                    onChangeText={(text) => {
                                        const sanitizedText = text.replace(',', '.');
                                        setValue('SBN1', sanitizedText);
                                        handleRatingsInput('SBN1', sanitizedText);
                                    }}
                                    value={getValues('SBN1')}
                                    bgColor={inputStatus.SBN1 === 'invalid' ? 'red.50' : (inputStatus.SBN1 === 'valid' ? 'blue.50' : 'white')}
                                    borderColor={inputStatus.SBN1 === 'invalid' ? 'red.500' : (inputStatus.SBN1 === 'valid' ? 'blue.500' : 'black')}
                                />
                            )} />
                            <Controller control={control} name='SBN2' render={({ field: { onChange, value } }) => (
                                <Input
                                    keyboardType='decimal-pad'
                                    placeholder='N2'
                                    w={'1/4'}
                                    maxLength={4}
                                    onChangeText={(text) => {
                                        const sanitizedText = text.replace(',', '.');
                                        setValue('SBN2', sanitizedText);
                                        handleRatingsInput('SBN2', sanitizedText);
                                    }}
                                    value={getValues('SBN2')}
                                    bgColor={inputStatus.SBN2 === 'invalid' ? 'red.50' : (inputStatus.SBN2 === 'valid' ? 'blue.50' : 'white')}
                                    borderColor={inputStatus.SBN2 === 'invalid' ? 'red.500' : (inputStatus.SBN2 === 'valid' ? 'blue.500' : 'black')}
                                />
                            )} />
                            <Controller control={control} name='AF' render={({ field: { onChange, value } }) => (
                                <Input
                                    keyboardType='decimal-pad'
                                    placeholder='AF'
                                    w={'1/4'}
                                    maxLength={4}
                                    onChangeText={(text) => {
                                        const sanitizedText = text.replace(',', '.');
                                        setValue('AF', sanitizedText);
                                        handleRatingsInput('AF', sanitizedText);
                                    }}
                                    value={getValues('AF')}
                                    bgColor={inputStatus.AF === 'invalid' ? 'red.50' : (inputStatus.AF === 'valid' ? 'blue.50' : 'white')}
                                    borderColor={inputStatus.AF === 'invalid' ? 'red.500' : (inputStatus.AF === 'valid' ? 'blue.500' : 'black')}
                                />
                            )} />
                        </HStack>
                        {Object.values(inputStatus).some((status) => status === 'invalid') && (
                            <Text color={'red.500'}>Acho difícil tirar mais que 10 em. Bora revisar essas notas aí!</Text>
                        )}
                        <Box alignItems={'flex-end'}>
                            <IconButton
                                icon={<ArrowForwardIcon />}
                                onPress={handleSubmit(handleRatings)}
                                _icon={{
                                    color: 'black',
                                    size: 'md',
                                }} _hover={{
                                    bg: 'white',
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
