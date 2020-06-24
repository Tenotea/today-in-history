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
    height: 100vh;
    background: linear-gradient(-30deg,#140303 40%, #081331);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    perspective: 2000px;
    .title{
      font-size: 70px;
      margin-bottom: 30px;
    }
    .caption{
      font-size: 30px;
      margin-bottom: 40px;
    }
    .redirect{
      border: none;
      padding: 10px 30px;
      background: #712525;
      color: white;
      font-family: 'candara';
      border-radius: 5px;
      box-shadow: 0px 15px 3px -10px #24242480;
      transition: .3s all cubic-bezier(0.165, 0.84, 0.44, 1);
      font-size: 18px;
      &:hover{
        transform: translateY(-3px);
        box-shadow: 0px 23px 3px -18px #24242480;
        cursor: pointer;
        // box-shadow: 0px 1px 1px #0a1b35;
      }
    }
  }

  @media screen and (max-width: 574px) and (orientation: landscape){
    #canvas{
      height: 200vh;
    }
  }
</style>
