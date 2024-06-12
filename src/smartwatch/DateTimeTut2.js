import React, { useState } from "react";

function DateTimeTut2() {
  const img = "./image/vipssmodal.jpeg";
  const name = "Vipul Vishwakarma";
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const [timecount, setTimeCount] = useState(time);

  const styleCssspan = {
    color: "blue",
    fontSize: "24px",
    fontWeight: "600",
  };

  setInterval(() => {
    setTimeCount(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <>
      <div className="border-2 border-black rounded-lg bg-gray-200 w-72 m-auto p-5 text-center">
        <img
          src={img}
          alt="Arjoo Vishwakarma"
          className="w-40 m-auto rounded-xl border-4 border-sky-950"
        />
        <h2 className="text-3xl font-extrabold text-blue-500">
          <span className="text-green-600">Hello</span>, My is {name}
        </h2>
        <p>
          {`Today Date is`} <span style={styleCssspan}>{`${date}`}</span>
        </p>
        <p>Current Time is {timecount}</p>
      </div>
    </>
  );
}

export default DateTimeTut2;
