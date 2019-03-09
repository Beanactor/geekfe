<template>
    <div class="pop-over">
        444
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
    name: 'pulldownSelect',
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
<style scoped>
.pop-over {
    position: relative;
    width: 100%;
    height: 100%;
}
.pop-button {
    position: relative;
    width: 100%;
    height: 100%;
    text-decoration:none;
    color: inherit;
}
.pop-list {
    position: absolute;
    left: 0;
    top: 0;
}
.pop-list li {
    width: 100%;
    height: 100%;
    padding: 8px 3px;
    list-style:none;
}
</style>