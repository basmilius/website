<template>
    <div class="skills">
        <div
            v-for="skill in skills"
            :key="skill.label"
            class="skill"
            :style="{ '--color': skill.color }">
            <Icon
                :name="skill.icon"
                class="skill-icon"/>
            <strong>{{ skill.label }}</strong>
        </div>
    </div>
</template>

<script
    lang="ts"
    setup>
    import { skills } from '~/data/skills';
</script>

<style
    scoped
    lang="scss">
    .skills {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(158px, 1fr));
        grid-auto-rows: 1fr;
        gap: 10px;
    }

    .skill {
        display: flex;
        gap: 11px;
        align-items: flex-start;
        padding: 14px;
        border: 1px solid var(--line);
        border-radius: 10px;
        background: var(--surface);
        box-shadow: var(--shadow);

        strong {
            font-size: 16px;
            font-weight: 600;
            color: var(--text);
        }
    }

    .skill-icon {
        flex: none;
        margin-top: 2px;
        color: hsl(var(--color));
        font-size: 18px;
    }
</style>
