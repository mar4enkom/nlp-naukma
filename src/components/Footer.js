import {styled} from "@mui/material";

const FooterContainer = styled("footer")({
    backgroundColor: "#f5f5f5",
    padding: "16px",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",

});

const Text = styled("div")({
    fontSize: "0.8rem",
});

function Footer() {
    const year = new Date().getFullYear();
    return (
        <FooterContainer>
            <Text>© {year} Куриленко Олександра, Рябченко Нікіта, Марченко Михайло, Семеренко Юрій</Text>
        </FooterContainer>
    );
}

export default Footer;