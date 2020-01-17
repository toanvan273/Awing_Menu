import React, { Component } from 'react';
import styled from 'styled-components';

//Images
import logo_vinmart_header from '../../images/header/logo_vinmart.svg';


const Bound = styled.div`
    display:flex;
    flex-direction:row;
    height:80px;
    padding-right: 44px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.25);
    background-color: #ed1c24;
    align-items:center;
    justify-content:flex-end;
    background-image:url(${logo_vinmart_header});
    background-repeat:no-repeat;
    background-size:222px 65px;
    background-position:top 0 left 44px;
    .header-right{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .account-avatar{
            margin-left: 21px;
            img{
                width: 32px;
                height: 32px;
                border-radius: 50%;
            }
        }
        p{
            margin: 0 20px;
            font-family: Tahoma;
            font-size: 14px;
            font-weight: bold;
            color: #ffffff;
        }
        img.arrow-down{
            cursor: pointer;
        }
    }
    .notification-wrapper {
        position: relative;
        height:22px;
        width:30px;
        cursor: pointer;
        img{
            position:absolute;
            left:0;
            bottom:0;
        }
        .circle-notification {
            display:flex;
            justify-content:center;
            align-items:center;
            position: absolute;
            bottom: 10px;
            left: 10px;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background-color: #ffffff;  
            font-family: Tahoma;
            font-size: 11px;
            letter-spacing: 0.52px;
            color: #ed1c24;         
        }
    }

`

// const strNumber = 3
class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
 
        }
    }

 
    render() {
        
        return (
            <Bound>
                <div className = 'header-right'>
                   
                </div>
            </Bound>
        )
    }
}

export default HeaderContainer
