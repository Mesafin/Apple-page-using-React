import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



























// $(document).on("click", ".footer-links-wrapper h3", function () {
//   if ($(window).width() < 768) {
//     if ($(this).next("ul").fadeToggle()) $(this).toggleClass("expanded");
//   }
//   $(window).on("resize", function () {
//     window.location.reload();
//   });
// });