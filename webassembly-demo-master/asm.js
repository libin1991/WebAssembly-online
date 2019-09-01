function add(x) {   //使用注释注解，检测等黑魔法来确保强类型
    "use asm";
    var a = 1;

    var x = a | 0;  // x 是32位整数int
    var y = +a;  // y 是64位浮点数
    return (x + 1) | 0;
}