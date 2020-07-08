import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from "react-router-dom";

//Container
import Home from './page/home/Home'
import System from './page/System'
import MenuContainer from './menu/MenuContainer'
import Directory from './page/system/Directory'
import User from './page/system/User'
import UserGroup from './page/system/UserGroup'
import Menu from './page/system/Menu'
import Post from './page/posts/Post'
import Category from './page/posts/Category'
//data


const Bound = styled.div`
    display:flex;
    flex-direction:row;
    background-color:#fafafa;
    flex:1;
    overflow:auto;
    .main-bound{
      display:flex;
      height:100%;
      overflow:auto;
      flex: 1;
    }
   
`

class MainScreen extends Component {
  render() {
    return (
      <Bound>
        <MenuContainer />
        <Switch>
          <Route exact path="/home"
            render={(props) => {
              console.log('props -- route',props)
              return (
                <div className='main-bound'>
                  <Home />
                </div>
              )
            }}
          />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div className='main-bound'>
                  <System />
                </div>
              )
            }}
          />
          {/* Directory */}
          <Route
            exact
            path="/Directory"
            render={() => {
              return (
                <div className='main-bound'>
                  <Directory />
                </div>
              )
            }}
          />
          {/* User */}
          <Route
            exact
            path="/User"
            render={() => {
              return (
                <div className='main-bound'>
                  <User />
                </div>
              )
            }}
          />
          {/* User Group */}
          <Route
            exact
            path="/UserGroup"
            render={() => {
              return (
                <div className='main-bound'>
                  <UserGroup />
                </div>
              )
            }}
          />
          {/* Menu */}
          <Route
            exact
            path="/Menu"
            render={() => {
              return (
                <div className='main-bound'>
                  <Menu />
                </div>
              )
            }}
          />
          {/* Post */}
          <Route
            exact
            path="/Post"
            render={() => {
              return (
                <div className='main-bound'>
                  <Post />
                </div>
              )
            }}
          />
          {/* Category */}
          <Route
            exact
            path="/Category"
            render={() => {
              return (
                <div className='main-bound'>
                  <Category />
                </div>
              )
            }}
          />
          <Redirect to="/" />;
        </Switch>
      </Bound>
    );
  }
}

export default MainScreen