import React from 'react';
import { connect } from 'react-redux';
import './ModalOrder.styles.scss';
import Modal from '../Modal/Modal.component';
import { ModalForm } from '../ModalForm/ModalForm.component';

const ModalOrder = ({ show, currentItem }) => (
  <>
    <Modal show={show}>
      <div>
        <div className="modal-card">
          <span className="modal-card-category">{currentItem.category}</span>
          <span className="modal-card-name ">{currentItem.name}</span>
          <div className="modal-card-footer">
            <span>$</span>
            <span className="modal-card-item-price">{currentItem.price}</span>
          </div>
        </div>
        <ModalForm />
      </div>
    </Modal>
  </>
);

const mapStateToProps = ({ cardsStore: { currentItem } }) => ({
  currentItem,
});

export default connect(mapStateToProps)(ModalOrder);
