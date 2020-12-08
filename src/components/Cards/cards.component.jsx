import React from 'react';
import { connect } from 'react-redux';
import { CardItem } from '../CardItem/CardItem.component';
import './Cards.styles.css';

const Cards = ({ cards }) => {
  return (
    <div>
      {cards.map((card, index) => (
        <CardItem key={index.toString()} card={card} />
      ))}
    </div>
  );
};
const mapStateToProps = ({ cardsStore: { cards } }) => ({
  cards,
});

export default connect(mapStateToProps)(Cards);
