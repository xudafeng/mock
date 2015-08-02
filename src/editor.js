/* ================================================================
 * forkmeon by xdf(xudafeng[at]126.com)
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
let Util = require('./util');
let pkg = require('../package.json');

class EditorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHelper: false,
      containerHeight: document.body.clientHeight
    };
  }

  componentDidMount() {
    window.aaa = this;
    window.addEventListener('resize', () => {
      this.setState({
        containerHeight: document.body.clientHeight
      });
    }, false);
  }

  getGridTypeNumber() {
    return this.state.showHelper ? 4 : 6;
  }

  getHelperStatus() {
    return this.state.showHelper ? '' : 'hide';
  }

  getEditorStyle() {
    return {
      height: this.state.containerHeight
    };
  }

  getEditorNavStyle() {
  }

  render() {
    return (
      <div className="editor row" style={this.getEditorStyle()}>
        <nav className="editor-nav" style={this.getEditorNavStyle()}>
        12323
        </nav>
        <div className={`template col-md-${this.getGridTypeNumber()}`} ref="template">
        template
        </div>
        <div className={`output col-md-${this.getGridTypeNumber()}`} ref="output">
        output
        </div>
        <div className={`helper col-md-${this.getGridTypeNumber()} ${this.getHelperStatus()}`} ref="helper">
        helper
        </div>
      </div>
    );
  }
}

EditorComponent.defaultProps = {
};

module.exports = EditorComponent;
