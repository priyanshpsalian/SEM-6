import React from "react";

function Documentation() {
    const x = <div className="ml-5">let result = await fetch&#40; "http://localhost:3000/api/
        <span style={{ color: "#DC0000" }}>MerchantUId</span>/
        <span style={{ color: "#DC0000" }}>CouponCode</span>" &#41;;
        result = await result.json&#40;&#41;;</div>
    return (
        <div className="mt-8">
            <label
                htmlFor="progType"
                className={`mt-5 text-2xl font-bold text-navy-700 dark:text-white`}
            >
                Integration Instructions
            </label>

            <div className="mt-10 ml-3 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
                <div className="">
                    <p className="text-2xl font-bold text-navy-700 dark:text-white">
                        Get
                    </p>

                    <ol className="">
                        <li class="mt-10 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                1
                            </span>
                            Inorder to verify the coupon send the coupon code to our system by
                            following the below steps
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                2
                            </span>
                            Get the Merchat Id:-
                            <span className="font-bold"> askdjfasd</span>
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                3
                            </span>
                            Store the coupon code in CouponCode variable
                            <span style={{ color: "blue" }}>/ link-stotre-id/ </span>
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                4
                            </span>
                            Copy and paste the code in your header: &nbsp;

                            <span style={{ color: "blue" }}>
                                {x}
                            </span>
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                5
                            </span>
                            The coupon gets validates by verification in our dataset or though
                            our backend
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                6
                            </span>

                            <span style={{ color: "#DC0000" }}>

                                Sample Output is as follows
                            </span>
                            <br></br>
                            <span></span>
                        </li>
                    </ol>
                    <span style={{ color: "#CB1C8D" }}>
                        &#123;
                        usage: &#123;
                        type: "",
                        limit: 1,
                        &#125;,
                        reward: &#123;
                        type: "",
                        amount: 0,
                        &#125;,
                        expiryDate: &#123;
                        year: 2023,
                        month: 3,
                        day: 22,
                        &#125;,
                        _id: "640c8764818a2552808e9cc5",
                        programName: "Priyansh",
                        couponType: "LoyaltyCards",
                        couponLength: "34",
                        couponCode: "Priyansh",
                        minPurchase: 56,
                        maxDiscount: 7,
                        porductType: "sad",
                        __v: 0,
                        &#125;
                    </span>
                </div>

                <div className="">
                    <p className="text-2xl font-bold text-navy-700 dark:text-white">
                        Post
                    </p>

                    <ol className="">
                        <li class="mt-10 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                1
                            </span>
                            Inorder to send you customer cart data or any kind of data and to
                            get recommendation use this method.
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                2
                            </span>
                            Pass Customer Id as inside CustomerId field.
                        </li>

                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                3
                            </span>
                            Inside data send whatever you feel like transfering.
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                4
                            </span>
                            <div>
                                <span style={{ color: "Blue" }}>
                                    <span style={{ color: "#DC0000" }}>
                                        const details = &nbsp;

                                    </span>
                                    &#x7b;
                                    "CustomerId": "User ID of customer",
                                    "data": [&#x7b;
                                    "Brand":"Sprite",
                                    "Product":"250 ml Bottle",
                                    "Selling Price":"45",
                                    "Cost Price":"30",
                                    &#125;,
                                    &#x7b;
                                    "Brand":"Realme",
                                    "Product":"Watch SE",
                                    "Selling Price":"2000",
                                    "Cost Price":"1500",
                                    &#125;
                                    ]
                                    &#125;
                                    <br />
                                    <span style={{ color: "#DC0000" }}>let result</span> = await fetch("http://localhost:3000/api/post/$&#x7b;MerchantUId/&#125;", &#x7b;
                                    method: "post",
                                    body: JSON.stringify(details),
                                    headers: &#x7b;
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                    &#125;,
                                    &#125;);
                                    <br />
                                    <span style={{ color: "#DC0000" }}>

                                        result
                                    </span>
                                    = await result.json();
                                </span>

                            </div>
                        </li>
                        <li class="mt-5 mb-4 flex text-xl text-base">
                            <span class="mr-3 flex h-7 w-full max-w-[30px] items-center justify-center rounded bg-ourTheme">
                                5
                            </span>
                            <span style={{ color: "#CB1C8D" }}>
                                <span style={{ color: "#DC0000" }}>
                                    Sample Output: &nbsp;
                                </span>
                                <br/>
                                <br/>
                                &#x7b;
                                "couponCode" : "GET50",
                                "date" : "11th March 2023",
                                "category" : "Electronics",
                                "minPurchase" : "1000",
                                "discountType" : "Percentage",
                                "discount" : "50",
                                "maxDiscount" : "600",
                                "#DC0000emptions" : "2"
                                &#125;,
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Documentation;
