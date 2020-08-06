import Vue from 'vue'
// 创建一个create函数，可以动态生成组件实例，并且挂载至body
// Component是组件的配置对象
export function create(Component, props) {
    // 借用vue构造函数生成实例
    console.log('creat');
    const vm = new Vue({
        render(h) {
            // h是createElement别名，可以返回一个虚拟dom，VNode
            return h(Component, { props })
        }
    })
    // 通过挂载得到真实dom， 直接.mount('body')挂载到body，会使界面空白
    vm.$mount()
    // 通过$el获取真实dom
    document.body.appendChild(vm.$el)
    // 返回组件实例
    const comp = vm.$children[0]

    comp.remove = () => {
        document.body.removeChild(vm.$el)
        comp.$destroy()
    }
    return comp
}