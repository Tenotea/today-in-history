<template>
  <div id="canvas">
    <h1 class="title"> PAGE NOT FOUND </h1>
    <p class="caption"> Sorry, this site has only one page!</p>
    <router-link to="/"> <button class="redirect"> Check out more happenings </button></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  #canvas{
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    perspective: 2000px;
    .title{
      font-size: 50px;
      margin-bottom: 30px;
      @media screen and (max-width: 540px){
        font-size: 32px;;
        .caption{
          font-size: 14px;
        }
      }
    }
    .caption{
      font-size: 20px;
      margin-bottom: 40px;
      @media screen and (max-width: 540px){
        font-size: 14px;
      }
    }
    .redirect{
      padding: 14px 25px;
      border: none;
      background: #13456e;
      color: white;
      font-size: 16px;
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
    }
  }

  @media screen and (max-width: 574px) and (orientation: landscape){
    #canvas{
      height: 200vh;
    }
  }
</style>
