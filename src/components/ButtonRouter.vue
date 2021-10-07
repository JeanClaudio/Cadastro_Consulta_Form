<template>
    <button class="btn primaryColor-bg rounded-pill botao" @click="$emit('ativarEvento')">Avançar</button>
</template>

<script>
export default {
    name:'ButtonRouter',
    emits:['ativarEvento']
    
}
</script>

<style >
.botao{
    width: 100%;
    background-color: #483698;
}
.primaryColor-bg, .btn{
  background-color: #483698;
}
</style>