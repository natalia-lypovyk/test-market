import React, { useRef } from 'react';
import useTransferEther from '../../../../utils/useTransferEther';

const Form = () => {
  const inputAmountRef = useRef();
  const inputAddressRef = useRef();

  const { transferEther } = useTransferEther();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form">
      <label className="form__label">
        Amount of ETH you want to send
        <input
          name="amount"
          ref={inputAmountRef}
          className="form__input"
          placeholder="Enter ETH amount in format '0.2'"
        />
      </label>

      <label className="form__label">
        Send ETH to
        <input
          type="text"
          name="address"
          ref={inputAddressRef}
          className="form__input"
          placeholder="00xaf..678"
        />
      </label>

      <button
        type="submit"
        className="form__button"
        onClick={() =>
          transferEther(
            inputAddressRef.current.value,
            inputAmountRef.current.value,
          )
        }
      >
        Send
      </button>
    </form>
  );
};

export default Form;
