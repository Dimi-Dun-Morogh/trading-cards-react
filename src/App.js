import React, { useEffect } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { fetchCards } from './redux/cards/cards.actions';
import Cards from './components/Cards/cards.component';
// import Modal from './components/Modal/Modal.component';
import ModalOrder from './components/Modal-Order/ModalOrder.component';

function App({ getCards, showModal }) {
  useEffect(() => {
    getCards();
  }, []);
  return (
    <div className="App">
      {/* <Modal show={showModal} /> */}
      <ModalOrder show={showModal} />
      <Cards />
    </div>
  );
}

const mapStateToProps = ({ cardsStore: { showModal } }) => ({
  showModal,
});

const mapDispatchToProps = (dispatch) => ({
  getCards: () => dispatch(fetchCards),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
