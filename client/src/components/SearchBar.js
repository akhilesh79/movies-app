import { Container, Button, Form } from 'react-bootstrap';

function SearchBar({ setSearchText, onClickRefresh }) {
    const onChangeSearchText = (event) => {
        setSearchText(event.target.value)
    }

    const onKeyPressSearchText = (event) => {
        if (event.charCode === 13) {
            onClickRefresh();
        }
    }

    return (
        <Container className=" d-flex ">
            <Form.Control type="text" placeholder="Enter Movie To Search..."
                onChange={onChangeSearchText}
                onKeyPress={onKeyPressSearchText}
            />
            <Button variant="primary me-1" onClick={onClickRefresh}>Search</Button>
            <Button variant="success" onClick={onClickRefresh}>Refresh</Button>
        </Container>
    )
}

export default SearchBar