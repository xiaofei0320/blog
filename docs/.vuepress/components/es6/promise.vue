<template>
  <div>
    <Content slot-key="title-standard" />
    <ul>
      <li>
        只有一个then方法，没有catch，race，all等方法，甚至没有构造函数
        <p>Promise标准中仅指定了Promise对象的then方法的行为，其它一切我们常见的方法/函数都并没有指定，包括catch，race，all等常用方法，甚至也没有指定该如何构造出一个Promise对象，另外then也没有一般实现中（Q, $q等）所支持的第三个参数，一般称onProgress</p>
      </li>
      <li>
        then方法返回一个新的Promise
        <p>Promise的then方法返回一个新的Promise，而不是返回this，此处在下文会有更多解释</p>
      </li>
      <li>不同Promise的实现需要可以相互调用(interoperable)</li>
      <li>Promise的初始状态为pending，它可以由此状态转换为fulfilled（本文为了一致把此状态叫做resolved）或者rejected，一旦状态确定，就不可以再次转换为其它状态，状态确定的过程称为settle</li>
    </ul>
    <Content slot-key="title-index" />
    <Content slot-key="code-method1" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>