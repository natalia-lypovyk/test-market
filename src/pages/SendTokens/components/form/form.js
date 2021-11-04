import React, { useRef } from 'react';

const Form = () => {
  const inputAmountRef = useRef();
  const inputAddressRef = useRef();

  const handleTransaction = () => {
    console.log({
      value: inputAmountRef.current.value,
      to: inputAddressRef.current.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
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
        onClick={handleTransaction}
        className="form__button"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
