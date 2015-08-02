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
let Markdown = require('marked');
let Highlight = require('highlight.js');

Markdown.setOptions({
  highlight: function(code) {
    return Highlight.highlightAuto(code).value;
  }
});

class MarkdownComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      containerWidth: document.body.clientWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        containerWidth: document.body.clientWidth
      });
    }, false);
  }

  getStyle() {
    return {
      minWidth: this.state.containerWidth / 3 - 20
    };
  }

  render() {
    return (
      <div className='markdown' style={this.getStyle()} dangerouslySetInnerHTML = {
        {
          __html: Markdown(this.props.children)
        }
      }></div>
    );
  }
}

module.exports = MarkdownComponent;
