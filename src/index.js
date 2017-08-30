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
