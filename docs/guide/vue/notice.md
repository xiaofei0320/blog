::: slot title-index
### create功能实现
:::

::: slot code-create
```js
import Vue from 'vue'
// 创建一个create函数，可以动态生成组件实例，并且挂载至body
// Component是组件的配置对象

let instances = [];
let seed = 1;
const create = function (Component, props, data) {
    const id = seed++;
    const position = 'top-right';
    // 创建⼀个Vue新实例
    // element原组件中使用const NotificationConstructor = Vue.extend(Main);
    const vm = new Vue({
        render(h) {
    // render函数将传⼊组件配置对象转换为虚拟dom
            return h(Component, { props });
        }
    }); //执⾏挂载函数，但未指定挂载⽬标，表示只执⾏初始化⼯作
    // 将⽣成dom元素追加⾄body
    vm.id = id
    vm.$mount() // 真实dom生成，只不过没有显示
    document.body.appendChild(vm.$el);
    // 给组件实例添加销毁⽅法
    const comp = vm.$children[0];
    comp.dom = vm.$el;
    comp.visible = true;
    // 可以挂载多个组件，每个组件位置修改
    let verticalOffset = 0;
    instances.filter(item => item.position === position).forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16;
    });
    verticalOffset += 16;
    comp.verticalOffset = verticalOffset;
    comp.id = id
    // comp组件添加删除方法
    comp.remove = () => {
        create.onRemove(id)
        document.body.removeChild(vm.$el);
        vm.$destroy();
    };
    instances.push(comp);  // 将当前组件放入instances中
    return comp;
}

// 删除挂载的组件
create.onRemove = function(id) {
    let index = -1;
    const len = instances.length;
    const vm = instances.filter((vm, i) => {
        if (vm.id === id) {
            index = i;
            return true;
        }
        return false;
    })[0];  
    if (!vm) return;
    instances.splice(index, 1);
    if (len <= 1) return;
    const position = vm.position;
    const removedHeight = vm.dom.offsetHeight;
    for (let i = index; i < len - 1 ; i++) {
        if (instances[i].position === position) {
            instances[i].dom.style[vm.verticalProperty] =
            parseInt(instances[i].dom.style[vm.verticalProperty], 10) - removedHeight - 16 + 'px';
        }
    }
}
// 暴露调⽤接⼝
export default create;
```
:::

<vue-notice/>