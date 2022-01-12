import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends React.Component {
  constructor() {
    super();
    this.state = {
      filterInput: '',
    };
    this.onEraseButtonClick = this.onEraseButtonClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onEraseButtonClick({ target }) {
    const { parentNode } = target;
    const { eraseTrunfo } = this.props;
    if (parentNode.querySelector('#trunfo')) eraseTrunfo();
    target.parentNode.remove();
  }

  render() {
    const { savedCards } = this.props;
    const { filterInput } = this.state;
    return (
      <div className="all-cards">
        <header><h1>Todas as cartas</h1></header>
        <section className="filters-section">
          <h1>Filtro de busca</h1>
          <input
            data-testid="name-filter"
            id="filterInput"
            name="filterInput"
            type="text"
            placeholder="Nome da carta"
            value={ filterInput }
            onChange={ this.handleFilter }
          />
          <select
            data-testid="rare-filter"
          >
            <option disabled selected hidden className="select-exemple">Raridade</option>
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <label htmlFor="filter-trunfo">
            <input
              data-testid="trunfo-filter"
              id="filter-trunfo"
              name="filter-trunfo"
              type="checkbox"
              className="is-trunfo"
            />
            Super Trybe Trunfo
          </label>
        </section>
        <main className="cards-display">
          <ul className="card-list">
            {
              savedCards
                .filter((card) => card.name.includes(filterInput))
                .map((card) => (
                  <div className="card-with-button" key={ card.name }>
                    <Card
                      cardName={ card.name }
                      cardDescription={ card.description }
                      cardAttr1={ card.attr1 }
                      cardAttr2={ card.attr2 }
                      cardAttr3={ card.attr3 }
                      cardImage={ card.image }
                      cardRare={ card.rare }
                      cardTrunfo={ card.trunfo }
                    />
                    <button
                      data-testid="delete-button"
                      type="button"
                      className="erase-btn"
                      onClick={ this.onEraseButtonClick }
                    >
                      Excluir
                    </button>
                  </div>
                ))
            }
          </ul>
        </main>
      </div>
    );
  }
}

AllCards.propTypes = {
  savedCards: PropTypes.instanceOf(Array).isRequired,
  eraseTrunfo: PropTypes.func.isRequired,
};

export default AllCards;
