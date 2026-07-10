<template>
    <component
        :is="tag"
        class="btn"
        :class="[variant, {small}]"
        v-bind="bindings">
        <Icon
            v-if="icon && iconPosition === 'leading'"
            :name="icon"
            class="btn-icon lead"/>

        <span v-if="label">{{ label }}</span>
        <slot/>

        <Icon
            v-if="icon && iconPosition === 'trailing'"
            :name="icon"
            class="btn-icon trail"/>
    </component>
</template>

<script
    lang="ts"
    setup>
    const props = withDefaults(defineProps<{
        label?: string;
        icon?: string;
        iconPosition?: 'leading' | 'trailing';
        to?: string;
        href?: string;
        download?: string;
        variant?: 'accent' | 'outline' | 'text';
        small?: boolean;
    }>(), {
        iconPosition: 'leading',
        variant: 'outline'
    });

    const tag = computed(() => {
        if (props.to) {
            return resolveComponent('NuxtLink');
        }

        return props.href ? 'a' : 'button';
    });

    const bindings = computed(() => {
        if (props.to) {
            return {to: props.to};
        }

        if (props.href) {
            return {href: props.href, target: '_blank', rel: 'noopener', download: props.download};
        }

        return {type: 'button'};
    });
</script>

<style
    scoped
    lang="scss">
    .btn {
        display: inline-flex;
        gap: 8px;
        align-items: center;
        justify-content: center;
        padding: 12px 20px;
        border: 1px solid transparent;
        border-radius: 10px;
        font-family: var(--font-mono);
        font-size: 16px;
        font-weight: 500;
        line-height: 1;
        cursor: pointer;
        transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;

        &.small {
            padding: 9px 15px;
            font-size: 16px;
        }
    }

    .accent {
        background: var(--accent);
        color: var(--on-accent);

        &:hover {
            filter: brightness(1.05);
        }
    }

    .outline {
        border-color: var(--line2);
        color: var(--text);

        &:hover {
            border-color: var(--accent);
            color: var(--accent);
        }
    }

    .text {
        padding: 0;
        border: 0;
        color: var(--muted);
        font-weight: 400;

        &:hover {
            color: var(--text);
        }
    }

    .btn-icon {
        font-size: 1em;
        transition: transform 0.15s ease;
    }

    .btn:hover .trail {
        transform: translateX(2px);
    }
</style>
