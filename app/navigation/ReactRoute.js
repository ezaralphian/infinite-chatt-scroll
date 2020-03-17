
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screen/Home";
import Chatt from "../screen/Chatt";


const ReactRoute = createStackNavigator(
  {
    Home: Home,
    Chatt: Chatt
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(ReactRoute);