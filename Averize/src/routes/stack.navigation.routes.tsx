import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/home'
import Grades from '../pages/grades'

const {Navigator, Screen} = createNativeStackNavigator()

export function StackNavigationRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='home' component={Home}/>
            <Screen name='grades' component={Grades}/>
        </Navigator>
    )
}