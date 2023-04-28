import React, { useEffect, useState } from "react";
import CustomCard from "./CustomCard";
const List = (props) => {
  // const { couponCode, date, category, minPurchase, discountType, maxDiscount, redemptions } = props;
  return (
    <>
      <CustomCard
        couponCode="GET50"
        date="11th March 2023"
        category="Electronics"
        minPurchase="500"
        discountType="Percentage"
        maxDiscount="400"
        discount="50"
        redemptions="2" />
        <CustomCard
        couponCode="GET100"
        date="11th March 2023"
        category="Food"
        minPurchase="1000"
        discountType="Absolute"
        maxDiscount="100"
        discount="100"
        redemptions="3" />
        <CustomCard
        couponCode="NEW25"
        date="11th March 2023"
        category="Clothing"
        minPurchase="1000"
        discountType="Percentage"
        maxDiscount="500"
        discount="25"
        redemptions="1" />
        <CustomCard
        couponCode="CHECKOUT20"
        date="11th March 2023"
        category="Medicine"
        minPurchase="500"
        discountType="Percentage"
        discount="20"
        maxDiscount="300"
        redemptions="5" />
    </>
  );
};

export default List;
