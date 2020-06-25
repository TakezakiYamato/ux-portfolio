<template>
  <v-container class="footer">
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="10">
        <div class="contents">
          <div class="icons">
            <div class="facebook icon">
              <a href="https://twitter.com/yamantis_">
                <img src="../assets/twitter.png"> 
              </a>
            </div>
            <div class="twitter icon">
              <a href="https://www.facebook.com/profile.php?id=100022957357074">
                <img src="../assets/facebook.png">
              </a>
            </div>
            <div class="linkedin icon">
              <a href="https://www.linkedin.com/in/yamato-takezaki-5b4634187/">
                <img src="../assets/linkedin.png">
              </a>
            </div>
          </div>
          <div class="copyright">
          ©︎ 2020 Yamato Takezaki
        </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.contents {
  margin: 112px 0px 27px 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.icons {
  display: flex;
  justify-content: center;
  text-align: center;
}
.icon {
  width: 46px;
  height: 46px;
  border-radius: 81px;
  box-shadow: 2px 2px 3px rgba(13, 39, 80, 0.16),
              -2px -2px 3px #ffffff;
  background-color: #f7f9fc;
  text-align: center;
  margin: 0 12px;
}
.facebook {
  line-height: 73px;
}
.twitter {
  line-height: 73px;
}
.linkedin {
  line-height: 62px;
}
img {
  margin-left: 2px;
}
.copyright {
  width: 197px;
  height: 19px;
  font-family: 'Montserrat', sans-serif; 
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #777777;
}
</style>