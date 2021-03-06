import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from './actions/index';
import FriendForm from './components/FriendForm';
import './index.css';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="container">
        <FriendForm />
        <ul className="friends__list">
          {this.props.friends.map((friend, i) => {
            return (
              <ul className="friend" key={i}>
                <li className="friend__name">{friend.name}</li>
                <li className="friend__age">{friend.age}</li>
                <li className="friend__email">{friend.email}</li>
                <button
                  className="delButton"
                  onClick={() => this.props.deleteFriend(i)}
                >
                  Delete
                </button>
              </ul>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
  };
};

export default connect(mapStateToProps, { getFriends, deleteFriend })(App);
