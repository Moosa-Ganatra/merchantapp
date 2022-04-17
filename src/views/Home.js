import moment from "moment";
import React from "react";
import { mockComponent } from "react-dom/test-utils";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <h1 className="heading">Generate New Receipt</h1>
      </div>
      <div className="container">
        <div className="p1">
          <div className="uid">
            <p>
              <b>UID</b>
            </p>
            <p>786</p>
          </div>
          <div className="date">
            <p>
              <b>DATE</b>
            </p>
            <p>{moment().format("DD/MM/YYYY")}</p>
          </div>
          <div className="time">
            <p>
              <b>TIME</b>
            </p>
            <p>{moment().format("hh:mm A")}</p>
          </div>
        </div>
        <div className="receipt">
          <p>
            <b>Receipt no.</b>
          </p>
          <p>web-0001</p>
        </div>
        <div className="item">
            <p><b>Item #1</b></p>
        </div>
        <div className="input">
            <select placeholder="add new item"/>
        </div>
        <div className="tax">
            <p><b>TAX</b></p>
        </div>
        <div className="total">
            <p><b>SUB-TOTAL</b></p>
        </div>
        <div>
            <button className="btn">Generate receipt</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
