import React from "react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleClick = async () => {
    alert("Form Submitted!");
    await fetch("https://api.ishaan-k.in/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form }),
    });
    setForm({ fname: "", lname: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="border-4 mx-64 flex justify-center items-center flex-col mt-20 py-10 rounded-2xl border-[#d1c8b2]">
      <h1 className="lg:text-5xl text-3xl text-center font-bold pb-16 text-[#d1c8b2]">
        Get In Touch
      </h1>
      <form className="bg-neutral-900 w-4/6 py-2 rounded-lg">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-12 group">
            <input
              type="text"
              value={form.fname}
              name="fname"
              id="fname"
              className="block py-2.5 px-0 w-full text-sm lg:text-lg text-stone-700 bg-transparent border-0 border-b-2 border-[#d1c8b2] appearance-none focus:outline-none focus:border-stone-400 peer"
              placeholder=" "
              onChange={handleChange}
              required
            />
            <label
              htmlFor="fname"
              className="peer-focus:font-medium absolute text-sm lg:text-lg text-[#d1c8b2] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-stone-400"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-12 group">
            <input
              type="text"
              name="lname"
              value={form.lname}
              id="lname"
              className="block py-2.5 px-0 w-full text-sm lg:text-lg text-stone-700 bg-transparent border-0 border-b-2 border-[#d1c8b2] appearance-none focus:outline-none focus:border-stone-400 peer"
              placeholder=" "
              onChange={handleChange}
              required
            />
            <label
              htmlFor="lname"
              className="peer-focus:font-medium absolute text-sm lg:text-lg text-[#d1c8b2] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-stone-400"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-12 group">
          <input
            type="email"
            value={form.email}
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm lg:text-lg text-stone-700 bg-transparent border-0 border-b-2 border-[#d1c8b2] appearance-none focus:outline-none focus:border-stone-400 peer"
            placeholder=" "
            onChange={handleChange}
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm lg:text-lg text-[#d1c8b2] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-stone-400"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-12 group">
          <input
            type="tel"
            name="phone"
            value={form.phone}
            id="phone"
            className="block py-2.5 px-0 w-full text-sm lg:text-lg text-stone-700 bg-transparent border-0 border-b-2 border-[#d1c8b2] appearance-none focus:outline-none focus:border-stone-400 peer"
            placeholder=" "
            onChange={handleChange}
          />
          <label
            htmlFor="phone"
            className="peer-focus:font-medium absolute text-sm lg:text-lg text-[#d1c8b2] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-stone-400 -ml-3"
          >
            Phone number (Optional)
          </label>
        </div>
        <div className="relative z-0 w-full mb-12 group">
          <input
            type="text"
            value={form.message}
            name="message"
            id="message"
            className="block py-2.5 px-0 w-full text-sm lg:text-lg text-stone-700 bg-transparent border-0 border-b-2 border-[#d1c8b2] appearance-none focus:outline-none focus:border-stone-400 peer"
            placeholder=" "
            onChange={handleChange}
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm lg:text-lg text-[#d1c8b2] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-stone-400"
          >
            Message
          </label>
        </div>
        <button
          type="submit"
          onClick={handleClick}
          className="inline-flex items-center px-5 py-3 text-md font-medium text-center focus:ring-4 focus:outline-none bg-[#d1c8b2] rounded-md shadow-lg w-2/6 justify-center mb-10"
          disabled={
            form.fname?.length < 1 ||
            form.lname?.length < 1 ||
            form.message?.length < 1 ||
            form.email?.length < 10
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
