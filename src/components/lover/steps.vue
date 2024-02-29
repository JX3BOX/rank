<template>
    <div class="m-process-steps" ref="steps">
        <div
            class="u-step"
            v-for="(item, i) in steps"
            :key="i"
            :style="{ margin: `${~~i * 57}px  0`, gap: `${~~i * 114 + 57}px` }"
        >
            <template v-if="item.key != 0">
                <div
                    class="u-group"
                    v-for="(group, g) in ~~item.key"
                    :key="g"
                    :style="{ height: `calc(100%/${~~item.key} - 60px)` }"
                >
                    <battle />
                    <battle />
                </div>
            </template>
            <battle v-else />
        </div>
    </div>
</template>

<script>
import battle from "@/components/lover/battle.vue";
export default {
    name: "steps",
    props: {
        steps: {
            type: Array,
            default: () => [],
        },
    },
    components: { battle },
    data: function () {
        return {
            url: "",
        };
    },
    computed: {},
    methods: {},
};
</script>
<style lang="less">
.m-process-steps {
    .flex;
    justify-content: center;
    gap: 80px;
    .u-step {
        .flex;
        flex-direction: column;
        justify-content: center;
        gap: 60px;
        &:first-child .m-lover-battle::before {
            content: none;
        }
    }
    .u-group {
        .pr;
        .flex;
        min-height: 300px;
        flex-direction: column;
        justify-content: space-between;
        &::after {
            content: "";
            .pa;
            .rt(-20px, 60px);
            .size(4px ,calc(100% - 100px));
            background-color: #fff;
            transform: translateX(-1px);
        }
    }
}
</style>
