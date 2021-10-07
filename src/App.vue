<template>

  <div>
    <Navbar />  
    <router-view/>
  </div>

</template>


<script>
import Navbar from './components/Navbar'

export default {
  components:{Navbar}
}


</script>

<style>
h1{
  font-family: 'Comfortaa', sans-serif;
}
*{
  font-family: 'Open Sans', sans-serif;
}


#spanbtn:hover{
  background-color: #5644a5;
}
#primaryColor{
  color: #483698;
}
.primaryColor-bg, #spanbtn{
  background-color: #483698;
}
</style>
