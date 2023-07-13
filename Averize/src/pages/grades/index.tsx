import { Box, Text, Heading } from 'native-base'
import { useRoute, RouteProp } from '@react-navigation/native';
import { StackParamList } from '../../types/StackNavigation';

type RouteProps = RouteProp<StackParamList, 'grades'>

export default function Grades() {
    const route = useRoute<RouteProps>()
    
    return (
        <Box
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
        >
            
        </Box>
    )
}
