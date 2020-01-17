import React, { Component } from 'react';
import styled from 'styled-components';

//Component
import HeaderContainer from './header/HeaderContainer';
import MainScreen from './MainScreen'
//data


const Bound = styled.div`
    position:relative;
    display:flex;
    width:100%;
    height:100%;
    flex-direction:column;
   
`

class Main extends Component {
    state = {
        
    }
    componentWillMount() {
       
    }
    render() {
        return (
            <Bound>
                <HeaderContainer/>
                <MainScreen/>
            </Bound>
        )
    }
}


export default Main