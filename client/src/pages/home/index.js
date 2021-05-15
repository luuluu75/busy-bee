import {Jumbotron, Button} from 'react-bootstrap';


function Home(){
    
    return (
        <Jumbotron>
        <div className={"jumbotron container fluid"}>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
            </p>
            <p>
            <Button variant="primary">Existing Bees</Button>
            </p>
            <p>
  <         Button variant="primary">New Bees</Button>
            </p>
        </div>
        </Jumbotron>
    )
}

export default Home
 