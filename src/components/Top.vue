<template>
  <v-container id="top">
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="10" class="contents">
        <v-row>
          <v-col cols="6">
            <div class="content">
              <h1 class="name">Yamato<br>Takezaki</h1>
              <h2 class="job">UX/UIデザイン</h2>
              <h2 class="job">Webデザイン</h2>
              <p class="text">UIから開発に至るまでの知識に加え、UX観点からプロダクトやサービスの品質向上に貢献します。また、UXデザインを通して、ユーザーと技術の架け橋になることを目指します。</p>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="face">
              <img src="../assets/face.png" alt="">
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  #top {
    width: 80%;
  }
  .contents {
    margin-top: 169px;
  }
  .name {
    width: 321px;
    height: 192px;
    font-family: 'Lato', sans-serif;
    font-size: 80px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 1.6px;
    text-align: left;
    color: #29419c;
  }
  .job {
    width: 185px;
    height: 36px;
    font-family: 'Noto Sans JP', sans-serif;;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 1.73px;
    text-align: left;
    color: #29419c;
    margin-left: 8px;
  }
  .text {
    margin-top: 96px;
    width: 462px;
    height: 167px;
    font-family: 'Noto Sans JP', sans-serif;;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: 0.72px;
    text-align: left;
    color: #404040;
  }
</style>