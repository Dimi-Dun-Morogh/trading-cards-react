import React from 'react';
import { connect } from 'react-redux';
import { toggleModal, setCurrentItem } from '../../redux/cards/cards.actions';
import { CustomButton } from '../CustomButton/CustomButton.component';
import './CardItem.styles.scss';

const CardItem = ({ card, showModal, setItem }) => {
  const handleBuy = () => {
    setItem(card);
    showModal(true);
  };
  return (
    <div>
      <div className="card-item">
        <span className="card-item-category">{card.category}</span>
        <span className="card-item-name">{card.name}</span>
        <div className="card-item-footer">
          <span>$</span>
          <span className="card-item-price">{card.price} </span>
          <CustomButton onClick={handleBuy} text="buy" square style={{ marginLeft: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showModal: (bool) => dispatch(toggleModal(bool)),
  setItem: (item) => dispatch(setCurrentItem(item)),
});

export default connect(null, mapDispatchToProps)(CardItem);
