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
let ReactLogoComponent = require('react-logo');
let ForkmeonComponent = require('forkmeon.github.io');
let pkg = require('../package');

class LayoutComponent extends React.Component {
  getForkmeonProps() {
    return {
      fixed: true,
      text: 'Fork me on Github',
      linkUrl: pkg.repository.url,
      onDemoUpdateDid() {},
      flat: true
    };
  }

  render() {
    return (
      <section>
        {this.props.children}
        <footer className="text-center hide">
          &copy;&nbsp;<a href="https://github.com/xudafeng">xdf</a> {new Date().getFullYear()}
          <ReactLogoComponent />
        </footer>
        <ForkmeonComponent {...this.getForkmeonProps()}/>
      </section>
    );
  }
}

module.exports = LayoutComponent;
