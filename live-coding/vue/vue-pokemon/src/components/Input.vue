<template>
    <input v-if="type === 'reset'" :type="type"
    :class="classList" :value="value" @click="$emit('clickReset')">
    <input v-else :type="type" :placeholder="placeholder"
    :class="classList" :value="value"
    @input="$emit('input', $event.target.value)">
</template>
<script>
    export default {
        name: "Input",
        props: ['type', 'placeholder', 'classList', 'value']
    }
</script>
