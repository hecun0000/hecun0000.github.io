(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{321:function(t,s,a){"use strict";a.r(s);var n=a(0),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"this关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this关键字"}},[t._v("#")]),t._v(" this关键字")]),t._v(" "),a("img",{staticStyle:{width:"100%"},attrs:{src:"http://static.hecun.site/56697596_p0.jpg",alt:""}}),t._v(" "),a("p",[t._v("this到底是一种什么机制?"),a("br"),t._v("\nthis是在运行时进行绑定的,并不是在编写的时候进行绑定的,它的上下文取决于函数调用时的各种条件.this的绑定和函数声明的位置没有任何关系,只取决于"),a("strong",[t._v("函数调用时的方式")]),t._v("也被称为调用位置."),a("br"),t._v("\n当函数在调用时, 会创建一个活动记录(AO, 也被称作为上下文). 这个记录会包含函数在哪里被调用(调用栈), 函数的调用方式, 传入的参数等信息. this就是记录这一属性的, 会在函数执行的过程中用到.")]),t._v(" "),a("h1",{attrs:{id:"一-调用位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-调用位置"}},[t._v("#")]),t._v(" 一. 调用位置")]),t._v(" "),a("p",[t._v("调用位置就是函数在代码中被调用的位置(而不是声明的位置).\n来个小例子, 分析下调用栈和调用位置:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前的调用栈是: baz")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因此, 当前调用位置是全局作用域  ")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"baz"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bar的调用位置 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前的调用栈是: baz -> bar ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因此, 当前的调用位置在baz中")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// foo的调用位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当前调用栈是: baz -> bar -> foo")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因此,当前的调用位置在foo中")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("baz")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  baz的调用位置")]),t._v("\n")])])]),a("p",[t._v("真正地分析出函数的调用位置, 就可以理解this的绑定了.")]),t._v(" "),a("h1",{attrs:{id:"二-绑定规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-绑定规则"}},[t._v("#")]),t._v(" 二.绑定规则")]),t._v(" "),a("p",[t._v("首先需要找到调用位置, 然后判断需要应用下面四条规则中的那一条.")]),t._v(" "),a("h2",{attrs:{id:"_1-默认规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-默认规则"}},[t._v("#")]),t._v(" 1.默认规则")]),t._v(" "),a("p",[t._v("这是最常用的函数调用类型: 独立函数使用.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当调用foo()时, this.a 被解析为全局变量a. 因为函数调用时应用了this的默认绑定,因此this会指向全局.")]),t._v(" "),a("p",[t._v("在代码中, foo()直接使用不带任何修饰的函数引用进行调用, 只能认为是默认绑定.")]),t._v(" "),a("h2",{attrs:{id:"_2-隐式绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-隐式绑定"}},[t._v("#")]),t._v(" 2.隐式绑定")]),t._v(" "),a("p",[t._v("该规则是调用位置是否具有上下文对象, 或者说是否被某个对象拥有或者包含.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//foo的调用位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    obj2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//42")]),t._v("\n")])])]),a("p",[t._v("首先, foo()是在全局中被声明, 然后被当做引用属性添加到obj2中. 隐式绑定规则会把函数调用中的this绑定到这个上下文对象中. 因此调用foo时的this被绑定在obj2中.")]),t._v(" "),a("blockquote",[a("p",[t._v("对象属性引用链中只有上一层或者说最后一层在调用位置中作用.")])]),t._v(" "),a("h3",{attrs:{id:"_2-1隐式绑定的丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1隐式绑定的丢失"}},[t._v("#")]),t._v(" 2.1隐式绑定的丢失")]),t._v(" "),a("p",[t._v("当隐式绑定的函数丢失绑定对象, 就会默认的转为默认绑定. 从而将this绑定到全局对象或者undefined上, 取决于是否为严格模式.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oops, global"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//a为全局对象  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "oops, global"')]),t._v("\n")])])]),a("p",[t._v("在这个例子中:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n")])])]),a("p",[t._v("bar只是引用了foo函数的本身, 和obj并没有任何关系. 则bar()就是对foo的直接调用. 因此为默认绑定."),a("br"),t._v("\n再来一个更有意思的例子:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFoo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//fn 其实引用的是foo")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//调用位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oops, global"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//a为全局对象 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doFoo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "oops, global"')]),t._v("\n")])])]),a("p",[t._v("首先, 在全局作用域中声明了foo的函数; 然后被添加进obj的对象中;然后doFoo函数将foo这个函数作为参数传入进去, 并在其内部进行调用."),a("br"),t._v("\n在这个例子中, 参数传递被作为一种隐式的赋值."),a("br"),t._v("\n另外, 在回调函数中, 丢失this的绑定也是比较常见的现象.")]),t._v(" "),a("h2",{attrs:{id:"_3-显式绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-显式绑定"}},[t._v("#")]),t._v(" 3.显式绑定")]),t._v(" "),a("p",[t._v("当我们不想在对象的内部包含函数引用,而想在某个对象上强制调用函数?"),a("br"),t._v("\n为此,JavaScript提供了call(...), apply(...)和bind(...)方法."),a("br"),t._v("\ncall()/apply()/bind():")]),t._v(" "),a("ol",[a("li",[t._v("call()/apply(): 立刻调用函数, 并临时替换函数中的this为指定对象"),a("br"),t._v("\n如何:\n"),a("ul",[a("li",[t._v("fun.call(obj,参数值1,参数值2,...)")]),t._v(" "),a("li",[t._v("fun.apply(obj.数组)")])])]),t._v(" "),a("li",[t._v("bind(): 基于原函数, 创建一个新函数, 永久绑定this为指定对象"),a("br"),t._v("\n如何: fun.(obj,参数值,...)\n"),a("ul",[a("li",[t._v("创建一个和fun完全一样的函数")]),t._v(" "),a("li",[t._v("永久绑定fun中的this为obj")]),t._v(" "),a("li",[t._v("永久绑定部分参数值")])])])]),t._v(" "),a("p",[t._v("此外, 在JavaScript语言和宿主环境中许多的新的内置函数, 其作用和bind(...)一样, 去报你的回调函数使用指定的this. 比如 [1,2,3].forEach(for, obj ); 等等...")]),t._v(" "),a("h2",{attrs:{id:"_4-new绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-new绑定"}},[t._v("#")]),t._v(" 4.new绑定")]),t._v(" "),a("p",[t._v("new可以影响函数调用时this绑定行为的方法, 我们称之为new绑定.")]),t._v(" "),a("p",[t._v('"构造函数"是类中的一些特殊方法, 使用new初始化时会调用类中的构造函数. 通常的形式是这样的:')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("something "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("p",[t._v("构造函数:")]),t._v(" "),a("blockquote",[a("p",[t._v("在JavaScript中, 构造函数只是一些使用new操作符时被调用的函数. 它们并不会属于某个类, 也不会实例化一个类. 实际上, 它们甚至都不能说是一种特殊的函数类型, 它们只是被new操作符调用的普通函数而已.")])]),t._v(" "),a("p",[t._v("在使用new来调用函数, 或者说是发生构造函数的调用时, 会自动执行下面的操作.")]),t._v(" "),a("ol",[a("li",[t._v("创建(或者说构造)一个全新的对象.")]),t._v(" "),a("li",[t._v("这个新对象会被执行[[prototype]]连接.")]),t._v(" "),a("li",[t._v("这个新对象会绑定到函数调用的this.")]),t._v(" "),a("li",[t._v("如果没有返回其他对象, 那么new表达式中的函数会自动的返回这个新对象.")])]),t._v(" "),a("h1",{attrs:{id:"三-判断this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-判断this"}},[t._v("#")]),t._v(" 三.判断this")]),t._v(" "),a("p",[t._v("当判断先根据绑定的优先级来判断函数的调用位置是相应的哪条规则. 可以按照下面的顺序进行判断:")]),t._v(" "),a("ol",[a("li",[t._v("函数是否存在new中调用? 是则this绑定的是创建的对象.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("函数是否通过call, apply (显式的绑定)? 如果是的话, this绑定的是指定的对象.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("函数是否在某个上下文对象中调用(隐式绑定)? 如果是的话, this绑定在对应的上下文对象中.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("如果以上都不是的话, 使用的为默认绑定, 如果在严格模式下, 就绑定到undefined, 否则为全局对象.")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);