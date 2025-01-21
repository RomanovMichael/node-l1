import { createServer } from 'http'

function addItem() {

}

const app = createServer((request, response) => {
    switch(req.url){
        case 'f':
            response.end('salam') 
            break
        case '/': 
            response.end('home page')
            break
        default: 
        response.statusCode = 404
        response.end('page not found')
        
    }
}) 

app.listen('4344')

