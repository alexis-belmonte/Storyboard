<script lang="ts">
import Palettable from './Palettable.vue';

export default {
    extends: Palettable,
    props: {
        'src': String,
        'palette': String,
        'hoverable': Boolean
    },
    computed: {
        componentStyle() {
            return {
                '--pf-url': `url(${this.src})`
            }
        }
    }
}
</script>

<template>
    <div
        class="container"
        :style="[componentStyle, palettableStyle]"
        :class="{ 'placeholder': !src, 'hoverable': hoverable }">
        <span class="material-symbols-outlined icon">person</span>
    </div>
</template>

<style scoped>
.container {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    width: var(--sb-frame-size);
    height: var(--sb-frame-size);

    border-radius: var(--sb-frame-radius);

    background-color: rgb(var(--pt-color));
    background-image: var(--pf-url);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    box-shadow: 0 0 0 0px var(--sb-transparent-color);

    cursor: default;

    transition: box-shadow var(--sb-normal-transition);
}

.container.hoverable:hover {
    box-shadow: 0 0 0 4px rgb(var(--pt-dark-color));
}

.container > .icon {
    display: none;

    font-size: var(--sb-icon-size);

    color: rgb(var(--pt-dark-color));
}

.container.placeholder > .icon {
    display: block;
}

</style>