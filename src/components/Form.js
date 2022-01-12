import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (

      <form className="form" onSubmit={ onSaveButtonClick }>
        <header>
          <h1>Adicionar nova carta</h1>
        </header>
        <div>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              className="large-input has-label"
              name="cardName"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              required
            />
          </label>

          <label htmlFor="description">
            Descrição
            <textarea
              data-testid="description-input"
              className="text-area has-label"
              name="cardDescription"
              type="text"
              value={ cardDescription }
              onChange={ onInputChange }
              required
            />
          </label>

          <label htmlFor="attr1">
            Aceleração
            <input
              data-testid="attr1-input"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              required
            />
          </label>

          <label htmlFor="attr2">
            Velocidade
            <input
              data-testid="attr2-input"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              required
            />
          </label>

          <label htmlFor="attr3">
            Direção
            <input
              data-testid="attr3-input"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              required
            />
          </label>

          <label htmlFor="imagem">
            Imagem
            <input
              data-testid="image-input"
              className="has-label"
              name="cardImage"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              required
            />
          </label>

          <label htmlFor="raridade">
            Raridade
            <select
              data-testid="rare-input"
              name="cardRare"
              className="large-input has-label"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          {
            (!hasTrunfo)
              ? (
                <label htmlFor="trunfo">
                  <input
                    data-testid="trunfo-input"
                    type="checkbox"
                    name="cardTrunfo"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                  Super Trybe Trunfo
                </label>
              ) : <p>Você já tem um Super Trunfo em seu baralho</p>
          }

          <button
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
            // onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>

      </form>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
