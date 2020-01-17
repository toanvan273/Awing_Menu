import React, { Component } from 'react';
import styled from 'styled-components';

const Bound = styled.div`
    display:flex;
    flex: 1;
    padding: 40px;
    font-size: 36px;
 
`

class Menu extends Component {

    render() {
        return (
            <Bound>
             Quản trị Menu
            </Bound>
        )
    }
}


export default Menu