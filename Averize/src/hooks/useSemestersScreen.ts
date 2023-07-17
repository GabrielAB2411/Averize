import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../types/StackNavigation';

type NavigationProps = StackNavigationProp<StackParamList>

export function useSemestersScreen(type: string){
    const semestersCount = type === 'ADM' ? 8 : 10

    const semesters = []

    for(let i = 1; i <= semestersCount; i++) {
        semesters.push({
            name: `${i}° semestre`,
            id: String(i)
        })
    }

    const navigation = useNavigation<NavigationProps>()

    function nextPage(item: any) {
        const course = {
            course: type,
            semester: item.name,
            semesterId: item.id
        }
        navigation.navigate('grades', course)
    }

    return {
        semesters,
        nextPage,
    }
}