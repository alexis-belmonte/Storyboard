<script lang="ts">
export default {
    props: {
        palette: {
            type: String,
            default: "primary"
        },
        icon: {
            type: String,
            required: false
        },
        filled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        cssVars() {
            return {
                '--bt-palette-color': `var(--sb-${this.palette}-color)`,
                '--bt-palette-dark-color': `var(--sb-${this.palette}-dark-color)`
            }
        }
    }
}
</script>

<template>
    <button :style="cssVars" :class="{ 'filled': filled }">
        <span v-if="icon" class="material-symbols-outlined">{{ icon }}</span>
        <div v-if="$slots.default"><slot /></div>
    </button>
</template>

<style scoped>
/* Default 'non-filled' style */

button {
    display: flex;

    align-items: center;
    justify-content: center;

    column-gap: 8pt;

    margin: 0;
    padding: 7pt;
    height: 35pt;

    background-color: var(--sb-transparent-color);

    border-style: solid;
    border-width: 2pt;
    border-color: var(--sb-transparent-color);
    border-radius: 28pt;

    transition:
        border-color var(--sb-normal-transition),
        box-shadow var(--sb-normal-transition),
        background-color var(--sb-normal-transition);

    cursor: pointer;
}

button > span {
    color: var(--bt-palette-color);

    transition: color var(--sb-normal-transition);
}

button > div {
    font-family: 'Source Sans Pro';
    font-size: var(--sb-small-font-size);

    color: var(--bt-palette-color);

    transition: color var(--sb-normal-transition);
}

button:hover {
    border-color: var(--bt-palette-color);
}

button:active {
    border-color: var(--sb-transparent-color);

    box-shadow: 0 0 0 4px var(--bt-palette-dark-color);
}

button:active > span, button:active > div {
    color: var(--bt-palette-dark-color);
}

/* 'Filled'-style starts here */

button.filled {
    border-color: var(--sb-transparent-color);

    background-color: var(--bt-palette-color);

    box-shadow: 0 0 0 0px var(--sb-transparent-color);
}

button.filled > span, button.filled > div {
    color: var(--sb-light-color);
}

button.filled:hover {
    box-shadow: 0 0 0 4px var(--bt-palette-dark-color);
}

button.filled:active {
    background-color: var(--bt-palette-dark-color);

    box-shadow: 0 0 0 0px var(--sb-transparent-color);
}
</style>