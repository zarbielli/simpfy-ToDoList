import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Card, CardItem } from "native-base";
import { Ionicons } from "@expo/vector-icons";

class ToDos extends Component {
  render() {
    const { title, description } = this.props.thing;

    return (
      <Card style={{ borderRadius: 7 }}>

        <CardItem header>

          <View style={{ flexDirection: "row", backgroundColor: "#EEDFA6" }}>
            <Text style={{ fontSize: 25 }}> {title} </Text>
            <TouchableOpacity>
              <View style={{ alignItems: "flex-end" }}>
                <Ionicons name="md-trash" size={30} style />
              </View>
            </TouchableOpacity>
          </View>

        </CardItem>

        <CardItem cardBody>
          <Text style={{ fontSize: 15 }}> {description} </Text>
        </CardItem>
      </Card>
    );
  }
}

export default ToDos;
