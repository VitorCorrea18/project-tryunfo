import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';
import './css/form.css';
import './css/card.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };

    // this.onInputChange = this.onInputChange.bind(this);
    // arrow function não precisa bind *-*
  }

  checkAttr = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxAttr = 90;
    const totalAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const maxTotalAttr = 210;
    if (
      ([cardAttr1, cardAttr2, cardAttr3].find((attr) => attr > maxAttr || attr < 0))
      || totalAttr > maxTotalAttr
    ) {
      return false;
    } return true;
    // verifica se algum atributo é maior que 90 ou menor que 0, e depois verifica se
    // a soma de todos os atributos é maior que o maximo.
  }

  checkForm = () => {
    const keys = Object.keys(this.state);
    const { state } = this;
    if (!keys.find((key) => state[key] === '')) { // verifica se algum campo está vazio
      if (this.checkAttr()) { // se a primeira condição for verdadeira, chama a checkAttr
        this.setState({ isSaveButtonDisabled: false }); // se checkAttr voltar true abilita o botão alterando o estado.
      } else this.setState({ isSaveButtonDisabled: true }); // se checkAttr voltar false mantém o botão desabilitado no estado.
    } else this.setState({ isSaveButtonDisabled: true });
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    if (event.target.type === 'checkbox') {
      this.onCheckboxChange();
    } else {
      this.setState({
        [name]: value,
      }, this.checkForm);
    }
  }

  onCheckboxChange = () => {
    const { cardTrunfo } = this.state;
    if (!cardTrunfo) {
      this.setState({ cardTrunfo: true });
    } else this.setState({ cardTrunfo: false });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    this.setState({ savedCards: [{
      Name: cardName,
      Description: cardDescription,
      Attr1: cardAttr1,
      Attr2: cardAttr2,
      Attr3: cardAttr3,
      Image: cardImage,
      Rare: cardRare,
      Trunfo: cardTrunfo,
    }],
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div className="crate-card-section">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onCheckboxChange={ this.onCheckboxChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
