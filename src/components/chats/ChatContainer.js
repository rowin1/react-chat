import React, { Component } from 'react';
import SideBar from './SideBar';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chats:[],
      activeChat:null
    };
  }

  setActiveChat = (activeChat) => {
    this.setState({activeChat})
  }

  render() {
    const { user, logout} = this.props;
    return (
      <div className="container">
        <SideBar
          logout={logout}
          chats={this.state.chats}
          user={user}
          activeChat={this.state.activeChat}
          setActiveChat={this.setActiveChat}
        />
      </div>
    );
  }
}
