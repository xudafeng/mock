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
let Markdown = require('marked');
let Highlight = require('highlight.js');

Markdown.setOptions({
  highlight: function(code) {
    return Highlight.highlightAuto(code).value;
  }
});

class MarkdownComponent extends React.Component {
  render() {
    return (
      <div className='markdown' dangerouslySetInnerHTML = {
        {
          __html: Markdown(this.props.children)
        }
      }></div>
    );
  }
}

module.exports = MarkdownComponent;
