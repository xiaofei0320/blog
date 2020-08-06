<template>
    <div>
        <Content slot-key="title1"/>
        <p>Node.js是一个基于 Chrome V8 引擎的JavaScript运行环境(runtime),Node不是一门语言是让js运行在后端的运行时,并且不包括javascript全集,因为在服务端中不包含DOM和BOM,Node也提供了一些新的模块例如http,fs模块等。Node.js 使用了事件驱动、非阻塞式 I/O 的模型，使其轻量又高效并且Node.js 的包管理器 npm，是全球最大的开源库生态系统。事件驱动与非阻塞IO后面我们会一一介绍。到此我们已经对node有了简单的概念。</p>
        <Content slot-key="title2"/>
        <p>Node在处理高并发,I/O密集场景有明显的性能优势</p>
        <ul>
            <li>高并发,是指在同一时间并发访问服务器</li>
            <li>I/O密集指的是文件操作、网络操作、数据库,相对的有CPU密集,CPU密集指的是逻辑处理运算、压缩、解压、加密、解密</li>
        </ul>
        <blockquote>
            <p>Web主要场景就是接收客户端的请求读取静态资源和渲染界面,所以Node非常适合Web应用的开发。</p>
        </blockquote>
        <Content slot-key="title3"/>
        <p>javascript在最初设计时设计成了单线程,为什么不是多线程呢？如果多个线程同时操作DOM那岂不会很混乱？这里所谓的单线程指的是主线程是单线程的,所以在Node中主线程依旧是单线程的。</p>
        <ul>
            <li>单线程特点是节约了内存,并且不需要在切换执行上下文</li>
            <li>而且单线程不需要管锁的问题.</li>
        </ul>
        <Content slot-key="title4"/>
        <img :src="$withBase('/node/base1.png')">
        <Content slot-key="title5"/>
        <img :src="$withBase('/node/base2.png')">
        <ul>
            <li>我们写的js代码会交给v8引擎进行处理</li>
            <li>代码中可能会调用nodeApi,node会交给libuv库处理</li>
            <li>libuv通过阻塞i/o和多线程实现了异步io</li>
            <li>通过事件驱动的方式,将结果放到事件队列中,最终交给我们的应用。</li>
        </ul>
        <Content slot-key="code1"/>
        <blockquote>
            <p>这里每一个阶段都对应一个事件队列,当event loop执行到某个阶段时会将当前阶段对应的队列依次执行。当该队列已用尽或达到回调限制，事件循环将移动到下一阶段</p>
        </blockquote>
        <blockquote>
            <p>process.nextTick() 从技术上讲不是事件循环的一部分</p>
        </blockquote>
        <Content slot-key="title6"/>
        <ul>
            <li>Buffer</li>
            <li>process
                <ul>
                    <li>process.platform:当前进程运行的系统环境</li>
                    <li>process.argv: 当前进程执行时所带的参数（默认数组类型，前两个参数是固定的[当前node的执行命令文件，当前执行的文件，]）</li>
                    <li>process.cwd:当前进程执行时的工作目录</li>
                    <li>process.env:当前进程的环境变量</li>
                    <li>process.nextTick:node中实现的微任务，优先级比promise高</li>
                </ul>
            </li>
            <li>setInterval,setTimeout,setImmediate</li>
            <li>console</li>
            <li>queueMicrotask</li>
        </ul>
        <Content slot-key="title7"/>
        <ul>
            <li>__dirname</li>
            <li>__filename</li>
            <li>exports</li>
            <li>module</li>
            <li>require()</li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>