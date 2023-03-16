import React, {useEffect, useState} from "react";
import {
    Box,
    Button,
    CircularProgress,
    Link,
    Modal,
    styled, TextField,
} from "@mui/material";

function formatDate(str) {
    const dateStr = str.split('.')[0].replace('-', ' ');
    const date = new Date(dateStr);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();

    return `${month} ${day}`;
}


const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80vw",
    margin: "0 auto",
});

const StyledIframe = styled("iframe")({
    width: "100%",
    height: "100%",
    border: "none",
});

const StyledLinkList = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    marginTop: "8px",
});

const StyledLink = styled(Link)({
    textDecoration: "none",
    color: "#0077ff",
    width: "100%",
    textAlign: "center",
    marginTop: "8px",
    marginRight: "16px",
    marginBottom: "8px",
    "&:hover": {
        textDecoration: "underline",
    },
});

const StyledCloseButton = styled(Button)({
    position: "absolute",
    top: "8px",
    right: "8px",
    color: "#232323",
    fontSize: "30px",
});

const HtmlFiles = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [htmlFiles, setHtmlFiles] = useState([]);
    const [selectedHtmlFile, setSelectedHtmlFile] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [date, setDate] = useState('');


    useEffect(() => {
        fetchHtmlFiles();
    }, [])

    const fetchHtmlFiles = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://43.206.107.170:8000/html-files");
            const data = await response.json();
            setHtmlFiles(data);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    };

    const handleHtmlFileClick = (fileName) => {
        setSelectedHtmlFile(fileName);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedHtmlFile("");
        setIsModalOpen(false);
    };


    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }} mt={3}>
                <TextField
                    label="Report Date"
                    variant="outlined"
                    value={date}
                    onChange={handleDateChange}
                    sx={{ mr: 1 }}
                />
            </Box>
            {isLoading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }} p={5}>
                    <CircularProgress />
                </Box>
            ) : (
                <StyledLinkList>
                    {htmlFiles
                        .filter((item) => formatDate(item).toLowerCase().includes(date.toLowerCase()))
                        .sort()
                        .map((fileName, index) => (
                        <StyledLink
                            key={index}
                            href="#"
                            onClick={() => handleHtmlFileClick(fileName)}
                        >
                            {formatDate(fileName)}
                        </StyledLink>
                    ))}
                </StyledLinkList>
            )}
            <StyledModal open={isModalOpen} onClose={handleCloseModal}>
                <>
                    <StyledCloseButton onClick={handleCloseModal}>
                        <span aria-hidden>&times;</span>
                    </StyledCloseButton>
                    <StyledIframe
                        src={`http://43.206.107.170:8000/html-file?fileName=${selectedHtmlFile}`}/>
                </>
            </StyledModal>
        </>
    );
};

export default HtmlFiles;
