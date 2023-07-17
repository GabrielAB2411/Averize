import { RouteProp, useRoute } from '@react-navigation/native'
import { Box, Heading, Input, Text, HStack } from 'native-base'
import { StackParamList } from '../../types/StackNavigation'

type RouteProps = RouteProp<StackParamList, 'ratings'>

export default function Ratings() {
    const route = useRoute<RouteProps>()
    const { subject } = route.params

    return (
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
                    <Input keyboardType='number-pad' placeholder='N1' w={'1/4'} />
                    <Input keyboardType='number-pad' placeholder='N2' w={'1/4'} />
                </HStack>
                <Text marginBottom={5} fontSize={'lg'}>2° bimestre</Text>
                <HStack space={3} marginBottom={5}>
                    <Input keyboardType='number-pad' placeholder='N1' w={'1/4'} />
                    <Input keyboardType='number-pad' placeholder='N2' w={'1/4'} />
                    <Input keyboardType='number-pad' placeholder='AF' w={'1/4'} />
                </HStack>
                <Text marginBottom={5} fontSize={'lg'}>Médias</Text>
                <HStack space={3} marginBottom={5}>
                    <Input isReadOnly placeholder='M1' w={'1/4'} />
                    <Input isReadOnly placeholder='M2' w={'1/4'} />
                    <Input isReadOnly placeholder='MF' w={'1/4'} />
                </HStack>
            </Box>
        </Box>
    )
}
