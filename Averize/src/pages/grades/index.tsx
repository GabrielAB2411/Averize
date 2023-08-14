import { Box, FlatList, Heading } from 'native-base'
import { useRoute, RouteProp } from '@react-navigation/native';
import { StackParamList } from '../../types/StackNavigation';
import { useGradesScreen } from '../../hooks/useGradesScreen';
import { ListItem } from '../../components';

type RouteProps = RouteProp<StackParamList, 'grades'>

export default function Grades() {
    const route = useRoute<RouteProps>()
    const { course, semesterId, semester, newOldId } = route.params
    const { filteredSubjectBySemesterId, nextPage } = useGradesScreen(course, semesterId, newOldId)

    return (
        <Box
            backgroundColor={'white'}
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box width={'2/3'}>
                <Heading fontSize={'2xl'} marginBottom={5} textAlign={'center'}>{semester} de {course}</Heading>
                <FlatList
                    data={filteredSubjectBySemesterId}
                    renderItem={({ item }) =>
                        <ListItem
                            item={item}
                            onClick={() => nextPage(item.name)}
                        />
                    }
                    keyExtractor={item => item.id}
                />
            </Box>
        </Box>
    )
}
