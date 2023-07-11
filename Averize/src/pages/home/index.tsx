import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../types/StackNavigation";
import { Container,  Title } from "./styles";

type NavigationProps = StackNavigationProp<StackParamList>

export default function Home() {
    const navigation = useNavigation<NavigationProps>()

    function nextPage() {
        navigation.navigate('grades')
    }

    return (
        <Container>
            <Title>Em qual curso você está matriculado?</Title>
        </Container>
    )
}
