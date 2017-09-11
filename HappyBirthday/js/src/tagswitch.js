var OriginTitle = document.title;
var st; 
document.addEventListener('visibilitychange', function() { 
    if (document.hidden) {   
        document.title = '(●—●)喔哟，崩溃啦！'; clearTimeout(st);
        st2 = setTimeout(function() { document.title = OriginTitle; 
        }, 10000)
    } else { 
    document.title = '(/≧▽≦/)咦！又好了！' + OriginTitle;clearTimeout(st2); 
    st = setTimeout(function() { document.title = OriginTitle; 
    }, 2000); 
} });
