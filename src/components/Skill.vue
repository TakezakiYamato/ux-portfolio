<template>
  <v-container id="skill">
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="10">
        <div class="title">
          <h2 class="titleName">Skill</h2>
        </div>
        <div @click="switchSkill" v-show="show" class="category">
          <div class="categoryName">
            Design SoftWare
          </div>
          <div class="contents">
            <v-row>
              <v-col cols="6">
                <div class="chart">
                  <Design/>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="chipGroup">
                  <div class="line">
                    <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                      XD
                    </v-chip>
                    <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                       Figma
                    </v-chip>
                  </div>
                  <div class="line">
                    <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                      Illustrator
                    </v-chip>
                    <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                      Photoshop
                    </v-chip>
                  </div>
                  <div class="line">
                    <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                      STUDIO
                    </v-chip>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
        <div v-show="!show" class="category switch">
          <div class="categoryName">
            Design SoftWare
          </div>
          <div class="contents">
            <v-row>
              <v-col cols="6">
                <div class="chart">
                  <Design/>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="chipGroup">
                  <div class="line">
                    <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                      XD
                    </v-chip>
                    <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                       Figma
                    </v-chip>
                  </div>
                  <div class="line">
                    <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                      Illustrator
                    </v-chip>
                    <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                      Photoshop
                    </v-chip>
                  </div>
                  <div class="line">
                    <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                      STUDIO
                    </v-chip>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
        <div @click="switchSkill" v-show="!show" class="category">
          <div class="categoryName">
            Front End
          </div>
          <div class="contents">
            <v-row>
              <v-col cols="6">
                <div class="chart">
                  <Front/>
                </div>
              </v-col>
                <v-col cols="6">
                  <div class="chipGroup">
                    <div class="line">
                      <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                        HTML
                      </v-chip>
                      <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                        CSS
                      </v-chip>
                    </div>
                    <div class="line">
                      <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                        Javascript
                      </v-chip>
                      <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                        Vue.js
                      </v-chip>
                    </div>
                    <div class="line">
                      <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                        Vuetify
                      </v-chip>
                    </div>
                    <div class="github">
                      <a href="https://github.com/">
                        <font-awesome-icon :icon="['fab', 'github']" class="fa-2x" color="#404040" />
                      </a>
                    </div>
                  </div>
                </v-col>
            </v-row>
          </div>
        </div>
        <div v-show="show" class="category switch">
          <div class="categoryName">
            Front End
          </div>
          <div class="contents">
            <v-row>
              <v-col cols="6">
                <div class="chart">
                  <Front/>
                </div>
              </v-col>
                <v-col cols="6">
                  <div class="chipGroup">
                    <div class="line">
                      <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                        HTML
                      </v-chip>
                      <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                        CSS
                      </v-chip>
                    </div>
                    <div class="line">
                      <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                        Javascript
                      </v-chip>
                      <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                        Vue.js
                      </v-chip>
                    </div>
                    <div class="line">
                      <v-chip class="skillName" color="#29419c" text-color="#ffffff">
                        Vuetify
                      </v-chip>
                    </div>
                    <div class="github">
                      <a href="https://github.com/">
                        <font-awesome-icon :icon="['fab', 'github']" class="fa-2x" color="#404040" />
                      </a>
                    </div>
                  </div>
                </v-col>
            </v-row>
          </div>
        </div>
        <div class="discription">
          <p>デザイン、エンジニアリング領域の垣根を超えて、良質なコミュニケーションを取れるようにしています。チームとしてより良いサービスを生み出すために、デザインツールからフロントエンド言語まで扱えるようにしています。</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Design from './Design'
import Front from './Front'
export default {
  components: {
    Design,
    Front
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    switchSkill: function () {
      this.show = !this.show
    }
  }
}
</script>
<style scoped>
#skill {
  margin-top: 50px
}
.title {
  margin-top: 50px;
}
.titleName {
  width: 108px;
  height: 65px;
  font-family: Lato;
  font-size: 54px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 1.35px;
  text-align: left;
  color: #29419c;
}
.category {
  width: 970px;
  height: 582px;
  border-radius: 20px;
  background-color: #f7f9fc;
  box-shadow: 10px 10px 5px rgba(13, 39, 80, 0.16),
              -10px -10px 5px #ffffff;
  padding-top: 58px;
  padding-left: 40px;
  margin-top: 64px;
  margin-bottom: 64px;
}
.switch {
  box-shadow: -8px -8px 5px rgba(13, 39, 80, 0.16),
              8px 8px 5px #ffffff;
}
.categoryName {
  margin-bottom: 20px;
  margin-left: 48px;
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #404040;
}
.chip {
  margin: 0 19px;
  width: auto;
  height: auto;
  max-width: 164px;
  padding: 6px 32px;
  border-radius: 19px;
  background-color: #29419c;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skillName {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  color: #ffffff;
  margin: 8px 10px;
}
.contents {
  display: flex;
  justify-content: center;
}
.github {
  width: 46px;
  height: 46px;
  border-radius: 81px;
  box-shadow: 3px 3px 3px rgba(13, 39, 80, 0.16),
              -3px -3px 3px #ffffff;
  background-color: #f7f9fc;
  margin: 30px 16px;
  text-align: center;
  line-height: 58px;
}
.discription {
  width: 661px;
  height: 173px;
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
a {
  text-decoration: none;
}
.chipGroup {
  margin-left: 48px;
  margin-top: 30px;
}
</style>