import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/home'
import Grades from '../pages/grades'
import Semesters from '../pages/semesters';
import Ratings from '../pages/ratings';
import Averages from '../pages/averages';

const { Navigator, Screen } = createNativeStackNavigator()

export function StackNavigationRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='home' component={Home} />
            <Screen name='semesters' component={Semesters} />
            <Screen name='grades' component={Grades} />
            <Screen name='ratings' component={Ratings} />
            <Screen name='averages' component={Averages} />
        </Navigator>
    )
}