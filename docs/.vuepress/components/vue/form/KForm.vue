<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        provide() {
            return {
                form: this
            }
        },
        componentName: 'KForm',
        data() {
            return {
                fields: []
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: Object
        },
        created() {
            this.$on('kkb.form.addField', item => {
                this.fields.push(item)
            });
        },
        methods: {
            validate(cb) {
                // 遍历所有FormItem,执行validate方法
                const tasks = this.fields
                    .map(item => item.validate())
                Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>