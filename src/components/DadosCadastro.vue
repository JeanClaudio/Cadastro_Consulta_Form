<template>
    <div >
        <ul>
            <li>Nome:</li>
            {{nome}}
            <li>CPF:</li>
            {{cpf}}
            <li>Celular:</li>
            {{celular}}
            <li>Estado/Cidade:</li>
            {{estado}}/{{cidade}}
            <li>Especialidade principal:</li>
            {{especialidade}}
            <li>Preço da consulta:</li>
            R$ {{preco}}
            <li>Forma de pagamento da consulta:</li>
            {{formpagamento}}
            <li>Parcelamento:</li>
            {{parcelamento}}
        </ul>
    </div>
</template>

<script>


export default {
name:'DadosCadastro',

    data(){
        return{
            nome:'',
            cpf:'',
            celular:'',
            estado:'',
            cidade:'',
            especialidade:'',
            preco:'',
            formpagamento:'',
            parcelamento:'',
        }
    },

    mounted(){
        var dados = JSON.parse(localStorage.getItem("dadosProduto"));      

        this.nome=dados[0].nome,
        this.cpf=dados[0].cpf,
        this.celular=dados[0].celular,
        this.estado=dados[0].estado,
        this.cidade=dados[0].cidade,
        this.especialidade=dados[0].especialidade,
        this.preco=dados[0].preco,
        this.formpagamento=dados[0].formpagamento,
        this.parcelamento=dados[0].parcelamento
        
    }
}

</script>

<style scoped>
li{
    font-weight: bold;
    list-style: none;
    margin-top: 15px;
}
</style>