<script lang="ts">
import BrandLogo from '@/assets/brand/BrandLogo.vue';

import Button from '@/components/app/ui/Button.vue';
import ProfileFace from '@/components/app/ui/ProfileFace.vue';

export default {
    components: {
        BrandLogo,

        Button,
        ProfileFace
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
    <div class="margin" />
    <div class="parent" ref="menu">
        <div class="container">
            <header>
                <div class="left">
                    <Button icon="add" palette="primary" />
                </div>
                <div class="center">
                    <router-link to="/" class="brand-logo-link">
                        <BrandLogo />
                    </router-link>
                </div>
                <div class="right">
                    <Button
                        icon="logout"
                        palette="quartenary"
                        @click="logOut"
                    />
                    <ProfileFace
                        palette="primary"
                        src="https://thispersondoesnotexist.com/image"
                        hoverable />
                </div>
            </header>
        </div>
    </div>
</template>

<style scoped>
.margin {
    /* FIXME: Do a better calculation of the amount of space taken by the menu bar */
    margin-top: calc(var(--sb-spacing) * 4.25);
}

.parent > .container {
    position: fixed;

    top: 0;
    width: 100%;
}

header {
    display: flex;

    width: 100%;

    padding: var(--sb-spacing) calc(var(--sb-spacing) * 1.5);

    background: linear-gradient(180deg,
        var(--sb-light-color) 45%,
        var(--sb-transparent-color) 100%
    );
}

header > div {
    display: flex;

    align-items: center;

    flex-direction: row;
    flex-grow: 1;
    flex-shrink: 1;

    column-gap: 8pt;

    width: 100%;
}

header > div.left {
    justify-content: flex-start;
}

header > div.center {
    justify-content: center;
}

header > div.right {
    justify-content: flex-end;
}

header > div .brand-logo-link {
    font-size: var(--sb-logo-font-size);
    text-decoration: none;
}
</style>
