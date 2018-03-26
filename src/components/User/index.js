import React from 'react';
import './style.css';

class User extends React.PureComponent {
  constructor(props) {
    super();
    // AOS.init();
  }

  componentWillReceiveProps() {
    // AOS.refresh();
  }

  componentWillUnmount() {}

  render() {
    const { user } = this.props;
    let isActive = user.isActive ? 'online' : 'offline';
    return (
      <div className="user_container">
        <div className="user_picture">
          <img style={{ width: '100px' }} src={user.picture} alt={user.index} />
        </div>
        <div className="user_info">
          <div className="user_name">
            {user.name.first} {user.name.last}
            <img
              style={{
                width: '20px',
                marginLeft: '10px',
                marginBottom: '5px',
              }}
              src={`/images/icon_status-${isActive}.png`}
              alt={isActive}
            />
          </div>
          <div className="user_about">
            Phone: {user.phone}
            <br />
            Email: {user.email}
            <br />
            Company: {user.company}
            <br />
          </div>
        </div>
        <div className="user_friends">
          <div className="friends">
            {Math.floor(Math.random() * 1000)}
            <br />friends
          </div>
          <div className="followers">
            {Math.floor(Math.random() * 1000)}
            <br />followers
          </div>
        </div>
        <div className="user_request">
          <button
            className="primary"
            onClick={() => this.props.onAccept(user._id)}
          >
            Accept
          </button>
          <br />
          <button onClick={() => this.props.onReject(user._id)}>Reject</button>
        </div>
      </div>
    );
  }
}

export default User;
