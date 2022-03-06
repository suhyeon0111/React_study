import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;

// import React from "react";
// import { Route, Link } from "react-router-dom";
// import About from "./About";
// import Home from "./Home";

// const App = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//         <li>
//           <Link to="/profile/velopert">velopert 프로필</Link>
//         </li>
//         <li>
//           <Link to="/profile/gildong">gildong 프로필</Link>
//         </li>
//       </ul>
//       <hr />
//       <Route path="/" component={Home} exact={true} />
//       <Route path={["/about", "/info"]} component={About} />
//       <Route path="/profile/:username" component={Profile} />
//     </div>
//   );
// };

// export default App;
