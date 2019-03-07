import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ListOfToDo from "./components/ListOfToDo"

export default class App extends React.Component {

  touchMe = () => {
    console.log("Somebody touched me");
  }

  render() {    
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}> ToDo App</Text>

        {/* Header view */}
        <View style={styles.header}>
          <Text style={{ fontSize: 30 }}> Adicione nova tarefa </Text>

          <TouchableOpacity>
            <Ionicons 
              name="md-add-circle-outline" 
              size={40}
              onPress={ () => this.touchMe() } />
          </TouchableOpacity>
        </View>

        {/*Body View */}
        <View style={styles.body}>
          <ListOfToDo />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff"
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 3
  },
  body: {
    flex: 0.8,
    flexDirection: "column",
    justifyContent: "flex-start"
  }
});
