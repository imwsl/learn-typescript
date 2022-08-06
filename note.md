### Learn TypeScript学习

TypeScript是直接编译为JavaScript

#### TS的编译过程：

1、TypeScript源码 -> TypeScript AST<br><br>
2、类型检查器检查AST<br><br>
3、TypeScript AST -> JavaScript源码

#### 类型系统

any: 尽量不要使用，vscode只会提示但不会报错
unknown: 在你实在不知道类型的时候，可以使用unknown typescript会做自动推导
boolean: true | false 四种声明方式 1、自动推导 let a = true 2、推导出某个具体的值 const c = false 3、明确告知typescript值 let c : boolean = true 几乎不用 4、明确告知是某个具体的boolean的值 let d : true = true, let e : false = false
number: 整数，浮点数，正数，复数，Infinity，NaN
bigint: 处理大数的时候使用
string: 字符串
symbol: 符号，比较新的语言特性，es2015才出来 具体应用场景还需要多挖掘 
对象: typescript对象类型表示typescript对象的结构
类型的别名:
    ```
        type Age = number
        type Person = {
            name: string
            age: Age
        }
    ```
交集和并集:
    ```
        type Cat = {name: string, purrs: boolean}
        type Dog = {name: string, barks: boolean, wags: boolean}
    ```


