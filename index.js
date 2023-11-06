
// import jsonserver

const jsonserver=require('json-server')

// create json server 

const server=jsonserver.create()

// route json data

const router=jsonserver.router('db.json')

// create middile ware 
const middleware=jsonserver.defaults()

// port 

const PORT=process.env.PORT || 4000

server.use(middleware)
server.use(router)


server.listen(PORT,()=>{
    console.log("media player server started at port:"+PORT);
})