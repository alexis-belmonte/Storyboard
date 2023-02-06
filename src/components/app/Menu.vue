<script setup lang="ts">
import BrandLogo from '@/assets/brand/BrandLogo.vue';

import Button from '@/components/app/ui/Button.vue'
import ProfileFace from '@/components/app/ui/ProfileFace.vue'
</script>

<template>
    <header>
        <div class="left">
            <Button icon="add" palette="primary" />
            <Button icon="refresh" palette="secondary" filled></Button>
        </div>
        <div class="center">
            <router-link to="/" class="brand-logo-link">
                <BrandLogo />
            </router-link>
        </div>
        <div class="right">
            <Button icon="logout" palette="quartenary" />
            <ProfileFace palette="primary" src="https://thispersondoesnotexist.com/image" />
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;

    margin: 16pt;
    padding: 0pt 8pt;
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