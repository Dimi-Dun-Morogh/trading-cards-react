import React from 'react';
import { connect } from 'react-redux';
import CardItem from '../CardItem/CardItem.component';
import { CustomButton } from '../CustomButton/CustomButton.component';
import './Cards.styles.scss';

const Cards = ({ cards }) => {
  const styles = {
    button: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '235px',
      height: '60px',
      fontWeight: 'bold',
      fontSize: '24px',
      marginBottom: '20px',
    },
  };
  return (
    <>
      <div className="cards-wrap">
        {cards.map((card, index) => (
          <CardItem key={index.toString()} card={card} />
        ))}
      </div>
      <CustomButton
        text="buy cheapest"
        inverted
        style={styles.button}
        onClick={() => console.log('dsa')}
      />
    </>
  );
};
const mapStateToProps = ({ cardsStore: { cards } }) => ({
  cards,
});

export default connect(mapStateToProps)(Cards);
