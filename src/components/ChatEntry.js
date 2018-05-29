import React from 'react';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp';


class ChatEntry extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }

  render() {
    let className = 'chat-entry';

    if (this.props.name === 'Vladimir') {
      className += ' local';
    } else {
      className += ' remote';
    }

    return (
      <section className={className}>
        <div className='entry-name'><strong>{this.props.name}</strong></div>
        <div className='entry-bubble'>
          <div className='entry-body'>{this.props.body}</div>
          <Timestamp time={this.props.time} />
        </div>
      </section>
    );
  }
}

export default ChatEntry;
