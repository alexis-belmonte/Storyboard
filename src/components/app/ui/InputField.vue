<script lang="ts">
import Palettable from './Palettable.vue';

export default {
    extends: Palettable,
    props: {
        password: Boolean,
        monospace: Boolean,
        hint: String,
        modelValue: {
            type: String,
            required: true,
            default: ''
        }
    },
    setup(props, context) {
        const updateValue = (event: any) => {
            context.emit('update:modelValue', event.target.value);
        }

        return { updateValue };
    },
    computed: {
        componentStyle() {
            return {
                '--if-font-face':
                    `var(--sb-${this.monospace ? 'monospace' : 'normal'}-font)`
            }
        }
    }
}
</script>

<template>
    <input
        :type="password ? 'password' : 'text'"
        :style="[palettableStyle, componentStyle]"
        :placeholder="hint"
        :value="modelValue"
        @input="updateValue">
</template>

<style scoped>
input[type='text'],
input[type='password'] {
    padding: var(--sb-smaller-spacing);

    font-family: var(--if-font-face);
    font-size: var(--sb-small-font-size);

    color: rgb(var(--sb-dark-color));

    background-color: var(--sb-transparent-color);

    outline: none;

    border-style: solid;
    border-radius: var(--sb-primary-radius);
    border-color: rgb(var(--pt-color));

    box-shadow: 0 0 0 0pt var(--sb-transparent-color);

    transition:
        border-color var(--sb-normal-transition),
        box-shadow var(--sb-normal-transition);
}

input[type='text']::placeholder {
    font-family: var(--sb-normal-font);
    font-size: var(--sb-small-font-size);
}

input[type='text']:hover,
input[type='password']:hover {
    outline: none;

    border-color: rgb(var(--pt-dark-color));
}

input[type='text']:active, input[type='text']:focus,
input[type='password']:active, input[type='password']:focus {
    border-color: var(--sb-transparent-color);

    box-shadow: 0 0 0 3pt rgb(var(--pt-dark-color));
}
</style>