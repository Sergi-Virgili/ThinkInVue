<template>
    <div class="row justify-content-center">
        <div class="col-md-8">

            <form-component
            @new="addThought"
            ></form-component>
            <think-component
            v-for = "(thought, index) in thoughts"
            :key = "thought.id"
            :thought = "thought"
            @delete = "deleteThought(index)"
            @update = "updateThought(index, thought)"
            >
            </think-component>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                thoughts: []
            }
        },
        mounted() {
            axios.get('/thoughts').then((response) => {
                this.thoughts = response.data;
            })
        },
        methods: {
            addThought(thought) {

                this.thoughts.push(thought)

            },
            deleteThought(index) {

                this.thoughts.splice(index,1)
            },

            updateThought(index, thought){

                this.thoughts[index] = thought
            }
        }
    }
</script>
