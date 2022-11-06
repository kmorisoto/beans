import {Container, Stack, TextField} from "@mui/material";
import {ChangeEvent, useState} from "react";
import {XMLParser} from "fast-xml-parser";

export const XmlToJson = () => {
    const [json, setJson] = useState("")
    const convertToJson = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const parser = new XMLParser();
        const output = parser.parse(event.target.value);
        setJson(JSON.stringify(output, null, 2));
    }
    return (
        <Container>
            <h1>XML to JSON Convert</h1>
            <Stack spacing={2} direction="row">
                <TextField
                    multiline
                    fullWidth
                    rows={30}
                    label="XML"
                    onChange={convertToJson}
                />

                <TextField
                    multiline
                    fullWidth
                    rows={30}
                    label="JSON"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={json}
                />
            </Stack>
        </Container>
    );
}
