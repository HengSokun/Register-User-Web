import React, { Component } from "react";
import Header from "./header";
import InputCompo from "./input_compo";

class Page extends Component {
  
  render() {
    return (
      <div className="p-14">
        <div className="w-full">
          <Header />
        </div>
        <InputCompo />
      </div>
    );
  }
}

export default Page;
