import React from 'react';
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
        font-size: 14px;
        text-decoration: none;
        color: #595959;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
   
`
class MenuItem extends React.Component {
    state={
        activeTab:false
    }
    componentDidMount() {
        const { index, onActiveIndex } = this.props
        if (index === onActiveIndex) {
            // let submenu = document.getElementById('menu_item_id_' + index)
            // submenu.classList.add('sub-active')
            this.setState({activeTab:true})
        }
    }
    componentWillReceiveProps(n){
        // console.log('componentWillReceiveProps',n)
        if(n.onActiveIndex===this.props.index){
            // console.log(n,'hihi')
            this.setState({activeTab:true})
        }
    }
    onGetsubmenu = index => {
        // let submenu = document.getElementById('menu_item_id_' + index)
        // submenu.classList.add('sub-active')
        this.props.getIndex(index)
    }
    render() {
        const { data, index } = this.props
        const {activeTab} = this.state
        // console.log('render :',data,index, activeTab)
        return (
            <Bound id={'menu_item_id_' + index}
                onClick={() => this.onGetsubmenu(index)}
            >
                <NavLink activeClassName={activeTab?'selected':''}
                    to={data.path}
                    // isActive={(math,location)=>{
                    //     console.log(math,location)
                    // }}
                >
                    {data.name}
                </NavLink>
            </Bound>
        );
    }
}


export default MenuItem
