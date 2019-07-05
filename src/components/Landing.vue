<template>
  <div class="main video-container">
    <div class="home-video-wrapper">
      <video autoplay loop muted><source src="../assets/Video5.mp4" type="video/mp4" ></video>
    </div>
    <div class="home-sadrzaj">
      <img class="logo-branch" src="../assets/branch-logo-vista-blue.png" alt />
     
      <h1> Enjoy in <span>NATURE</span></h1>
       <v-btn color="naslovNar" round dark large>R O O M S</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing"
};
</script>

<style scoped>

.video-container {
  display: flex;
  text-align: center;
  justify-content: center;
  height: 100vh;
}

.home-video-wrapper {
  overflow: hidden;
}

.home-video-wrapper video { 
  width: auto;
  height: auto;
  z-index: 0; 
  object-fit: cover;
}

.home-sadrzaj {
  width: 80%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: rgba(31, 36, 33, 0.3);
}

.home-sadrzaj h1 {
  font-size: 50px;
  margin-bottom: 0px;
  color: #fff;
}

.home-sadrzaj h1 span {
  color: #91d0aa;
}

.home-sadrzaj p {
  font-size: 1.5rem;
  display: block;
  padding-bottom: 2rem;
}

.logo-branch{
  width: 300px;
}
@media screen and (min-width: 600px) {
    
    .home-sadrzaj {
        max-width: 50%;
        right: 0;
    }
}
</style>