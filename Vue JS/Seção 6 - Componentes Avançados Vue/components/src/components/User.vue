<template>
   <button type="button" @click="onClickAge">Update Age Event</button>
   <button type="button" @click="ageChangeFn(3)">Update Age CB</button>
   <p>The user is {{ age }} years old</p>
   <p>{{ ageDoubled }}</p>
</template>

<script>
export default{
    name: 'User',
    props: {
        age: {
            type: Number,
            // required: true // Se for declarado um valor padrão, não é necessário deixar como required.
            // default: 20
            validator(value) {
                return value < 130
            }
        },
        ageChangeFn: Function
    },
    emits: ['age-change'],
    computed: {
        ageDoubled() {
            return this.age * 2
        }
    },
    methods: {
        onClickAge() {
            this.$emit('age-change', 3)
        }
    }

}
</script>

<style lang="scss" scoped>

</style>