import { Box, Button } from 'native-base'

type ListItemProps = {
    //TODO: adicionar tipagem 
    item: any
    onClick?: () => void
}

export function ListItem({ item, onClick }: ListItemProps) {
    return (
        <Box
            flex={1}
            flexDirection={'column'}
            padding={1}
            margin={1}
            borderBottomWidth='1'
        >
            <Button
                onPress={onClick}
                backgroundColor={'white'}
                _text={{
                    color: 'black',
                }}
            >
                {item.name}
            </Button>
        </Box>
    )
}
