import { Grid, Box, Typography } from "@mui/material";
import { forwardRef } from "react";

const Profile = (props: { title: string; text: string[] }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2">{props.title}</Typography>
      {props.text.length > 1 &&
        props.text.map((e, i) => {
          return (
            <Typography key={`${i}-${e}`} variant="h6">
              {e}
            </Typography>
          );
        })}
    </Box>
  );
};
// eslint-disable-next-line react/display-name
export const Profiles = forwardRef((props, ref) => {
  return (
    <Grid sx={{ minHeight: "900px" }} container columns={2}>
      <Grid item xs={12} md={6}>
        <Profile
          title="Elias Rangel"
          text={[
            "I began studying computer science because I loved finding every way to take advantage of every aspect of our home computer. I clicked every button, changed every setting, and eventually wanted to write the programs I was changing.",
            "Studying computer science at the University of Texas at Arlington, and Texas Christian University, has provided me with incredibly varied insight to both industry and education standards. I began working independently first when I tutored peers in my classes.",
            "I have a knack to research and learn new technologies for fun, meaning I can do so for work extremely fast. This coupled with a drive from my autistic side to program constantly prompted me to begin working independently with more than just tutoring.",
          ]}
        />
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <Profile
          title="Abigail Josey"
          text={[
            "blaaasgdslfjknao weaklfjn aqoewjf oajv oasjbfpqDF eofj avoewanovjaw oejwbnovaejk ewaojfb oaefbaos",
            "aejf voaje lmw avowngojka oqjf arogk eslgvmeaw ofgiwenfgpekjFG OEJBIF ELGM WAROGJEWBFGOEM FIOEJF QOVNFEOVJEWNOJKV EWOVJ EWJOV EJV EROWVNEIF VOJEW VOJER VJEW VOREW VMEW OE NPO",
            "LAJ ERWOVJAS OJNAEROPVEKMV OJEANVO B KOK NOKI O JOJKN OKNO NOJNJIO BOO NKLNOJNO KN OOK O JKNONO KNJ NO",
          ]}
        />
      </Grid> */}
    </Grid>
  );
});
export default Profiles;
