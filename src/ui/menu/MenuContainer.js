import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
//Componet
import MenuItem from './MenuItem';

// data
import { data } from '../../data/dataConfig'

const Bound = styled.div`
    /* padding: 0 0 0 20px; */
    height:100%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #f6f6f6;
    overflow:hidden;
    z-index:1;
    width: 290px;
    .main-menu-title{
        cursor: pointer;
        height: 40px;
        display: grid;
        grid-template-columns: 30px 1fr;
        align-items: center;
        .item-icon{
            display: flex;
            justify-content: center;
        }
        .icon{
            clip-path: polygon(0 0, 0% 100%, 100% 50%);
            background: red;
            width: 8px;
            height: 12px;
            /* transform: rotate(90deg); */
        }
    }
    .sub-menu{
        padding-left: 40px;
    }
    .main-active{
        background: #b8b8b8;
        .icon{
            transform: rotate(90deg);
        }
    }
    .sub-active{
        border-left: 1px solid red;
        background: gainsboro;
        font-weight: 900;
    }
`

class MenuContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexMainmenu: -1,
            indexSubmenu: -1
        }
    }
    componentDidMount() {
        let pathActive = window.location.pathname
        let main, sub
        data.forEach((element, index) => {
            element.children.forEach((item, i) => {
                if (item.path === pathActive) {
                    main = index
                    sub = i
                }
            })
        })
        if(main!==undefined&&sub!==undefined){
            this.onChoseMenu(main)
            this.setState({
                indexSubmenu:sub
            })
        }
       
    }
    onChoseMenu = index => {
        const { indexMainmenu } = this.state
        if (indexMainmenu !== -1) {
            let oldMenu = document.getElementById('main-menu-' + indexMainmenu)
            oldMenu.classList.remove('main-active')
        }
        let mainMenu = document.getElementById('main-menu-' + index)
        if(mainMenu){
            mainMenu.classList.add('main-active')
        }
        this.setState({
            indexMainmenu: index,
            indexSubmenu: -1
        })
    }

    getIndex = i => {
        const { indexSubmenu } = this.state
        if (indexSubmenu !== -1) {
            let oldSub = document.getElementById('menu_item_id_' + indexSubmenu)
            oldSub.classList.remove('sub-active')
        }
        this.setState({
            indexSubmenu: i
        })
    }
    render() {
        const { indexMainmenu, indexSubmenu } = this.state
        return (
            <Bound>
                <div id='menu-raw'>
                    {data.map((item, i) =>
                        <React.Fragment key={i}>
                            <div className="main-menu-title"
                                id={'main-menu-' + i}
                                onClick={() => this.onChoseMenu(i)}
                            >
                                <div className='item-icon'>
                                    <div className='icon'></div>
                                </div>
                                <span>{item.name}</span>
                            </div>
                            <div className='sub-menu'>
                                {indexMainmenu === i &&
                                    item.children.map((child, index) => {
                                        return <MenuItem 
                                        onActiveIndex={indexSubmenu}
                                        data={child} key={index} index={index} getIndex={this.getIndex} />
                                    })
                                }
                            </div>
                        </React.Fragment>
                    )}
                </div>

            </Bound>
        )
    }
}




export default withRouter(MenuContainer)