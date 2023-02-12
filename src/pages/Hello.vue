<script lang="ts">
import CenteredContainer from '@/components/app/ui/CenteredContainer.vue';
import FlowContainer from '@/components/app/ui/FlowContainer.vue';

import Panel from '@/components/app/ui/Panel.vue';

import Heading from '@/components/app/ui/Heading.vue';
import Content from '@/components/app/ui/Content.vue';

import InputField from '@/components/app/ui/InputField.vue';
import Button from '@/components/app/ui/Button.vue';

import type { StoryboardSession } from '@/logic/api';

export default {
    components: {
        CenteredContainer,
        FlowContainer,

        Panel,

        Heading,
        Content,

        InputField,
        Button
    },
    data() {
        return {
            showSignUpDialog: false,
            fields: {
                tag: '',
                password: ''
            }
        }
    },
    methods: {
        toggleSignUpDialog() {
            this.showSignUpDialog = !this.showSignUpDialog;
        },
        logIn() {
            this.$app.api.user.logIn(this.fields.tag, this.fields.password)
                .then((session: StoryboardSession) => {
                    this.$app.session = session;
                    this.$router.push('/');
                })
                .catch((error) => {
                    if (error instanceof Error) {
                        /* TODO: Improve error dialog */
                        alert(`Failed to log-in: ${error.message}`);
                    }
                });
        }
    }
};
</script>

<template>
    <CenteredContainer class="parent">
        <Panel v-if="!showSignUpDialog" class="panel" palette="primary">
            <FlowContainer class="content" vertical>
                <Heading>Hello, storyboard!</Heading>
                <Content class="description">
                    <p>
                        Whether you have a <u>few minutes</u> to see what people
                        are talking about or that you <u>need</u> to talk about
                        something, this is the place <b>for people</b>.
                    </p>
                    
                    <p>Type in your tag and password to proceed.</p>
                </Content>

                <FlowContainer class="fields">
                    <InputField
                        class="field"
                        hint="Tag"
                        v-model="fields.tag"
                        monospace  />
                    <InputField
                        class="field"
                        hint="Password"
                        v-model="fields.password"
                        password />
                </FlowContainer>

                <FlowContainer class="buttons" align="center">
                    <Button
                        icon="login"
                        filled
                        @click="logIn">
                        Log-in
                    </Button>
                    <Button
                        icon="person_add"
                        @click="toggleSignUpDialog">
                        Sign-up
                    </Button>
                </FlowContainer>
            </FlowContainer>
        </Panel>
        <Panel v-else class="panel" palette="secondary">
            <FlowContainer class="content" vertical>
                <Heading>A new fella around?</Heading>
                <Content class="description">
                    <p>
                        Thanks for being interested, but this part isn't
                        unfortunately <u>implemented</u> on our <u>frontend</u>
                        side. (yet 😪)
                    </p>
                </Content>

                <FlowContainer class="buttons" align="center">
                    <Button icon="arrow_back"
                        filled
                        @click="toggleSignUpDialog">
                        Back
                    </Button>
                </FlowContainer>
            </FlowContainer>
        </Panel>
    </CenteredContainer>
</template>

<style scoped>
.parent {
    background-image: url(https://source.unsplash.com/random/?place,location);
    background-position: center;
    background-size: cover;
}

.panel {
    background-color: var(--sb-light-color);
    backdrop-filter: blur(20pt) contrast(60%);
}

.content {
    gap: var(--sb-smaller-spacing);
}

.content > .description {
    max-width: 300pt;
}

.content > .fields {
    margin: var(--sb-smaller-spacing) 0;

    gap: var(--sb-smaller-spacing);

    align-items: flex-start;
    flex-basis: content;
}

.fields > .field {
    width: 0;

    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}

.content > .buttons {
    justify-content: center;

    gap: var(--sb-smaller-spacing);
}
</style>
