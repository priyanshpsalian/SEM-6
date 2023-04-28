import React from "react";
import { useState, useEffect, useRef } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import Timer from "./Timer"

const Promotion = () => {

  const defaultValue = {
    year: 2023,
    month: 3,
    day: 12
  }
  var d = new Date();
  const [showTimer, setShowTimer] = useState(false);
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const [details, setDetails] = useState({
    schedTime: "",
    schedName: "",
    repeatType: "Once",
    expiryDate: {
      year: 2023,
      month: 4,
      day: 12
    }
  });


  const handleSubmit = async (e) => {
    setShowTimer(true);
    e.preventDefault();

    // let result = await fetch("http://localhost:3000/productType", {
    //   method: "post",
    //   body: JSON.stringify(details),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // });
    // result = await result.json();
    // console.log(result, "result");
    // getProducts();
    // localStorage.setItem("admin", JSON.stringify(result));
    // navigate("/");
    console.log(details);
    var d = new Date();
    let hrDiff, minDiff;
    let [hr, min] = details.schedTime.split(":");
    console.log(hr - d.getHours(), " :", min - d.getMinutes(), " :", d.getSeconds());
    if ((hr - d.getHours()) < 10)
      hrDiff = `0${hr - d.getHours()}`
    else
      hrDiff = `${hr - d.getHours()}`

    if ((min - d.getMinutes()) < 10)
      minDiff = `0${min - d.getMinutes()}`
    else
      minDiff = `${min - d.getMinutes()}`



    // setTimer( `${hrDiff}:${minDiff}:60`);

    // onClickReset(`${hrDiff}:${minDiff}:60`)


  }

  const asdf = () => {
    console.log("asf");
  }

  if (false) {
    return (
      <div className="">adg</div>

  // <Timer cdMin={10} cdhr={0} />
    // <p>hello</p>
  );
  }
  else {
    return (

      <div className="flex w-full flex-col gap-5">
        <form onSubmit={handleSubmit} action="" className="mt-5" style={{display: (showTimer === true) ? "none" : "block"}}>
          <div className="mt-6 mb-8 mr-7">
            <div className="">
              <label
                htmlFor="id1"
                className={`mt-5 mb-5 ml-6 text-xl font-bold text-navy-700 dark:text-white`}
              >
                Schedule Name
              </label>

              <input
                value={details.schedName}
                type="text"
                id="id1"
                onChange={(e) => {
                  setDetails({ ...details, schedName: e.target.value });
                }}
                placeholder="Enter the schedule name"
                className={`h-15 mb-5 mt-3 ml-3 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-4 text-lg outline-none`}
              />



              <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                <div className="">

                  <div className="mt-4 w-full pl-3 md:mb-0">
                    <label
                      htmlFor="progType"
                      className={`mt-5 ml-3 text-xl font-bold text-navy-700 dark:text-white`}
                    >
                      Repeat Type
                    </label>
                    <div className="relative">
                      <select
                        name="couponType"
                        value={details.repeatType}
                        onChange={(e) => {
                          let x = e.target.value;
                          setDetails({ ...details, repeatType: x });
                        }}
                        className="mt-3 mr-3 block w-full text-lg appearance-none rounded-xl border border-gray-200 bg-formBg py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                        id="grid-state"
                      >
                        <option value="New Customer">Once</option>
                        <option value="New Customer">Daily</option>
                        <option value="New Customer">Weekdays</option>
                        <option value="New Customer">Weekends</option>
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


                  <div className="mt-5 w-full md:mb-0">
                    <label
                      htmlFor="id1"
                      className={`mt-5 mb-5 ml-6 text-xl font-bold text-navy-700 dark:text-white`}
                    >
                      Schedule Time
                    </label>
                    <input
                      value={details.schedTime}
                      type="time"
                      id="id1"
                      onChange={(e) => {
                        setDetails({ ...details, schedTime: e.target.value });
                      }}
                      placeholder="Enter the schedule name"
                      className={`h-15 mb-5 mt-3 ml-3 flex w-full items-center justify-center rounded-xl border bg-formBg p-2 pl-4 text-lg outline-none`}
                    />
                  </div>

                  <div className="mt-12 ml-3 flex justify-center">
                    <button
                      type="submit"
                      class="text-blue h-[50px] w-full rounded-xl bg-ourTheme text-xl font-bold hover:bg-ourDarkTheme hover:text-lightPrimary"
                    >
                      Create Schedule
                    </button>
                  </div>

                </div>
                <div className="flex justify-center">
                  <div className="">
                    <div className="display-none mt-3">
                      <Calendar
                        value={selectedDay}
                        colorPrimary="#422afb" // added this
                        onChange={(e) => {
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
                  </div>
                </div>
              </div>

            </div>

          </div>
        </form>
        
        <div className="">
                {showTimer === true && (
                  <Timer cdMin={details.schedTime.split(":")[1] - d.getMinutes()} cdhr={details.schedTime.split(":")[0] - d.getHours()} />
                )}
              </div>

      </div>
    )
  }
};

export default Promotion;
