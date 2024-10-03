import React, { useState } from "react";
import {
  BsFillGridFill,
  BsFillPersonFill,
  BsFillFileEarmarkTextFill,
  BsFillGearFill,
} from "react-icons/bs";
import { AiFillDashboard, AiFillAppstore } from "react-icons/ai";
import { MdOutlineMonitor, MdOutlineSchool } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className="w-64 bg-white h-screen flex flex-col shadow-lg">
      <div className="flex items-center justify-center py-4 bg-gray-100">
        <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
        <span className="text-2xl font-semibold">My SAT Guide</span>
      </div>

      {/* Sidebar menu should scroll independently */}
      <div className="flex-1 overflow-y-auto">
        <ul className="flex flex-col p-4 space-y-2 mt-2">
          <li className="flex items-center space-x-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <AiFillDashboard className="text-xl" />
            <Link to="">
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <div
              className="flex items-center justify-between space-x-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => toggleMenu("contents")}
            >
              <div className="flex items-center space-x-4">
                <BsFillGridFill className="text-xl" />
                <span>Contents</span>
              </div>
              <div className="ml-auto">
                {openMenu === "contents" ? (
                  <FaChevronDown className="text-sm" />
                ) : (
                  <FaChevronRight className="text-sm" />
                )}
              </div>
            </div>
            {openMenu === "contents" && (
              <ul className="ml-8 mt-2 space-y-2">
                <Link to="/courses">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">Courses</li>
                </Link>
                <Link to="/liveclass">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Live Classes
                  </li>
                </Link>
                <Link to="/mock">
                  {" "}
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Mock Test
                  </li>
                </Link>
                <Link to="/test">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Test Series
                  </li>
                </Link>
                <Link to="/bundles">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">Bundles</li>
                </Link>
                <Link to="/beta">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Batch <span className="text-green-500 text-xs">(Beta)</span>
                  </li>
                </Link>
                <Link to="/ebook">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">Ebooks</li>
                </Link>
                <Link to="/podcast">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Podcasts
                  </li>
                </Link>
                <Link to="/webinar">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">Webinar</li>
                </Link>
                <Link to="/digital">
                  {" "}
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Digital Products
                  </li>
                </Link>
                <Link to="/free-resources">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Free Resource
                  </li>
                </Link>
                <Link to="/telegram">
                  {" "}
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Telegram
                  </li>
                </Link>
                <Link to="/utilities">
                  {" "}
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Utilities
                  </li>
                </Link>
                <Link to="/legacy">
                  {" "}
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Legacy Question Pool
                  </li>
                </Link>

                <li className="py-1 hover:bg-gray-200 rounded-lg">
                  Question Pool
                </li>
                <Link to="/subs">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Subscriptions
                  </li>
                </Link>
                <Link to="/news">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Newsfeed
                  </li>
                </Link>
                <Link to="/comm">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Communities
                  </li>
                </Link>
                <Link to="/cate">
                  {" "}
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Categories
                  </li>
                </Link>
                <Link to="/segment">
                  {" "}
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Segments
                  </li>
                </Link>

                <li className="py-1 hover:bg-gray-200 rounded-lg">Tags</li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex items-center justify-between space-x-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => toggleMenu("websitesApps")}
            >
              <div className="flex items-center space-x-4">
                <AiFillAppstore className="text-xl" />
                <Link to="/web">
                  {" "}
                  <span>Websites & Apps</span>
                </Link>
              </div>
              <div className="ml-auto">
                {openMenu === "websitesApps" ? (
                  <FaChevronDown className="text-sm" />
                ) : (
                  <FaChevronRight className="text-sm" />
                )}
              </div>
            </div>
            {openMenu === "websitesApps" && (
              <ul className="ml-8 mt-2 space-y-2">
                <Link to="/web">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Websites
                  </li>
                </Link>
                <Link to="/mobile">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Mobile Apps
                  </li>
                </Link>
                <Link to="/navigation">
                  {" "}
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Navigation
                  </li>
                </Link>
                <Link to="/branding">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Branding
                  </li>
                </Link>
                <Link to="/embed">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Embeddables
                  </li>
                </Link>
                <Link to="/lang">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Language
                  </li>
                </Link>
                <Link to="signup">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">Sign Up</li>
                </Link>

                <Link to="/custom">
                  {" "}
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Custom Fields
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex items-center justify-between space-x-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => toggleMenu("marketing")}
            >
              <div className="flex items-center space-x-4">
                <MdOutlineMonitor className="text-xl" />
                <span>Marketing</span>
              </div>
              <div className="ml-auto">
                {openMenu === "marketing" ? (
                  <FaChevronDown className="text-sm" />
                ) : (
                  <FaChevronRight className="text-sm" />
                )}
              </div>
            </div>

            {openMenu === "marketing" && (
              <ul className="ml-8 mt-2 space-y-2">
                <li className="py-1 hover:bg-gray-200 rounded-lg">
                  <Link to="/marketing/messenger">Messenger</Link>
                </li>
                <li className="py-1 hover:bg-gray-200 rounded-lg">
                  <Link to="/marketing/coupons">Coupons</Link>
                </li>
                <li className="py-1 hover:bg-gray-200 rounded-lg">
                  <Link to="/marketing/wallet">Wallet</Link>
                </li>
                <li className="py-1 hover:bg-gray-200 rounded-lg">
                  <Link to="/marketing/referral-code">Referral Code</Link>
                </li>
                <li className="py-1 hover:bg-gray-200 rounded-lg">
                  <Link to="/marketing/integrations">Integrations</Link>
                </li>
                <li className="py-1 hover:bg-gray-200 rounded-lg">
                  <Link to="/marketing/affiliates">Affiliates</Link>
                </li>
                <li className="py-1 hover:bg-gray-200 rounded-lg">
                  <Link to="/marketing/forms">Forms</Link>
                </li>
                <li className="py-1 hover:bg-gray-200 rounded-lg">
                  <Link to="/marketing/cta">CTA</Link>
                </li>
                <li className="py-1 hover:bg-gray-200 rounded-lg">
                  <Link to="/marketing/events">Events</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex items-center justify-between space-x-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => toggleMenu("users")}
            >
              <div className="flex items-center space-x-4">
                <BsFillPersonFill className="text-xl" />
                <span>Users</span>
              </div>
              <div className="ml-auto">
                {openMenu === "users" ? (
                  <FaChevronDown className="text-sm" />
                ) : (
                  <FaChevronRight className="text-sm" />
                )}
              </div>
            </div>
            {openMenu === "users" && (
              <ul className="ml-8 mt-2 space-y-2">
                <Link to="/learners">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Learners
                  </li>
                </Link>
                `
                <Link to="/groups">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">Groups</li>
                </Link>
                <Link to="/sub-admin">
                  {" "}
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Sub-Admins
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Contacts
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <li>
            <div
              className="flex items-center justify-between space-x-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => toggleMenu("reports")}
            >
              <div className="flex items-center space-x-4">
                <BsFillFileEarmarkTextFill className="text-xl" />
                <span>Reports</span>
              </div>
              <div className="ml-auto">
                {openMenu === "reports" ? (
                  <FaChevronDown className="text-sm" />
                ) : (
                  <FaChevronRight className="text-sm" />
                )}
              </div>
            </div>
            {openMenu === "reports" && (
              <ul className="ml-8 mt-2 space-y-2">
                <Link to="/reports/enrollments">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Enrollments
                  </li>
                </Link>
                <Link to="/reports/transactions">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Transactions
                  </li>
                </Link>
                <Link to="/reports/payment-gateways">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Payment Gateways
                  </li>
                </Link>
                <Link to="/reports/invoices">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Invoices
                  </li>
                </Link>
                <Link to="/progress">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Progress & Scores
                  </li>
                </Link>
                <Link to="/reports/sales-marketing">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Sales & Marketing
                  </li>
                </Link>
                <Link to="/reports/live-class-legacy">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Live Class - Legacy
                  </li>
                </Link>
                <Link to="/reports/live-class">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Live Class
                  </li>
                </Link>
                <Link to="/reports/custom-fields">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Custom Fields
                  </li>
                </Link>
                <Link to="/reports/digital-evaluation">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Digital Evaluation
                  </li>
                </Link>
                <Link to="/reports/legacy-reports">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Legacy Reports
                  </li>
                </Link>
                <Link to="/reports/exports">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">Exports</li>
                </Link>
                <Link to="/reports/broadcast-message">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Broadcast Message
                  </li>
                </Link>
                <Link to="/reports/resource-usage">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Resource Usage
                  </li>
                </Link>
                <Link to="/reports/messenger-insights">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Messenger Insights
                  </li>
                </Link>
                <Link to="/reports/school-payouts">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    School Payouts
                  </li>
                </Link>
              </ul>
            )}
          </li>

          <li>
            <div
              className="flex items-center justify-between space-x-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => toggleMenu("manage")}
            >
              <div className="flex items-center space-x-4">
                <MdOutlineMonitor className="text-xl" />
                <span>Manage</span>
              </div>
              <div className="ml-auto">
                {openMenu === "manage" ? (
                  <FaChevronDown className="text-sm" />
                ) : (
                  <FaChevronRight className="text-sm" />
                )}
              </div>
            </div>
            {openMenu === "manage" && (
              <ul className="ml-8 mt-2 space-y-2">
                <Link to="/manage/courses">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">Courses</li>
                </Link>
                <Link to="/manage/live-classes">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Live Classes
                  </li>
                </Link>
                <Link to="/manage/mock-test">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Mock Test
                  </li>
                </Link>
                <Link to="/manage/test-series">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Test Series
                  </li>
                </Link>
                <Link to="/manage/bundles">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">Bundles</li>
                </Link>
                <Link to="/manage/batch">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Batch <span className="text-green-500 text-xs">(Beta)</span>
                  </li>
                </Link>
                <Link to="/manage/ebooks">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">Ebooks</li>
                </Link>
                <Link to="/manage/podcasts">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Podcasts
                  </li>
                </Link>
                <Link to="/manage/webinar">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">Webinar</li>
                </Link>
                <Link to="/manage/digital-products">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Digital Products
                  </li>
                </Link>
                <Link to="/manage/free-resource">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Free Resource
                  </li>
                </Link>
                <Link to="/manage/telegram">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Telegram
                  </li>
                </Link>
                <Link to="/manage/utilities">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Utilities
                  </li>
                </Link>
                <Link to="/manage/legacy-question-pool">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Legacy Question Pool
                  </li>
                </Link>
                <Link to="/manage/question-pool">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Question Pool
                  </li>
                </Link>
                <Link to="/manage/subscriptions">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Subscriptions
                  </li>
                </Link>
                <Link to="/manage/newsfeed">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Newsfeed
                  </li>
                </Link>
                <Link to="/manage/communities">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Communities
                  </li>
                </Link>
                <Link to="/manage/categories">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Categories
                  </li>
                </Link>
                <Link to="/manage/segments">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Segments
                  </li>
                </Link>
                <Link to="/manage/tags">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">Tags</li>
                </Link>
                <Link to="/manage/course-encryption">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Course Encryption
                  </li>
                </Link>
                <Link to="/manage/discussions">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Discussions
                  </li>
                </Link>
                <Link to="/manage/ratings-reviews">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Ratings & Reviews
                  </li>
                </Link>
                <Link to="/manage/legacy-answer-reviews">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Legacy Answer Reviews
                  </li>
                </Link>
                <Link to="/manage/answer-reviews">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Answer Reviews
                  </li>
                </Link>
                <Link to="/manage/learner-support">
                  <li className="py-1 hover:bg-gray-200 rounded-lg">
                    Learner Support
                  </li>
                </Link>
              </ul>
            )}
          </li>

          <Link to="/manage/addons">
            <li className="flex items-center space-x-4 py-2 hover:bg-gray-100 rounded-lg">
              <BsFillGearFill className="text-xl" />
              <span>Add-Ons</span>
            </li>
          </Link>
          <Link to="/manage/subschool">
            <li className="flex items-center space-x-4 py-2 hover:bg-gray-100 rounded-lg">
              <MdOutlineSchool className="text-xl" />
              <span>Sub-Schools</span>
            </li>
          </Link>
          <Link to="/manage/settings">
            {" "}
            <li className="flex items-center space-x-4 py-2 hover:bg-gray-100 rounded-lg mt-auto">
              <IoMdSettings className="text-xl" />
              <span>Settings</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="text-center p-4">
        <img
          src={logo}
          alt="Powered by Learnyst"
          className="mx-auto h-20 w-20 ml-6"
        />
      </div>
    </div>
  );
};

export default Sidebar;
