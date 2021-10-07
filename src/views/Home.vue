<template>

<div class="container mt-5 " >

      <div class="shadow p-3 mb-5 bg-body rounded row align-items-center ">

        <div class="pb-3 col-lg-6 col-sm-12 ps-lg-5">
          <h1 class="mt-5 ms-5">Dados Profissionais</h1>
          <FormDados />
        </div>

        <div class="col-6 d-none d-lg-block ps-lg-5" id="imgform">
          <ImgForm />
        </div>
      </div>

</div>


</template>

<script>
import FormDados from '../components/FormDados.vue'
import ImgForm from '../components/ImgForm.vue'
export default {
  components:{FormDados,ImgForm}
}

</script>

<style scoped>


</style>

