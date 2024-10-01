
function Lead() {
  return (
    <div className=" relative w-auto -mx-[5vw] mt-20 justify-center overflow-hidden override-initial">
      <div className=" p-10 font-[Roboto] px-40 mx-auto bg-[#774931]  shadow-md items-center">
        <form className="flex lg:flex-row flex-col justify-between items-center">
        
            {/* <label htmlFor="name" className="text-center mb-2 font-semibold">Name</label> */}
            <input
              type="text"
              name="name"
              id="name"
              className="p-2 border border-gray-300 rounded-full text-center"
              placeholder="Name"
            />
         
       
            {/* <label htmlFor="address" className=" text-center  mb-2 font-semibold">Address</label> */}
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 border border-gray-300 rounded-full text-center"
              placeholder="Email"
            />
          
         
            {/* <label htmlFor="phone" className=" text-center mb-2 font-semibold">Phone Number</label> */}
            <input
              type="text"
              name="phone"
              id="phone"
              className="p-2 border border-gray-300 rounded-full text-center"
              placeholder="Mobile No."
            />
            <input
              type="text"
              name="location"
              id="location"
              className="p-2 border border-gray-300 rounded-full text-center"
              placeholder="Location"
            />
      
        <button
          type="submit"
          className="w-auto h-full bg-custom-db text-custom-premium py-2 px-8 lg:text-2xl text-lg rounded-full"
        >
          Submit
        </button>
        </form>
      </div>
    </div>
  );
}

export default Lead;
