import styled from "styled-components";
import { TextField } from "@mui/material";
import { Panel } from "../common";

export default function FormTitleTab() {
  return (
    <FormTitle>
      <TextField label='Title' color='secondary' variant='standard' />
      <TextField label='Description' variant='standard' />
    </FormTitle>
  );
}

const FormTitle = styled(Panel)`
  width: 60vw;
  min-height: 15vh;
  display: grid;
  justify-items: center;
`;
