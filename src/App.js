import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchCards } from './redux/cards/cards.actions';
import Cards from './components/Cards/cards.component';

function App({ getCards }) {
  useEffect(() => {
    getCards();
  }, []);
  return (
    <div className="App">
      <Cards />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getCards: () => dispatch(fetchCards),
});

export default connect(null, mapDispatchToProps)(App);
