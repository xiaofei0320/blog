::: slot title-index1
## 虚拟DOM
:::
::: slot title-index2
<!-- ## 宏任务 -->
:::
::: slot title-index3
<!-- ## 微任务 -->
:::

::: slot title-index4
<!-- ## script 事件是宏任务 -->
:::
::: slot title-index5
<!-- ## 浏览器器与 Node.js 的事件循环差异 -->
:::

::: slot code1
```js
export function createElement(type, config, children) {
 let propName;

 const props = {};

 let key = null;
 let ref = null;
 let self = null;
 let source = null;


 if (config != null) {
   // 赋值ref
   if (hasValidRef(config)) {
     ref = config.ref;
   }
   // 赋值key
   if (hasValidKey(config)) {
     key = '' + config.key;
   }
   self = config.__self === undefined ? null : config.__self;
   source = config.__source === undefined ? null : config.__source;
   // 把 JSX 解析出的config 给到 props
   for (propName in config) {
     if (
       hasOwnProperty.call(config, propName) &&
       !RESERVED_PROPS.hasOwnProperty(propName)
     ) {
       props[propName] = config[propName];
     }
   }
 }
 // 遍历 children children 不是数组，是多个参数 然后赋值到props.children
 const childrenLength = arguments.length - 2; // 去掉args type 和 config
 // 如果 是一个子元素 直接赋值 
 if (childrenLength === 1) {
   props.children = children;
 } else if (childrenLength > 1) {
   // 如果有多个子元素，则创建一个长度 = length 的数组
   const childArray = Array(childrenLength);
   for (let i = 0; i < childrenLength; i++) {
     childArray[i] = arguments[i + 2];
   }
   // 开发环境 冻结 子元素 列表
   if (__DEV__) {
     if (Object.freeze) {
       Object.freeze(childArray);
     }
   }
   props.children = childArray;
 }

 // 解析默认属性
 if (type && type.defaultProps) {
   const defaultProps = type.defaultProps;
   for (propName in defaultProps) {
     if (props[propName] === undefined) {
       props[propName] = defaultProps[propName];
     }
   }
 }
 if (__DEV__) {
   if (key || ref) {
     const displayName =
       typeof type === 'function'
         ? type.displayName || type.name || 'Unknown'
         : type;
     if (key) {
       defineKeyPropWarningGetter(props, displayName);
     }
     if (ref) {
       defineRefPropWarningGetter(props, displayName);
     }
   }
 }
 return ReactElement(
   type,
   key,
   ref,
   self,
   source,
   ReactCurrentOwner.current,
   props,
 );
}
```
:::

::: slot code2
```js
/**
*  Factory方法创建一个新的React元素。 这不再遵循类模式，因此不要使用new来调用它。 
* 此外，没有instanceof检查将起作用。 
* 而是针对Symbol.for（'react.element'）测试$$ typeof字段以进行检查
* 如果有什么东西是React元素。
*/
const ReactElement = (type, key, ref, self, source, owner, props)=>{
 const element = {
   // 此标记允许我们将其唯一标识为React元素
   $$typeof: REACT_ELEMENT_TYPE,

   // 属于元素的内置属性
   type: type,
   key: key,
   ref: ref,
   props: props,

   // 记录负责创建此元素的组件。
   _owner: owner,
 };
 return element;
};
```
:::

::: slot code3
```js
export function cloneElement(element, config, children) {
  invariant(
    !(element === null || element === undefined),
    'React.cloneElement(...): The argument must be a React element, but you passed %s.',
    element,
  );

  let propName;

  // Original props are copied
  const props = Object.assign({}, element.props);

  // Reserved names are extracted
  let key = element.key;
  let ref = element.ref;
  // Self is preserved since the owner is preserved.
  const self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  const source = element._source;

  // Owner will be preserved, unless ref is overridden
  let owner = element._owner;

  if (config != null) {
      // 更新定义的
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }
	
    // Remaining properties override existing props
    let defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (
        hasOwnProperty.call(config, propName) &&
        !RESERVED_PROPS.hasOwnProperty(propName)
      ) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
```
:::
<react-sourceCode/>