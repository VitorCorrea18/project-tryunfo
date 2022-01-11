import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends React.Component {
  render() {
    const { savedCards } = this.props;
    return (
      <div>
        <header><h1>Todas as cartas</h1></header>
        <ul>
          {
            savedCards.map((card) => (<Card
              key={ card.Name }
              cardName={ card.Name }
              cardDescription={ card.Description }
              cardAttr1={ card.Attr1 }
              cardAttr2={ card.Attr2 }
              cardAttr3={ card.Attr3 }
              cardImage={ card.Image }
              cardRare={ card.Rare }
              cardTrunfo={ card.Trunfo }
            />))
          }
        </ul>
      </div>
    );
  }
}

AllCards.propTypes = {
  savedCards: PropTypes.instanceOf(Array).isRequired,
};

export default AllCards;
