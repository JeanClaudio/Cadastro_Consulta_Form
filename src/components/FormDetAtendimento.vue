<template>

<div class="py-2">

    <form class="needs-validation" novalidate>

        <div class="row">
            <div class="col-lg-8 col-sm-12 my-3">
                <label for="estado" class="form-label">Especialidade principal</label>
                <select @change="checar" v-model="especialidade" class="form-select" id="estado" aria-label="Default select example" required>
                    <option selected disabled value="">Selecione</option>
                    <option>Cardiologia</option>
                    <option>Dermatologia</option>
                    <option>Neurologia</option>  
                    <option>Oftalmologia</option>
                    <option>Psiquiatria</option>
                    <option>Urologia</option>
                </select>
                <p  id="especialidadeerro" class="p-1 text-decoration-underline text-danger text-validation">AVISO: Selecione uma das opções</p>
            </div>
        </div>

        <div class="col-lg-6 col-sm-6 my-3 row ">
            <p>Informe o preço da consulta</p>
            <div class="input-group mb-3">
                <span class="input-group-text text-light primaryColor-bg">R$</span>
                <input @change="checar" v-model="preco" v-mask="'###'" type="text" class="form-control text-center" value="30" id="valor" aria-label="Dollar amount (with dot and two decimal places)" maxlength="3" minlength="2">
                <span class="input-group-text">,00</span>
                <p id="precoerro" class="p-1 text-decoration-underline text-danger text-validation">AVISO: Digite valores entre R$ 30 e R$ 350</p>
            </div>
        </div>
        

        
        <p class="mt-5">Forma de pagamendo da Consulta</p>

        <div @click="pix" class=" col-lg-8 form-check my-3 shadow ps-5 py-3 mb-2 rounded">
            <input  class="form-check-input" type="radio" name="flexRadioDefault" id="pix" checked>
            <label class="form-check-label" for="flexRadioDefault1">
            Pix
            </label>
        </div>

        <div @click="dinheiro" class=" col-lg-8 form-check my-3 shadow ps-5 py-3 mb-2 rounded">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="dinheiro" >
            <label class="form-check-label" for="flexRadioDefault2">
            Em dinheiro
            </label>
        </div>

        <div class=" col-lg-8 form-check my-3  py-3 shadow ps-5 mb-5 rounded" id="containerParcelamento">
            <div  @click="cartao" class="py-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="cartao">
                <label class="form-check-label" for="flexRadioDefault2">
                Cartão de crédito
                </label>
            </div>

            <div class="m-3" id="parcelamento">
                <p>Parcelamento em:</p>
                <div @click="umavez" class="form-check" id="um">
                    <input class="form-check-input" type="radio" name="parcelamento" id="umvez" checked>
                    <label class="form-check-label" for="parcelamento">
                    1x, sem juros
                    </label>
                </div>
                <div @click="duasvezes" class="form-check" id="dois">
                    <input class="form-check-input" type="radio" name="parcelamento" id="duavezes" >
                    <label class="form-check-label" for="parcelamento">
                    2x, sem juros
                    </label>
                </div>
                <div @click="tresvezes" class="form-check  " id="tres">
                    <input class="form-check-input " type="radio" name="parcelamento" id="tresvezes">
                    <label class="form-check-label" for="parcelamento">
                    3x, sem juros
                    </label>
                </div>
            </div>
        </div>

        <div class="progress my-5">
            <div class="progress-bar primaryColor-bg" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">2 de 2</div>
        </div>

        <div> 
                <a @click="registrar" @mouseover="segundaChecagem" id="link" href="/RevisaoCadastro"></a>
                <ButtonRouter  class="btn-primary botao" id="botao" />
        </div>
    </form>
</div>


</template>

<script>
import ButtonRouter from '../components/ButtonRouter.vue'

export default {
    name: 'FormDetAtendimento',
    components:{ButtonRouter},
      data(){
        return{
            especialidade:'',
            preco:'',
            formpagamento:'',
            parcelamento:'1',
        }
    },

    mounted(){

        //código abaixo recupera os dados salvos no LocalStorage(se houver) e preenche os campos do form
        if(localStorage.dadosProduto){

            var dados = JSON.parse(localStorage.getItem("dadosProduto"));        

            this.especialidade=dados[0].especialidade,
            this.preco=dados[0].preco,
            this.formpagamento=dados[0].formpagamento,
            this.parcelamento=dados[0].parcelamento

            //código abaixo marca os checkboxes de acordo com os dados recuperados do LocalStorage 
            if(dados[0].formpagamento == 'Dinheiro'){
                document.getElementById('dinheiro').checked = true;  

           }else if(dados[0].formpagamento == 'Pix'){
               document.getElementById('pix').checked = true;

           }else if(dados[0].formpagamento == 'Cartão'){
               document.getElementById('cartao').checked = true;
               document.getElementById('parcelamento').style.display = "block"
                
               if(dados[0].parcelamento == 1){document.getElementById('umvez').checked = true;}
               else if(dados[0].parcelamento == 2){document.getElementById('duavezes').checked = true;}
               else if(dados[0].parcelamento == 3){document.getElementById('tresvezes').checked = true;}
           }

            //código abaixo libera acesso para próxima página e controla o comportamento dos elementos da página
            document.getElementById("botao").disabled = false;
            document.getElementById("botao").style.display = "none";
            document.getElementById("link").innerHTML = '<pan style="width: 100%;" class="btn btn-primary rounded-pill botao" id="spanbtn">Próximo</span>'
            //document.getElementById("nomeerro").style.display = "none"
            //document.getElementById("cpferro").style.display = "none"
            //document.getElementById("celularerro").style.display = "none"
            //document.getElementById("cidadeerro").style.display = "none"
            //document.getElementById("estadoerro").style.display = "none"
        }     

        //código abaixo faz uma checagem inicial para controlar o comportamento do botão de acesso a próxima página
        if(this.especialidade =='' || this.preco ==''){
            document.getElementById("botao").disabled = true;                
        }else{document.getElementById("botao").disabled = false;}        
        
    },

    methods:{
        //O código abaixo é responsável por guardar os dados preenchidos no LocalStorage
        registrar(){
            var dados = JSON.parse(localStorage.getItem("dadosProduto"));

            if(dados == null){
                localStorage.setItem("dadosProduto", "[]");
                dados = []
            }

            dados[0].especialidade = this.especialidade;
            dados[0].preco = this.preco;
            dados[0].formpagamento = this.formpagamento;
            dados[0].parcelamento = this.parcelamento;

            localStorage.setItem("dadosProduto", JSON.stringify(dados));
            //alert("registrado")
        },

        //O código abaixo observa mudanças nos campos do formulário para validar as informações 
        checar(){
            if(this.especialidade.length != '' && this.preco >= 30){    
                document.getElementById("botao").disabled = false;
                document.getElementById("botao").style.display = "none";
                document.getElementById("link").innerHTML = '<pan style="width: 100%;" class="btn btn-primary rounded-pill botao" id="spanbtn">Próximo</span>'
                document.getElementById("precoerro").style.display = "none"              
            }
            if(this.especialidade !=''){document.getElementById("especialidadeerro").style.display = "none";}  
        },

        //O código abaixo faz uma última validação do formulário antes de prosseguir 
         segundaChecagem(){

            if(this.especialidade == ''  || this.preco < 30 || this.preco > 350){
                 document.getElementById("link").innerHTML = '';
                 document.getElementById("botao").style.display = "block";
                 document.getElementById("botao").disabled = true;   
                 console.log(this.preco)

             }
            if(this.especialidade ==''){document.getElementById("especialidadeerro").style.display = "block";}
            if(this.preco < 30 || this.preco > 350){document.getElementById("precoerro").style.display = "block";}
            
            //O código abaixo pega os valores dos elementos do "forma de pagarmento" e guarda nas variáveis "parcelamento" e "formpagamento"
            if(document.getElementById('pix').checked == true){
                this.parcelamento = '1'
                this.formpagamento = 'Pix'
            }
            else if(document.getElementById('dinheiro').checked == true){
                this.parcelamento = '1'
                this.formpagamento = 'Dinheiro'
            }
            else if(document.getElementById('cartao').checked == true){
                this.formpagamento = 'Cartão'
            }
            if(document.getElementById('umvez').checked == true){
                this.parcelamento = '1'
            }
            if(document.getElementById('duavezes').checked == true){
                this.parcelamento = '2'
            }
            if(document.getElementById('tresvezes').checked == true){
                this.parcelamento = '3'
            }
        },

        //O código abaixo define o comportamento dos itens quando eles são clickados
        umavez(){
            document.getElementById('umvez').checked = true;            
        },
        duasvezes(){
            document.getElementById('duavezes').checked = true;            
        },
        tresvezes(){
            document.getElementById('tresvezes').checked = true;            
        },
        pix(){
            document.getElementById('pix').checked = true;
            document.getElementById('parcelamento').style.display = "none";
            document.getElementById('umvez').checked = false;
            document.getElementById('duavezes').checked = false;
            document.getElementById('tresvezes').checked = false;
            this.parcelamento = '1'            
        },
        dinheiro(){
            document.getElementById('dinheiro').checked = true;
            document.getElementById('parcelamento').style.display = "none";
            document.getElementById('umvez').checked = false;
            document.getElementById('duavezes').checked = false;
            document.getElementById('tresvezes').checked = false;
            this.parcelamento = '1'
        },
        cartao(){
            var cart = document.getElementById('cartao')
            cart.checked = true;

            if(cart.checked){
                document.getElementById('parcelamento').style.display = "block";
                this.formpagamento = 'Cartão' 
            }
        }
    }
}



</script>

<style scoped>
form p{
    display: none;
    }
#parcelamento{
    display: none;
}
.form-check:hover{
cursor: pointer;
background-color: #E9ECEF;
}
#containerParcelamento{
    background-color: #f9f9f9;
}
#containerParcelamento:hover{
    background-color: #E9ECEF;
}
.primaryColor-bg{
  background-color: #483698;
}
</style>