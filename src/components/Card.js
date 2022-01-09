import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;

    return (
      <div className="visualizacao">
        <header>
          <h1>Pré-visualização</h1>
        </header>
        <div className="card-area">
          <h4 data-testid="name-card">{ cardName }</h4>

          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />

          <p data-testid="description-card">{cardDescription}</p>

          <span data-testid="attr1-card">{cardAttr1}</span>
          <span data-testid="attr2-card">{cardAttr2}</span>
          <span data-testid="attr3-card">{cardAttr3}</span>

          <p data-testid="rare-card">{cardRare}</p>

          {
            cardTrunfo ? <b data-testid="trunfo-card">Super Trunfo</b> : <b />
          }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
