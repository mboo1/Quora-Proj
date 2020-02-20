import React from 'react';
import Quill from 'quill';

// import 'quill/dist/quill.core.css';


export default class QuillEditor extends React.Component {

    constructor(props) {
        super(props);
        this.monitor = this.monitor.bind(this),
        this.options = {
            debug: 'info',
            modules: {
              toolbar: '#toolbar'
            },
            placeholder: 'Compose an epic...',
            readOnly: true,
            theme: 'snow'
          };
        this.editor = ''
    }

  componentDidMount() {
    let container = document.getElementById('editor');
    this.editor = new Quill(container, {modules: {toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ]}, theme: 'snow'});
    
  } //componentDidMount

  monitor(e) {
      e.preventDefault();
      let editor_content = this.editor.root.innerHTML
    //   console.log(editor_content)
    this.props.createAnswer({body: editor_content, author_id: this.props.currentUser.id, question_id: 156})
    }

  render() {
    return (
      <div>
        <button className="specialbutton" onClick={this.monitor}></button>

          <div id="QuillEditor-container">
            {/* <!-- Create the editor container --> */}
            <div id="editor" onChange={this.monitor}>
              <p>Hello World!</p>
              <p>Some initial <strong>bold</strong> text</p>
              <p></p>
            </div>
          </div>
      </div>
    )
  }
}