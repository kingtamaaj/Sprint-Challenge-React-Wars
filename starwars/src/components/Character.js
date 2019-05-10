import React from "react";
import CharsList from "./CharacterList";
import StarWars from "./StarWars.css"


const Character = (props) => {
    return (
        <div className = "charInfo">
            <h1>{props.Character.name}</h1>
            <ul>
                <li>Birtdate: {props.Character.birth_year} </li>
                <li>Gender: {props.Character.gender} </li>
                <li>Height: {props.Character.height} </li>
                <li>Mass: {props.Character.mass}</li>
                <li>Hair Color: {props.Character.hair_color} </li>
                <li>Skin Color: {props.Character.skin_color} </li>
                <li>Films: {props.Character.films.length}</li>
            </ul>
        </div>

    );
}

export default Character;