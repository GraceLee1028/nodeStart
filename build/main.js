
      var sc = document.createElement('script');
      sc.src='http://192.168.100.155:3000/jsonp?callback=call'
      document.body.appendChild(sc)
      function call(data){
        console.log('后端通过jsonp调用了回调')
        console.log('后端返回的数据',data)
      }
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
        if(xhr.readyState===4&&xhr.status===200){
          var txt = xhr.responseText;
          console.log('跨域请求：',txt)
          document.write(txt)
        }
      }
      xhr.open('GET','http://127.0.0.1:3000/list',true)
      xhr.send();
    