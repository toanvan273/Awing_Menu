import React, { Component } from 'react';
import styled from 'styled-components';



const Bound = styled.div`
   display:flex;
    flex: 1;
    padding: 40px;
    font-size: 36px;
 
`

class System extends Component {
    state = {
        
    }
    render() {
        return (
            <Bound>
              404 | Page not found
            </Bound>
        )
    }
}


export default System