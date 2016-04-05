import React from 'react';
import ReactDOM from 'react-dom';
import ReactLetterAvatar from '../src';

class App extends React.Component {

  render() {
    return (
      <div style={{marginLeft: '50px'}}>
        <ReactLetterAvatar name='z' size={100} radius={20}/>
        <ReactLetterAvatar name='z'/>
        <ReactLetterAvatar name='a' />
        <ReactLetterAvatar name='b' />
        <ReactLetterAvatar name='c' />
        <ReactLetterAvatar name='d' />
        <ReactLetterAvatar name='e' />
        <ReactLetterAvatar name='f' />
        <ReactLetterAvatar name='g' />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));