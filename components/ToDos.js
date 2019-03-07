import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Card, CardItem } from "native-base";

class ToDos extends Component {

  render(){
    const {title, description} = this.props.thing;

    return(
      <TouchableOpacity>
        <Card style={{ borderRadius: 7}}>

          <CardItem header>
            <Text style={{ fontSize: 25 }}> {title} </Text>
          </CardItem>

          <CardItem cardBody>
            <Text style={{ fontSize: 15 }}>  {description}  </Text>
          </CardItem>

        </Card>
      </TouchableOpacity>

    );
  }
}

export default ToDos;
