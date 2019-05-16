import React from "react";
import Character from "./Character";


const CharacterList = (props) => {
    return (
        <div className="charlist"> 
            {props.character.map(characters => (
                <Character Character={characters} />
            ))}
        </div>

    );
}


export default CharacterList; 
