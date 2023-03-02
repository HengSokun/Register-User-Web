import React, { Component } from "react";
import Table from "./table";

class InputCompo extends Component {
  constructor() {
    super();
    this.state = {
      registerUser: [],
      nEmail: "",
      nUsername: "",
      nAge: "",
      nStatus: "Pending",
      isNameValid: false,
      isAgeValid: false,
      usernameError: "",
      ageError: "",
    };
  }

  handleFieldChange = (dat) => (event) => {
    this.setState({
      [dat]: event.target.value,
    });
  };

  handleSubmit = () => {
    const newObj = {
      id: this.state.registerUser.length + 1,
      email: this.state.nEmail,
      username: this.state.nUsername,
      age: this.state.nAge,
      status: this.state.nStatus,
    };

    this.setState(
      {
        registerUser: [...this.state.registerUser, newObj],
        nEmail: "",
        nUsername: "",
        nAge: "",
        nStatus: "Pending",
      },
      () => console.log(this.state.registerUser)
    );
  };

  handleClick = (id) => {
    const updatedRegisterUser = this.state.registerUser.map((col) => {
      if (id === col.id) {
        return {
          ...col,
          status: col.status === "Pending" ? "Done" : "Pending",
        };
      }
      return col;
    });

    this.setState({
      registerUser: updatedRegisterUser,
    });
  };


  render() {
    return (
      <div class="w-full">
        {/* Email form */}
        <label
          for="input-group-1"
          class="float-left block m-3 ml-3 text-lg ml-1 font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <div class="relative mb-2 ">
          <div class="absolute inset-y-0 left-0 flex pt-14 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            class=" text-white text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-gray-700 focus:ring-4 focus:outline-none  dark:focus:ring-purple-800"
            placeholder="name@gmail.com"
            onChange={this.handleFieldChange("nEmail")}
          />
        </div>

        {/* User name form */}
        <label
          for="website-admin"
          class="float-left block m-3 ml-3 text-lg ml-1 font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <div class="flex flex-wrap items-stretch w-full mb-2 relative">
          <div class="flex -mr-px ">
            <span class="pt-2.5 flex items-centeleading-normal text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 px-4">
              @
            </span>
          </div>
            <input
              type="text"
              class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none  dark:focus:ring-purple-800"
              placeholder="Namheng"
              onChange={this.handleFieldChange("nUsername")}
            />
        </div>

        {/* Age form */}
        <label
          for="website-admin"
          class="float-left block m-3 ml-3 text-lg ml-1 font-medium text-gray-900 dark:text-white"
        >
          Age
        </label>
        <div class="flex flex-wrap items-stretch w-full mb-5 relative">
          <div class="flex -mr-px">
            <span class="flex items-center leading-normal text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 px-3">
              ✨
            </span>
          </div>
          <input
            type="text"
            class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none  dark:focus:ring-purple-800"
            placeholder="20"
            onChange={this.handleFieldChange("nAge")}
          />
        </div>

        <button
          onClick={this.handleSubmit}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span class="relative px-40 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Register
          </span>
        </button>

        <div className="mt-3">
          <Table
            print={this.state.registerUser}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default InputCompo;
