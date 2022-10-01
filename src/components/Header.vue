<script></script>
<template>
<header class="d-flex flex-column justify-content-center align-items-center sticky-top">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="d-flex justify-content-center align-items-center">
          <h1><span>VOLUNTARY</span>ABROAD</h1>
      </div>
    </div>
    <nav class="d-flex justify-content-center align-items-center">
      <ul class="d-flex justify-content-around align-items-center">
        <li><router-link to="/">VOLUNTEERING</router-link></li>
        <li><router-link to="/interesting">INTERESTED</router-link></li>
        <li><router-link to="/ABOUT">ABOUT US</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import "../assets/base.css";

header {
  width: 100%;
  height: 150px;
  background-color: var(--vt-c-green);
}
/*  */
h1 {
  cursor: pointer;
  font-size: 65px;
  letter-spacing: 2px;
  text-shadow: 2px 2px;
}
h1:hover {
  color: var(--vt-c-indigo);
}
span {
  color: var(--vt-c-white);
}

nav {
  width: 100%;
  height: 40px;
}
ul {
  width: 60%;
}
li {
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
  list-style-type: none;
}
a:hover {
  color: white;
}
</style>