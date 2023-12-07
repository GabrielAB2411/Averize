import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../types/StackNavigation';

type NavigationProps = StackNavigationProp<StackParamList>

export function useCoursesScreen(newOldId: any) {
    const courses = [
        {
            type: 'EC',
            name: 'Engenharia da computação',
            id: '1',
            newOldId: newOldId
        },
        {
            type: 'ECA',
            name: 'Engenharia de controle e automação',
            id: '2',
            newOldId: newOldId
        },
        {
            type: 'EA',
            name: 'Engenharia de alimentos',
            id: '3',
            newOldId: newOldId
        },
        {
            type: 'ADM',
            name: 'Administração',
            id: '4',
            newOldId: newOldId
        },
    ]

    const navigation = useNavigation<NavigationProps>()

    function nextPage(item: any) {
        navigation.navigate('semesters', item)
    }

    return {
        courses,
        nextPage,
    }
}