import { RouteProp, useRoute } from '@react-navigation/native'
import { Box, Heading, Input, Text, HStack, IconButton, ArrowForwardIcon } from 'native-base'
import { StackParamList } from '../../types/StackNavigation'
import { Controller, useForm } from 'react-hook-form'
import { useRatingsScreen } from '../../hooks/useRatingsScreen'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'; 

type RouteProps = RouteProp<StackParamList, 'ratings'>

export default function Ratings() {
    const route = useRoute<RouteProps>()
    const { subject } = route.params
    const { control, handleSubmit } = useForm()
    const { calculateM1, calculateM2, calculateMF, nextPage } = useRatingsScreen()

    function handleRatings(data: any) {
        const M1 = calculateM1(data.FBN1, data.FBN2)
        const M2 = calculateM2(data.SBN1, data.SBN2, data.AF)
        const MF = calculateMF(M1, M2)
        const averages = {
            subject: subject,
            M1: M1,
            M2: M2,
            MF: MF,
        }
        nextPage(averages)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior according to platform
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
                <KeyboardAvoidingView behavior="padding">
                    <Heading fontSize={'2xl'} marginBottom={10} textAlign={'center'}>{subject}</Heading>
                    <Text marginBottom={5} fontSize={'lg'}>1° bimestre</Text>
                    <HStack space={3} marginBottom={5}>
                        <Controller control={control} name='FBN1' render={({ field: { onChange } }) => (
                            <Input
                                keyboardType='number-pad'
                                placeholder='N1'
                                w={'1/4'}
                                onChangeText={onChange} />
                        )} />
                        <Controller control={control} name='FBN2' render={({ field: { onChange } }) => (
                            <Input
                                keyboardType='number-pad'
                                placeholder='N2'
                                w={'1/4'}
                                onChangeText={onChange} />
                        )} />
                    </HStack>
                    <Text marginBottom={5} fontSize={'lg'}>2° bimestre</Text>
                    <HStack space={3} marginBottom={5}>
                        <Controller control={control} name='SBN1' render={({ field: { onChange } }) => (
                            <Input
                                keyboardType='number-pad'
                                placeholder='N1'
                                w={'1/4'}
                                onChangeText={onChange} />
                        )} />
                        <Controller control={control} name='SBN2' render={({ field: { onChange } }) => (
                            <Input
                                keyboardType='number-pad'
                                placeholder='N2'
                                w={'1/4'}
                                onChangeText={onChange} />
                        )} />
                        <Controller control={control} name='AF' render={({ field: { onChange } }) => (
                            <Input
                                keyboardType='number-pad'
                                placeholder='AF'
                                w={'1/4'}
                                onChangeText={onChange} />
                        )} />
                    </HStack>
                    <Box alignItems={'flex-end'}>
                        <IconButton
                            icon={<ArrowForwardIcon />}
                            onPress={handleSubmit(handleRatings)}
                            _icon={{
                                color: 'black',
                                size: 'md',
                            }} _hover={{
                                bg: 'white',
                            }} _pressed={{
                                bg: 'white',
                            }}
                        />
                    </Box>
                    </KeyboardAvoidingView>
                </Box>
            </Box>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
