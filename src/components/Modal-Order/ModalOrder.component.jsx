import React from 'react';
import './ModalOrder.styles.scss';
import { CustomButton } from '../CustomButton/CustomButton.component';
import Modal from '../Modal/Modal.component';

const ModalOrder = ({ show }) => {
  return (
    <>
      <Modal show={show}>
        <div>
          <div className="modal-card">
            <span className="modal-card-category">juice</span>
            <span className="modal-card-name ">Orange juice</span>
            <div className="modal-card-footer">
              <span>$</span>
              <span className="modal-card-item-price">23 </span>
            </div>
          </div>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Number" />
            <CustomButton
              inverted
              text="order"
              style={{
                width: '288px',
                height: '56px',
                marginTop: '16px',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            />
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalOrder;
