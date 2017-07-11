import React, { Component } from 'react';
import { connect } from 'react-redux'
import { writeChannel, addChannel, postChannel } from '../store'

// function mapStateToProps(state) {
//   return {channels: state.channels}
// }

function mapStateToProps(state) {
  return { channelEntry: state.channelEntry}
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleChange (event) {
      dispatch(writeChannel(event.target.value))
    },
    handleSubmit (event) {
      event.preventDefault()
      ownProps.history.push(`/channels/${event.target.channelName.value.id}`)
      console.log('event.target.value', event.target.value)
      const name = event.target.channelName.value
      // dispatch(addChannel({name}))
      dispatch(postChannel({name}))
    }
  }
}


function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input onChange={props.handleChange} value={props.channelEntry} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}
const channelListContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)

export default channelListContainer

/** Write your `connect` component below! **/
