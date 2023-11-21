const express=require('express')
const app=express()
const port=3000
app.set('view engine','ejs')

app.get('/',(req,res)=>{

    res.render('homepage')
})

app.get('/blogs',(req,res)=>{

    res.render('blogList')
})

app.get('/myblogs',(req,res)=>{

    res.render('myblogs')
})

app.get('/blog',(req,res)=>{

    res.render('blog')
})


app.listen(port,()=>console.log(`listening on http://localhost:${port}`))