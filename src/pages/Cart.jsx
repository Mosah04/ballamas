import React from "react";
import Button from "@components/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="w-full flex-grow-0 flex-shrink-0">
      <div className="flex gap-8 flex-wrap justify-center">
        <table className="w-full max-w-[900px] text-sm">
          <thead className="font-light text-b-dark-gray text-xs">
            <tr className="border-b border-b-light-gray">
              <th colSpan="3" className="text-left py-2 font-medium">
                Product
              </th>
              <th className="text-center py-2 font-medium">Quantity</th>
              <th className="text-right py-2 font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td rowSpan="2" className="w-24 py-2">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={"/assets/product-cart-0.png"}
                    alt={"name"}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </td>
              <td colSpan="2" className="py-2 px-2">
                <div className="font-semibold text-nowrap text-ellipsis">
                  T-Shirt
                </div>
                <div className="text-sm text-b-dark-gray">Green - Large</div>
                <div className="text-sm font-bold">${87}</div>
              </td>
              <td rowSpan="2" className="text-center">
                <div className="flex justify-center items-center">
                  <span className="flex p-2 rounded-full bg-b-light-gray/40">
                    <button
                      type="button"
                      className="h-4 w-4 flex justify-center items-center p-2 border border-[#1D1D1D] rounded-full"
                    >
                      -
                    </button>
                    <span className="px-6">{2}</span>
                    <button
                      type="button"
                      className="h-4 w-4 flex justify-center items-center p-2 border border-[#1D1D1D] rounded-full"
                    >
                      +
                    </button>
                  </span>
                  <button
                    type="button"
                    className="ml-2 aspect-square h-full rounded-full p-2 bg-b-light-gray/40 flex-shrink-0"
                  >
                    <img src="/assets/icons/trash.svg" alt="Delete item" />
                  </button>
                </div>
              </td>
              <td rowSpan="2" className="text-right font-semibold">
                ${174}
              </td>
            </tr>
            <tr className="border-b border-b-light-gray">
              <td colSpan="2"></td>
            </tr>
            <tr>
              <td rowSpan="2" className="w-24 py-2">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={"/assets/product-cart-1.png"}
                    alt={"name"}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </td>
              <td colSpan="2" className="py-2 px-2">
                <div className="font-semibold text-nowrap text-ellipsis">
                  Men's Dri-FIT Golf Jacket
                </div>
                <div className="text-sm text-b-dark-gray">Ocean - Large</div>
                <div className="text-sm font-bold">${100}</div>
              </td>
              <td rowSpan="2" className="text-center">
                <div className="flex justify-center items-center">
                  <span className="flex p-2 rounded-full bg-b-light-gray/40">
                    <button
                      type="button"
                      className="h-4 w-4 flex justify-center items-center p-2 border border-[#1D1D1D] rounded-full"
                    >
                      -
                    </button>
                    <span className="px-6">{1}</span>
                    <button
                      type="button"
                      className="h-4 w-4 flex justify-center items-center p-2 border border-[#1D1D1D] rounded-full"
                    >
                      +
                    </button>
                  </span>
                  <button
                    type="button"
                    className="ml-2 aspect-square h-full rounded-full p-2 bg-b-light-gray/40 flex-shrink-0"
                  >
                    <img src="/assets/icons/trash.svg" alt="Delete item" />
                  </button>
                </div>
              </td>
              <td rowSpan="2" className="text-right font-semibold">
                ${100}
              </td>
            </tr>
            <tr className="border-b border-b-light-gray">
              <td colSpan="2"></td>
            </tr>
            <tr>
              <td rowSpan="2" className="w-24 py-2">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={"/assets/product-cart-2.png"}
                    alt={"name"}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </td>
              <td colSpan="2" className="py-2 px-2">
                <div className="font-semibold text-nowrap text-ellipsis">
                  Tatum 2 "Red Cement"
                </div>
                <div className="text-sm text-gray-600">Size: 15</div>
                <div className="text-sm font-bold">${15}</div>
              </td>
              <td rowSpan="2" className="text-center">
                <div className="flex justify-center items-center">
                  <span className="flex p-2 rounded-full bg-b-light-gray/40">
                    <button
                      type="button"
                      className="h-4 w-4 flex justify-center items-center p-2 border border-[#1D1D1D] rounded-full"
                    >
                      -
                    </button>
                    <span className="px-6">{2}</span>
                    <button
                      type="button"
                      className="h-4 w-4 flex justify-center items-center p-2 border border-[#1D1D1D] rounded-full"
                    >
                      +
                    </button>
                  </span>
                  <button
                    type="button"
                    className="ml-2 aspect-square h-full rounded-full p-2 bg-b-light-gray/40 flex-shrink-0"
                  >
                    <img src="/assets/icons/trash.svg" alt="Delete item" />
                  </button>
                </div>
              </td>
              <td rowSpan="2" className="text-right font-semibold">
                ${250}
              </td>
            </tr>
            <tr className="border-b border-b-light-gray">
              <td colSpan="2"></td>
            </tr>
          </tbody>
        </table>
        <article className="rounded-xl p-4 border border-b-light-gray h-fit flex-shrink-0 flex-grow-0">
          <h2 className="font-bold text-nowrap min-w-[300px] mb-4">
            Order summary
          </h2>
          <div className="flex justify-between text-xs text-b-dark-gray">
            <span className="font-medium">Subtotal</span>
            <span className="font-medium">$524.00</span>
          </div>
          <div className="flex justify-between text-xs text-b-dark-gray pb-2 border-b border-b-light-gray">
            <span className="font-medium">Discount</span>
            <span className="font-medium">$0</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="font-bold">Order total</span>
            <span className="font-bold">$524.00</span>
          </div>
          <Link to={"/checkout"} className="w-full">
            <Button className="w-full py-2 mt-2 text-sm"> Checkout now</Button>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Cart;
