<template>
  <v-container id="about">
    <v-row>
      <v-col cols="2">
      </v-col>
      <v-col cols="10">
        <div class="title">
          <div class="titleName">
            About Me
          </div>
        </div>
        <div class="discription">
          <p>大学在学中、短期の海外インターンシップや、スタートアップ企業での業務を経験し、UXデザインのキャリアを歩んでいくことを決意。UXを通して、ユーザーが物やサービスに触れた時の経験を設計していく。</p>
        </div>
        <div class="contents">
          <div class="profile">
            <img src="../assets/profile.png">
          </div>
          <div class="detail">
            <p>名前 : 竹崎 岳斗  Takezaki Yamato</p>
            <p>所在地 : 東京</p>
            <p>お問い合わせ : gyam0266@gmail.com</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
#about {
  margin-top: 144px;
}
.title {
  margin-bottom: 23px;
}
.titleName {
  width: auto;
  height: 65px;
  font-family: 'Lato', sans-serif;
  font-size: 54px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 1.35px;
  text-align: left;
  color: #29419c;
}
.discription {
  width: 559px;
  height: 183px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.72px;
  text-align: left;
  color: #404040;
  margin-bottom: 16px;
}
.contents {
  display: flex;
  justify-content: start;
  align-items: initial;
}
.detail {
  margin-left: 48px;
  font-family: 'Noto Sans JP', sans-serif;
  color: #555555;
}
</style>