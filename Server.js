const http =require (`http`);

const server =http.createServer((req,res)=>{
    //console.log(req);
    res.write(`Amit`);
    res.end();
});
server.listen(3000,`localhost`,()=>{
    console.log(`Server is lisening`);
});