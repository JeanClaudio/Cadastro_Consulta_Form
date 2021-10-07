<template>

<div class="py-2">

    <form class="" id="form">

        <div class="col-lg-12 my-3">
            <label for="name" class="form-label" >Nome Completo*</label>
            <input @change="checar" type="text" v-model="nome" class="form-control" id="name" placeholder="Digite o nome completo" maxlength="48" minlength="3" required>
            <p  id="nomeerro" class="p-1 text-decoration-underline text-danger text-validation">AVISO: O nome deve conter mais de 3 caracteres e menos de 48</p>
        </div>

        <div class="col-lg-6 col-sm-12 my-3">
            <label for="cpf" class="form-label">CPF*</label>
            <input @change="checar" type="text" v-mask="'###.###.###-##'" v-model="cpf" class="form-control" id="cpf" placeholder="Digite um CPF" maxlength="14" minlength="13"  required>
            <p id="cpferro" class="p-1 text-decoration-underline text-danger text-validation">AVISO: CPF inválido</p>
        </div>

        <div class="col-lg-6 col-sm-12 my-3">
            <label for="cpf" class="form-label">Número Celular*</label>
            <input @change="checar" type="text" v-mask="'(##) #####-####'" v-model="celular" class="form-control" id="cpf" placeholder="(00) 0 0000-0000" required>
            <p id="celularerro" class="p-1 text-decoration-underline text-danger text-validation">AVISO: Número inválido</p>
        </div>

        <div class="row my-3" >
            <div class="col-lg-4 col-sm-12">
                <label for="estado" class="form-label">Estado*</label>
                <select  @change="checar(),checarestado()" class="form-select" v-model="estado" id="estado" aria-label="Default select example" required>
                    <option selected disabled value="">Selecione</option>
                    <option>Paraná</option>
                    <option>Rio Grande do Sul</option>
                    <option>Santa Catarina</option>
                </select>    
                <p id="estadoerro" class="p-1 text-decoration-underline text-danger text-validation">Error mensage</p>
            </div>

            <div class="col-lg-4 col-sm-12">
                <label for="cidade" class="form-label">Cidade*</label>
                <select @change="checar" class="form-select" v-model="cidade" id="cidade" aria-label="Default select example" required>
                    <option selected disabled value="" id="selecione">Selecione</option>
                    <option id="Londrina">Londrina</option>
                    <option id="Maringa">Maringá</option>
                    <option id="Pelotas">Pelotas</option>
                    <option id="Porto Alegre">Porto Alegre</option>
                    <option id="Florianopolis">Florianópolis</option>
                    <option id="Joinville">Joinville</option>
                </select>
                <p id="cidadeerro" class="p-1 text-decoration-underline text-danger text-validation">Error mensage</p>
            </div>
        </div>        

        <div class="progress my-5">
            <div class="progress-bar primaryColor-bg" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">1 de 2</div>
        </div>       
        
        <div class="col-12">            
                <a @click="registrar" @mouseover="segundaChecagem" id="link" href="/DetalhesAtendimento"></a>
                <ButtonRouter class="primaryColor-bg" id="botao" />     
        </div>
    </form>

    
</div>


</template>


<script>
import ButtonRouter from '../components/ButtonRouter.vue'

export default {
    name: 'FormDados',
    components:{ButtonRouter},
    emits:['mudarrota'],
    
    data(){
        return{
            nome:'',
            cpf:'',
            celular:'',
            estado:'',
            cidade:'',
        }
    },

    mounted(){

        //código abaixo recupera os dados salvos no LocalStorage(se houver) e preenche os campos do form 
        if(localStorage.dadosProduto){

            var dados = JSON.parse(localStorage.getItem("dadosProduto"));        

            this.nome=dados[0].nome,
            this.cpf=dados[0].cpf,
            this.celular=dados[0].celular,
            this.estado=dados[0].estado,
            this.cidade=dados[0].cidade

            //código abaixo libera acesso para próxima página e controla o comportamento dos elementos da página
            document.getElementById("botao").disabled = false;
            document.getElementById("botao").style.display = "none";
            document.getElementById("link").innerHTML = '<pan style="width: 100%;" class="btn btn-primary rounded-pill botao" id="spanbtn">Próximo</span>'
            document.getElementById("nomeerro").style.display = "none"
            document.getElementById("cpferro").style.display = "none"
            document.getElementById("celularerro").style.display = "none"
            document.getElementById("cidadeerro").style.display = "none"
            document.getElementById("estadoerro").style.display = "none"

            //O código abaixo controla as regras de select quando o componente é montado
            if(this.estado == 'Paraná'){
                //alert("parana selecionado")
                document.getElementById("Maringa").disabled = false;
                document.getElementById("Londrina").disabled = false;

                document.getElementById("Pelotas").disabled = true;
                document.getElementById("Florianopolis").disabled = true;
                document.getElementById("Porto Alegre").disabled = true;
                document.getElementById("Joinville").disabled = true;

            }else if(this.estado == 'Rio Grande do Sul'){
                document.getElementById("Pelotas").disabled = false;
                document.getElementById("Porto Alegre").disabled = false;

                document.getElementById("Joinville").disabled = true;
                document.getElementById("Florianopolis").disabled = true;
                document.getElementById("Londrina").disabled = true;
                document.getElementById("Maringa").disabled = true;

            }else if(this.estado == 'Santa Catarina'){
                document.getElementById("Joinville").disabled = false;
                document.getElementById("Florianopolis").disabled = false;

                document.getElementById("Londrina").disabled = true;
                document.getElementById("Maringa").disabled = true;
                document.getElementById("Pelotas").disabled = true;
                document.getElementById("Porto Alegre").disabled = true;
            }

        }

        //código abaixo faz uma checagem inicial para controlar o comportamento do botão de acesso a próxima página
        if(this.nome =='' || this.cpf =='' || this.celular =='' || this.estado =='' || this.cidade == ''){
            document.getElementById("botao").disabled = true;                
            console.log("vazio")                
        }else{
            document.getElementById("botao").disabled = false;
        }

        
    },

    methods: {
        //O código abaixo é responsável por guardar os dados preenchidos no LocalStorage
        registrar(){
            var dados = JSON.parse(localStorage.getItem("dadosProduto"));

            if(dados == null){
                localStorage.setItem("dadosProduto", "[]");
                dados = []
            }

            var auxregistro = {
                nome: this.nome,
                cpf: this.cpf,
                celular: this.celular,
                estado: this.estado,
                cidade: this.cidade,
                especialidade: '',
                preco: '',
                formpagamento:'',
                parcelamento: 1
            }

            dados[0] = auxregistro;
            localStorage.setItem("dadosProduto", JSON.stringify(dados));
            //alert("registrado")
        },

        //O código abaixo controla as regras de select dos estados/cidade
        checarestado(){
                this.cidade = ''

            if(this.estado == 'Paraná'){
                //libera os selects
                document.getElementById("Maringa").disabled = false;
                document.getElementById("Londrina").disabled = false;
                //desabilita os selects
                document.getElementById("Pelotas").disabled = true;
                document.getElementById("Florianopolis").disabled = true;
                document.getElementById("Porto Alegre").disabled = true;
                document.getElementById("Joinville").disabled = true;

            }else if(this.estado == 'Rio Grande do Sul'){
                //libera os selects
                document.getElementById("Pelotas").disabled = false;
                document.getElementById("Porto Alegre").disabled = false;
                //desabilita os selects
                document.getElementById("Joinville").disabled = true;
                document.getElementById("Florianopolis").disabled = true;
                document.getElementById("Londrina").disabled = true;
                document.getElementById("Maringa").disabled = true;

            }else if(this.estado == 'Santa Catarina'){
                //libera os selects
                document.getElementById("Joinville").disabled = false;
                document.getElementById("Florianopolis").disabled = false;
                //desabilita os selects
                document.getElementById("Londrina").disabled = true;
                document.getElementById("Maringa").disabled = true;
                document.getElementById("Pelotas").disabled = true;
                document.getElementById("Porto Alegre").disabled = true;
            }

        },

        //O código abaixo observa mudanças nos campos do formulário para validar as informações
        checar(){
            if(this.nome.length > 3 && this.cpf != '' && this.celular != '' && this.estado != '' && this.cidade != ''){
                document.getElementById("botao").disabled = false;
                document.getElementById("botao").style.display = "none";
                console.log("liberado")
                document.getElementById("link").innerHTML = '<pan style="width: 100%;" class="btn btn-primary rounded-pill botao" id="spanbtn">Próximo</span>'
                document.getElementById("nomeerro").style.display = "none"
                document.getElementById("cpferro").style.display = "none"
                document.getElementById("celularerro").style.display = "none"
                document.getElementById("cidadeerro").style.display = "none"
                document.getElementById("estadoerro").style.display = "none"
                

            }else{
            document.getElementById("botao").disabled = true;
            //document.getElementById("botao").style.display = "block";
            //console.log("Não liberado")
            }
                
        },

        //O código abaixo faz uma última validação do formulário antes de prosseguir
        segundaChecagem(){
            if(this.nome.length < 4  || this.cpf.length < 14 || this.celular.length <15 || this.estado =='' || this.cidade == ''){
                 document.getElementById("link").innerHTML = '';
                 document.getElementById("botao").style.display = "block";
                 document.getElementById("botao").disabled = true;   
                 console.log(this.cpf.length)
             }
            if(this.nome.length < 4){document.getElementById("nomeerro").style.display = "block";}
            if(this.cpf.length != 14){document.getElementById("cpferro").style.display = "block";}
            if(this.celular.length != 15){document.getElementById("celularerro").style.display = "block";}  
        },
    }
}
</script>

<style scoped>
form p{
    display: none;
    }
.primaryColor-bg{
  background-color: #483698;
}
</style>