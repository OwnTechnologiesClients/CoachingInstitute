import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Form from "./pages/form/Form";
import StudentSignup from "./pages/studentZone/studentSignup/StudentSignup";
import Login from "./pages/studentZone/login/Login";
import History from "./pages/studentZone/history/History";
import TestSeries from "./pages/testSeries/TestSeries";
import StudyMaterial from "./pages/studyMaterial/StudyMaterial";
import PopularVideos from "./pages/popularVideos/PopularVideos";
import About from "./pages/aboutus/About";
import Admin from "./pages/admin/Admin";
import Contact from "./pages/contactus/Contact";
import SearchUser from "./pages/admin/searchUser/SearchUser";
import FormPrint from "./pages/studentZone/history/formPrint/FormPrint";
import RefundPolicy from "./Pages/refundPolicy/RefundPolicy";
import Result from "./pages/result/Result";
import OnlineCourse from "./pages/course/OnlineCourse";
import OfflineCourse from "./pages/course/OfflineCourse";
import Result1 from "./pages/result/ResultPages/Result1";
import NewBatch from "./pages/newBatch/NewBatch";
import Phonepe from "./Pages/payment/phonepe";
import Success from "./Pages/payment/success";
import Failure from "./Pages/payment/failure";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import PrivacyPolicy from "./Pages/privacyPolicy/PrivacyPolicy";
import TermCondition from "./Pages/termCondition/TermCondition";
import ShippingPolicy from "./Pages/shippingPolicy/ShippingPolicy";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/onlinecourses" element={<OnlineCourse />} />
            <Route path="/offlinecourses" element={<OfflineCourse />} />
            <Route path="/testseries" element={<TestSeries />} />
            <Route path="/studymaterial" element={<StudyMaterial />} />
            <Route path="/videos" element={<PopularVideos />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/new-batch" element={<NewBatch />} />
            <Route path="/form" element={<Form />} />
            <Route path="/student-login" element={<Login />} />
            <Route path="/student-signup" element={<StudentSignup />} />
            <Route path="/history" element={<History />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/searchuser" element={<SearchUser />} />
            <Route path="/form-print" element={<FormPrint />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-condition" element={<TermCondition />} />
            <Route path="/result" element={<Result />} />
            <Route path="/result-explore/:course" element={<Result1 />} />
            <Route path="/payment" element={<Phonepe />} />
            <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<Failure />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
