import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../types/StackNavigation';

type NavigationProps = StackNavigationProp<StackParamList>

export function useRatingsScreen() {
    const navigation = useNavigation<NavigationProps>()

    function calculateM1(N1 = 0, N2 = 0) {
        return (N1 * 0.4) + (N2 * 0.6)
    }

    function calculateM2(N1 = 0, N2 = 0, AF = 0) {
        return (((N1 * 0.5) + (AF * 0.5)) * 0.4) + (N2 * 0.6)
    }

    function calculateMF(M1 = 0, M2 = 0) {
        return (M1 + M2) / 2
    }

    function nextPage(averages: any) {
       navigation.navigate('averages', averages)
    }

    return {
        calculateM1,
        calculateM2,
        calculateMF,
        nextPage,
    }
}