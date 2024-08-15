import React from "react";

const PaymentDone = () => {
  return (
    <section className="flex-1 flex flex-col justify-center items-center gap-2">
      <div className="h-10 w-10 rounded-full border-2 border-[#1D1D1D] flex items-center justify-center">
        <img src="/assets/icons/checked.svg" alt="checked" />
      </div>
      <p className="font-bold">Thanks for your order</p>
      <p className="text-b-dark-gray text-sm text-center">
        The order confirmation has been sent to johndoe@gmail.com
      </p>
    </section>
  );
};

export default PaymentDone;
