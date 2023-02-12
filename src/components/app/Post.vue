<script lang="ts">
import Palettable from './ui/Palettable.vue';

import Panel from './ui/Panel.vue';
import Button from './ui/Button.vue';

import ProfileCard from './ui/ProfileCard.vue';

import Content from './ui/Content.vue';

export default {
    extends: Palettable,
    props: {
        tag: {
            type: String,
            required: true
        }
    },
    components: {
        Panel,
        Button,

        ProfileCard,

        Content
    }
};
</script>

<template>
    <Panel class="parent" :palette="palette">
        <div class="container">
            <div class="header">
                <ProfileCard
                    class="profile"
                    name="Username"
                    :tag="tag" />
                <div class="interactions">
                    <Button icon="person_add" />
                    <Button icon="favorite" />
                </div>
            </div>

            <Content>
                <slot />
            </Content>
        </div>
    </Panel>
</template>

<style scoped>
.parent > .container {
    display: flex;

    width: 100%;

    flex-flow: column;

    row-gap: var(--sb-spacing);
}

.container > .header {
    display: flex;

    flex-flow: row;
}

.container > .header > .profile {
    flex-grow: 1;
}

.container > .header > .interactions {
    display: flex;

    justify-self: right;

    column-gap: var(--sb-smaller-spacing);
}
</style>