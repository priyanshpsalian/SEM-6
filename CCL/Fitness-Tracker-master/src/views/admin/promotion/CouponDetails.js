import React from 'react'
import Widget from "components/widget/Widget";

import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

function CouponDetails() {
    return (
        <div className='mt-7'>
            <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3">

                <Widget
                    icon={<MdBarChart className="h-7 w-7" />}
                    title={"Coupons Generated"}
                    subtitle={35}
                />
                <Widget
                    icon={<MdDashboard className="h-6 w-6" />}
                    title={"Coupons used"}
                    subtitle={1238}
                /><Widget
                    icon={<MdBarChart className="h-7 w-7" />}
                    title={"Earnings"}
                    subtitle={"₹ 34.5 k"}
                />
                <Widget
                    icon={<IoDocuments className="h-6 w-6" />}
                    title={"Spent"}
                    subtitle={"₹ 34.5 k"}
                />
                <Widget
                    icon={<IoMdHome className="h-7 w-7" />}
                    title={"Region"}
                    subtitle={"Mumbai"}
                />
                <Widget
                    icon={<MdDashboard className="h-6 w-6" />}
                    title={"On product"}
                    subtitle={"Clothings"}
                />
            </div>
        </div>
    )
}

export default CouponDetails