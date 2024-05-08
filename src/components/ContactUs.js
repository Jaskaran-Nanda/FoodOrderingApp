const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mx-8 px-8 my-6">
        Contact Us at abcdef@gmail.com!
      </h1>
      <form className="mx-8 px-8">
        <input
          type="text"
          className="p-2 m-2 border border-black rounded-md bg-gray"
          placeholder="name"
        />
        <input
          type="text"
          className="p-2 m-2 border border-black rounded-md bg-gray"
          placeholder="email"
        />
        <input
          type="text"
          className="p-2 m-2 border border-black rounded-md bg-gray"
          placeholder="message"
        />
        <button className="p-2 m-2 border border-gray-200 rounded-md bg-gray bg-gray-100">
          Submit{" "}
        </button>
      </form>
    </div>
  );
};
export default ContactUs;
