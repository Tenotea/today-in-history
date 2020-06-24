<template>
  <div class="main">
    <h1 class="title"> Today In History
      <p> Today's Date: June 24, 2020</p>
    </h1>
    <p class="happening"> {{this.$store.state.happening}} <span class="date"> -June 23, 2019 </span> </p>
    <button class="refresh" @click="refreshHappening()"> More Happenings </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HistoricEvent',
  created () {
    this.getAnHappening()
  },
  methods: {
    ...mapActions(['getAnHappening']),
    refreshHappening () {
      this.getAnHappening()
    }
  }
}
</script>

<style scoped lang="scss">
  .main{
    width: 100%;
    height: 100vh;
    background: linear-gradient(-30deg,#140303 40%, #081331);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    perspective: 2000px;
    position: relative;
    .title{
      font-size: 50px;
      position: absolute;
      top: 100px;
      p{
        font-weight: 300;
        font-size: 20px;
        margin-top: 20px;
      }
    }
    .happening{
      color: #B2B2B2;
      font-size: 30px;
      max-width: 700px;
      text-align: left;
      font-weight: bold;
      transform: scale(1.3);
      margin: 50px auto;
      margin-top: 90px;
      .date{
        margin-top: 20px;
        text-align: left;
        font-size: 20px;
        display: block;
        font-weight: lighter;
      }
    }

    .refresh{
      padding: 20px 30px;
      border: none;
      background: #712525;
      color: white;
      font-size: 20px;
      font-weight: bold;
      border-radius: 7px;
      margin-top: 50px;
      position: relative;
    }
  }
</style>
