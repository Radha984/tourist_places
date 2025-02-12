let http=require("http")
let url=require("url")
let fs=require("fs")

let server=http.createServer((req,res)=>{
    let parsedurl=url.parse(req.url,true)

    // console.log(parsedurl.pathname)/

    if(parsedurl.pathname=="/places" && req.method=="POST"){
        fs.readFile("index.json","utf-8",(err,data)=>{
            if(err){
                res.write(JSON.stringify({
                    err:error.message
                }))
                res.end()
    
            }else{
                res.write(data)
                res.end()
            }
        })
    }
    else if(parsedurl.pathname=="/places"&& req.method=="GET"){
        //
        // console.log(parsedurl.query.loc)
        
        if(parsedurl.query.loc){
            fs.readFile("index.json","utf-8",(err,data)=>{
                if(err){
                    res.write(JSON.stringify({
                        err:error.message
                    }))
                    res.end()
        
                }else{
                   let dataa=JSON.parse(data)
                
                  
                   if(parsedurl.query.loc=="delhi"){
                    let namedelhi=dataa.touristplaces.filter((val)=>{
                        return val.location=="Delhi"
                    })
                    res.write(JSON.stringify(namedelhi))
                    res.end()
                   }
                   
                   else if(parsedurl.query.loc=="kerala"){
                    let namekerala=dataa.touristplaces.filter((val)=>{
                        return val.location=="Kerala"
                    })
                    res.write(JSON.stringify(namekerala))
                    res.end()
                   }
                   else if(parsedurl.query.loc=="hyd"){
                    let namehyderabad=dataa.touristplaces.filter((val)=>{
                        return val.location=="Hyderabad"
                    })
                    res.write(JSON.stringify(namehyderabad))
                    res.end()
                   }
                   else if(parsedurl.query.loc=="mumbai"){
                    let namemumbai=dataa.touristplaces.filter((val)=>{
                        return val.location=="Mumbai"
                    })
                    res.write(JSON.stringify(namemumbai))
                    res.end()
                   }
                   else if(parsedurl.query.loc=="jaipur"){
                    let namejaipur=dataa.touristplaces.filter((val)=>{
                        return val.location=="Jaipur"
                    })
                    res.write(JSON.stringify(namejaipur))
                    res.end()
                   }

                   else if(parsedurl.query.loc=="kolkata"){
                    let namekolkata=dataa.touristplaces.filter((val)=>{
                        return val.location=="Kolkata"
                    })
                    res.write(JSON.stringify(namekolkata))
                    res.end()
                   }

                   else if(parsedurl.query.loc=="vizag"){
                    let namevizag=dataa.touristplaces.filter((val)=>{
                        return val.location=="Vizag"
                    })
                    res.write(JSON.stringify(namevizag))
                    res.end()
                   }
                   else{
                    res.write(data)
                   }
                }
            })
        }
    }
   else{
    res.write(JSON.stringify({
        msg:"resource not found"
    }))
    res.end()
   }
})


server.listen(3005,()=>{
    console.log("server is runnning")
})