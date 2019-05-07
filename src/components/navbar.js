import React, {Component} from "react"
import {Navbar,Nav} from 'reactstrap';

class NB extends Component {

render() {

return(

    <div>
        
        <Navbar className="bg-primary">
            <Nav className="text-white">
                Remington Bridgeman
                </Nav>

                <Nav ><a className="text-white" href={"mailto:remington49@rocketmail.com?subject=Portfolio Email&"}>
                             Email Me
                    </a>
                </Nav>

        </Navbar>
      

    </div>




//closing brackets    

        )
    }
}


export default NB