import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Rating</th>
                                        <th>Location</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.list.map((item, i) =>
                                        <tr key={item.id && !isNaN(item.id) ? item.id : i}>
                                            <td>{item.id && !isNaN(item.id) ? item.id : `${i}`}</td>
                                            <td>{item.name}</td>
                                            <td>{item.rating}</td>
                                            <td>{item.address}</td>
                                            <td><Link to={"/update/"+item.id}>Edit</Link></td>
                                            {/* <td><Link to="/update">Edit</Link></td> */}
                                        </tr>
                                    )
                                }
                                </tbody>
                            </Table>
                        </div> : <p>Please Wait...</p>
                }
            </div>
        )
    }
}
export default RestaurantList;