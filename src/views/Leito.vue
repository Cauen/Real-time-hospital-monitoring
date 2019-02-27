<template>
  <div class="card mt-3">
      <div class="card-body">
      
            
          <div class="card-title">
              <h3>Leito</h3>
              <button @click.prevent="startSimulation">Simular Variações</button>
              <button @click.prevent="stopSimulation">Parar Simulação de Variação</button>
              <hr>
          </div>
          <div class="card-body">
              Status: {{status}}
          </div>
      </div>
      <div class="card-footer">
          <form @input.prevent="editarCama">
              <div class="gorm-group">
                  <label for="user">Numero da Cama:</label>
                  <input type="number" v-model="cama" class="form-control">
              </div>
              <div class="gorm-group">
                  <label for="user">Idade:</label>
                  <input type="number" v-model="idade" class="form-control">
              </div>
              <div class="gorm-group pb-3">
                  <label for="message">Nome do Paciente:</label>
                  <input type="text" v-model="nome" class="form-control">
              </div>
              <div class="gorm-group pb-3">
                  <label for="message">Pressão Sístole:</label>
                  <input type="number" v-model="pressaos" class="form-control">
              </div>
              <div class="gorm-group pb-3">
                  <label for="message">Pressão Diástole:</label>
                  <input type="number" v-model="pressaod" class="form-control">
              </div>
              <div class="gorm-group pb-3">
                  <label for="message">Frequência:</label>
                  <input type="number" v-model="frequencia" class="form-control">
              </div>
          </form>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import io from 'socket.io-client';


@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  status: string = "Normal"; // 1 = Normal, 2 = Crítico
  cama: number = 16;
  nome: string = 'José';
  pressaos: number = 120;
  pressaod: number = 80;
  frequencia: number = 80;
  idade: number = 18;
  interval: any;
  socket= io('68.183.102.182:3001');

  editarCama(e:any) {
    e.preventDefault();
      
    this.emitir();
  }

  emitir() {
    this.calcularStatus();
    if (this.status == "")
      this.status = "Normal";
    this.socket.emit('SEND_MESSAGE', {
      status: this.status,
      cama: this.cama,
      nome: this.nome,
      pressaos: this.pressaos,
      pressaod: this.pressaod,
      frequencia: this.frequencia,
    });
  }

  calcularStatus() {
    this.status = "";
    if (this.idade <= 0) {
      if (this.pressaos < 50 || this.pressaos > 52)
        this.status += "Sístole Alterada | ";
      if (this.pressaod < 25 || this.pressaod > 30)
        this.status += "Diástole Alterada | ";
      if (this.frequencia < 70 || this.frequencia > 170)
        this.status += "Frequência Cardíaca Alterada |";
      
      return
    }
    if (this.idade <= 2) {
      if (this.pressaos < 78 || this.pressaos > 114)
        this.status += "Sístole Alterada | ";
      if (this.pressaod < 46 || this.pressaod > 78)
        this.status += "Diástole Alterada | ";
      if (this.frequencia < 80 || this.frequencia > 160)
        this.status += "Frequência Cardíaca Alterada |";
      
      return
    }
    if (this.idade <= 3) {
      if (this.pressaos < 78 || this.pressaos > 114)
        this.status += "Sístole Alterada | ";
      if (this.pressaod < 46 || this.pressaod > 78)
        this.status += "Diástole Alterada | ";
      if (this.frequencia < 80 || this.frequencia > 130)
        this.status += "Frequência Cardíaca Alterada |";
      
      return
    }
    if (this.idade <= 4) {
      if (this.pressaos < 78 || this.pressaos > 114)
        this.status += "Sístole Alterada | ";
      if (this.pressaod < 46 || this.pressaod > 78)
        this.status += "Diástole Alterada | ";
      if (this.frequencia < 80 || this.frequencia > 120)
        this.status += "Frequência Cardíaca Alterada |";
      
      return
    }
    if (this.idade <= 6) {
      if (this.pressaos < 78 || this.pressaos > 114)
        this.status += "Sístole Alterada | ";
      if (this.pressaod < 46 || this.pressaod > 78)
        this.status += "Diástole Alterada | ";
      if (this.frequencia < 75 || this.frequencia > 115)
        this.status += "Frequência Cardíaca Alterada |";
      
      return
    }
    if (this.idade <= 8) {
      if (this.pressaos < 90 || this.pressaos > 132)
        this.status += "Sístole Alterada | ";
      if (this.pressaod < 56 || this.pressaod > 86)
        this.status += "Diástole Alterada | ";
      if (this.frequencia < 70 || this.frequencia > 110)
        this.status += "Frequência Cardíaca Alterada |";
      
      return
    }
    if (this.idade <= 10) {
      if (this.pressaos < 90 || this.pressaos > 132)
        this.status += "Sístole Alterada | ";
      if (this.pressaod < 56 || this.pressaod > 86)
        this.status += "Diástole Alterada | ";
      if (this.frequencia < 70 || this.frequencia > 110)
        this.status += "Frequência Cardíaca Alterada |";
      
      return
    }
    if (this.idade <= 16) {
      if (this.pressaos < 104 || this.pressaos > 108)
        this.status += "Sístole Alterada | ";
      if (this.pressaod < 60 || this.pressaod > 92)
        this.status += "Diástole Alterada | ";
      if (this.frequencia < 70 || this.frequencia > 110)
        this.status += "Frequência Cardíaca Alterada |";
      
      return
    }
    if (this.idade <= 18) {
      if (this.pressaos < 95 || this.pressaos > 140)
        this.status += "Sístole Alterada | ";
      if (this.pressaod < 60 || this.pressaod > 90)
        this.status += "Diástole Alterada | ";
      if (this.frequencia < 70 || this.frequencia > 110)
        this.status += "Frequência Cardíaca Alterada |";
      
      return
    }
    if (this.idade >= 65) {
      if (this.pressaos < 140 || this.pressaos > 160)
        this.status += "Sístole Alterada | ";
      if (this.pressaod < 70 || this.pressaod > 90)
        this.status += "Diástole Alterada | ";
      if (this.frequencia < 60 || this.frequencia > 100)
        this.status += "Frequência Cardíaca Alterada |";
      
      return
    }
  }

  simulateChange() {
      var rootps:number = this.getRandomArbitrary(-0.01, 0.01);
      var rootpd:number = this.getRandomArbitrary(-0.01, 0.01);
      var roottm:number = this.getRandomArbitrary(-0.01, 0.01);
      console.log('Simulando');
      /*
      if (this.pressaos) 
          this.pressaos = parseFloat(parseFloat(parseFloat(this.pressaos) + parseFloat(this.pressaos*rootps))).toFixed(2);
      if (this.pressaod) 
          this.pressaod = parseFloat(parseFloat(parseFloat(this.pressaod) + parseFloat(this.pressaod*rootpd))).toFixed(2);
      if (this.frequencia) 
          this.frequencia = parseFloat(parseFloat(parseFloat(this.frequencia) + parseFloat(this.frequencia*roottm))).toFixed(2);
*/
          
      if (this.pressaos) 
          this.pressaos = parseFloat((this.pressaos + this.pressaos*rootps).toFixed(2));
      if (this.pressaod) 
          this.pressaod = parseFloat((this.pressaod + this.pressaod*rootpd).toFixed(2));
      if (this.frequencia) 
          this.frequencia = parseFloat((this.frequencia + this.frequencia*roottm).toFixed(2));
            

      this.emitir();
  }

  startSimulation() {
      var self = this;
      this.interval = window.setInterval(function(){
          self.simulateChange();
      }, 1000);
  }

  stopSimulation() {
      clearInterval(this.interval);
  }

  getRandomArbitrary(min:number, max:number) {
      return Math.random() * (max - min) + min;
  }

  mounted() {        
      //this.startSimulation();
  }
  
  destroyed() {
      this.socket.close();
  }
}




</script>
