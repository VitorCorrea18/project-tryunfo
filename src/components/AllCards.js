import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends React.Component {
  constructor() {
    super();
    this.onEraseButtonClick = this.onEraseButtonClick.bind(this);
  }

  onEraseButtonClick({ target }) {
    const { parentNode } = target;
    const { eraseTrunfo } = this.props;
    if (parentNode.querySelector('#trunfo')) eraseTrunfo();
    target.parentNode.remove();
  }

  render() {
    const { savedCards } = this.props;
    return (
      <div>
        <header><h1>Todas as cartas</h1></header>
        <ul className="card-list">
          {
            savedCards.map((card) => (
              <div className="card-with-button" key={ card.Name }>
                <Card
                  cardName={ card.Name }
                  cardDescription={ card.Description }
                  cardAttr1={ card.Attr1 }
                  cardAttr2={ card.Attr2 }
                  cardAttr3={ card.Attr3 }
                  cardImage={ card.Image }
                  cardRare={ card.Rare }
                  cardTrunfo={ card.Trunfo }
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
