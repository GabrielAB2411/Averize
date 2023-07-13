import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/home'
import Grades from '../pages/grades'
import Semesters from '../pages/semesters';

const { Navigator, Screen, Group } = createNativeStackNavigator()

export function StackNavigationRoutes() {
    return (
        <Navigator>
            <Group screenOptions={{headerShown: false}}>
                <Screen name='home' component={Home} />
                <Screen name='semesters' component={Semesters} />
            </Group>
            <Screen 
                name='grades' 
                component={Grades} 
                //TODO: Arrumar tipagem do route
                options={({ route }: any) => ({ 
                    title: `${route.params.semester} de ${route.params.type}`,
                    headerTitleAlign: 'center' 
                })}
            />
        </Navigator>
    )
}