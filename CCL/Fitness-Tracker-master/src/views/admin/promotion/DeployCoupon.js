import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DeployCoupon() {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState([]);
  useEffect(() => {
    getProducts();
    getCompany();
  }, []);

  const getProducts = async () => {
    let result = await fetch(`http://localhost:3000/productType`);
    result = await result.json();
    setProducts(result);
    console.log(result[0].programName);
  };
  const getCompany = async () => {
    let result = await fetch(`http://localhost:3000/company`);
    result = await result.json();
    setCompany(result);
  };
  const navigate = useNavigate();
  const [user, setUser] = useState({
    programId: "",
    companyId: "",
    noOfCoupon: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,"name");
    setUser({
      ...user,
      [name]: value,
    });

    console.log(user);
  };
  const register = async () => {
    // console.log("ll");
    const { programId, companyId, noOfCoupon } = user;

    if (programId && companyId && noOfCoupon) {
      console.log(user);
      let result = await fetch("http://localhost:3000/combined", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      //   console.log(result, "result");
      // localStorage.setItem("admin", JSON.stringify(result));
      // navigate("/");
      // <Redirect to="/" />;
    } else {
      alert("invalid");
    }
  };
  return (
    <div className="mt-8 w-1/2">
      <div className="mb-6 w-full px-3 md:mb-0">
        <label
          htmlFor="Ecoms"
          className={`mt-5 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
        >
          Select Coupon Type
        </label>
        <div className="relative">
          <select
            name="programId"
            onChange={handleChange}
            className="mt-3 mr-3 block w-full appearance-none rounded-xl border border-gray-200 bg-formBg py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-state"
          >
            {products.map((p, index) => (
              <option value={p._id}>{p.programName}</option>
            ))}
            <option>Coupons</option>
            {/* <option>Loyalty Cards</option>
            <option>Promotions</option>
            <option>Discount Code</option>
            <option>Buy X get Y</option>
            <option>Next Order Coupons</option> */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-7 mb-6 w-full px-3 md:mb-0">
        <label
          htmlFor="progType"
          className={`mt-5 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
        >
          Select Company
        </label>
        <div className="relative">
          <select
            name="companyId"
            onChange={handleChange}
            className="mt-3 mr-3 block w-full appearance-none rounded-xl border border-gray-200 bg-formBg py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-state"
          >
            {company.map((p, index) => (
              <option value={p._id}>{p.companyName}</option>
            ))}
            <option>Coupons</option>
            {/* <option>Loyalty Cards</option>
            <option>Promotions</option>
            <option>Discount Code</option>
            <option>Buy X get Y</option>
            <option>Next Order Coupons</option> */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-7 ml-3">
        <label
          htmlFor="minSpent"
          className={`mt-5 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
        >
          Number of coupons &nbsp; &nbsp; &nbsp;
        </label>

        <input
          onChange={handleChange}
          name="noOfCoupon"
          value={user.noOfCoupon}
          type="text"
          id="id1"
          placeholder=""
          disabled={false}
          className={`h-15 mt-3 flex rounded-xl border bg-formBg p-2 pl-5 text-xl outline-none`}
        />
      </div>

      <div className="mt-5 flex justify-center">
        <button
          onClick={register}
          type="submit"
          className="text-blue mt-7 w-3/5 rounded-xl bg-ourTheme py-3 px-6 text-xl font-bold hover:bg-ourDarkTheme  hover:text-lightPrimary"
        >
          Generate Coupon
        </button>
      </div>
    </div>
  );
}

export default DeployCoupon;
