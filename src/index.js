import { upperNavbar } from "../component/upper_navbar.js";
let u_nav = document.getElementById("vd-upper-navbar");
u_nav.innerHTML = upperNavbar();

// import { lowerNavbar } from "../component/lower_navbar.js";
// let nav2 = document.getElementById("lower-navbar");
// nav2.innerHTML = lowerNavbar();

import { footer } from "../component/vd_footer.js";
let nav1 = document.getElementById("vd-footer");
nav1.innerHTML = footer();
