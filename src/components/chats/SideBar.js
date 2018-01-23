import React, { Component} from 'react';
import FAChevronDown from 'react-icons/lib/md/keyboard-arrow-down'
import FAMenu from 'react-icons/lib/fa/list-ul'
import FASearch from 'react-icons/lib/fa/search'
import MdEject from 'react-icons/lib/md/eject'

export default class SideBar extends Component {
  render() {
    const { user, chats, activeChat, setActiveChat, logout} = this.props;
    return (
			<div id="side-bar">
					<div className="heading">
						<div className="app-name">React Chat <FAChevronDown /></div>
						<div className="menu">
							<FAMenu />
						</div>
					</div>
					<div className="search">
						<i className="search-icon"><FASearch /></i>
						<input placeholder="Search" type="text"/>
						<div className="plus"></div>
					</div>
					<div
						className="users"
						ref='users'
						>



					</div>
					<div className="current-user">
						<span>{user.name}</span>
						<div onClick={()=>{logout()}} title="Logout" className="logout">
							<MdEject/>
						</div>
					</div>
			</div>
		);
  }
}
