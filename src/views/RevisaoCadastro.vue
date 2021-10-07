<template>

<div class="container mt-5 ">

      <div class="shadow p-3 mb-5 bg-body rounded row align-items-center">
        
        <div class="pb-3 col-lg-6 col-sm-12 ps-lg-5">
          <router-link to="/DetalhesAtendimento"><ButtonBackRouter /></router-link>
          <h1 class="my-5 ms-5">Revisão do Cadastro</h1>
          <DadosCadastro />
          <a @click="finalizarCadastro"><button id="botao" class="ms-5 btn btn-warning rounded-pill botao">Cadastrar Profissional</button></a>
          <a href="/"><button id="botao" class="ms-5 btn btn-outline-primary rounded-pill botao primaryColor-btn">Editar Cadastro</button></a>
        </div>

        <div class="col-6 d-none d-lg-block ps-lg-5" id="imgform">
          <ImgForm />
        </div>
      </div>

</div>
    
</template>

<script>
import DadosCadastro from '../components/DadosCadastro.vue'
import ButtonBackRouter from '../components/ButtonBackRouter.vue'
import ImgForm from '../components/ImgForm.vue'
import ButtonRouter from '../components/ButtonRouter.vue'

export default {
    components:{DadosCadastro,ButtonBackRouter,ImgForm,ButtonRouter},

    methods:{
      finalizarCadastro(){
        alert("Cadastrado com sucesso!!!")
      }
    }
}
</script>


<style escoped>
#botao{
  width: 80%;
  margin: 15px;
}
#botao2{
  width: 80%;
  margin: 15px;
}
.primaryColor-btn{
  color: #483698;
  border: 1px solid  #483698;
}
.primaryColor-btn:hover{
  color: #ffffff;
  background-color: #483698;
}
</style>