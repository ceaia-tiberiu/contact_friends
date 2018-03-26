import React from 'react';
import Proptypes from 'prop-types';

import {
  fetchUsers,
  acceptUsers,
  rejectUsers,
} from '../../actions/userActions';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import User from '../User';
import Modal from '../UserModal';

class RequestContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    };
  }

  onClose = () => {
    this.setState({ showModal: false });
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    if (!this.props.users) {
      return <div> Loading ...</div>;
    }
    const renderUser = this.props.users.map(user => (
      <User
        key={user._id}
        user={user}
        onReject={this.props.rejectUsers}
        onAccept={this.props.acceptUsers}
      />
    ));
    if (this.props.users.length === 0) {
      return (
        this.state.showModal && (
          <Modal
            accepted={this.props.countAccepted}
            rejected={this.props.countRejected}
            onClose={this.onClose}
          />
        )
      );
    }
    return (
      <div>
        <h1
          style={{
            margin: '20px auto 40px',
            width: '400px',
            fontSize: '25px',
          }}
        >
          You have new {this.props.users.length} friend requests
        </h1>
        <ReactCSSTransitionGroup
          transitionName="user"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {renderUser}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
RequestContainer.proptypes = {
  fetchUsers: Proptypes.func.isRequired,
  acceptUsers: Proptypes.func.isRequired,
  rejectUsers: Proptypes.func.isRequired,
  users: Proptypes.array.isRequired,
  countAccepted: Proptypes.array.isRequired,
  countRejected: Proptypes.array.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.items,
  countRejected: state.users.rejected.length,
  countAccepted: state.users.accepted.length,
});

export default connect(mapStateToProps, {
  fetchUsers,
  acceptUsers,
  rejectUsers,
})(RequestContainer);
