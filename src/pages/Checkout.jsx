import React, { useState } from "react";
import { Link } from "react-router-dom";
import SuperInput from "@components/SuperInput";
import Button from "@components/Button";
import ArrowRight from "@/icons/ArrowRight";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  return (
    <section className="w-full flex-grow-0 flex-shrink-0">
      <h1 className="font-chillax font-extrabold text-xl mb-5">Checkout</h1>
      <div className="flex flex-wrap gap-10">
        <article className="flex-grow space-y-5">
          <div className="space-y-5">
            <div>
              <p className="font-bold">Your Order</p>
              <p className="text-b-dark-gray font-medium text-sm">
                By placing your order, you agree to Ballamas{" "}
                <Link className="text-b-black underline">Privacy</Link>
                {" and "}
                <Link className="text-b-black underline">Policy</Link>.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="aspect-square w-[45px] sm:max-w-[70px] md:max-w-[72px] rounded-xl overflow-hidden">
                  <img
                    src={"/assets/product-cart-0.png"}
                    alt={"name"}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-ellipsis text-nowrap">
                    T-Shirt
                  </div>
                  <div className="text-b-dark-gray text-sm text-ellipsis text-nowrap">
                    Color: Green - Size: Large
                  </div>
                </div>
              </div>
              <span className="font-bold">$174.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="aspect-square w-[45px] sm:max-w-[70px] md:max-w-[72px] rounded-xl overflow-hidden">
                  <img
                    src={"/assets/product-cart-1.png"}
                    alt={"name"}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-ellipsis text-nowrap">
                    Men's Dri-FIT Golf Jacket
                  </div>
                  <div className="text-b-dark-gray text-sm text-ellipsis text-nowrap">
                    Color: Ocean - Size: Large
                  </div>
                </div>
              </div>
              <span className="font-bold">$100.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="aspect-square w-[45px] sm:max-w-[70px] md:max-w-[72px] rounded-xl overflow-hidden">
                  <img
                    src={"/assets/product-cart-2.png"}
                    alt={"name"}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-ellipsis text-nowrap">
                    Tatum 2 "Red Cement"
                  </div>
                  <div className="text-b-dark-gray text-sm text-ellipsis text-nowrap">
                    Size: 15
                  </div>
                </div>
              </div>
              <span className="font-bold">$250.00</span>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div>
              <SuperInput
                className="max-w-[250px] text-xs"
                labelText="Discount Code"
                htmlFor="discountCode"
                name="discountCode"
                type="text"
                placeholder="Add discount code"
              />
              <p className="text-xs mt-1">
                <span className="font-bold">
                  New customer? <Link className="underline">Sign up</Link>{" "}
                </span>
                to get better offer.
              </p>
            </div>

            <Button className="h-fit py-2 px-4">Apply</Button>
          </div>

          <div>
            <div className="flex justify-between text-sm text-b-dark-gray">
              <span className="font-medium">Subtotal</span>
              <span className="font-medium">$524.00</span>
            </div>
            <div className="flex justify-between text-sm text-b-dark-gray pb-2 border-b border-b-light-gray">
              <span className="font-medium">Discount</span>
              <span className="font-medium">$0</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="font-bold">Order total</span>
              <span className="font-bold">$524.00</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-bold">Shipping method</p>
            <div className="rounded-lg border border-b-light-gray text-sm w-full flex justify-between items-center p-2">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  className="text-lg p-2 w-4 h-4 checked:bg-b-black"
                  name="shippingMethod"
                />
                <div>
                  <div className="font-bold">Free shipping</div>
                  <div className="text-b-dark-gray text-xs">
                    7-30 business days
                  </div>
                </div>
              </div>
              <span className="font-bold text-sm"> $0</span>
            </div>
            <div className="rounded-lg border border-b-light-gray text-sm w-full flex justify-between items-center p-2">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  className="text-lg p-2 w-4 h-4 checked:bg-b-black"
                  name="shippingMethod"
                />
                <div>
                  <div className="font-bold">Regular shipping</div>
                  <div className="text-b-dark-gray text-xs">
                    3-14 business days
                  </div>
                </div>
              </div>
              <span className="font-bold text-sm"> $7,50</span>
            </div>
            <div className="rounded-lg border border-b-light-gray text-sm w-full flex justify-between items-center p-2">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  className="text-lg p-2 w-4 h-4 checked:bg-b-black"
                  name="shippingMethod"
                />
                <div>
                  <div className="font-bold">Express shipping</div>
                  <div className="text-b-dark-gray text-xs">
                    1-3 business days
                  </div>
                </div>
              </div>
              <span className="font-bold text-sm"> $22,50</span>
            </div>
          </div>
        </article>
        <form className="space-y-5 max-lg:basis-full">
          <div>
            <p className="font-bold">Payment details</p>
            <p className="text-b-dark-gray font-medium text-sm">
              Complete your purchase by providing your payment details.
            </p>
          </div>
          <div className="space-y-2 w-full">
            <p className="text-sm font-bold">Shipping address</p>
            <div className="w-full flex gap-2 items-center flex-wrap">
              <SuperInput
                className="flex-1 min-w-[230px] text-xs"
                labelText="First Name"
                htmlFor="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
              />
              <SuperInput
                className="flex-1 min-w-[230px] text-xs"
                labelText="Last Name"
                htmlFor="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            <div className="w-full flex gap-2 items-center flex-wrap">
              <SuperInput
                className="flex-1 min-w-[230px] text-xs"
                labelText="Email address"
                htmlFor="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              <SuperInput
                className="flex-1 min-w-[230px] text-xs"
                labelText="Phone number"
                htmlFor="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="w-full flex gap-2 items-center flex-wrap">
              <SuperInput
                className="flex-1 min-w-[230px] text-xs"
                labelText="Address"
                htmlFor="address"
                name="address"
                type="text"
                placeholder="Enter your address"
              />
              <SuperInput
                className="flex-1 min-w-[230px] text-xs"
                labelText="City"
                htmlFor="city"
                name="city"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="w-full flex gap-2 items-center flex-wrap">
              <SuperInput
                className="flex-1 min-w-[230px] text-xs"
                labelText="Email address"
                htmlFor="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              <SuperInput
                className="flex-1 min-w-[230px] text-xs"
                labelText="Phone number"
                htmlFor="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="w-full flex gap-2 items-center flex-wrap">
              <SuperInput
                className="flex-1 min-w-[230px] text-xs"
                labelText="Region"
                htmlFor="region"
                name="region"
                type="text"
                placeholder="Enter your email address"
              />
              <SuperInput
                className="flex-1 min-w-[230px] text-xs"
                labelText="Postal code"
                htmlFor="postalCode"
                name="postalCode"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <p className="font-bold">Select payment method</p>
          <div className="w-full flex justify-between gap-2">
            <button
              className={`flex-1 px-2 py-4 space-y-2 border  ${
                paymentMethod === "card" ? "border-b-black" : "border-b-gray"
              }  rounded-xl text-left`}
              onClick={() => setPaymentMethod("card")}
              type="button"
            >
              <img src="/assets/icons/card.svg" alt="Credit card" />
              <p className="text-xs">Debit/ Credit Card</p>
            </button>
            <button
              className={`flex-1 px-2 py-4 space-y-2 border  ${
                paymentMethod === "virtualAccount"
                  ? "border-b-black"
                  : "border-b-gray"
              }  rounded-xl text-left`}
              onClick={() => setPaymentMethod("virtualAccount")}
              type="button"
            >
              <img src="/assets/icons/bank.svg" alt="Bank" />
              <p className="text-xs">Virtual account</p>
            </button>
          </div>

          {paymentMethod === "card" && (
            <>
              <div className="w-full flex py-3 px-2 text-xs rounded-full border border-b-black">
                <input
                  className="outline-none placeholder:text-b-black w-full"
                  type="password"
                  name="Card number"
                  placeholder="Card number"
                />
                <img src="/assets/icons/lock.svg" alt="" />
              </div>
              <div className="w-full flex gap-2 items-center flex-wrap">
                <SuperInput
                  className="flex-1 min-w-[230px] text-xs"
                  name="firstName"
                  type="text"
                  onFocus={(e) => {
                    e.target.type = "date";
                  }}
                  placeholder="Expiration date (MM/YY)"
                />
                <SuperInput
                  className="flex-1 min-w-[230px] text-xs"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </>
          )}
          <div className="flex gap-1 items-center text-xs">
            <input type="checkbox" name="consentShipping" />
            <span>Use shipping address as billing address</span>
          </div>

          <Link className="w-full mt-2 flex justify-center" to={"/payment"}>
            <Button className="flex-grow gap-2 max-w-[250px] py-2 px-3">
              Pay $524.00
              <ArrowRight />
            </Button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
