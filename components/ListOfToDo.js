import React, { Component } from "react";
import { ScrollView } from "react-native";
import ToDos from "./ToDos"

class ListOfToDo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      things: [{title: "Meditar", description: "Sei"},
               {title: "Estudar", description: " "},
               {title: "Estudar", description: " "},
               {title: "Estudar", description: " "},
               {title: "Estudar", description: " "},
               {title: "Estudar", description: " "}]
    };
  }

  render() {

    const { things } = this.state
    things.reverse();

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