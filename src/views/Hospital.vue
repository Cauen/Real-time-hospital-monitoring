<template>
  <div class="card mt-3">
      <h1>Leitos</h1>
      <div :class="['leitoskeys ' + leitos[leitokey].status]" v-for="(leitokey, index) in leitoskeys" :key="index">
        <div style="padding: 10px;">
            <span class="font-weight-bold">Chave: </span>{{ leitokey }}<br>
            <span class="font-weight-bold">Cama: </span><span>{{ leitos[leitokey].cama }} </span><br>
            <span class="font-weight-bold">Nome: </span><span>{{ leitos[leitokey].nome }} </span><br>
            <span class="font-weight-bold">Pressão Sístole: </span><span>{{ leitos[leitokey].pressaos }}mmHg </span><br>
            <span class="font-weight-bold">Pressão Diástole: </span><span>{{ leitos[leitokey].pressaod }}mmHg </span><br>
            <span class="font-weight-bold">Frequência: </span><span>{{ leitos[leitokey].frequencia }}ºC </span><br>
            <span class="font-weight-bold">Status: </span><span>{{ leitos[leitokey].status }} </span><br>
        </div>
    </div>
  </div>
</template>
<style>
  .Alterada {
    background-color: #f44336;
    color: white;
  }

  .leitoskeys {
    margin-bottom: 5px;
  }
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import io from 'socket.io-client';

@Component({
})
export default class About extends Vue {
  message: string = 'Tempo Real';
  leitos = [];
  leitoskeys = [];
  socket = io('localhost:3001');

  getLeitos(data) {
    this.leitos = data;
    this.leitoskeys = Object.keys(data);
  }

  mounted() {
    this.socket.emit('HOSPITAL', {});
    this.socket.on('ADMINS', (data) => {
        
      this.getLeitos(data);
    });
    this.socket.on('EDIT', (data) => {
        this.getLeitos(data);
    });
    console.log('Mounted');
  }

  destroyed() {
      this.socket.close();
  }
  
}
</script>