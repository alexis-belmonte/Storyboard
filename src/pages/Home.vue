<script lang="ts">
import Menu from '@/components/app/Menu.vue'

import PageContainer from '@/components/app/ui/PageContainer.vue'
import FlowContainer from '@/components/app/ui/FlowContainer.vue'
import Post from '@/components/app/Post.vue'

export default {
    components: {
        Menu,

        PageContainer,
        FlowContainer,
        
        Post
    }
}
</script>

<template>
    <Menu />

    <PageContainer>
        <FlowContainer class="container">
            <Post tag="alexbelm48" palette="primary">
                J'ai envie de dormir, mais je dois continuer de travailler afin de pouvoir
                rester dans les temps. La conséquence de tout ce cambouis ? Une jolie interface
                graphique prête à être backendisé !
            </Post>
            <Post tag="edgarchan" palette="secondary">
                Un deux trois, nous irons aux bois !
            </Post>
            <Post tag="zobizoba" palette="tertiary">
                J'aime les chats, les kangourous, les chiens, les lynx, les tigres, les loups, les
                gens (sauf quand il y a trop de monde).
            </Post>
            <Post tag="aubergine" palette="quartenary">
                Et les aubergines !
            </Post>
            <Post tag="decadu" palette="tertiary">
                Et les gâteaux !
            </Post>
            <Post tag="yarit0" palette="secondary">
                Les seules douches que je prend, c'est quand je fais des MLG !
            </Post>
            <Post tag="boulette" palette="primary">
                :3
            </Post>
        </FlowContainer>
    </PageContainer>
</template>

<style scoped>
.container > * {
    aspect-ratio: 1;
}
</style>