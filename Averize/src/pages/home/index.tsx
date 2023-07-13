import { Box, FlatList, Heading, Text } from 'native-base'
import { ListItem } from '../../components';
import { useHomeScreen } from '../../hooks/useHomeScreen';

export default function Home() {
    const { courses, nextPage } = useHomeScreen()

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
