import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../types/StackNavigation';

type NavigationProps = StackNavigationProp<StackParamList>

export function useHomeScreen() {
    const courses = [
        {
            type: 'OLD',
            name: 'GRADE ANTIGA',
            newOldId: '1',
        },
        {
            type: 'NEW',
            name: 'GRADE NOVA',
            newOldId: '2',
        }
    ]

    const navigation = useNavigation<NavigationProps>()

    function nextPage(newOldId: string) {
        navigation.navigate('courses', {newOldId: newOldId} );
    }

    return {
        courses,
        nextPage,
    }
}