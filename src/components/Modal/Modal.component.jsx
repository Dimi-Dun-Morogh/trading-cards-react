import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux/cards/cards.actions';
import './Modal.styles.scss';

const Modal = ({ show, children, closeModal }) => {
  return show ? (
    <>
      <div className="modal-bg"> </div>
      <div className="modal-content">
        <span className="close-modal" onClick={() => closeModal(false)}>
          &#10006;
        </span>

        {children}
      </div>
    </>
  ) : null;
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: (bool) => dispatch(toggleModal(bool)),
});

export default connect(null, mapDispatchToProps)(Modal);
