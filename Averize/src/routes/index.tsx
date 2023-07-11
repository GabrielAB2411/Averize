import { NavigationContainer } from "@react-navigation/native";
import { StackNavigationRoutes } from "./stack.navigation.routes";

export function Routes() {
    return (
        <NavigationContainer>
            <StackNavigationRoutes/>
        </NavigationContainer>
    )
}