import { RouteProp, useRoute } from '@react-navigation/native'
import { Box, Heading, Input, Text, HStack, IconButton, ArrowForwardIcon } from 'native-base'
import { StackParamList } from '../../types/StackNavigation'
import { Controller, useForm } from 'react-hook-form'
import { useRatingsScreen } from '../../hooks/useRatingsScreen'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'; 
import React, { useState } from 'react';

type RouteProps = RouteProp<StackParamList, 'ratings'>

export default function Ratings() {
    const route = useRoute<RouteProps>()
    const { subject } = route.params
    const { control, handleSubmit } = useForm()
    const { calculateM1, calculateM2, calculateMF, nextPage } = useRatingsScreen()
    
    const [inputStatus, setInputStatus] = useState({
        FBN1: 'default',
        FBN2: 'default',
        SBN1: 'default',
        SBN2: 'default',
        AF: 'default',
    });

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
        }
        nextPage(averages)
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
                                        handleRatingsInput('FBN1', sanitizedText);
                                        onChange(sanitizedText);
                                    }}
                                    value={value}
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
                                        handleRatingsInput('FBN2', sanitizedText);
                                        onChange(sanitizedText);
                                    }}
                                    value={value}
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
                                        handleRatingsInput('SBN1', sanitizedText);
                                        onChange(sanitizedText);
                                    }}
                                    value={value}
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
                                        handleRatingsInput('SBN2', sanitizedText);
                                        onChange(sanitizedText);
                                    }}
                                    value={value}
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
                                        handleRatingsInput('AF', sanitizedText);
                                        onChange(sanitizedText);
                                    }}
                                    value={value}
                                    bgColor={inputStatus.AF === 'invalid' ? 'red.50' : (inputStatus.AF === 'valid' ? 'blue.50' : 'white')}
                                    borderColor={inputStatus.AF === 'invalid' ? 'red.500' : (inputStatus.AF === 'valid' ? 'blue.500' : 'black')}
                                />
                            )} />
                        </HStack>
                        {Object.values(inputStatus).some((status) => status === 'invalid') && (
                            <Text color={'red.500'}>Acho difícil tirar mais que 10 em. Bora revisar essas notas ai</Text>
                        )} {}
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
