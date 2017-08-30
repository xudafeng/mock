let React = require('react');
let ReactLogoComponent = require('react-logo');
let ForkmeonComponent = require('forkmeon.github.io');
let pkg = require('../package');

class LayoutComponent extends React.Component {
  getForkmeonProps() {
    return {
      fixed: true,
      text: 'Fork me on Github',
      backgroundColor: '#FFF7A4',
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
