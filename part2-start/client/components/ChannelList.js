import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'


// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';
const DOGS_CHANNEL = '/channels/3';
const LUNCH_CHANNEL = '/channels/4';

function mapStateToProps(state) {
  return {channels: state.channels, messages: state.messages}
}


const ChannelList = function (props) {

  console.log('props',props)
    return (
      <ul>
        {props.channels.map((channel) => {
          return (
          <li key={channel.id}>
          <NavLink to={`/channels/${channel.id}`} activeClassName="active">
            <span>{channel.name}</span>
            <span className="badge">{ props.messages.filter(message => message.channelId === channel.id).length }</span>
          </NavLink>
        </li>)
        })}

        <li>
          <NavLink to="/new-channel">Create a channel...</NavLink>
        </li>
      </ul>
    );

}
// console.log('mstpss', mapStateToProps)
// console.log('channel list', channelList)
const channelListContainer = connect(mapStateToProps)(ChannelList)

export default channelListContainer

  // componentDidMount () {
  //   this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  // }

  // componentWillUnmount () {
  //   this.unsubscribe();
  // }



    // const { messages } = this.state;


/** Write your `connect` component below! **/
