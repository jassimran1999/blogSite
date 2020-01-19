import React, { Component } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, draftToHtml } from 'draft-js';
import './richText.css'
import abc from '../../Constants/test'

export default class RichEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty()
                };
    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.onTab = (e) => this._onTab(e);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    this.publishEvent=()=>{
        const item = convertToRaw(this.state.editorState.getCurrentContent());
        console.log(JSON.stringify(item))
    };
  }

  _handleKeyCommand(command) {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
  }

  render() {
    const { editorState } = this.state;
    
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }
    return (
      <div className="boundingBox">
        
        <div className="containerEditor">
        <div className="options">
            <div className="controls-cover">
            <BlockStyleControls
                editorState={editorState}
                onToggle={this.toggleBlockType}
            />
            <InlineStyleControls
                editorState={editorState}
                onToggle={this.toggleInlineStyle}
            />
            </div>
            <div className="publish" onClick={this.publishEvent}>Publish</div>
          </div>
          <div className={className} onClick={this.focus}>
            <Editor
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
              onTab={this.onTab}
              placeholder="Tell a story..."
              ref="editor"
              spellCheck={true}
            />
          </div>

       </div></div>
    );
  }
}
// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }
  render() {
    let className = 'styleButton';
    if (this.props.active) {
      className += ' activeButton';
    }
    return (
      <div className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </div>
    );
  }
}
const inlineStyles = [
    {
      label: 'B',
      style: 'BOLD'
    }, {
      label: 'I',
      style: 'ITALIC'
    }, {
      label: 'U',
      style: 'UNDERLINE'
    }, {
      label: 'Mono',
      style: 'CODE'
    }
  ];
const BLOCK_TYPES = [
  {
    label: 'H1',
    style: 'header-one'
  }, {
    label: 'H2',
    style: 'header-two'
  }, {
    label: 'H3',
    style: 'header-three'
  }, {
    label: 'H4',
    style: 'header-four'
  }, {
    label: 'H5',
    style: 'header-five'
  }, {
    label: 'H6',
    style: 'header-six'
  }, {
    label: 'Code',
    style: 'code-block'
  }
];

const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  return (
    <div className="controls">
      {BLOCK_TYPES.map(
        (type) => <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};



const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="controls">
      {inlineStyles.map(
        type => <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};