<script lang="ts">
import Palettable from './ui/Palettable.vue';

import GridContainer from './ui/GridContainer.vue';

export default {
    extends: Palettable,

    components: {
        Palettable,

        GridContainer
    }
};
</script>

<template>
    <GridContainer :style="palettableStyle" class="container">
        <slot />
    </GridContainer>
</template>

<style scoped>
.container > :deep(*) {
    aspect-ratio: 1;
}
</style>
