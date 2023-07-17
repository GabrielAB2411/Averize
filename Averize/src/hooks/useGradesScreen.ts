import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../types/StackNavigation';

type NavigationProps = StackNavigationProp<StackParamList>

export function useGradesScreen(course: string, semesterId: string) {
    const subjects = [
        {
            course: 'EC',
            subjects: [
                {
                    id: '1',
                    name: 'Álgebra linear e geometria analítica',
                    semesterId: '1'
                },
                {
                    id: '2',
                    name: 'Algoritmos 1',
                    semesterId: '1'
                },
                {
                    id: '3',
                    name: 'Cálculo diferencial e integral 1',
                    semesterId: '1'
                },
                {
                    id: '4',
                    name: 'Ética e cidadania',
                    semesterId: '1'
                },
                {
                    id: '5',
                    name: 'Química e ciência dos materiais',
                    semesterId: '1'
                },
                {
                    id: '6',
                    name: 'Introdução a engenharia da computação',
                    semesterId: '1'
                },
            ]
        },
        {
            type: 'ECA',
        },
        {
            type: 'EA',
        },
        {
            type: 'ADM',
        },
    ]

    const filteredSubjectByType = subjects.filter((sub) => { return sub.course === course })
    const filteredSubjectBySemesterId = filteredSubjectByType[0]?.subjects?.filter((sub) => { return sub.semesterId === semesterId })
    const navigation = useNavigation<NavigationProps>()

    function nextPage(subject: string) {
        navigation.navigate('ratings', {subject})
    }
    
    return {
        filteredSubjectBySemesterId,
        nextPage,
    }
}