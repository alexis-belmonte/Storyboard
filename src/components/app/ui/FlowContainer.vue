<script lang="ts">
export default {
    props: {
        horizontal: Boolean,
        vertical: Boolean,

        align: String,
        justify: String,
        
        expand: Boolean
    },
    computed: {
        componentStyle() {
            let flowDirection = 'row';

            if (this.horizontal != this.vertical && this.vertical)
                flowDirection = 'column';

            return {
                '--fc-flow': flowDirection,
                '--fc-align': this.align,
                '--fc-justify': this.justify,

                ...(this.expand ? {
                    '--fc-item-grow': '1',
                    '--fc-item-shrink': '1',
                    '--fc-item-basis': '0'
                } : {})
            };
        }
    }
}
</script>

<template>
    <div class="flow-container" :style="componentStyle">
        <slot />
    </div>
</template>

<style scoped>
.flow-container {
    display: flex;

    flex-flow: var(--fc-flow) wrap;
}

.flow-container::v-deep {
    flex-grow: var(--fc-item-grow);
    flex-shrink: var(--fc-item-shrink);
    flex-basis: var(--fc-item-basis);

    align-content: var(--fc-align);
    justify-content: var(--fc-justify);
}
</style>
