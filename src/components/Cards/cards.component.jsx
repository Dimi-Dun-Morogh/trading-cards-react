import React from 'react';
import { connect } from 'react-redux';
import { getTheCheapest, toggleModal } from '../../redux/cards/cards.actions';
import CardItem from '../CardItem/CardItem.component';
import { CustomButton } from '../CustomButton/CustomButton.component';
import './Cards.styles.scss';

const Cards = ({ cards, getCheap, modalShow }) => {
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
  const handleCheap = () => {
    getCheap();
    modalShow(true);
  };
  return (
    <>
      <div className="cards-wrap">
        {cards.map((card, index) => (
          <CardItem key={index.toString()} card={card} />
        ))}
      </div>
      <CustomButton text="buy cheapest" inverted style={styles.button} onClick={handleCheap} />
    </>
  );
};
const mapStateToProps = ({ cardsStore: { cards } }) => ({
  cards,
});

const mapDispatchToProps = (dispatch) => ({
  getCheap: () => dispatch(getTheCheapest()),
  modalShow: (bool) => dispatch(toggleModal(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
