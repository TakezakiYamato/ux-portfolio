<template>
  <v-container id="work">
    <v-row>
      <v-col cols="2"></v-col>  
      <v-col cols="10">
        <div class="title">
           <h2 class="titleName">
             Work
           </h2>
        </div>
        <div class="discription">
          <p>デザイン業務を請け負う際は、ヒアリングを通して理念やミッションを深く理解し、サービス制作の目的とデザインコンセプトを固めます。コンセプトを考案する際は、ユーザーが誰かを明確に定義し、どのようにユーザーに訴求するかを言語化します。そして決定したコンセプトを軸にレイアウト、配色、タイポグラフィー、フォント、素材に落とし込みます。</p>
        </div>
        <v-row>
          <v-col cols="6">
            <div class="left">
              <img src="../assets/cavin1.png">
              <div class="workText">
                <div class="projectName">
                  CAVIN
                </div>
                <div class="subName">
                  相互交流型プラットフォーム
                </div>
                <div class="text">
                  <p>CAVIN Inc.インターンでは、花屋と農家を繋ぐ
相互交流型WebサービスのUIデザイン業務に
携わりました。
</p>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="right">
              <img src="../assets/cavin2.png">
              <div class="text">
                <p>主にペルソナの作成や、農家側管理画面のモバイル対応を担当し、Appleが提唱するHIGをUIに取り込み、ナビゲーションの提案、アイコンの選定などを実施しました。
</p>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <div class="left">
              <img src="../assets/enlinx.png">
              <div class="workText">
                <div class="projectName">
                  EnLinx Partners
                </div>
                <div class="subName">
                  コーポレートサイト
                </div>
                <div class="text">
                  <p>日本と海外を繋ぎ、ビジネス創出を事業としている会社のWebサイトです。WebサイトのデザインツールであるSTUDIOで実装しており、
日英2言語で対応しています。</p>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="right">
              <img src="../assets/enlinx2.png">
              <div class="text">
                <p>デザインコンセプトの定義から、ワイヤーフレーム、モックアップの作成、実装部分を担当しています。素材についてはご用意いただいており、キャッチコピーや一部素材の編集も行なっています。</p>
              </div>
            </div>
          </v-col >
        </v-row>
      </v-col>
    </v-row>    
  </v-container>
</template>
<style scoped>
#work {
  margin-top: 144px
}
.title {
  margin-bottom: 26px;
}
.titleName {
  font-family: 'Lato', sans-serif;;
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
  width: 658px;
  height: 341px;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.72px;
  text-align: left;
  color: #404040;
}
.projectName {
  width: auto;
  height: 30px;
  font-family:  'Lato', sans-serif;;
  font-size: 25px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #404040;
}
.subName {
  margin-top: 8px;
  width: auto;
  height: 18px;
  font-family: 'Noto Sans JP', sans-serif;;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #777777;
}
.text {
  margin-top: 28px;
  width: 458px;
  height: 143px;
  font-family: 'Noto Sans JP', sans-serif;;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.8px;
  text-align: left;
  color: #404040;
}
.workText {
  margin-top: 26px;
}
</style>
