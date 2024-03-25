<template>
  <div class="ctr">
    <Transition name="fade" mode="out-in">
      <questions v-if="questionsAnswered < questions.length" :questions="questions" :questionsAnswered="questionsAnswered" @question-answered="questionAnswered"/>
      <result v-else :results="results" :totalCorrect="totalCorrect" />
    </Transition>
    <button type="button" class="reset-btn" @click.prevent="reset" v-if="questionsAnswered === questions.length">Reiniciar</button>
  </div>
</template>

<script>
import Questions from "./components/Questions.vue";
import Result from "./components/Result.vue";

export default {
  name: "App",
  components: {
    Questions,
    Result
  },
  data() {
    return {
      questionsAnswered: 0,
      totalCorrect: 0,
      questions: [
          {
              q: 'Qual o elemento da tabela períodica representado pela letra K?', 
              answers: [
                  {
                      text: 'Cobre',
                      is_correct: false
                  },
                  {
                      text: 'Sódio',
                      is_correct: false 
                  },
                  {
                      text: 'Potássio',
                      is_correct: true 
                  },
                  {
                      text: 'Cálcio',
                      is_correct: false 
                  }
              ] 
          },
          { 
              q: 'Quem foi o primeiro presidente do Brasil?', 
              answers: [
                  {
                      text: 'Campos Sales',
                      is_correct: false
                  },
                  {
                      text: 'Getúlio Vargas',
                      is_correct: false 
                  },
                  {
                      text: 'Deodoro da Fonseca',
                      is_correct: true 
                  },
                  {
                      text: 'Floriano Peixoto',
                      is_correct: false 
                  }
              ] 
          },
          { 
              q: 'O que é um triângulo escaleno?', 
              answers: [
                  {
                      text: 'Que tem pelo menos dois lados iguis',
                      is_correct: false
                  },
                  {
                      text: 'Que tem todos os lados diferentes',
                      is_correct: true 
                  },
                  {
                      text: 'Que tem todos os lados iguais',
                      is_correct: false 
                  },
                  {
                      text: 'Que tem um ângulo de 90 graus',
                      is_correct: false 
                  }
              ] 
          },
          { 
              q: 'Qual lei que diz que um corpo em repouso tende a permanecer em repouso?', 
              answers: [
                  {
                      text: 'Segunda Lei de Newton',
                      is_correct: false
                  },
                  {
                      text: 'Lei da ação e reação',
                      is_correct: false 
                  },
                  {
                      text: 'Terceira Lei de Newton',
                      is_correct: false 
                  },
                  {
                      text: 'Lei da Inércia',
                      is_correct: true 
                  }
              ] 
          },
          { 
              q: 'Qual foi o grupo terrorista que atacou as torres gêmeas no 11 de setembro?', 
              answers: [
                  {
                      text: 'Hamas',
                      is_correct: false
                  },
                  {
                      text: 'ISIS',
                      is_correct: false 
                  },
                  {
                      text: 'Talibã',
                      is_correct: false 
                  },
                  {
                      text: 'Al Qaeda',
                      is_correct: true 
                  }
              ] 
          }
      ],
      results: [
          {
              min: 0,
              max: 2,
              title: "Tente novamente!",
              desc: "Estude um pouco mais e poderá ser melhor sucedido!"
          },
          {
              min: 5,
              max: 5,
              title: "Uau, você é um gênio!",
              desc: "Definitivamente, estudar valeu à pena para você!"
          }
      ]
    }
  },
  methods: {
    questionAnswered(is_correct) {
      if(is_correct) {
        this.totalCorrect++;
      }

      this.questionsAnswered++;
    },
    reset() {
      this.questionsAnswered = 0;
      this.totalCorrect = 0;
    }
  }
}
</script>

<style>

</style>
