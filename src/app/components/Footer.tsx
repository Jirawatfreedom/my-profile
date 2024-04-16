import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="/about"
                  className="hover:underline text-gray-400 hover:text-white"
                >
                  About us
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/services"
                  className="hover:underline text-gray-400 hover:text-white"
                >
                  Services
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/contact"
                  className="hover:underline text-gray-400 hover:text-white"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <p className="mb-6 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate, vero ut libero. Eos, alias, velit.
            </p>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Contact</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="mailto:info@yourwebsite.com"
                  className="hover:underline text-gray-400 hover:text-white"
                >
                  info@yourwebsite.com
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="tel:123-456-7890"
                  className="hover:underline text-gray-400 hover:text-white"
                >
                  123-456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
