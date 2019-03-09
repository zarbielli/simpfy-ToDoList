import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
    this.setState({
      modalVisibility: !this.state.modalVisibility
    });
  };

  closeModal = () => {
    const { name, description } = this.state;

    this.setState(prevState => ({
      things: [...prevState.things, { title: name, description: description }]
    }));
    this.setState({ modalVisibility: !this.state.modalVisibility });
  };

  removeThing = acess => {
    var copy = this.state.things;
    
    copy.splice(acess, 1);
    this.setState({ things: copy });
  };

  render() {
    var { name, description } = this.state;
    const { things } = this.state;
    things.reverse();

    return (
      <View style={styles.container}>
      
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

            <TouchableOpacity 
              onPress={() => this.closeModal()}
              style={styles.button}
            >
              <Text style={styles.buttonText}> Adicionar </Text>

            </TouchableOpacity>

        </Modal>

        <View style={styles.preHeader}>
          <Text style={styles.preHeaderText}> ToDo List </Text>
        </View>

        <View style={styles.header}>
          <Text style={styles.headerText}> Adicione nova tarefa </Text>
          <TouchableOpacity onPress={() => this.openModal()}>
            <Ionicons name="md-add-circle-outline" 
                      size={40} 
                      color={"white"} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="on-drag"
          >
            {things.map((thing, index) => (
              <ToDos thing={thing}
                      key={index}
                      removeThing={this.removeThing}
                      acess={index} />
            ))}
          </ScrollView>
        </View>
        
        <View style={styles.footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  button: {
    alignItems: 'center',
    backgroundColor: "green",
    marginTop: 10,
    padding: 15
  },
  buttonText:{
    color: "white",
    fontWeight: "bold"
  },
  preHeaderText: {
    fontSize: 25,
    padding: 20,
    color: "white"
  },
  preHeader: {
    flexDirection: "row",
    backgroundColor: "#EEDFA6",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 25,
    borderTopColor: "#EEDFA6"
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#EEDFA6",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#fffdd0"
  },
  headerText: {
    fontSize: 25,
    padding: 20,
    color: "white"
  },
  body: {
    flex: 0.95,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#fff"
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
  footer: {
    flex: 0.05,
    backgroundColor: "#EEDFA6"
  }
});
