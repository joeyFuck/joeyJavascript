function fn1{
	
}
而不寫成
function fn2
{
	
}
有一定的講究
比如:
JavaScript引擎有一个在行末自动添加分号的机制，这可能让你栽到return语句的一个大坑：
function foo() {
    return { name: 'foo' };
}
foo(); // { name: 'foo' }
//如果把return语句拆成两行：
function foo() {
    return
        { name: 'foo' };
}
foo(); // undefined













