import React, { useMemo } from "react";
import ColumnsTable from '../tables/components/ColumnsTable'
// import { columnsDataColumns } from '../default/variables/newsletterColumns'
import tableDataColumns from "../../../views/admin/tables/variables/newsletterData.json"

import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
function Newsletter() {

  const columnsDataColumns = [
    {
      Header: "NAME",
      accessor: "name",
    },
    {
      Header: "EMAIL",
      accessor: "email",
    },
    {
      Header: "CAMPAIGN",
      accessor: "type",
    },
    {
      Header: "DATE",
      accessor: "date",
    },
  ]
  const columns = useMemo(() => columnsDataColumns, [columnsDataColumns]);
  const data = useMemo(() => tableDataColumns, [tableDataColumns]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;
  return (
    <div className="mt-6">
      <Card extra={"w-full pb-10 p-4 h-full"}>
        <header className="relative flex items-center justify-between">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Users Subscribed to the Newsletter
          </div>
          <CardMenu />
        </header>

        <div className="mt-5 overflow-x-scroll xl:overflow-x-hidden">
          <table {...getTableProps()} className="w-full">
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={index}
                      className="border-b border-gray-200 pr-14 pb-[10px] text-start dark:!border-navy-700"
                    >
                      <div className="flex w-full justify-between pr-10 text-xs tracking-wide text-gray-600">
                        {column.render("Header")}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={index}>
                    {row.cells.map((cell, index) => {
                      let data;
                      if (cell.column.Header === "NAME") {
                        data = (
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        );
                      } else if (cell.column.Header === "EMAIL") {
                        data = (
                          <p className="mr-[10px] text-sm font-semibold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        );
                      } else if (cell.column.Header === "CAMPAIGN") {
                        data = (
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        );
                      } else if (cell.column.Header === "DATE") {
                        data = (
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        );
                      }
                      return (
                        <td
                          className="pt-[14px] pb-[20px] sm:text-[14px]"
                          {...cell.getCellProps()}
                          key={index}
                        >
                          {data}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export default Newsletter