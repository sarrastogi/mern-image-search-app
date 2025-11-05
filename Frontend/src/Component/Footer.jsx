import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* --- Left Section --- */}
        <div>
          {/* Logo and Socials */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-black rounded-sm"></div>
            <span className="font-semibold text-lg text-gray-900">Image Search</span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <FaInstagram className="text-gray-500 hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="text-gray-500 hover:text-sky-500 cursor-pointer" />
            <FaLinkedin className="text-gray-500 hover:text-blue-700 cursor-pointer" />
          </div>

          <p className="text-gray-500 text-sm mt-4 max-w-xs">
            Empowering teams to achieve project success through effective
            management and collaboration.
          </p>
        </div>

        {/* --- Features --- */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">FEATURES</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Task Management</li>
            <li className="flex items-center gap-2">
              Gantt Charts
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-[2px] rounded-full font-medium">
                Pro
              </span>
            </li>
            <li>Time Tracking</li>
            <li>Resource Allocation</li>
          </ul>
        </div>

        {/* --- Resources --- */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">RESOURCES</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Blog</li>
            <li className="flex items-center gap-2">
              Webinars
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-[2px] rounded-full font-medium">
                New
              </span>
            </li>
            <li>Case Studies</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* --- Company --- */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">COMPANY</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>About Us</li>
            <li className="flex items-center gap-2">
              Careers
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-[2px] rounded-full font-medium">
                Hiring
              </span>
            </li>
            <li>Partners</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-8"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-3 md:space-y-0">
        <p>© 2025 MynaUI. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-700">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-700">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-700">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
