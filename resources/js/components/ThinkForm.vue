<template>
    <div class="card">
        <div class="card-header">Your Thoughts</div>

        <div class="card-body">

            <form action="" v-on:submit.prevent="newThought()">
                    <div class="form-group">
                        <label for="thought">I'm Thinking About:</label>

                        <input  type="text"
                                class="form-control"
                                name="thought"
                                v-model="description">


                    </div>
                    <div class="input-group">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile04">
                            <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                        </div>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">
                            Send
                        </button>
                        <button  class="btn btn-success">
                            Camera
                        </button>
                    </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                description:''
            }
        },
        mounted() {
            console.log('thinkform mounted')
        },
        methods: {

            newThought() {
                const params = {
                    description : this.description
                }
                axios.post('/thoughts', params).then (
                    (response) => {
                        console.log(response)
                        const thought = response.data
                        this.$emit('new', thought);
                    }

                )


                this.description = ''
            }
        }
    }
</script>
