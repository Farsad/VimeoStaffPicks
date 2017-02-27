import React, {Component} from 'react';
import VideoList from './VideoList.jsx';
import Header from './Header.jsx';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <VideoList/>
      </div>
    );
  }
}

export default App;
