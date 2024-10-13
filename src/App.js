import "./App.css";

function App() {
  return (
    <>
      {/* HEADER : 링크 올바르게 수정해주세요. */}
      <header
        className={`fixed top-0 left-0 w-full z-50 text-white shadow-md transition-all duration-300`}
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/nav.png)` }}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-red-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Route : 작성해주세요. */}

      {/* SECTION 1 : 건들지마세요. */}
      <section className="w-full h-[100vh] bg-red-500 flex items-center justify-center">
        <div className="text-4xl text-white">SECTION 1</div>
      </section>

      <section className="w-full h-[100vh] bg-blue-500 flex items-center justify-center">
        <div className="text-4xl text-white">SECTION 2</div>
      </section>

      {/* FOOTER : 건들지마세요. */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <p className="text-sm">
                We are a company dedicated to providing excellent services and products to our customers.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
