<template>
    <div class="card">
        <div class="card-header">Your Thoughts</div>

        <div class="card-body">

            <form action="">
                    <div class="form-grou">
                        <label for="thought">I'm Thinking About:</label>
                        <input type="text" class="form-control" name="thought" id="">
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Send
                    </button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('thinkform mounted.')
        }
    }
</script>
