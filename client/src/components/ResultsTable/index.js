import React from "react";
// import "./style.css";
import SaveBtn from "../SaveBtn";
import DeleteBtn from "../DeleteBtn";


function ResultsTable(props) {
    
    const name = props.place.name;
    const address = props.place.formatted_address;
    const rating = props.place.rating;
    const level = props.place.price_level;
    const resultsNum = props.key;

    return (

        <tbody>
            <tr>
                <th scope="row">{resultsNum}</th>
                <td>{name}</td>
                <td>{address}</td>
                <td>{rating}</td>
                <td>{level}</td>
                <td><SaveBtn onClick={() => props.lovePlace(props.place)} /></td>
                <td><DeleteBtn onClick={() => props.hatePlace(props.place)} /></td>
            </tr>
        </tbody>
    )
  }

  export default ResultsTable;