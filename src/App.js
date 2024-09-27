import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Courses from "./pages/Courses";
import Sidebar from "./helpers/SideBar";
import CreateCourse from "./pages/CreateCourses";
import Web from "./pages/Web";
import Mobile from "./pages/Mobile";
import Branding from "./pages/Branding";
import SignUpSettings from "./pages/SinupSetting";
import LearnersTable from "./pages/AllLearner";
import Progress from "./pages/Progress";
import MockTestDashboard from "./pages/MockTest";
import CreateMockTest from "./pages/CreateMockTest";
import TestSeriesPage from "./pages/TestSeriesPage";
import Telegram from "./pages/Telegram";
import Webinar from "./pages/Webinar";
import Bundles from "./pages/Bundles";
import Digital from "./pages/Digital";
import EBook from "./pages/EBook";
import FreeResources from "./pages/FreeResources";
import Utility from "./pages/Utility";
import Podcast from "./pages/Podcast";
import CreateTestSeries from "./pages/CreateTestSeries";
import LiveClass from "./pages/LiveClass";
import CreateBundle from "./pages/CreateBundle";
import CreateEbook from "./pages/CreateEbook";
import CreatePodcast from "./pages/CreatePodcast";
import CreateWebinar from "./pages/CreateWebinar";
import CreateDigital from "./pages/CreateDigital";
import Subscription from "./pages/Subscription";
import CreateSubscription from "./pages/CreateSubscription";
import SubscribeMobile from "./pages/SubscribeMobile";
import Messenger from "./pages/Messenger";
import Custom from "./pages/Custom";
import PricingPlans from "./pages/PricingPlans";

const App = () => {
  const location = useLocation(); // Get the current location

  // Condition to hide the sidebar on the "/mobile" and "/subscribeMobile" pages
  const hideSidebarPages = ["/mobile", "/subscribeMobile","/pricing"];
  const isSidebarHidden = hideSidebarPages.includes(location.pathname);

  return (
    <div className="flex">
      {/* Conditionally render Sidebar, hide it on /mobile and /subscribeMobile routes */}
      {!isSidebarHidden && <Sidebar />}

      {/* Main Content Area */}
      <div className="flex-1 p-4">
        <Routes>
          {/* Route for Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Route for Courses under Contents */}
          <Route path="/courses" element={<Courses />} />

          {/* Other Routes */}
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/web" element={<Web />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/signup" element={<SignUpSettings />} />
          <Route path="/learners" element={<LearnersTable />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/mock" element={<MockTestDashboard />} />
          <Route path="/mocktest" element={<CreateMockTest />} />
          <Route path="/test" element={<TestSeriesPage />} />
          <Route path="/telegram" element={<Telegram />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/bundles" element={<Bundles />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/ebook" element={<EBook />} />
          <Route path="/free-resources" element={<FreeResources />} />
          <Route path="/utilities" element={<Utility />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/subs" element={<Subscription />} />
          <Route path="/createtest" element={<CreateTestSeries />} />
          <Route path="/liveclass" element={<LiveClass />} />
          <Route path="/createBundle" element={<CreateBundle />} />
          <Route path="/createBook" element={<CreateEbook />} />
          <Route path="/createPodcast" element={<CreatePodcast />} />
          <Route path="/createwebinar" element={<CreateWebinar />} />
          <Route path="/createdigital" element={<CreateDigital />} />
          <Route path="/createSubscription" element={<CreateSubscription />} />
          <Route path="/subscribeMobile" element={<SubscribeMobile />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/pricing" element={<PricingPlans />} />
          <Route path="/marketing/messenger" element={<Messenger />} />
          {/* <Route path="/marketing/coupons" element={<Coupons />} />
        <Route path="/marketing/wallet" element={<Wallet />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
