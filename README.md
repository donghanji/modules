modules
=======

提供各种桥接模块，帮助那些非pm模块化的组件封装为pm.module组件。

事实上pm提供了文件处理方式，也就是说可以在pm中使用非pm模块化的组件。
但是这通常会引出一些不可预知的问题：
    比如文件过大，网络请求缓慢等，导致加载出现问题，使得回调出错；

所以，将非pm模块化文件，转变成为pm模块的方式可以提高效率。

首先说一说，怎样的模块才算是pm模块，需要满足几个条件：

    1.使用module.declare方法进行模块定义；
    2.模块名字和文件名字要一致；
举例说明：
比如我要定义一个a.module的模块。
第一步，需要建立一个a.module.js的文件(满足条件2)；
第二步，在文件中使用module.declare方法定义该模块(满足条件1):

    //无依赖项的情况
    module.declare('a.module',function(){
        //模块处理逻辑
    });

    //有依赖项的情况，比如依赖b.module
    module.declare('a.module',['b.module'],function(require){
        var b=require('b.module');
    });

具体参考<a href="https://github.com/donghanji/pm/wiki/1.关于PM">关于pm的介绍</a>


下面通过对常见的jQuery.js为例说明。
jQuery属于非pm模块，正常的使用流程为：
1.将jQuery标记为文件

    module.files({
      'jquery':'/jquery.js'
    });
2.按照普通模块的方式使用jQuery：

    module.declare(['jquery'],function(require){
      //注意这里不需要使用$=require('jquery');
      //而是直接使用$对象
    });

一般情况下，这样使用没有多大的问题，但是如果引入了其他的文件，依赖于该jQuery文件，就很容易出现问题。

所以，推荐的用户是，给jQuery文件添加头和尾，使用grunt或者gulp自动处理，得到对应的jquery.module.js文件，使其成为pm模块的方式来使用。

添加头，xx.module.start.js,通常格式为:

    module.declare('xx',['aa','bb'],function(require){
      //
      // TODO

添加尾，xx.module.end.js,通常格式为：

      //
      return xx;
    });

事实上就是将pm模块定义，拆分为两部分。
当然，这个只是一般格式。
具体jquery.module.js怎么写，可以参考pm.modules里面对应的文件。如果将其打包为pm模块之后，就可以按照pm的方式使用jQuery文件了。

    module.declare(['jquery.module'],function(require){
      var $=require('jquery.module');
    });

事实上，这里的jquery.module就是jQuery库文件，只是做了简单包装而已，目的是使其成为pm模块。
对应不同版本的jQuery只需要生成对应的jquery.module.xx.js即可。

PS:<br/>
最开始的时候，处理这种常用的，而且体积很大的库的时候，只是简单的引入一个jquery.module.js文件，起着真正意义上的桥接的作用，和jQuery库文件是分离独立的。但是这样会引入两个文件，增加一次请求，所以，从性能上来说索性将其合并为一个。
