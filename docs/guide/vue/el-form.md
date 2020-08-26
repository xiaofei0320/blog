::: slot header
### 实现elementUi中的el-form以及校验功能
:::

::: slot code-index
```vue
<template>
    <div>
        <KForm :model="model" :rules="rules" ref="loginForm">
            <KFormItem label="用户名" prop="username">
                <KInput v-model="model.username" placeholder="请输入用户名"></KInput>
            </KFormItem>
            <KFormItem label="密码" prop="password">
                <KInput v-model="model.password" placeholder="请输入密码"></KInput>
            </KFormItem>
            <KFormItem>
                <button @click="onClick">登录</button>
            </KFormItem>
        </KForm>
    </div>
</template>

<script>
    import KInput from '@/components/form/KInput.vue'
    import KFormItem from '@/components/form/KFormItem.vue'
    import KForm from '@/components/form/KForm.vue'
    import Notice from '@/components/Notice.vue'
    export default {
        components: {
            KInput,
            KFormItem,
            KForm
        },
        data() {
            return {
                rules: {
                    username: [{ required: true, message: "请输⼊⽤户名" }],
                    password: [{ required: true, message: "请输⼊密码" }]
                },
                model: {
                    username: '',
                    password: ''
                }
            };
        },
        methods: {
            onClick() {
                this.$refs.loginForm.validate(isValid => {
                    if(isValid) {
                        this.$create(Notice, {  // $create是在main.js中引入注入到Vue.prototype.$create中
                           title: '校验成功',
                       }).show()
                    } else {
                       this.$create(Notice, {
                           title: '校验失败',
                           message: '校验错误请重试'
                       }).show()
                    }
                })
            }
        },
    }
</script>
```
:::

::: slot title-kform
## Form组件实现
:::

::: slot code-kform
```vue
<template>
    <div>
        <slot></slot> // slot中传入KFormItem
    </div>
</template>

<script>
    export default {
        provide() { // 向后代组件中传入该组件的信息
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
```
:::

::: slot title-kformItem
## FormItem组件实现
:::


::: slot code-kformItem
```vue
<template>
    <div style="margin: 10px">
        <label v-if="label" style="margin-right: 10px;">{{ label }}</label>
        <slot></slot> // 传入kInput组件
        <p class="error" v-if="error">{{ error }}</p> // 校验错误时显示错误信息
    </div>
</template>

<script>
    import Schema from 'async-validator' // 校验库
    import emitter from './emitter'
    export default {
        name: 'KFormItem',
        componentName: 'KFormItem',
        mixins: [emitter],
        inject: ['form'], // KForm组件中传过来的信息
        data() {
            return {
                error: ''
            }
        },
        props: {
            label: {
                type: String,
                default: ''
            },
            prop: String
        },
        mounted() {
            this.$on('validate', () => {
                this.validate()
            });
            if(this.prop) {
                this.dispatch('KForm', 'kkb.form.addField', [this])
            }
        },
        methods: {
            validate() {
                // 获取校验规则和值
                const rules = this.form.rules[this.prop]
                const value = this.form.model[this.prop]

                // 获取校验器,Schema的参数，key是校验字段名，值是校验规则
                const validator = new Schema({[this.prop]: rules})

                // 执行校验,参数1是校验目标
                return new Promise((resolve, reject) => {
                    validator.validate({[this.prop]: value}, error => {
                    if(error) {
                        this.error = error[0].message
                        reject()
                    } else {
                        this.error = ''
                        resolve()
                    }
                })
                })
            }
        },
    }
</script>

<style scoped>
.error {
    margin: 0;
    font-size: 10px;
    color: red;
}
</style>
```
:::

::: slot title-kformInput
## Input组件实现
:::

::: slot code-kformInput
```vue
<template>
    <div style="display: inline-block">
        <input :value="value" @input="onInput" :placeholder="$attrs.placeholder">
    </div>
</template>

<script>
    import emitter from './emitter';  // 祖孙组件事件监听分发的函数
    export default {
        inheritAttrs: false,
        mixins: [emitter],
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value)
                // this.$parent.$emit('validate')
                this.dispatch('KFormItem', "validate")
            },
        }
        
    }
</script>
```
:::
::: slot title-emitter
## 祖孙组件事件监听派发
:::
::: slot code-emitter
```js
// 广播，自上而下派发事件
function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    // 冒泡查找componentName相同的组件并派发事件
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      // 向上查找直到找到componentName相同的组件
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      // 如果找到就派发事件
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
```
:::

<vue-el-form/>