import React from "react";
import { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import ComplexTable from "views/admin/default/components/customerSpecificCouponTable";
const Promotion = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
    // makeTable();
  }, []);

  const getProducts = async () => {
    let result = await fetch(`http://localhost:3000/UserSpecific/`);
    result = await result.json();
    const newData = result.map((item) => {
      return {
        name: item.programName,
        date: item.couponType,
        progress: item._id,
        status: item._id,
      };
    });
    setProducts(newData);
    // console.log(newData);
  };


  const defaultValue = {
    year: 2023,
    month: 3,
    day: 11,
  };
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const [iid, setId] = useState("");
  const [details, setDetails] = useState({
    couponCode: "",
    programName: "",
    couponType: "",
    couponLength: "",
    usage: {
      type: "",
      limit: 1,
    },
    minPurchase: 0,
    maxDiscount: 0,
    porductType: "",
    reward: {
      type: "",
      amount: 0,
    },
    expiryDate: {
      year: 2023,
      month: 3,
      day: 11,
    },
    couponCodeType: "AlphaNumeric"
  });
  const columnsDataComplex = [
    {
      Header: "User Email",
      accessor: "name",
    },
    {
      Header: "Type",
      accessor: "date",
    },
    {
      Header: "Edit",
      accessor: "progress",
    },
    {
      Header: "Delete",
      accessor: "status",
    },
  ];
  const Numeric8 = ["24173515", "99482462", "45851713"];
  const Alphabetic8 = ["QLKRCBZQ", "AOOHFCWC", "XUBIACND"];
  const AlphaNumeric8 = ["LLU92K6J", "HPKH9R5U", "87C5FE1S"];
  const Numeric12 = ["325833045049", "282214860064", "526283432214"];
  const Alphabetic12 = ["NRAPGOLKRUAF", "KQNNXTQCZTEB", "EGGIMGUWVSHZ"];
  const AlphaNumeric12 = ["14OTU7AB611X", "LZVA27EQLI50", "RWL4FQM323E4"];
  const Numeric16 = [
    "1910945135043757",
    "4736961579371537",
    "9174686308257580",
  ];
  const Alphabetic16 = [
    "WRKROUGATVOKAWVJ",
    "EMVIGDYOXDMWEIEY",
    "JMTFCZOJITZCAQIP",
  ];
  const AlphaNumeric16 = [
    "TZZNDY246S64VUFC",
    "258P222233M4YZNM",
    "8C2C54W0IH2U72C1",
  ];
  const randomGenerate = (type, length) => {
    if (type === "Numeric" && length <= 8) {
      return Numeric8[Math.floor(Math.random() * 3)];
    } else if (type === "Numeric" && length <= 12) {
      return Numeric12[Math.floor(Math.random() * 3)];
    } else if (type === "Numeric" && length <= 16) {
      return Numeric16[Math.floor(Math.random() * 3)];
    }

    if (type === "AlphaNumeric" && length <= 8) {
      return AlphaNumeric8[Math.floor(Math.random() * 3)];
    } else if (type === "AlphaNumeric" && length <= 12) {
      return AlphaNumeric12[Math.floor(Math.random() * 3)];
    } else if (type === "AlphaNumeric" && length <= 16) {
      return AlphaNumeric16[Math.floor(Math.random() * 3)];
    }

    if (type === "Alphabetic" && length <= 8) {
      return Alphabetic8[Math.floor(Math.random() * 3)];
    } else if (type === "Alphabetic" && length <= 12) {
      return Alphabetic12[Math.floor(Math.random() * 3)];
    } else if (type === "Alphabetic" && length <= 16) {
      return Alphabetic16[Math.floor(Math.random() * 3)];
    }
  };
    
  const Edit = async (e) => {
    // console.log(e.target.value);
    // console.log(details);
    let id = e.target.value;
    let result = await fetch(
      `http://localhost:3000/UserSpecific/get/${id}`
    );
    result = await result.json();
    setId(id);
    console.log(result.user.couponLength, "result");
    let text = result.user.couponCode;
    setDetails({
      couponCode: text,
      programName: result.user.programName,
      couponLength: result.user.couponLength,
      couponType: result.user.couponType,
      usage: result.user.usage,
      minPurchase: result.user.minPurchase,
      maxDiscount: result.user.maxDiscount,
      porductType: result.user.couponType,
      reward: result.user.reward,
      expiryDate: result.user.expiryDate,
    });
    console.log(details, "resultkkkk");
    getProducts();
    // clear();

  }
  const Delete = async (e) => {
    console.log(e.target);
    console.log(e.target.value);
    let id = e.target.value;
    // let result = await fetch(`http://localhost:3000/UserSpecific/get/${id}`);
    // result = await result.json();
    // setDetails(result.user);
    // console.log(details, "result");
    fetch(`http://localhost:3000/UserSpecific/${id}`, {
      method: "DELETE",
    }).then((data) => console.log(data, "deleted"));
    getProducts();
  };
  //   Edit();
  const handleGenerate = async (e) => {
    e.preventDefault();
    if (details.couponType !== "Custom") {
      let code = await randomGenerate(details.couponCodeType, details.couponLength);
      console.log(code);
      setDetails({ ...details, couponCode: code }, () => console.log(details));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(details);
    let result = await fetch("http://localhost:3000/UserSpecific", {
      method: "post",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log(result, "result");
    // localStorage.setItem("admin", JSON.stringify(result));
    // navigate("/");
  };

  const updateData = async (e) => {
    e.preventDefault();
    console.log(e);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    };
    const response = await fetch(
      `http://localhost:3000/UserSpecific/updateProgram/${iid}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
  };

  // const clear = () => {
  //   setDetails({
  //     programName: "",
  //     couponType: "",
  //     usage: {
  //       type: "",
  //       limit: 1,
  //     },
  //     minPurchase: 0,
  //     maxDiscount: 0,
  //     porductType: "",
  //     reward: {
  //       type: "",
  //       amount: 0,
  //     },
  //     expiryDate: {
  //       year: 2023,
  //       month: 3,
  //       day: 11,
  //     },
  //   });
  // }

  return (
    <div className="flex w-full flex-col gap-5">
      <form onSubmit={handleSubmit} action="" className="mt-5">
        <div className="mt-6 mb-8 grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:grid-cols-2 xl:grid-cols-2">
          <div className="">
            <label
              htmlFor="id1"
              className={`mt-5 mb-5 ml-6 text-xl font-bold text-navy-700 dark:text-white`}
            >
              User Email Id
            </label>
            <input
              value={details.programName}
              type="text"
              id="id1"
              onChange={(e) => {
                setDetails({ ...details, programName: e.target.value });
              }}
              placeholder="Enter receiver's Email Id"
              className={`h-15 mb-5 mt-3 ml-3 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-4 text-lg outline-none`}
            />

            <div className="mb-6 w-full px-3 md:mb-0">
              <label
                htmlFor="progType"
                className={`mt-5 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
              >
                Prduct Type
              </label>
              <div className="relative">
                <select
                  name="couponType"
                  value={details.couponType}
                  onChange={(e) => {
                    let x = e.target.value;
                    setDetails({ ...details, couponType: x });
                  }}
                  className="mt-3 mr-3 block w-full appearance-none rounded-xl border border-gray-200 bg-formBg py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="grid-state"
                >
                  <option value="Coupons">Coupons</option>
                  <option value="LoyaltyCards">Loyalty Cards</option>
                  <option value="Promotions">Promotions</option>
                  <option value="DiscoutCode">Discount Code</option>
                  <option value="BuyXgetY">Buy X get Y</option>
                  <option value="NextOrder">Next Order Coupons</option>
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
                htmlFor="condRules"
                className={`mt-11 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
              >
                Conditions Rules :
              </label>
              <br />
              <div className="mt-4">
                <label
                  htmlFor="minSpent"
                  className={`ml-3 text-lg font-bold text-navy-700 dark:text-white`}
                >
                  Minimum purchase &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </label>

                <input
                  type="text"
                  id="id1"
                  onChange={(e) => {
                    setDetails({ ...details, minPurchase: e.target.value });
                  }}
                  placeholder="Min purchase amount"
                  disabled={false}
                  className={`h-15 mt-3 rounded-xl border bg-formBg p-2 pl-5 text-lg outline-none`}
                />
              </div>
              <div className="mt-2">
                <label
                  htmlFor="maxDis"
                  className={`mt-2 ml-3 text-lg font-bold text-navy-700 dark:text-white`}
                >
                  Maximum discount &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </label>

                <input
                  value={details.maxDiscount}
                  type="text"
                  id="id1"
                  onChange={(e) => {
                    setDetails({ ...details, maxDiscount: e.target.value });
                  }}
                  placeholder="Max applicable discount"
                  disabled={false}
                  className={`h-15 mt-3 rounded-xl border bg-formBg p-2 pl-5 text-lg outline-none`}
                />
              </div>
              <div className="mt-2">
                <label
                  htmlFor="prodType"
                  className={`mt-2 ml-3 text-lg font-bold text-navy-700 dark:text-white`}
                >
                  On product &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </label>

                <input
                  value={details.porductType}
                  type="text"
                  id="id1"
                  onChange={(e) => {
                    setDetails({ ...details, porductType: e.target.value });
                  }}
                  placeholder="Product Type"
                  disabled={false}
                  className={`h-15 mt-3 rounded-xl border bg-formBg p-2 pl-5 text-lg outline-none`}
                />
              </div>
            </div>
            <div className="mt-7 mb-6 w-full px-3 md:mb-0">
              <label
                htmlFor="condRules"
                className={`mt-6 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
              >
                Reward
              </label>
              <br />
              <div className="mt-3 grid grid-cols-2">
                <div className="mr-4">
                  <div className="relative">
                    <select
                      onChange={(e) => {
                        let x = e.target.value;
                        setDetails({
                          ...details,
                          reward: { type: x, amount: details.reward.amount },
                        });
                      }}
                      className="mr-3 block w-full appearance-none rounded-xl border border-gray-200 bg-formBg py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                      id="grid-state"
                    >
                      <option value="Absolute">Absolute</option>
                      <option value="Percentage">Percentage</option>
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

                <div className="">
                  <input
                    value={details.reward.amount}
                    type="text"
                    id="id1"
                    placeholder="Enter amount"
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        reward: {
                          type: details.reward.type,
                          amount: e.target.value,
                        },
                      });
                    }}
                    disabled={false}
                    className={`h-15 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-5 text-lg outline-none`}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 w-full px-3">
              <label
                htmlFor="progType"
                className={`mt-5 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
              >
                Usage Limit
              </label>
              <div className="mt-3 grid grid-cols-2">
                <div className="mr-4">
                  <div className="relative">
                    <select
                      value={details.usage.type}
                      onChange={(e) => {
                        let x = e.target.value;
                        e.target.value = "unlimited"
                          ? setDetails({
                              ...details,
                              usage: { type: x, limit: -1 },
                            })
                          : setDetails({
                              ...details,
                              usage: { type: x, limit: details.usage.limit },
                            });
                      }}
                      className="mr-3 block w-full appearance-none rounded-xl border border-gray-200 bg-formBg py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                      id="grid-state"
                    >
                      <option value="limited">Limited</option>
                      <option value="unlimited">Unlimited</option>
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

                <div className="">
                  <input
                    value={details.usage.limit}
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        usage: {
                          type: details.usage.type,
                          limit: e.target.value,
                        },
                      });
                    }}
                    type="text"
                    id="id1"
                    placeholder="Enter usage limit"
                    disabled={details.usage.type === "unlimited" ? true : false}
                    className={`h-15 mb-5 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-5 text-lg outline-none`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="mb-6 w-full px-3 md:mb-0">
              <label
                htmlFor="validity"
                className={`ml-3 text-xl font-bold text-navy-700 dark:text-white`}
              >
                Validity
              </label>
            </div>

            <div className="mt-2 flex justify-center">
              <div className="">
                <div className="display-none mt-3">
                  <Calendar
                    value={selectedDay}
                    colorPrimary="#422afb" // added this
                    onChange={(e) => {
                      // let x = e.target.value;
                      console.log(e);
                      setDetails({
                        ...details,
                        expiryDate: {
                          year: e.year,
                          month: e.month,
                          day: e.day,
                        },
                      });
                      setSelectedDay({
                        year: e.year,
                        month: e.month,
                        day: e.day,
                      });
                    }}
                    shouldHighlightWeekends
                  />
                </div>

                <div className=""></div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              <div className="mt-5">
                <label
                  htmlFor="targetAud"
                  className={`mt-2 ml-3 text-lg font-bold text-navy-700 dark:text-white`}
                >
                  Length of Coupon
                </label>

                <input
                  value={details.couponLength}
                  onChange={(e) => {
                    setDetails({ ...details, couponLength: e.target.value });
                  }}
                  type="text"
                  id="id1"
                  placeholder="Enter Coupon Length"
                  disabled={false}
                  className={`h-15 mt-3 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-5 text-lg outline-none`}
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="targetAud"
                  className={`mt-2 ml-3 text-lg font-bold text-navy-700 dark:text-white`}
                >
                  Code type
                </label>

                <div className="relative mt-1">
                  <select
                    name="couponCodeType"
                    value={details.couponCodeType}
                    onChange={(e) => {
                      setDetails({
                        ...details,
                        couponCodeType: e.target.value,
                      });
                    }}
                    className="mt-3 mr-3 block w-full appearance-none rounded-xl border border-gray-200 bg-formBg py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    id="grid-state"
                  >
                    <option value="AlphaNumeric">AlphaNumeric</option>
                    <option value="Numeric">Numeric</option>
                    <option value="Alphabetic">Alphabetic</option>
                    <option value="Custom">Custom</option>
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
            </div>

            <div className="mt-5">
              <input
                type="text"
                id="id1"
                value={details.couponCode}
                onChange={(e) => {
                  setDetails({ ...details, couponCode: e.target.value });
                }}
                placeholder="Enter Custom Code"
                disabled={details.couponCodeType !== "Custom" ? true : false}
                className={` h-15 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-5 text-lg outline-none`}
              />
              {/* <div className="flex justify-center"> */}
              <button
                onClick={handleGenerate}
                // type="handle"
                class="text-blue mt-8 h-[45px] w-full rounded-xl bg-ourTheme text-xl font-bold hover:bg-ourDarkTheme  hover:text-lightPrimary"
              >
                Generate Coupon
              </button>
              {/* </div> */}
            </div>

            <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              <div className="flex justify-center">
                <button
                  type="submit"
                  class="text-blue h-[50px] w-full rounded-xl bg-ourTheme text-xl font-bold hover:bg-ourDarkTheme  hover:text-lightPrimary"
                >
                  Create Coupon
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={updateData}
                  class="text-blue h-[50px] w-full rounded-xl bg-ourTheme text-xl font-bold hover:bg-ourDarkTheme  hover:text-lightPrimary"
                >
                  Update Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <ComplexTable
        edit={Edit}
        delet={Delete}
        columnsData={columnsDataComplex}
        tableData={products}
      />
    </div>
  );
};

export default Promotion;
