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
                    Escolha sua grade
                </Heading>
                <FlatList
                    data={courses}
                    renderItem={({ item }) => 
                        <ListItem 
                            item={item} 
                            onClick={() => nextPage(item.newOldId)} 
                        />
                    }
                    keyExtractor={item => item.newOldId}
                />
            </Box>
        </Box>
    )
}
