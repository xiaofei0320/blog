<template>
  <div>
    <Content slot-key="title-performance" />
    <p>
      创建一个全局对象（Global
      Object），这个对象全局只存在一份，它的属性在任何地方都可以访问，全局对象在创建时，将Math，String，Data，Document等常用的js对象作为其属性，
      犹豫这个对象不能通过名字直接访问，因此还有另外一个属性window，并将window指向了自身，这样就可以通过window访问这个对象
    </p>
    <Content slot-key="code-performance1" />
    <p>
      js引擎需要构建一个执行环境栈（Execution
      ContextStack）,同时也要创建一个全局执行环境（Execution
      Context）EC，并将这个执行环境EC压入执行环境栈中，
      执行环境栈的作用是为了保证程序能够按照正确的顺序被执行，在js中，每个函数都有自己执行环境，当执行一个函数时，该函数的执行环境就会被推入执行环境栈的顶部
      并获取执行权，当这个函数执行完毕，它的执行环境又从这个栈的顶部被删除，并把执行环境权交还给之前执行环境
    </p>
    <Content slot-key="code-performance2" />
    <p>
      js引擎创建一个与EC关联的全局变量对象（Varibale
      Object）VO，并把VO指向全局对象，VO中不仅包含了全局对象的原有属性，还包括在全局定义的变量和函数，同时，在定义函数的时候，
      还为函数添加了一个内部属性scope，并将scope指向了VO，每个函数再定义的时候，都会创建一个与他关联的scope属性，scope总是指向定义函数时所在的环境
    </p>
    <Content slot-key="code-performance3" />
    <p>
      当执行进入A，js引擎需要做:
      首先，js引擎会创建函数A的执行环境EC，然后EC推入执行环境栈的顶部并获取执行权，此时执行环境栈中有两个执行环境，分别是全局执行环境和函数A的执行环境，A的执行环境在栈顶，全局执行环境在栈底。然后创建函数A的作用域链，在js中，每个执行环境都有自己的作用域链，
      当执行环境被创建时，它的作用域链就初始化当前运行函数的scope所包含的对象。接着，js引擎会创建一个当前函数的活动对象AO，这里的活动对象扮演着变量的角色，只是在函数的叫法不同（可以认为变量对象是一个总的概念，而活动对象是它的一个分支）AO中包含了函数的形参，argument对象，this对象，以及局部变量对象和内部函数的定义
      然后AO会被推入作用域链的顶端。定义函数B的时候，js引擎同样会为B添加一个scope属性，并将scope指向了定义函数B的时候所在的环境，定义函数B的环境就是A的活动对象AO，而AO位于链的前端，由于链表具有首尾相连的特点，由此函数B的scope指向了A的整个作用域链
    </p>
    <Content slot-key="code-performance4" />
    <p>
      函数A被执行后，返回了B的引用，并赋值给了变量C，执行C就相当于执行B，js引擎：创建函数B的执行环境EC，然后EC推入执行环境栈的顶部并获取执行权，此时执行环境中有两个执行环境，分别是全局执行环境和函数B的执行环境，B的执行环境在栈顶，全局在栈底。（当函数A返回，A的执行环境就会在栈中被删除，只留下全局执行环境）然后，
      创建函数B的作用域链，并初始化为函数B的scope所包含的对象，即包含了A的作用域链。最后创建B的活动对象AO，并将B的形参，arguments对象和this对象作为AO的属性
    </p>
    <Content slot-key="code-performance5" />

    <Content slot-key="title-prototype" />
    <h3>构造函数创建对象</h3>
    <p>我们先使用构造函数创建一个对象：</p>
    <pre><code class="vue">function Person() {}
var person = new Person();
person.name = 'Kevin';
console.log(person.name) // Kevin</code></pre>
    <p>
      在这个例子中，Person 就是一个构造函数，我们使用 new 创建了一个实例对象
      person。
    </p>
    <h3>prototype</h3>
    <p>
      每个函数都有一个 prototype 属性，就是我们经常在各种例子中看到的那个
      prototype ，比如：
    </p>
    <pre><code class="vue">function Person() {}
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin</code></pre>
    <p>那这个函数的 prototype 属性到底指向的是什么呢？是这个函数的原型吗？</p>
    <p>
      其实，函数的 prototype
      属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的
      person1 和 person2 的原型。
    </p>
    <p>
      那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。
    </p>
    <p>
      那么我们该怎么表示实例与实例原型，也就是 person 和 Person.prototype
      之间的关系呢，这时候我们就要讲到第二个属性：
    </p>
    <h3>__proto__</h3>
    <p>
      这是每一个JavaScript对象(除了 null
      )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。
    </p>
    <p>为了证明这一点,我们可以在火狐或者谷歌中输入：</p>
    <pre><code class="vue">function Person() {}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true</code></pre>
    <h3>constructor</h3>
    <p>
      指向实例倒是没有，因为一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，这就要讲到第三个属性：constructor，每个原型都有一个
      constructor 属性指向关联的构造函数。
    </p>
    <pre>
        <code>
            function Person() {}
            console.log(Person === Person.prototype.constructor); // true
        </code>
    </pre>
    <pre>
        <code>
    function Person() {}
    var person = new Person();
    console.log(person.__proto__ == Person.prototype) // true
    console.log(Person.prototype.constructor == Person) // true
    // 顺便学习一个ES5的方法,可以获得对象的原型
    console.log(Object.getPrototypeOf(person) === Person.prototype) // true
        </code>
    </pre>

    <Content slot-key="title-detail" />
    <h4>es5严格模式变量赋值前必须声明</h4>
    <p>
      RHS查询在所有的作用域中遍寻不到所需的变量，引擎就会抛出ReferenceError异常。LHS查询，在非严格模式下如果在全局作用域中也找不到目标变量，
      全局作用域中会创建一个具有该变量的名称，并将其返回给引擎。严格模式下，禁止自动或隐式地创建全局变量。因此在严格模式中LHS查询失败不会自动创建变量，
      引擎会抛出RHS查询失败时类似的ReferenceError异常。所以严格模式变量赋值前必须声明。
    </p>
    <p>
      另：ReferenceError与作用域判别失败有关，TypeError代表作用域判别成功，对结果的操作非法或不合理。
    </p>
    <h4>RHS查询和LHS查询</h4>
    <p>
      如果查找的目的是对变量进行赋值，会使用LHS查询，如果目的是获取变量的值，使用RHS查询
    </p>
    <h4>词法作用域</h4>
    <p>
      作用域：管理引擎如何在当前作用域以及嵌套的子作用域中根据标识符名称进行变量查找。
    </p>
    <p>
      词法作用域就是定义在词法阶段的作用域。词法作用域只会查找一级标识符，如果代码中引用了foo.bar.baz，词法作用域只会试图查找foo，找到变量foo后，对象属性访问规则会分别接管对bar和baz属性的访问。
    </p>
    <h4>遮蔽效应</h4>
    <p>
      作用域查找会在找到第一个匹配的标识符时停止。在多层的嵌套作用域中可以定义同名的标识符，这叫做“遮蔽效应”
    </p>
    <h4>欺骗词法</h4>
    <p>
      严格模式中，eval在运行时有其自己的词法作用域，意味着其中的声明无法修改所在的作用域
    </p>
    <p>
      with可以将一个没有或有多个属性的对象处理为一个完全隔离的词法作用域，这个对象的属性会被处理为定义在这个作用域中的词法标识符
    </p>
  </div>
</template>

<script>
// import WIcon from "../../../src/icon/icon";
import mixin from "../../mixin";
export default {
  name: "demo",
  mixins: [mixin],
  components: {
    //   WIcon,
  },
  data() {
    return {
      codeStr: `
          <g-button>默认按钮</g-button>
        `
        .replace(/^\s*/gm, "")
        .trim(),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>