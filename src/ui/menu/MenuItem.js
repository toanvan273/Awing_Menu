import React, { Component } from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux'

import { NavLink } from 'react-router-dom';

const Bound = styled.div`
    height: 35px;
   
    display: flex;
    align-items: center;
    border-left: 1px solid #e5e5e5;
    padding-left: 8px;
    a{
        /* font-family: Tahoma; */
        font-size: 14px;
        text-decoration: none;
        color: #595959;
    }
   
`
class MenuItem extends Component {
  
    componentDidMount() {
        const { index, onActiveIndex } = this.props
        if (index === onActiveIndex) {
            let submenu = document.getElementById('menu_item_id_' + index)
            submenu.classList.add('sub-active')
        }
    }
    onGetsubmenu = index => {
        let submenu = document.getElementById('menu_item_id_' + index)
        submenu.classList.add('sub-active')
        this.props.getIndex(index)
    }
    render() {
        const { data, index } = this.props
        return (
            <Bound id={'menu_item_id_' + index}
                onClick={() => this.onGetsubmenu(index)}
            >
                <NavLink
                    to={data.path}
                >
                    {data.name}
                </NavLink>
            </Bound>
        );
    }
}


export default MenuItem
