<template>
    <form @submit.prevent="search"
    class="form-inline d-flex justify-content-center mb-2">
        <Input type="text" placeholder="cerca un pokemon" classList="form-control"
        :value="searchText" @input="searchText=$event" />
        <!-- <input type="text" placeholder="cerca un pokemon"
        class="form-control" v-model="searchText"> -->

        <Input type="submit" value="Cerca" classList="btn btn-primary ml-2" />
        <!-- <input type="submit" value="Cerca" class="btn btn-primary ml-2"> -->

        <Input type="reset" value="Cancella filtro" classList="btn btn-secondary ml-2" @clickReset="reset" />
        <!-- <input type="reset" value="Cancella filtro" class="btn btn-secondary ml-2" @click="reset"> -->
    </form>
</template>
<script>
    import Input from "./Input.vue";
    export default {
        name: 'Form',
        components: {
            Input
        },
        data() {
            return {
                searchText: ''
            }
        },
        methods: {
            search() {
                console.log(this.searchText);
                this.$emit('newSearch', this.searchText);
            },
            reset() {
                console.log('cliccato su reset');
                this.searchText = '';
                this.$emit('resetSearch');
            }
        }
    }
</script>
