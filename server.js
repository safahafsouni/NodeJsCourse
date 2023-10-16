//Create First server with http module

const http = require('http')   //imortation de module http by default exist in node js


//http est un object et cet object a plusieurs fonvtions
//res et req sont des objectes
const server = http.createServer((req, res) => {

    //Status code and content type
    //there is also 404 which is return page not found
    //res.statusCode=200 //حالة الإرجاع الطلب   
    //res.setHeader('content-type', 'text/html') //  (  json ,pdf ,audio ,html ,نوعية الإرجاع الطلب (صورة, فيديو 

    if(req.url == '/home'){
        res.statusCode=200
        res.write('welcome to home page') 
    }else if(req.url == '/contact'){
        res.statusCode=200
        res.write('welcome to contact page') 
    }else if(req.url == '/about'){
        res.statusCode=200
        res.write('welcome to about page') 
    }else{
        res.statusCode=404
        res.write('not found')
    }

    res.end() //càd que response will be send to browser/client, if we don't write it server doesn't work just runnig slowly like loop without sending anything

})

//pour que le serveur works if donner un port
server.listen(3000, () => {console.log('server runnig')}) //2éme fct arrow just to be sure that server runnig