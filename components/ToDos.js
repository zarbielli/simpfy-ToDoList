import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Card, CardItem } from "native-base";
import { Ionicons } from "@expo/vector-icons";

class ToDos extends Component {
  render() {
    const { title, description } = this.props.thing;

    return (
      <Card style={style.card}>

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
          <Text style={style.bodyText}> {description} </Text>
        </CardItem>
      </Card>
    );
  }
}

export default ToDos;

const style = StyleSheet.create({
  card: {
    borderRadius: 7,
    backgroundColor: "#EEDFA6"
  },
  headerView: {
    flex: 1,
    flexDirection: "row"
  },
  headerText: {
    flex: 0.9,
    fontSize: 25
  },
  iconView: {
    flex: 0.1,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  bodyText: {
    fontSize: 20,
    marginLeft: 18
  }
});
