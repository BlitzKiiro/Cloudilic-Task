import React from "react";
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white mt-16'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Categories */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Categories</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  App Development
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Programming & Tech
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  UI Design
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Video & Animation
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Writing & Translation
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Music & Audio
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  AI Services
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Consulting
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Data
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Business
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Automation
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Mechanic
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  photography
                </a>
              </li>
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>For Clients</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Your Cloudilicaccount
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Careers
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Press & News
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Partnerships
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Intellectual property claims
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  test
                </a>
              </li>
            </ul>
          </div>

          {/* Company & For Freelancers */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Company</h3>
            <ul className='space-y-2 text-sm text-gray-300 mb-6'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Contact
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Invite a Friend
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  CloudilicGuides
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Help & Support
                </a>
              </li>
            </ul>

            <h3 className='text-lg font-semibold mb-4'>For Freelancers</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Trust & Safety
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Buying on Cloudilic
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Selling on Cloudilic
                </a>
              </li>
            </ul>
          </div>

          {/* Business Solutions */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Business Solutions</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Events
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Community Standards
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Podcast
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className='mt-8'>
              <h3 className='text-lg font-semibold mb-4'>Social Media</h3>
              <div className='flex space-x-4'>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <Twitter size={20} />
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <Facebook size={20} />
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <Instagram size={20} />
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <div className='text-sm text-gray-400 mb-4 md:mb-0'>
            Cloudilic © {new Date().getFullYear()}
          </div>
          <div className='flex items-center space-x-4'>
            <select className='bg-gray-800 text-white text-sm px-3 py-1 rounded border border-gray-700'>
              <option>English</option>
              <option>Arabic</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
