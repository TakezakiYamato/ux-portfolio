<template>
  <v-container class="skill">
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="10">
        <div class="title">
          <h2 class="titleName">Skill</h2>
        </div>
        <div class="category">
          <div class="categoryName">
            Design SoftWare
          </div>
          <div class="contents">
            <!-- <chart/> -->
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
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
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
}
.categoryName {
  margin: 30px;
  font-family: Montserrat;
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
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  color: #ffffff;
  margin: 8px 10px;
}


</style>