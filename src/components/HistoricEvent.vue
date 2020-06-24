<template>
  <div class="main">
    <h1 class="title"> Today In History!
      <p>Today's Date: {{ todaysDate.fullDate }}. </p>
    </h1>
    <p class="happening"> {{historicEvent.text}} <span class="date"> -{{todaysDate.justMonth}} 23, {{ historicEvent.year}} </span> </p>
    <button :class="`${ isLoading } refresh`" @click="refreshHappening()"> <span class="text"> {{ buttonStatus ? buttonStatus : 'More Happenings'}} </span> <span class="spinner"> </span> </button>
    <p class="credits"> A vue.js progressive web app by Adelakun Emmanuel. Hosted on <a href="https://www.netlify.app"> Netlify. </a> <br> View source code on <a href="https://github.com/Tenotea/today-in-history"> GitHub. </a> </p>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'HistoricEvent',
  data () {
    return {
      historicEvent: this.$store.state.happening,
      isLoading: '',
      buttonStatus: ''
    }
  },
  created () {
    this.isLoading = 'loading'
    this.getAnHappening().then(res => {
      this.setNewHappening(res.data)
      this.isLoading = ''
    }).catch(err => {
      console.log(err)
      this.buttonStatus = err
      this.isLoading = 'error'
    })
  },
  methods: {
    ...mapActions(['getAnHappening']),
    ...mapMutations(['setNewHappening']),
    refreshHappening () {
      this.isLoading = 'loading'
      this.getAnHappening().then(res => {
        this.setNewHappening(res.data)
        this.isLoading = ''
      }).catch(err => {
        console.log('Error occured: ' + err)
        this.buttonStatus = err
        this.isLoading = 'error'
      })
    }
  },
  computed: {
    todaysDate () {
      const d = new Date(Date.now())
      const ds = d.toDateString().split(' ')
      const i = d.toDateString().split(' ').length - 2
      ds[i] = ds[i] + ','
      const month = ds[1]
      return {
        fullDate: ds.join(' '),
        justMonth: month
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .main{
    .title{
      font-size: 50px;
      @media screen and (max-width: 540px){
        font-size: 33px;
        padding-top: 50px;
      }
      p{
        font-weight: 300;
        font-size: 20px;
        margin-top: 20px;
        @media screen and (max-width: 540px){
          font-size: 15px;
        }
      }
    }
    .happening{
      color: #B2B2B2;
      font-size: 30px;
      max-width: 700px;
      text-align: left;
      font-weight: bold;
      transform: scale(1.3);
      margin: 90px auto;
      @media screen and (max-width: 1000px) {
        transform: scale(1);
        margin: 30px auto;
        padding: 0px 20px;
        text-align: center;
      }
      @media screen and (max-width: 540px) {
        transform: scale(0.8);
      }
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
      background: #13456e;
      color: white;
      font-size: 20px;
      font-weight: bold;
      outline: none;
      cursor: pointer;
      border-radius: 7px;
      margin-top: 30px;
      position: relative;
      box-shadow: 0px 3px 6px 0px #0f3147;
      transition-property: box-shadow, transform;
      transition-duration: .4s ;
      transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover{
        transform: translateY(-6px);
        box-shadow: 0px 1px 1px 0px #0f3147;
      }
      @media screen and (max-width: 1000px) {
        font-size: 14px;
        padding: 12px 25px;
        border-radius: 3px;
      }
      .spinner{
        display: none;
      }
      &.error{
        color: #ff5f82;
      }
      &.loading{
        .spinner{
          width: 30px;
          height: 30px;
          display: inline-block;
          margin: 0px auto;
          border: 2px solid #081331;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spinner .4s linear 0s infinite forwards;

          @keyframes spinner {
            from{
              transform: rotate(0deg);
            } to {
              transform: rotate(360deg);
            }
          }
        }
        .text{
          display: none;
        }
      }
    }

    .credits{
      margin: 40px auto;
      text-align: center;
      padding: 0px 20px;
      a{
        font-weight: bold;
        color: #057FB5;
        text-decoration: none;
        line-height: 1.5em;
      }
    }
  }
</style>
