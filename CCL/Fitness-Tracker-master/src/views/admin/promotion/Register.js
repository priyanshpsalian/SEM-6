import React from 'react'

export default function Register() {
  return (
    <div className='mt-8'> 
             <div className="">
              <label
                htmlFor="minSpent"
                className={`text-lg text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Username
              </label>

              <input
                type="text"
                id="id1"
                // value={details.minMargin}
                // onChange={(e) => { setDetails({ ...details, minMargin: e.target.value }) }}
                placeholder="Enter a username"
                disabled={false}
                className={`flex w-full mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
              />
            </div> 
             
             <div className="mt-5">
              <label
                htmlFor="minSpent"
                className={`text-lg text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Password
              </label>

              <input
                type="password"
                id="id1"
                // value={details.minMargin}
                // onChange={(e) => { setDetails({ ...details, minMargin: e.target.value }) }}
                placeholder="Enter a password"
                disabled={false}
                className={`flex w-full mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
              />
            </div> 
             <div className="mt-5">
              <label
                htmlFor="minSpent"
                className={`text-lg text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Shop Name 
              </label>

              <input
                type="text"
                id="id1"
                // value={details.minMargin}
                // onChange={(e) => { setDetails({ ...details, minMargin: e.target.value }) }}
                placeholder="Enter your shop name"
                disabled={false}
                className={`flex w-full mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
              />
            </div> 
             <div className="mt-5">
              <label
                htmlFor="minSpent"
                className={`text-lg text-navy-700 dark:text-white ml-3 font-bold`}
              >
                Shop website
              </label>

              <input
                type="text"
                id="id1"
                // value={details.minMargin}
                // onChange={(e) => { setDetails({ ...details, minMargin: e.target.value }) }}
                placeholder="Enter the shop website"
                disabled={false}
                className={`flex w-full mt-3 h-15 rounded-xl border p-2 text-lg outline-none pl-5 bg-formBg`}
              />
            </div> 

            <div className="flex justify-center mt-14">
                <button type="submit" class="text-blue h-[50px] w-1/4 rounded-xl bg-ourTheme text-xl font-bold hover:bg-ourDarkTheme  hover:text-lightPrimary">
                  Register
                </button>
              </div>

    </div>
  )
}
