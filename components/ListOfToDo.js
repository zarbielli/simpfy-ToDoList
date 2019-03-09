import React, { Component } from "react";
import { ScrollView } from "react-native";
import ToDos from "./ToDos"

class ListOfToDo extends Component {

  state = {
    things: []
  }

  render() {

    var { things } = this.state.things;

    return(
      <ScrollView 
        showsVerticalScrollIndicator={false}
        keyboardDismissMode='on-drag'
      >
        { things.map( thing =>  
          <ToDos
            thing={ thing }
            key={ thing.id }
          /> 
        ) } 
        
      </ScrollView>
    );
  }
}

export default ListOfToDo;