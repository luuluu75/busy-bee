import Jumbotron from 'react-bootstrap/Jumbotron';

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
    )
}
 
