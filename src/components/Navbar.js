import React, { Component } from 'react'
import Navitems from './Navitems'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitems item="bars" tolink="/bars"></Navitems>
                    <Navitems item="reservations" tolink="/reservations"></Navitems>
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar;