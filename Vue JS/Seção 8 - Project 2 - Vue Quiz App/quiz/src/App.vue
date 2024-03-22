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
              q: 'What is 2 + 2?', 
              answers: [
                  {
                      text: '4',
                      is_correct: true
                  },
                  {
                      text: '3',
                      is_correct: false 
                  },
                  {
                      text: 'Fish',
                      is_correct: false 
                  },
                  {
                      text: '5',
                      is_correct: false 
                  }
              ] 
          },
          { 
              q: 'How many letters are in the word "Banana"?', 
              answers: [
                  {
                      text: '5',
                      is_correct: false
                  },
                  {
                      text: '7',
                      is_correct: false 
                  },
                  {
                      text: '6',
                      is_correct: true 
                  },
                  {
                      text: '12',
                      is_correct: false 
                  }
              ] 
          },
          { 
              q: 'Find the missing letter: C_ke', 
              answers: [
                  {
                      text: 'e',
                      is_correct: false
                  },
                  {
                      text: 'a',
                      is_correct: true 
                  },
                  {
                      text: 'i',
                      is_correct: false 
                  }
              ] 
          },
      ],
      results: [
          {
              min: 0,
              max: 2,
              title: "Tente novamente!",
              desc: "Estude um pouco mais e poderá ser melhor sucedido!"
          },
          {
              min: 3,
              max: 3,
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
