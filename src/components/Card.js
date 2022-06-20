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
      <div className="card_area">
        <div className="card_name_div">
          <h4 className="card_name">{cardName}</h4>
        </div>
        <div className="card_img_div">
          <img
            className="card_img"
            src={ cardImage }
            alt={ cardName }
          />
        </div>

        <p className="card_decription">{cardDescription}</p>
        <div className="card_att_div">
          <span>{`Aceleração: ${cardAttr1}`}</span>
          <span>{`Velocidade: ${cardAttr2}`}</span>
          <span>{`Direção: ${cardAttr3}`}</span>
        </div>

        <p className="card_rare">{cardRare}</p>

        {
          cardTrunfo ? <b id="trunfo">Super Trunfo</b> : <b />
        }
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
