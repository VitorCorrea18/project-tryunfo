import React from 'react';

class Form extends React.Component {
  render() {
    return (

      <form className="form">
        <h1>Adicionar nova carta</h1>

        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            className="large-input has-label"
            name="name"
            type="text"
            required
            maxLength={ 20 }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            className="text-area has-label"
            name="description"
            type="text"
            required
          />
        </label>

        <label htmlFor="attr1">
          Aceleração
          <input
            data-testid="attr1-input"
            name="attr1"
            type="number"
            required
          />
        </label>

        <label htmlFor="attr2">
          Velocidade
          <input
            data-testid="attr2-input"
            name="attr2"
            type="number"
            required
          />
        </label>

        <label htmlFor="attr3">
          Direção
          <input
            data-testid="attr3-input"
            name="attr3"
            type="number"
            required
          />
        </label>

        <label htmlFor="imagem">
          Imagem
          <input
            data-testid="image-input"
            className="has-label"
            name="imagem"
            type="text"
            required
          />
        </label>

        <label htmlFor="raridade">
          Raridade
          <select
            data-testid="rare-input"
            name="raridade"
            className="large-input has-label"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
          />
          Super Trybe Trunfo
        </label>

        <button data-testid="save-button" type="button">Salvar</button>
      </form>

    );
  }
}

export default Form;
