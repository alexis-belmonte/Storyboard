<script lang="ts">
import Palettable from './Palettable.vue';
import ProfileFace from '@/components/app/ui/ProfileFace.vue';

export default {
    extends: Palettable,
    props: {
        faceSrc: String,
        name: {
            type: String,
            required: true
        },
        tag: String
    },
    components: {
        ProfileFace
    }
};
</script>

<template>
    <div class="container">
        <ProfileFace :src="faceSrc" :palette="palette" />
        <div class="descriptor">
            <span class="label">{{ name }}</span>
            <span v-if="tag" class="tag">@{{ tag }}</span>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: inline-flex;

    flex-flow: row nowrap;
    align-items: center;

    column-gap: 12pt;
}

.container .descriptor {
    display: inline-flex;

    flex-flow: column nowrap;
    justify-items: left;
}

.label {
    font-family: var(--sb-normal-font);
    font-weight: var(--sb-bold-font-weight);

    color: rgb(var(--pt-dark-color));
}

.tag {
    font-family: var(--sb-monospace-font);
    font-weight: var(--sb-normal-font-weight);
    font-size: var(--sb-smaller-font-size);
}
</style>