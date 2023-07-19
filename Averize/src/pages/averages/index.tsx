import { Box, Heading, Text } from 'native-base'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StackParamList } from '../../types/StackNavigation'

type RouteProps = RouteProp<StackParamList, 'averages'>

export default function Averages() {
    const route = useRoute<RouteProps>()
    const { subject, M1, M2, MF } = route.params

    return (
        <Box
            backgroundColor={'white'}
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
        >
            <Box width={'2/3'}>
                <Heading fontSize={'2xl'} marginBottom={10} textAlign={'center'}>Médias parciais de {subject.toLowerCase()}</Heading>
                <Text marginBottom={5} fontSize={'lg'}>Média do 1° bimestre: {M1}</Text>
                <Text marginBottom={5} fontSize={'lg'}>Média do 2° bimestre: {M2}</Text>
                <Text marginBottom={5} fontSize={'lg'}>Média final: {MF}</Text>
            </Box>
        </Box>
    )
}
