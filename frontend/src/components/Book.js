import axios from 'axios';
import React, { useState } from 'react'



const Book = (props) => {

  
    var unavailableConverted;
    props.x.unavailable == '1' ? unavailableConverted = 'yes' : unavailableConverted = 'no';

    const [availability, setAvailability] = useState(unavailableConverted)


    const checkAvailability = (x) => {
        x[0] === '1' || availability === 'yes' ? alert('The book has already been ordered!') : orderBook()
    }

    const orderBook = () => {
        setAvailability('yes')
        alert('The book you have chosen has been ordered!')



        var data = props.x.$.id;

        // post request pro odeslání identifikátoru knihy na backend
        axios
            .post('http://localhost:3000/ordered', data)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <tbody>
            <tr>
                <td><button onClick={() => checkAvailability(props.x.unavailable)}>ORDER</button></td>
                <td>{props.x.author}</td>
                <td>{props.x.title}</td>
                <td>{props.x.genre}</td>
                <td>{props.x.price}</td>
                <td>{props.x.publish_date}</td>
                <td>{props.x.description}</td>
                <td>{availability}</td>
            </tr>
        </tbody>
    )
}

export default Book