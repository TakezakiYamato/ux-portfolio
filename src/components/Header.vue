<template>
  <header>
    <div class="logo">
      <p class="logo-text">
      Portfolio
      </P>
    </div>
    <ul>
      <li class="menu skill"><a href="#" class="link">Skill</a></li> 
      <li class="menu work"><a href="#" class="link">Work</a></li> 
      <li class="menu about"><a href="#" class="link">About Me</a></li> 
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
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 4px rgba(13 ,39, 80, 0.16),
              -4px -4px 3px #ffffff;
  border-radius: 20px;
  margin-bottom: 51px;
  position: fixed;
  top: 54px;
  left: 55px;
  background-color: #f7f9fc;
}
.logo-text {
  margin: auto;
  font-size: 20px;
  width: 90px;
  height: 27px;
  font-family: PlayfairDisplay;
  font-size: 20px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: 0.7px;
  text-align: right;
  color: #ed433c;
}
ul {
  text-align: right;
  width: auto;
  height: auto;
}
.menu {
  background-color: #f7f9fc;
  list-style: none;
  width: auto;
  height: 47px;
  box-shadow: 4px 4px 3px rgba(13 ,39, 80, 0.16),
              -4px -4px 3px #ffffff;
  border-radius: 5px;
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skill {
  width: 84px;
  position: absolute;
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
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #404040;
}
.name {
  position: fixed;
  bottom: 48px;
  left: 49px;
  width: 129px;
  height: 16px;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
  text-align: left;
  color: #555555;
}
</style>