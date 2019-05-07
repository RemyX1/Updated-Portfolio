import React, {Component} from "react"
import {Card,CardBody} from "reactstrap"
import picture from "../photos/portfolio1.jpeg"

class Sidebar extends Component {

render() {

return(

    <div style={{width: 300}}>
        
        <Card className="bg-primary text-white" style={{marginBottom:20}}>
<CardBody>
<h1>Project 1</h1>
</CardBody>
       </Card >
       <Card className="bg-primary text-white" style={{marginBottom:20}}>
<CardBody>
<h1>Project 2</h1>
</CardBody>
       </Card>
       <Card className="bg-primary text-white" >
<CardBody>
<h1>Project 3</h1>
</CardBody>
       </Card>

    </div>




//closing brackets    

        )
    }
}


export default Sidebar