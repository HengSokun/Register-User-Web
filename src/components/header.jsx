import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div class="mx-auto flex  items-center justify-center">
        <div class="rounded-md bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 p-1">
          <div class="flex h-full w-full items-center justify-center bg-gray-800 back">
            <div className="font-extrabold text-6xl">
              <div className="w-full mb-4 m-auto ls:flex justify-center items-center">
                <h1 className="inline-block p-2.5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-600">
                  Please fill your
                </h1>
                <h1 className="inline-block p-2.5 text-white">information</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
