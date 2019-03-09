import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Card, CardItem } from "native-base";
import { Ionicons } from "@expo/vector-icons";

class ToDos extends Component {
  render() {
    const { title, description } = this.props.thing;

    return (
      <Card style={style.card}
            transparent={true}>

        <CardItem header>

          <View style={style.headerView}>
            <Text style={style.headerText}> {title} </Text>

            <View style={style.iconView}>
              <TouchableOpacity>
                <Ionicons name="md-trash" size={40} color={"gray"} />
              </TouchableOpacity>
            </View>

          </View>

        </CardItem>

        <CardItem cardBody>

          <View style={style.bodyView}>
            <Text style={style.bodyText}> {description} </Text>
          </View>

        </CardItem>

      </Card>
    );
  }
}

export default ToDos;

const style = StyleSheet.create({
  card: {
    borderRadius: 20
  },
  headerView: {
    flex: 1,
    flexDirection: "row"  
  },
  headerText: {
    flex: 0.9,
    fontSize: 25,
    color: "#333333",
    fontStyle: "italic",
    fontWeight: "bold"
  },
  iconView: {
    flex: 0.1,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  bodyView:{
    flex: 1
  },
  bodyText: {
    fontSize: 20,
    marginLeft: 18,
    color: "#4d4d4d"
  }
});
