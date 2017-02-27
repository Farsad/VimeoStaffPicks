import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../js/components/App.jsx';
import Header from '../js/components/Header.jsx';
import VideoList from '../js/components/VideoList.jsx';

describe("A suite", function () {
  it("contains spec with an expectation", function () {
    expect(shallow(<App />)
      .contains(<div className="App">
          <Header/>
          <VideoList/>
        </div>
      )).toBe(true);
  });

  it("contains spec with an expectation", function () {
    expect(shallow(<App />).is('.App')).toBe(true);
  });
});