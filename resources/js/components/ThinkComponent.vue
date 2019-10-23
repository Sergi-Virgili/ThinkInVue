<template>
     <div class="card">
        <div class="card-header">Published at {{ thought.created_at }}</div>

        <div class="card-body">
            <p v-if="!editMode" v-on:click="OnClickEdit()">
                {{ thought.description }}
            </p>
            <input type="text" v-if="editMode" v-model="thought.description" class='form-control'>
        </div>
        <div class="card-footer">
            <button class="btn btn-success"
            v-if="editMode"
            v-on:click="OnClickUpdate()">Save</button>

            <button class="btn btn-default"
            v-if="!editMode"
            v-on:click="OnClickEdit()">Edit</button>

            <button class="btn btn-danger"
                    v-on:click="OnClickDelete()"
            >Delete</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['thought' ],
        data() {
            return {
                editMode: false,

            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods : {
            OnClickDelete() {
                //console.log(`${this.thought.id}`)
                axios.delete(`/thoughts/${this.thought.id}`).then( () => this.$emit('delete'))

            },

            OnClickEdit() {
               this.editMode = true
            },

            OnClickUpdate(thought) {
                 let params = {
                        description : this.thought.description
                    }


                axios.put(`/thoughts/${this.thought.id}`, params).then( (response) => {

                    this.editMode = false
                    const thought = response.data
                    this.$emit('update', thought)
                })

            }
        }

    }
</script>
