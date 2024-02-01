import { Button, Spinner } from 'react-bootstrap';

function Loader() {

    return (
        <Button variant="info" className="m-5 text-white" disabled>
            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
    )
}
export default Loader;

