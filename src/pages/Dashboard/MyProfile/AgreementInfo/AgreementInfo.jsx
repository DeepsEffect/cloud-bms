const AgreementInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 justify-center bg-gray-100 py-10 lg:p-14 overflow-auto">
      {/* apartment */}
      <div className="container mx-auto pr-4">
        <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
          <div className="h-20 bg-red-400 flex items-center justify-between">
            <p className="mr-0 text-white text-lg pl-5">Apartment</p>
          </div>
          <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600"></div>
          <p className="py-4 text-3xl ml-5">20</p>
        </div>
      </div>
      {/* floor */}
      <div className="container mx-auto pr-4">
        <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
          <div className="h-20 bg-blue-400 flex items-center justify-between">
            <p className="mr-0 text-white text-lg pl-5">floor</p>
          </div>
          <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600"></div>
          <p className="py-4 text-3xl ml-5">34</p>
        </div>
      </div>
      {/* block */}
      <div className="container mx-auto pr-4">
        <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
          <div className="h-20 bg-green-400 flex items-center justify-between">
            <p className="mr-0 text-white text-lg pl-5">Block</p>
          </div>
          <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600"></div>
          <p className="py-4 text-3xl ml-5">42</p>
        </div>
      </div>
      {/* room */}
      <div className="container mx-auto pr-4">
        <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
          <div className="h-20 bg-green-400 flex items-center justify-between">
            <p className="mr-0 text-white text-lg pl-5">Room</p>
          </div>
          <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600"></div>
          <p className="py-4 text-3xl ml-5">650</p>
        </div>
      </div>
      {/* agreement accept date */}
      <div className="container mx-auto pr-4">
        <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
          <div className="h-20 bg-green-400 flex items-center justify-between">
            <p className="mr-0 text-white text-lg pl-5">agreement date</p>
          </div>
          <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600"></div>
          <p className="py-4 text-3xl ml-5">07-jun-24</p>
        </div>
      </div>
    </div>
  );
};

export default AgreementInfo;
