<template>
    <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">
                {{ name }}
            </h5>
            <p>
                {{ text }}
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['name', 'text']
    }
</script>
