<template>
    <div class="pop-over">
        <a @click="toggleOpen" class="pop-button" href="javascript: void(0);">
            11111111111
        </a>
        <ul v-clickoutside="close" v-show="open" class="pop-list">
            <li>选项1</li>
            <li>选项2</li>
            <li>选项3</li>
            <li>选项4</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PopOver',
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggleOpen: function() {
            this.open = !this.open;
        },
        close: function(e) {
            if(this.$el.contains(e.target)) return;
            this.open = false;
        }
    },
    directives: {
        clickoutside: {
            bind: function (el, binding, vnode) {
                const documentHandler = function (e) {
                    if (!vnode.context || el.contains(e.target)) return;
                    binding.value(e);
                };

                setTimeout(() => {
                    document.addEventListener('click', documentHandler);
                }, 0);
            }
        }
    }
}
</script>