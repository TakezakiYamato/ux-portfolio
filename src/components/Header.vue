<template>
  <header>
    <div class="logo">
      <a href="#top" class="logo-text" v-smooth-scroll="{duration: 1200}">
      Portfolio
      </a>
    </div>
    <ul>
      <li class="menu skill"><a href="#skill" class="link" v-smooth-scroll="{duration: 1200}">Skill</a></li> 
      <li class="menu work"><a href="#work" class="link" v-smooth-scroll="{duration: 1200}">Work</a></li> 
      <li class="menu about"><a href="#about" class="link" v-smooth-scroll="{duration: 1200}">About Me</a></li> 
    </ul>
    <div class="name">
      YAMATO TAKEZAKI
    </div>
  </header>
</template>

<style scoped>
.logo {
  width: 125px;
  height: 87px;
  background-color: #f7f9fc;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  box-shadow: 4px 4px 4px rgba(13 ,39, 80, 0.16),
              -4px -4px 3px #ffffff;
  border-radius: 20px;
  margin-bottom: 51px;
  position: fixed;
  top: 54px;
  left: 55px;
  background-color: #f7f9fc;
  cursor: none;
}
.logo :hover {
  box-shadow: -4px -4px 4px rgba(13 ,39, 80, 0.16),
              4px 4px 3px #ffffff;
  border-radius: 20px;
}
.logo-text {
  cursor: none;
  font-size: 20px;
  height: 27px;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: 0.7px;
  color: #ed433c;
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 30px;
}
ul {
  text-align: right;
  width: auto;
  height: auto;
}
.menu {
  background-color: #f7f9fc;
  list-style: none;
  height: 47px;
  box-shadow: 4px 4px 3px rgba(13 ,39, 80, 0.16),
              -4px -4px 3px #ffffff;
  border-radius: 5px;
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: none;
}
.menu :hover {
  box-shadow: -4px -4px 3px rgba(13 ,39, 80, 0.16),
              4px 4px 3px #ffffff;
  border-radius: 5px;
}
.skill {
  width: 84px;
  position: fixed;
  top: 192px;
  left: 95px;
}
.work {
  width: 84px;
  position: fixed;
  top: 255px;
  left: 95px;
}
.about {
  width: 118px;
  position: fixed;
  top: 318px;
  left: 61px;
}
.link {
  cursor: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #404040;
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  padding-top: 11px
}

.name {
  position: fixed;
  bottom: 48px;
  left: 49px;
  width: 129px;
  height: 16px;
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
  text-align: left;
  color: #555555;
  cursor: none;
}
</style>