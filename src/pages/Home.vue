<script lang="ts">
import Menu from '@/components/app/Menu.vue';

import PageContainer from '@/components/app/ui/PageContainer.vue';

import PostContainer from '@/components/app/PostContainer.vue';
import Post from '@/components/app/Post.vue';

import { ø } from '@/main';

export default {
    components: {
        Menu,

        PageContainer,

        PostContainer,
        Post
    },
    mounted() {
        if (!ø.session)
            this.$router.push('/hello');
    }
};
</script>

<template>
    <Menu />

    <PageContainer>
        <PostContainer>
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
            <Post tag="grosbgdu34" palette="primary">
                je vends mes pieds et bien plus. 10$ la photo 30$ le pack de 10 
                https://www.paypal.me/allanleherpeux
            </Post>
            
        </PostContainer>
    </PageContainer>
</template>

<style scoped>

</style>