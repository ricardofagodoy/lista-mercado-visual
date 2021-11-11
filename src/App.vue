<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10% 5%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
}

.bottom-btn {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
