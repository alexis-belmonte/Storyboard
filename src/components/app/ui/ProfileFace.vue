<script lang="ts">
export default {
    props: {
        src: {
            type: String,
            required: false
        },
        palette: {
            type: String,
            default: 'primary'
        }
    },
    computed: {
        cssVars() {
            return {
                '--pf-url': `url(${this.src})`,
                '--pf-palette-color': `var(--sb-${this.palette}-color)`,
                '--pf-palette-dark-color': `var(--sb-${this.palette}-dark-color)`
            }
        }
    }
}
</script>

<template>
    <div class="container" :style="cssVars" :class="{ 'placeholder': !src }">
        <span class="material-symbols-outlined">person</span>
    </div>
</template>

<style scoped>
div {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    width: var(--sb-frame-size);
    height: var(--sb-frame-size);

    border-radius: var(--sb-frame-radius);

    background-color: var(--pf-palette-dark-color);
    background-image: var(--pf-url);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    box-shadow: 0 0 0 0px var(--sb-transparent-color);

    cursor: default;

    transition: box-shadow var(--sb-normal-transition);
}

div:hover {
    box-shadow: 0 0 0 4px var(--pf-palette-color);
}

div > span {
    display: none;

    font-size: 24pt;

    color: var(--pf-palette-color);
}

div.placeholder > span {
    display: block;
}

</style>