import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ToDOList from "./src/components/toDoList";
import Navbar from "./src/components/navBar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TasksList from "./src/components/tasksList";

const Stack = createNativeStackNavigator();
const { Navigator, Screen, Group } = Stack;

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar />
      <ToDOList navigation={navigation} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="home" component={HomeScreen} />
        <Screen name="tasks-list" component={TasksList} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f1f1f",
  },
});
