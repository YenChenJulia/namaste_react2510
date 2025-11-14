const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-2 p-2">this is Contact page</h1>
      <form action="">
        <input
          className="border border-black p-2 m-2"
          type="text"
          name="name"
          id=""
          placeholder="name"
        />
        <input
          className="border border-black p-2 m-2"
          type="email"
          name="email"
          id=""
          placeholder="email"
        />
        <button
          className="bg-gray-200 p-2 m-2 cursor-pointer rounded-lg"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
