<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">
                {{ name }}
            </h5>
            <p class="card-text">
                <em>{{ type }}</em>
            </p>

    </div>
</div>
</template>

<script>
    export default {
        name: "Single",
        props: ['name', 'type', 'image']
    }
</script>
