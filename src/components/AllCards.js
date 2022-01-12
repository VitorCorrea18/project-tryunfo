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
      <div>
        <header><h1>Todas as cartas</h1></header>
        <div>
          <label
            htmlFor="filter"
          >
            Filtro de busca
            <input
              data-testid="name-filter"
              id="filter"
              name="filterInput"
              type="text"
              value={ filterInput }
              onChange={ this.handleFilter }
            />
          </label>
        </div>
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
      </div>
    );
  }
}

AllCards.propTypes = {
  savedCards: PropTypes.instanceOf(Array).isRequired,
  eraseTrunfo: PropTypes.func.isRequired,
};

export default AllCards;
