import React from "react";
import { useState, useEffect } from "react";
import ComplexTable from "views/admin/default/components/GiftCardTable";
const Giftcard = () => {
  const [details, setDetails] = useState({
    productURL: "",
    receiverEmail: "",
    maxAmount: "",
    couponLength: "",
    couponCodeType: "AlphaNumeric",
    couponCode: "",
  });
  const [disables, setdisables] = useState(false);
  const [iid, setId] = useState("");
  // const [details, setDetails] = useState([]);
  const [table, setTable] = useState([]);
  useEffect(() => {
    getProducts();
    // makeTable();
  }, []);

  const getProducts = async () => {
    let result = await fetch(`http://localhost:3000/GiftCard`);
    result = await result.json();
    const newData = result.map((item) => {
      return {
        name: item.emailId,
        date: item.amt,
        progress: item._id,
        status: item._id,
      };
    });
    setTable(newData);
    //   console.log(newData);
  };

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

  const generateCode = (type, length) => {
    let alphanum = "";
    if (type === "Numeric") alphanum = "0123456789";
    else if (type === "Alphabetic") alphanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    else if (type === "AlphaNumeric")
      alphanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789";

    var code = "";

    for (var i = 0; i < length; i++) {
      code += alphanum.charAt(Math.floor(Math.random() * alphanum.length));
    }
    console.log(code);
    return code;
    // if (generated.indexOf(code) === -1) {
    //   generated.push(code);
    // } else {
    //   generateCode(type, length);
    // }
  };
  // const Change = (e) => {
  //   console.log(e);
  //   console.log(details);
  //   setDetails(...details, e.target.name: e.target.value);

  // }
  const handleGenerate = async (e) => {
    e.preventDefault();
    if (details.couponCodeType !== "Custom") {
      let code = await randomGenerate(
        details.couponCodeType,
        details.couponLength
      );
      console.log(code);
      setDetails({ ...details, couponCode: code }, () => console.log(details));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    // if (details.couponCodeType !== "Custom") {
    //   let code = await randomGenerate(details.couponCodeType, details.couponLength)
    //   console.log(code);
    //   setDetails({ ...details, couponCode: code }, ()=>(console.log(details)));
    // }
    console.log(details);
    let result = await fetch("http://localhost:3000/GiftCard", {
      method: "post",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    getProducts();
    //   console.log(result, "result");
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
      `http://localhost:3000/GiftCard/updateGift/${iid}`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    getProducts();
  };
  const columnsDataComplex = [
    {
      Header: "Email Id",
      accessor: "name",
    },
    {
      Header: "Amount",
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
  const Edit = async (e) => {
    // console.log(e.target.value);
    //   console.log(details);
    let id = e.target.value;
    let result = await fetch(`http://localhost:3000/GiftCard/get/${id}`);
    setId(id);
    result = await result.json();
    console.log(result.user);
    setDetails({
      productURL: result.user.url,
      receiverEmail: result.user.emailId,
      maxAmount: result.user.amt,
      couponLength: result.user.couponLength,
      couponCodeType: result.user.couponCodeType,
      couponCode: result.user.couponCode,
    });
    console.log(details, "result");
    setdisables(true);
    //   getProducts();
  };
  const Delete = async (e) => {
    console.log(e.target);
    console.log(e.target.value);
    let id = e.target.value;
    // let result = await fetch(`http://localhost:3000/UserSpecific/get/${id}`);
    // result = await result.json();
    // setDetails(result.user);
    // console.log(details, "result");
    fetch(`http://localhost:3000/GiftCard/${id}`, {
      method: "DELETE",
    }).then((data) => console.log(data, "deleted"));
    getProducts();
  };
  return (
    <div className="flex w-full flex-col gap-5">
      <form onSubmit={handleSubmit} action="" className="mt-5">
        <div className="mt-6 grid grid-cols-1 md:grid-cols-1 md:gap-12 lg:grid-cols-1 xl:grid-cols-1">
          <div className="">
            <div className="mb-4 flex justify-between">
              <div className="w-2/5">
                <label
                  htmlFor="id1"
                  className={`mt-5 mb-5 ml-6 text-xl font-bold text-navy-700 dark:text-white`}
                >
                  Product Url
                </label>
                <input
                  value={details.productURL}
                  type="text"
                  id="id1"
                  onChange={(e) => {
                    setDetails({ ...details, productURL: e.target.value });
                  }}
                  placeholder="Enter the product url"
                  className={`h-15 mb-5 mt-3 ml-3 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-4 text-lg outline-none`}
                />
              </div>

              <div className="mt-10 mb-5 ml-6 text-2xl font-bold text-navy-700 dark:text-white">
                <p>or</p>
              </div>

              <div className="w-2/5">
                <label
                  htmlFor="id1"
                  className={`mt-5 mb-5 ml-6 text-xl font-bold text-navy-700 dark:text-white`}
                >
                  Max Amount
                </label>
                <input
                  value={details.maxAmount}
                  type="text"
                  id="id1"
                  onChange={(e) => {
                    setDetails({ ...details, maxAmount: e.target.value });
                  }}
                  placeholder="Enter the product url"
                  className={`h-15 mb-5 mt-3 ml-3 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-4 text-lg outline-none`}
                />
              </div>
            </div>

            <label
              htmlFor="id1"
              className={`mt-5 mb-5 ml-6 text-xl font-bold text-navy-700 dark:text-white`}
            >
              Receiver Email Address
            </label>
            <input
              value={details.receiverEmail}
              type="text"
              id="id1"
              onChange={(e) => {
                setDetails({ ...details, receiverEmail: e.target.value });
              }}
              placeholder="Enter the site url"
              className={`h-15 mb-5 mt-3 ml-3 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-4 text-lg outline-none`}
            />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="">
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

          <div className="">
            <label
              htmlFor="targetAud"
              className={`mt-2 ml-3 text-lg font-bold text-navy-700 dark:text-white`}
            >
              Code type
            </label>

            <div className="relative mt-1">
              <select
                name="couponType"
                value={details.couponCodeType}
                onChange={(e) => {
                  setDetails({ ...details, couponCodeType: e.target.value });
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

        <div className="my-7 mt-12">
          <div className="grid grid-cols-2 gap-6 ">
            <div className="">
              <button
                // type="submit"
                onClick={handleGenerate}
                disabled={disables}
                class="text-blue h-[50px] w-full rounded-xl bg-ourTheme text-xl font-bold hover:bg-ourDarkTheme  hover:text-lightPrimary"
              >
                Generate Coupon
              </button>
            </div>

            <div className="">
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
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
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

        {/* <button
            disabled={!disables}
            onClick={updateData}
            type="submit"
            class="text-blue mt-7 ml-2 w-1/4 rounded-xl border bg-krishSecondary py-2 px-4 font-bold hover:bg-blue-700"
          >
            Update
          </button> */}
      </form>
      <ComplexTable
        edit={Edit}
        delet={Delete}
        columnsData={columnsDataComplex}
        tableData={table}
      />
    </div>
  );
};

export default Giftcard;
