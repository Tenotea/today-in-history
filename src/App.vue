<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Josefin Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(-30deg,#140303 10%, #081331);
  background-size: 200% 200%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  perspective: 2000px;
  animation: bgWave 7s cubic-bezier(0.645, 0.045, 0.355, 1) 0s infinite forwards alternate;
  @keyframes bgWave {
    from{
      background-position: 0% 0%;
    } to {
      background-position: 100% 50%;
    }
  }
}

</style>
