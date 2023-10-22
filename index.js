const jsonServer=require('json-server')

const bookstoreServer=jsonServer.create()

const router=jsonServer.router('db.json')

const middlewares=jsonServer.defaults()

const port =4000 || process.env.PORT

bookstoreServer.use(middlewares)
bookstoreServer.use(router)

bookstoreServer.listen(port,()=>{
    console.log("started successfully ");
})