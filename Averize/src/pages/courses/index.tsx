import { Box, FlatList, Heading, Text } from 'native-base'
import { ListItem } from '../../components';
import { StackParamList } from '../../types/StackNavigation';
import { useCoursesScreen } from '../../hooks/useCoursesScreen';
import { useRoute, RouteProp } from '@react-navigation/native';


type RouteProps = RouteProp<StackParamList, 'courses'>
export default function Courses() {
    const route = useRoute<RouteProps>()
    const { newOldId } = route.params
    const { courses, nextPage } = useCoursesScreen(newOldId)

    return (
        <Box
            backgroundColor={'white'}
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
        >
            <Box width={'2/3'}>
                <Heading fontSize={'2xl'} marginBottom={5} textAlign={'center'}> 
                    Qual é o seu curso?
                </Heading>
                <FlatList
                    data={courses}
                    renderItem={({ item }) => 
                        <ListItem 
                            item={item} 
                            onClick={() => nextPage(item)} 
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </Box>
        </Box>
    )
}
