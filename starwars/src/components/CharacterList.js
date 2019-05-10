import React from "react";
import Character from "./components/CharacterList.js"


class Chars extends React.Component {
    constructor() {
        super();
        this.state = {starwarsChars: []};
    }
}

export default CharacterList; 
