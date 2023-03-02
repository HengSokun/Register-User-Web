import React, { Component } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Pop = withReactContent(Swal);

class Table extends Component {

  alert = (gET) => {
    Pop.fire({
      title:
        "ID: " +
        gET.id +
        "<br>Email: " +
        gET.email +
        "<br>Username: " +
        gET.username +
        "<br>Age: " +
        gET.age,
    });
  };

  render() {

    // const btnClass = this.state.clicked
    //   ? "shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] border border-red-900 "
    //   : "shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] border border-green-900";
    
    return (
      <div>
        <div class="flex flex-col ">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden rounded">
                <table class="min-w-full text-left text-sm font-light">
                  <thead class="border-b border-2 font-medium dark:border-purple-500 ">
                    <tr className=" text-xl">
                      <th scope="col" class="px-6 py-4 text-white">
                        ID
                      </th>
                      <th scope="col" class="px-6 py-4 text-white">
                        EMAIL
                      </th>
                      <th scope="col" class="px-6 py-4 text-white">
                        USERNAME
                      </th>
                      <th scope="col" class="px-6 py-4 text-white">
                        AGE
                      </th>
                      <th scope="col" class="px-6 py-4 text-white text-center ">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-lg font-medium text-gray-400 rounded-b">
                    {this.props.print.map((col) => (
                      <tr
                        key={col.id}
                        class={`${
                          col.id % 2 === 0
                            ? ` bg-gradient-to-r from-violet-900 to-slate-900 `
                            : `bg-transparent`
                        }`}
                      >
                        <td class="whitespace-nowrap px-6 py-4 font-medium rounded-l">
                          {col.id}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {col.email === "" ? "null" : col.email}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {col.username === "" ? "null" : col.username}
                        </td>
                        <td class="whitespace-nowrap px-6 pr-1 py-4">
                          {col.age === "" ? "null" : col.age}
                        </td>
                        <td class="whitespace-nowrap px-2 py-4 rounded-r flex justify-around">
                          <div>
                            {/* {
                              col.status === "Pending"
                              ? `inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white focus:outline-none focus:ring-0 shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] border border-red-900`
                              : `inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white focus:outline-none focus:ring-0 shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] border border-green-900`
                            } */}
                            <button type="button"
                              // class={"inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white focus:outline-none focus:ring-0 shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] border border-red-900 "}
                              // onClick={() => this.props.handleClick(col.id)}
                              class={col.status === "Pending"
                              ? `inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white focus:outline-none focus:ring-0 shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] border border-red-900`
                              : `inline-block rounded px-8 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white focus:outline-none focus:ring-0 shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] border border-green-900`}
                              onClick={() => this.props.handleClick(col.id)}
                              >
                              {col.status}
                            </button>
                            
                          </div>

                          <button
                            type="button"
                            class="inline-block border border-slate-600 rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
                            onClick={()=> this.alert(col)}
                          >
                            Show More
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
