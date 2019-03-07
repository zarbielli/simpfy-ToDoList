import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";

class ListOfToDo extends Component {

  render() {

    const list = [
      {
        title: "Meditar"
      },
      {
        title: "Ler"
      }
    ];
    
    return(
      <View>
        {list.map((item, i) => (
            <TouchableOpacity>
              <ListItem 
                key={i} 
                title={item.title} />
            </TouchableOpacity>
          ))}
      </View>
    )
  }
}

export default ListOfToDo;