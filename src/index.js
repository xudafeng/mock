/* ================================================================
 * mock by xdf(xudafeng[at]126.com)
 *
 * first created at : Mon Jun 02 2014 20:15:51 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

let React = require('react');
let LayoutComponent = require('./layout');
let EditorComponent = require('./editor');

class MainComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <LayoutComponent>
        <EditorComponent />
      </LayoutComponent>
    );
  }
}

MainComponent.defaultProps = {
  globalData: {}
};

React.render(<MainComponent />, document.body);
