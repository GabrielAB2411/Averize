import { Box, Heading, FlatList } from 'native-base'
import { useRoute, RouteProp } from '@react-navigation/native';
import { StackParamList } from '../../types/StackNavigation';
import { ListItem } from '../../components';
import { useSemestersScreen } from '../../hooks/useSemestersScreen';

type RouteProps = RouteProp<StackParamList, 'semesters'>

export default function Semesters() {
    const route = useRoute<RouteProps>()
    const { type, newOldId } = route.params
    const { semesters, nextPage } = useSemestersScreen(type, newOldId)
    return (
        <Box
            backgroundColor={'white'}
            flex={1}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box width={'2/3'}>
                <Heading fontSize={'2xl'} marginBottom={5} textAlign={'center'}>
                    Qual semestre de {type}?
                </Heading>
                <FlatList
                    data={semesters}
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