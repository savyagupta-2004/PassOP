import React from "react";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passref = useRef();
  const [form, setform] = useState({ username: "", website: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
    //  else {
    //   localStorage.setItem("passwords", JSON.stringify([]));
    // }
  }, []);

  const showpass = () => {
    passref.current.type = "text";
    if (ref.current.src.includes("Icons/Eyecross.png")) {
      passref.current.type = "password";

      ref.current.src = "Icons/Eyeopen.png";
    } else {
      ref.current.src = "Icons/Eyecross.png";
      passref.current.type = "text";
    }
  };
  const handlechnage = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handlesave = () => {
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    setform({ username: "", website: "", password: "" });
    console.log(passwordArray);

    console.log(form);
  };
  const handledelete = (id) => {
    let c = confirm("Do you want to delete this particular Password?");
    if (c) {
      console.log("deleting element with id", id);
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
  };
  const handleedit = (id) => {
    console.log("editing element with id", id);
    setform(passwordArray.filter((item) => item.id === id)[0]);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="md:mycontainer max-w-4xl">
        <div className="log text-4xl font-bold text-center">
          <span className="text-green-900"> &lt; </span>
          <span>Pass</span>
          <span className="text-green-600">OP/&gt;</span>
        </div>
        <p className="text-green-900 text-lg text-center">
          Your own password manager
        </p>
        <div className="text-black flex flex-col p-4 gap-4">
          <input
            name="website"
            value={form.website}
            onChange={handlechnage}
            type="text"
            className="rounded-full border border-green-500 w-full py-1 p-4 font-bold"
            placeholder="Enter Website URL"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              name="username"
              value={form.username}
              onChange={handlechnage}
              type="text"
              className="rounded-full border border-green-500 w-full py-1 p-4 font-bold"
              placeholder="Enter UserName"
            />

            <input
              name="password"
              value={form.password}
              onChange={handlechnage}
              type="password"
              ref={passref}
              className="rounded-full border border-green-500 w-full py-1 p-4 font-bold"
              placeholder="Enter PassWord"
            />
            <span
              className="relative right-7 cursor-pointer"
              onClick={showpass}
            >
              <img ref={ref} width={68} src="Icons/Eyeopen.png" alt="Eye"></img>
            </span>
          </div>
          <div className="border-green-900 gap-2 flex   mx-auto  bg-green-500   rounded-full border hover:bg-green-700 hover:text-white px-8">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>

            <button onClick={handlesave} className="border-green-900 gap-2 ">
              Save PassWord
            </button>
          </div>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
        </div>
        {passwordArray.length === 0 && <div>No Passwords to show</div>}
        {passwordArray.length !== 0 && (
          <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className=" bg-green-800 text-white">
              <tr>
                <th className="py-2">Website</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-200">
              {passwordArray.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center py-2  ">{item.website}</td>
                    <td className="text-center py-2 ">{item.username}</td>
                    <td className="text-center py-2 ">{item.password} </td>
                    <td className="text-center py-2 ">
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          handleedit(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/lyrrgrsl.json"
                          trigger="hover"
                          style={{ width: "25px", height: "25px" }}
                          title="Edit"
                        ></lord-icon>
                      </span>{" "}
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          handledelete(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/wpyrrmcq.json"
                          trigger="hover"
                          style={{ width: "25px", height: "25px" }}
                          title="Delete"
                        ></lord-icon>
                      </span>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Manager;
