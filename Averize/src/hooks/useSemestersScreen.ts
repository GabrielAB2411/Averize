import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../types/StackNavigation';

type NavigationProps = StackNavigationProp<StackParamList>

export function useSemestersScreen(type: string, newOldId: any) {
    const navigation = useNavigation<NavigationProps>()
    const semestersCount = type === 'ADM' ? 8 : 10
    const semesters = []

    for (let i = 1; i <= semestersCount; i++) {
        semesters.push({
            name: `${i}° semestre`,
            id: String(i)
        })
    }
    function nextPage(data: any) {
        const course = {
            course: type,
            semester: data.name,
            semesterId: data.id,
            newOldId: newOldId
        }
        navigation.navigate('grades', course)
    }

    return {
        semesters,
        nextPage,
    }
}