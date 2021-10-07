<template>

<div class="container pt-5 ">

      <div class="shadow p-3 mb-5 bg-body rounded row align-items-center">
        
        <div class="col-lg-6 col-sm-12 ps-lg-5">
            <router-link to="/"><ButtonBackRouter /></router-link>
            <h1 class="mt-5 ms-lg-5">Detalhes atendimento</h1>
          <FormDetAtendimento />
        </div>

        <div class="col-6 d-none d-lg-block ps-lg-5" id="imgform">
          <ImgForm />
        </div>
      </div>

</div>


</template>

<script>
import FormDetAtendimento from '../components/FormDetAtendimento.vue'
import ImgForm from '../components/ImgForm.vue'
import ButtonBackRouter from '../components/ButtonBackRouter.vue'

export default {
  components:{ImgForm,FormDetAtendimento,ButtonBackRouter}
}

</script>

<style scoped>

</style>

