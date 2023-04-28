// import React, { useMemo, useState } from "react";
// import CardMenu from "components/card/CardMenu";
// import Card from "components/card";
// import {
//   useGlobalFilter,
//   usePagination,
//   useSortBy,
//   useTable,
// } from "react-table";

// import tableDataColumns from "../../../views/admin/tables/variables/companyDetails.json"

import { useState } from "react";
// import DetailsComponent from "./DetailsComponent";

// const { columnsData, tableDataColumns } = props;
const columnsDataColumns = [
  {
    Header: "CUSTOMER NAME",
    accessor: "name",
  },
  {
    Header: "CUST EMAIL",
    accessor: "email",
  },
  {
    Header: "DATE REGISTERED",
    accessor: "date",
  },
  {
    Header: "SPENDING",
    accessor: "spending",
  },
];
const CompanyDetails = () => {

  const [json, setJson] = useState([
    {
      "event_time": "2020-04-24 11:50:39 UTC",
      "order_id": 2294359932054537000,
      "product_id": 1515966223509089800,
      "category_id": 2268105426648171000,
      "category_code": "electronics.tablet",
      "brand": "samsung",
      "price": 162.01,
      "user_id": 1515915625441994000
    },
    {
      "event_time": "2020-04-24 11:50:39 UTC",
      "order_id": 2294359932054537000,
      "product_id": 1515966223509089800,
      "category_id": 2268105426648171000,
      "category_code": "electronics.tablet",
      "brand": "samsung",
      "price": 162.01,
      "user_id": 1515915625441994000
    },
    {
      "event_time": "2020-04-24 14:37:43 UTC",
      "order_id": 2294444024058086100,
      "product_id": 2273948319057183700,
      "category_id": 2268105430162997800,
      "category_code": "electronics.audio.headphone",
      "brand": "huawei",
      "price": 77.52,
      "user_id": 1515915625447879400
    },
    {
      "event_time": "2020-04-24 14:37:43 UTC",
      "order_id": 2294444024058086100,
      "product_id": 2273948319057183700,
      "category_id": 2268105430162997800,
      "category_code": "electronics.audio.headphone",
      "brand": "huawei",
      "price": 77.52,
      "user_id": 1515915625447879400
    },
    {
      "event_time": "2020-04-24 19:16:21 UTC",
      "order_id": 2294584263154074000,
      "product_id": 2273948316817424400,
      "category_id": 2268105471367840000,
      "category_code": "",
      "brand": "karcher",
      "price": 217.57,
      "user_id": 1515915625443148000
    },
    {
      "event_time": "2020-04-26 08:45:57 UTC",
      "order_id": 2295716521449619500,
      "product_id": 1515966223509261800,
      "category_id": 2268105442636858000,
      "category_code": "furniture.kitchen.table",
      "brand": "maestro",
      "price": 39.33,
      "user_id": 1515915625450382800
    },
    {
      "event_time": "2020-04-26 09:33:47 UTC",
      "order_id": 2295740594749702100,
      "product_id": 1515966223509105000,
      "category_id": 2268105428166509000,
      "category_code": "electronics.smartphone",
      "brand": "apple",
      "price": 1387.01,
      "user_id": 1515915625448766500
    },
    {
      "event_time": "2020-04-26 09:33:47 UTC",
      "order_id": 2295740594749702100,
      "product_id": 1515966223509105000,
      "category_id": 2268105428166509000,
      "category_code": "electronics.smartphone",
      "brand": "apple",
      "price": 1387.01,
      "user_id": 1515915625448766500
    },
    {
      "event_time": "2020-04-26 09:33:47 UTC",
      "order_id": 2295740594749702100,
      "product_id": 1515966223509105000,
      "category_id": 2268105428166509000,
      "category_code": "electronics.smartphone",
      "brand": "apple",
      "price": 1387.01,
      "user_id": 1515915625448766500
    },
    {
      "event_time": "2020-04-26 09:33:47 UTC",
      "order_id": 2295740594749702100,
      "product_id": 1515966223509105000,
      "category_id": 2268105428166509000,
      "category_code": "electronics.smartphone",
      "brand": "apple",
      "price": 1387.01,
      "user_id": 1515915625448766500
    },
    {
      "event_time": "2020-04-26 14:55:26 UTC",
      "order_id": 2295902490203259100,
      "product_id": 2273948311742316800,
      "category_id": 2268105393848714000,
      "category_code": "appliances.kitchen.refrigerators",
      "brand": "lg",
      "price": 462.94,
      "user_id": 1515915625450561300
    },
    {
      "event_time": "2020-04-26 23:35:39 UTC",
      "order_id": 2296164324487463200,
      "product_id": 1515966223509259500,
      "category_id": 2268105402447037400,
      "category_code": "appliances.personal.scales",
      "brand": "polaris",
      "price": 30.07,
      "user_id": 1515915625446798300
    },
    {
      "event_time": "2020-04-27 07:24:51 UTC",
      "order_id": 2296400480990920700,
      "product_id": 2273948308663698200,
      "category_id": 2374498914000592400,
      "category_code": "electronics.video.tv",
      "brand": "samsung",
      "price": 416.64,
      "user_id": 1515915625450899500
    },
    {
      "event_time": "2020-04-27 14:57:22 UTC",
      "order_id": 2296628237930857200,
      "product_id": 1515966223509089500,
      "category_id": 2268105410021949400,
      "category_code": "computers.components.cpu",
      "brand": "intel",
      "price": 91.41,
      "user_id": 1515915625451131600
    },
    {
      "event_time": "2020-04-27 14:57:22 UTC",
      "order_id": 2296628237930857200,
      "product_id": 1515966223509089500,
      "category_id": 2268105410021949400,
      "category_code": "computers.components.cpu",
      "brand": "intel",
      "price": 91.41,
      "user_id": 1515915625451131600
    },
    {
      "event_time": "2020-04-27 14:57:22 UTC",
      "order_id": 2296628237930857200,
      "product_id": 1515966223509089500,
      "category_id": 2268105410021949400,
      "category_code": "computers.components.cpu",
      "brand": "intel",
      "price": 91.41,
      "user_id": 1515915625451131600
    },
    {
      "event_time": "2020-04-28 02:21:45 UTC",
      "order_id": 2296972701060825000,
      "product_id": 1515966223509104600,
      "category_id": 2268105402774193200,
      "category_code": "",
      "brand": "philips",
      "price": 23.13,
      "user_id": 1515915625451212800
    },
    {
      "event_time": "2020-04-28 03:47:48 UTC",
      "order_id": 2297016008231092500,
      "product_id": 1515966223509089800,
      "category_id": 2268105407220155400,
      "category_code": "computers.notebook",
      "brand": "asus",
      "price": 509.24,
      "user_id": 1515915625443158800
    },
    {
      "event_time": "2020-04-28 04:25:00 UTC",
      "order_id": 2297034737199350500,
      "product_id": 1515966223509719600,
      "category_id": 2268105635507732500,
      "category_code": "",
      "brand": "",
      "price": 6.94,
      "user_id": 1515915625447780000
    },
    {
      "event_time": "2020-04-28 04:25:00 UTC",
      "order_id": 2297034737199350500,
      "product_id": 1515966223509719600,
      "category_id": 2268105635507732500,
      "category_code": "",
      "brand": "",
      "price": 6.94,
      "user_id": 1515915625447780000
    },
    {
      "event_time": "2020-04-28 09:01:47 UTC",
      "order_id": 2297174044555871200,
      "product_id": 2273948222957290200,
      "category_id": 2268105409225031700,
      "category_code": "computers.peripherals.monitor",
      "brand": "samsung",
      "price": 254.61,
      "user_id": 1515915625442675200
    },
    {
      "event_time": "2020-04-28 09:01:47 UTC",
      "order_id": 2297174044555871200,
      "product_id": 2273948222957290200,
      "category_id": 2268105409225031700,
      "category_code": "computers.peripherals.monitor",
      "brand": "samsung",
      "price": 254.61,
      "user_id": 1515915625442675200
    },
    {
      "event_time": "2020-04-28 11:36:47 UTC",
      "order_id": 2297252054407578600,
      "product_id": 2273948303177548000,
      "category_id": 2268105407933187000,
      "category_code": "computers.peripherals.printer",
      "brand": "epson",
      "price": 164.33,
      "user_id": 1515915625450916900
    },
    {
      "event_time": "2020-04-28 11:36:47 UTC",
      "order_id": 2297252054407578600,
      "product_id": 2273948303177548000,
      "category_id": 2268105407933187000,
      "category_code": "computers.peripherals.printer",
      "brand": "epson",
      "price": 164.33,
      "user_id": 1515915625450916900
    },
    {
      "event_time": "2020-04-28 11:36:47 UTC",
      "order_id": 2297252054407578600,
      "product_id": 2273948303177548000,
      "category_id": 2268105407933187000,
      "category_code": "computers.peripherals.printer",
      "brand": "epson",
      "price": 164.33,
      "user_id": 1515915625450916900
    },
    {
      "event_time": "2020-04-29 03:25:12 UTC",
      "order_id": 2297729407910937600,
      "product_id": 1515966223509105200,
      "category_id": 2268105427528974800,
      "category_code": "",
      "brand": "sbs",
      "price": 0.02,
      "user_id": 1515915625441708300
    },
    {
      "event_time": "2020-04-29 03:25:12 UTC",
      "order_id": 2297729407910937600,
      "product_id": 1515966223509105200,
      "category_id": 2268105427528974800,
      "category_code": "",
      "brand": "sbs",
      "price": 0.02,
      "user_id": 1515915625441708300
    },
    {
      "event_time": "2020-04-29 04:46:39 UTC",
      "order_id": 2297770405059888000,
      "product_id": 1515966223509088500,
      "category_id": 2268105428166509000,
      "category_code": "electronics.smartphone",
      "brand": "samsung",
      "price": 300.9,
      "user_id": 1515915625451641600
    },
    {
      "event_time": "2020-04-29 06:20:39 UTC",
      "order_id": 2297817716758676000,
      "product_id": 1515966223510177800,
      "category_id": 2268105442242593500,
      "category_code": "",
      "brand": "geyzer",
      "price": 6.23,
      "user_id": 1515915625451580700
    },
    {
      "event_time": "2020-04-29 06:20:39 UTC",
      "order_id": 2297817716758676000,
      "product_id": 1515966223510177800,
      "category_id": 2268105442242593500,
      "category_code": "",
      "brand": "geyzer",
      "price": 6.23,
      "user_id": 1515915625451580700
    },
    {
      "event_time": "2020-04-29 06:21:53 UTC",
      "order_id": 2297818341995184600,
      "product_id": 1515966223509382400,
      "category_id": 2268105438778098400,
      "category_code": "appliances.kitchen.kettle",
      "brand": "tefal",
      "price": 7.85,
      "user_id": 1515915625447631000
    },
    {
      "event_time": "2020-04-29 08:56:24 UTC",
      "order_id": 2297896107595793200,
      "product_id": 1515966223509104600,
      "category_id": 2268105428166509000,
      "category_code": "electronics.smartphone",
      "brand": "samsung",
      "price": 300.9,
      "user_id": 1515915625452042800
    },
    {
      "event_time": "2020-04-29 10:38:40 UTC",
      "order_id": 2297947579247231200,
      "product_id": 1515966223509881600,
      "category_id": 2268105409938063400,
      "category_code": "computers.components.memory",
      "brand": "kingston",
      "price": 49.98,
      "user_id": 1515915625455105300
    },
    {
      "event_time": "2020-04-29 10:46:21 UTC",
      "order_id": 2297951447913857800,
      "product_id": 2273948319057183700,
      "category_id": 2268105430162997800,
      "category_code": "electronics.audio.headphone",
      "brand": "huawei",
      "price": 77.52,
      "user_id": 1515915625447879400
    },
    {
      "event_time": "2020-04-29 10:46:21 UTC",
      "order_id": 2297951447913857800,
      "product_id": 1515966223509088500,
      "category_id": 2268105430162997800,
      "category_code": "electronics.audio.headphone",
      "brand": "apple",
      "price": 203.68,
      "user_id": 1515915625447879400
    },
    {
      "event_time": "2020-04-29 11:59:50 UTC",
      "order_id": 2297988436574864100,
      "product_id": 1515966223509089500,
      "category_id": 2268105428166509000,
      "category_code": "electronics.smartphone",
      "brand": "samsung",
      "price": 115.72,
      "user_id": 1515915625441483500
    },
    {
      "event_time": "2020-04-29 11:59:50 UTC",
      "order_id": 2297988436574864100,
      "product_id": 1515966223509259500,
      "category_id": 2268105428594328000,
      "category_code": "electronics.clocks",
      "brand": "apple",
      "price": 317.11,
      "user_id": 1515915625441483500
    },
    {
      "event_time": "2020-04-29 12:00:59 UTC",
      "order_id": 2297989017720849400,
      "product_id": 1515966223509088500,
      "category_id": 2374498914000592400,
      "category_code": "electronics.video.tv",
      "brand": "ava",
      "price": 162.01,
      "user_id": 1515915625448293000
    },
    {
      "event_time": "2020-04-29 12:00:59 UTC",
      "order_id": 2297989017720849400,
      "product_id": 1515966223509088500,
      "category_id": 2374498914000592400,
      "category_code": "electronics.video.tv",
      "brand": "ava",
      "price": 162.01,
      "user_id": 1515915625448293000
    },
    {
      "event_time": "2020-04-29 12:05:34 UTC",
      "order_id": 2297991320922227000,
      "product_id": 1515966223509123300,
      "category_id": 2268105442242593500,
      "category_code": "",
      "brand": "barjher",
      "price": 9.24,
      "user_id": 1515915625441507800
    },
    {
      "event_time": "2020-04-29 12:05:34 UTC",
      "order_id": 2297991320922227000,
      "product_id": 1515966223509127700,
      "category_id": 2268105440044778200,
      "category_code": "appliances.personal.scales",
      "brand": "polaris",
      "price": 21.97,
      "user_id": 1515915625441507800
    },
    {
      "event_time": "2020-04-29 12:09:12 UTC",
      "order_id": 2297993149328392700,
      "product_id": 1515966223509302800,
      "category_id": 2268105393462838000,
      "category_code": "country_yard.weather_station",
      "brand": "beurer",
      "price": 23.12,
      "user_id": 1515915625450210800
    },
    {
      "event_time": "2020-04-29 12:09:13 UTC",
      "order_id": 2297993157859607000,
      "product_id": 1515966223509089000,
      "category_id": 2268105428166509000,
      "category_code": "electronics.smartphone",
      "brand": "samsung",
      "price": 161.78,
      "user_id": 1515915625442450000
    },
    {
      "event_time": "2020-04-29 12:09:53 UTC",
      "order_id": 2297993489704551000,
      "product_id": 2273948319115904000,
      "category_id": 2268105441101742800,
      "category_code": "appliances.kitchen.blender",
      "brand": "polaris",
      "price": 43.96,
      "user_id": 1515915625446427400
    },
    {
      "event_time": "2020-04-29 12:10:33 UTC",
      "order_id": 2297993830969901600,
      "product_id": 2273948186710114800,
      "category_id": 2268105445094720300,
      "category_code": "",
      "brand": "schwiizer",
      "price": 20.81,
      "user_id": 1515915625452188700
    }
  ]);

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log(JSON.parse(e.target.result));
      // console.log("e.target.result", e.target.result);
      setJson(JSON.parse(e.target.result));
    };
  };

  return (
    <div className="mt-5 mb-6">
      <div className="mt-6">
        <input type="file" name="json" id="" onChange={handleChange} />
      </div>

      <div className="my-6 mt-6 mx-1">
        <div className="grid grid-cols-6">
          <p className="ml-5 font-bold text-xl">USER ID</p>
          <p className="ml-5 font-bold text-xl">CATEGORY CODE</p>
          <p className="ml-5 pl-7 font-bold text-xl">BRAND</p>
          <p className="ml-5 font-bold text-xl">PRODUCT ID</p>
          <p className="ml-5 font-bold text-xl">SPENT</p>
          <p className="pl-10 font-bold text-xl">TIME</p>
        </div>

        <hr />
        {/* {users && users.map((user) => {
            return (
              // <h3 className="text-2lg font-bold">{user.login}</h3>
              <UserItem login={user.login} avatar={user.avatar_url} key={user.login} />
            )
          })} */}

        <div className="mt-3">
          {json && json.map((elem) => {
            return (
              <div className="grid grid-cols-6">
                <p className="mx-2 my-3 text-lg"> {elem.user_id}</p>
                <p className="mx-2 my-3 text-lg">{elem.category_code}</p>
                <p className="mr-2 pl-7 ml-4 my-3 text-lg">{elem.brand}</p>
                <p className="mx-2 my-3 text-lg">{elem.product_id}</p>
                <p className="mx-2 pl-4 my-3 text-lg">{elem.price}</p>
                <p className="mr-2 my-3 text-lg">{elem.event_time}</p>
              </div>
            )
          })}
        </div>
      </div>


    </div>
  );
}

export default CompanyDetails