import {styled} from "@mui/material";

const Container = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    color: "#232323",
});

const Title = styled('h1')({
    textAlign: 'center',
});

const EmptyCase = () => {
    return (
        <Container>
            <Title>Please, select HW you want to check on the navbar</Title>
        </Container>
    );
};

export default EmptyCase;