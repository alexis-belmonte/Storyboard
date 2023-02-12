<script lang="ts">
import FlowContainer from '@/components/app/ui/FlowContainer.vue';

import Button from '@/components/app/ui/Button.vue';
import ProfileFace from '@/components/app/ui/ProfileFace.vue';

import BrandLogo from '@/assets/brand/BrandLogo.vue';

export default {
    components: {
        FlowContainer,

        Button,
        ProfileFace,

        BrandLogo,
    },
    methods: {
        logOut() {
            this.$app.api.user.logOut(this.$app.session!)
                .then(() => {
                    this.$app.session = undefined;
                    this.$router.push('/hello');
                })
                .catch((error) => {
                    if (error instanceof Error)
                        alert(`Unable to log-out: ${error.message}`);
                });
        }
    }
};
</script>

<template>
    <div class="menu-margin" />
    <div class="menu-parent">
        <FlowContainer class="menu-container" align="center">
            <FlowContainer justify="left" expand>
                <Button icon="add" palette="primary" />
            </FlowContainer>
            <FlowContainer justify="center" expand>
                <router-link to="/" class="brand-logo">
                    <BrandLogo />
                </router-link>
            </FlowContainer>
            <FlowContainer justify="right" expand>
                <Button
                    icon="logout"
                    palette="quartenary"
                    @click="logOut"
                />
                <ProfileFace
                    palette="primary"
                    src="https://thispersondoesnotexist.com/image"
                    hoverable />
            </FlowContainer>
        </FlowContainer>
    </div>
</template>

<style scoped>
.menu-margin {
    /* FIXME: Do a better calculation of the amount of space taken by the menu bar */
    margin-top: calc(var(--sb-spacing) * 4.25);
}

.menu-parent {
    position: fixed;

    top: 0;
    width: 100%;
}

.menu-container {
    padding: var(--sb-spacing) calc(var(--sb-spacing) * 1.5);

    background: linear-gradient(180deg,
        var(--sb-light-color) 45%,
        var(--sb-transparent-color) 100%
    );

    gap: 8pt;
}

.brand-logo {
    font-size: var(--sb-logo-font-size);
    text-decoration: none;
}
</style>
