import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';
import './css/form.css';
import './css/card.css';

class App extends React.Component {
  render() {
    return (
      <div className="crate-card-section">
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
