import { upperNavbar } from "../component/upper_navbar.js";
let u_nav = document.getElementById("vd-upper-navbar");
u_nav.innerHTML = upperNavbar();

import { lowerNavbar } from "../component/lower_navbar.js";
let l_nav = document.getElementById("lower-navbar");
l_nav.innerHTML = lowerNavbar();

import { footer } from "../component/vd_footer.js";
let nav1 = document.getElementById("vd-footer");
nav1.innerHTML = footer();
