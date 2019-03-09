import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import ToDos from "./components/ToDos";

export default class App extends React.Component {
  state = {
    modalVisibility: false,
    name: " ",
    description: " ",
    things: []
  };

  changeName = value => {
    this.setState({ name: value });
  };

  changeDescription = value => {
    this.setState({ description: value });
  };
  openModal = () => {
    this.setState({ modalVisibility: !this.state.modalVisibility });
  };

  closeModal = async () => {
    const { name, description } = this.state;

    await this.setState(prevState => ({
      things: [...prevState.things, { title: name, description: description }]
    }));
    this.setState({ modalVisibility: !this.state.modalVisibility });
  };

  render() {
    var { name, description } = this.state;
    const { things } = this.state;
    things.reverse();

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 50, fontFamily: "Roboto", color: "#696969", fontWeight: "bold", fontStyle: "italic",
                        alignContent: "center", justifyContent: "center", alignItems: "center",
                        flexDirection: "row" }}>     ToDo App</Text>
        <Text> </Text>

        <Modal
          style={styles.modal}
          animationIn={"slideInUp"}
          animationOut={"slideOutDown"}
          avoidKeyboard={true}
          transparent={false}
          isVisible={this.state.modalVisibility}
        >
          <View>
            <Text> Título </Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={value => this.changeName(value)}
              value={name}
            />
            <Text> Descrição </Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={value => this.changeDescription(value)}
              value={description}
            />
          </View>
          <Button onPress={() => this.closeModal()} title="Adicionar" style={styles.button}/>
        </Modal>

        <View style={styles.header}>
          <Text style={{ fontSize: 25 }}>      Adicione nova tarefa </Text>
          <TouchableOpacity onPress={() => this.openModal()}>
            <Ionicons name="md-add-circle-outline" size={40} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="on-drag"
          >
            {things.map(thing => (
              <ToDos thing={thing} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 23,
    backgroundColor: "#EEDFA6"
  },
  ModalView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  modal: {
    borderRadius: 9,
    marginTop: "27%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "27%",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    marginTop: 3
  },
  body: {
    flex: 0.9,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  TextInput: {
    borderColor: "gray",
    borderWidth: 2,
    flex: 0.97,
    height: 15,
    width: 300,
    paddingLeft: 7,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#6C7A89"
  },
  button:{
    height: 50,
    width: 100,
    color: "#EEDFA6"
  }
});
