import React, { Component } from 'react';
import css from './index.css';
import Dropzone from 'react-dropzone';

// const request = require('request');

class Basic extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
    // const req = request.post('/upload');
    // acceptedFiles.forEach(file => {
    //     req.attach(file.name, file);
    // });
    // req.end(callback);
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            accept="application/pdf"
            onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some pdf files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Upload Your File</h1>
        </header>
        <p className="App-intro">

        </p>
        <Basic/>
      </div>
    );
  }
}

export default App;
