<script lang="ts">
import Palettable from './Palettable.vue';

export default {
    extends: Palettable,
    props: {
        icon: {
            type: String,
            required: false
        },
        filled: {
            type: Boolean
        }
    }
};
</script>

<template>
    <button :style="palettableStyle" class="button" :class="{ 'filled': filled }">
        <span v-if="icon" class="material-symbols-outlined icon">{{ icon }}</span>
        <div v-if="$slots.default" class="label"><slot /></div>
    </button>
</template>

<style scoped>
/* Default 'non-filled' style */

.button {
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

.button > .icon {
    font-size: var(--sb-icon-size);

    color: rgb(var(--pt-color));

    transition: color var(--sb-normal-transition);
}

.button > .label {
    font-family: var(--sb-normal-font);
    font-size: var(--sb-small-font-size);

    color: rgb(var(--pt-color));

    transition: color var(--sb-normal-transition);
}

.button:hover {
    border-color: rgb(var(--pt-color));
}

.button:active {
    border-color: var(--sb-transparent-color);

    box-shadow: 0 0 0 4px rgb(var(--pt-dark-color));
}

.button:active > .icon, .button:active > .label {
    color: rgb(var(--pt-dark-color));
}

/* 'Filled'-style starts here */

.button.filled {
    border-color: var(--sb-transparent-color);

    background-color: rgb(var(--pt-color));

    box-shadow: 0 0 0 0px var(--sb-transparent-color);
}

.button.filled > .icon, .button.filled > .label {
    color: var(--sb-light-color);
}

.button.filled:hover {
    box-shadow: 0 0 0 4px rgb(var(--pt-dark-color));
}

.button.filled:active {
    background-color: rgb(var(--pt-dark-color));

    box-shadow: 0 0 0 0px var(--sb-transparent-color);
}
</style>