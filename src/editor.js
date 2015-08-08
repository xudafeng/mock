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
let Util = require('./util');
let Faker = require('./faker');
let MarkdownComponent = require('./markdown');
let Codemirror = require('react-codemirror');
let pkg = require('../package.json');

require('codemirror/mode/sql/sql');

const sampleCode = '\n/* click helper for more help. */\n\nINSERT INTO Persons (LastName, Phone) VALUES ("{random.array_element([\'dafeng\', \'xdf\'])}", "{random.numberString(13)}")\;\n';
const types = [{
  openTag: '{',
  closeTag: '}'
}, {
  openTag: '<#',
  closeTag: '#>'
}];

let parse = function(template) {
  let content = [];

  template.split(types[this.state.tagType].openTag).forEach(i => {
    i = i.split(types[this.state.tagType].closeTag);

    let $0 = i[0];
    let $1 = i[1];
    let l = null;
    let s = null;

    if (i.length === 1) {
      s = $0;
    } else {
      l = $0;
      if ($1) s = $1;
    }

    content.push({
      '$0': l,
      '$1': s
    });
  });
  return content;
};

let compile = function(template) {
  let content = '';
  template.forEach(function(i) {
    let l = i['$0'];
    let s = i['$1'];

    if (l) {
      content += fakerEval(l);
    }
    if (s) {
      content += s;
    };
  });
  return content;
};

let fakerEval = function(code) {
  return eval.call({
    Faker: Faker
  }, 'this.Faker.' + code);
};

window.Faker = Faker;

class EditorComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showHelper: false,
      code: sampleCode,
      containerHeight: document.body.clientHeight,
      repeat: 1,
      helperContent: '',
      tagType: 0
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        containerHeight: document.body.clientHeight
      });
    }, false);

    Util.ajax('./README.md', data => {
      this.setState({
        helperContent: data
      });
    });
  }

  getEditorStatus() {
    return this.state.showHelper ? 'show-helper' : '';
  }

  getTemplateEditorProps() {
    return {
      value: this.state.code,
      onChange: this.updateCode.bind(this),
      options: {
        lineNumbers: true,
        styleActiveLine: true,
        indentWithTabs: true,
        matchBrackets: true,
        smartIndent: true,
        textWrapping: false,
        lineWrapping: true,
        autofocus: true,
        mode: 'text/x-sql'
      }
    };
  }

  generateFakeData(code) {
    let template = parse.call(this, code);
    let result = compile(template);
    return result;
  }

  getOutPutCode() {
    let code = this.state.code;
    let repeat = this.state.repeat;
    let result = '';

    try {
      while (repeat--) {
        result += this.generateFakeData(code);
      }
    } catch(e) {
      console.log(e.stack);
    }
    return result;
  }

  getOutputEditorProps() {
    return {
      value: this.getOutPutCode(),
      options: {
        readOnly: true,
        showCursorWhenSelecting: false,
        lineNumbers: true,
        styleActiveLine: true,
        indentWithTabs: true,
        matchBrackets: true,
        smartIndent: true,
        textWrapping: false,
        lineWrapping: true,
        mode: 'text/x-sql',
        cursorHeight: 0
      }
    };
  }

  getCommonStyle() {
    return {
      height: this.state.containerHeight - 50
    };
  }

  handleHelperClick() {
    this.setState({
      showHelper: !this.state.showHelper
    });
  }

  handleInputChange(e) {
    let value = e.target.value;
    this.setState({
      repeat: value
    });
  }

  handleTagChange(e) {
    let value = e.target.value;
    this.setState({
      tagType: parseInt(value, 10)
    });
  }

  updateCode(newCode) {
    this.setState({
      code: newCode
    });
  }

  render() {
    return (
      <div className={`editor ${this.getEditorStatus()}`}>
        <nav className="editor-nav">
          <ul>
            <li className="logo">
              <p className="item title">{pkg.name}</p>
              <p className="version">{pkg.version}</p>
            </li>
            <li className="repeat">
              <label className="repeat-label">
                <input type="text" value={this.state.repeat} onChange={this.handleInputChange.bind(this)}/>
              </label>
            </li>
            <li>
              <div className="tags">tags:</div>
              <select onChange={this.handleTagChange.bind(this)}>
                <option value="0" dangerouslySetInnerHTML={{__html: '{  ... }'}}></option>
                <option value="1" dangerouslySetInnerHTML={{__html: '<# ... #>'}}></option>
              </select>
            </li>
            <li onClick={this.handleHelperClick.bind(this)}>
              <span className="item">helper</span>
            </li>
          </ul>
        </nav>
        <div className="template" style={this.getCommonStyle()} ref="template">
          <Codemirror {...this.getTemplateEditorProps()}/>
        </div>
        <div className="output" style={this.getCommonStyle()} ref="output">
          <Codemirror {...this.getOutputEditorProps()} />
        </div>
        <div className="helper" style={this.getCommonStyle()} ref="helper">
          <MarkdownComponent>
          {this.state.helperContent}
          </MarkdownComponent>
        </div>
      </div>
    );
  }
}

module.exports = EditorComponent;
