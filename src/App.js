import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';
import './css/form.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
