const AboutTheBuilding = () => {
  return (
    // <!-- component -->
    <header className="bg-white dark:bg-gray-800 ">
      <div className="container flex flex-col justify-evenly px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2">
            <h1 className="text-3xl font-medium font-heading tracking-wide text-gray-800 dark:text-white md:text-4xl">
              About the Building
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              could-MBS features modern interiors and striking exteriors,
              complemented by state-of-the-art HVAC and advanced lighting
              systems. This building exemplifies luxury and comfort, ensuring an
              unparalleled living experience.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-primary-500 rounded-md md:inline hover:bg-primary-400"
              >
                Read More about the building
              </a>
            </div>
          </div>
        </div>

        {/* photo gallery section */}
        <section className="grid grid-cols-12 gap-2 rounded-lg w-full md:w-[40%]  box-border">
          {/* img 1 */}
          <div className="col-span-8 object-cover  relative border">
            <img
              className="rounded-lg h-full   object-cover"
              src="https://plus.unsplash.com/premium_photo-1677626376813-1ea652d15288?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className="absolute text-xl lg:text-3xl font-heading top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              Exterior
            </h2>
          </div>

          {/* img 2 */}
          <div className="col-span-4 object-cover relative border">
            <img
              className="rounded-lg h-full  object-cover"
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className="absolute text-xl lg:text-3xl font-heading top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              Interior
            </h2>
          </div>

          {/* img 3 */}
          <div className="col-span-4 object-cover relative border">
            <img
              className="rounded-lg h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1661921393343-343742700dd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className="absolute text-xl lg:text-3xl font-heading top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              HVAC
            </h2>
          </div>

          {/* img 4 */}
          <div className="col-span-8 object-cover relative border">
            <img
              className="rounded-lg h-full object-cover"
              src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className="absolute text-xl lg:text-3xl font-heading top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              Lighting
            </h2>
          </div>
        </section>
      </div>
    </header>
  );
};

export default AboutTheBuilding;
