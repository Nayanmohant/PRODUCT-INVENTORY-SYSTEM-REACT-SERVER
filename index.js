const jsonServer=require('json-server')

const ProductServer=jsonServer.create()

const middleware=jsonServer.defaults()

const router=jsonServer.router('db.json')

ProductServer.use(middleware)
ProductServer.use(router)


const PORT =4000 || process.env.PORT

ProductServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})