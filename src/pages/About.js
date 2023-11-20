import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p:2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media(max-width:600px)":{
            mt:0,
            "& h4":{
            fontSize:"1.5rem",

            }
          }
        

        }}
      >
        <Typography variant="h4">Welcome To Resturant</Typography>

        <p>
          Rice is the dietary staple and the major domestic crop cultivated in
          Sri Lanka since ancient times. Therefore, the production and
          availability of rice are closely tied to food security as well as
          political stability in the country. Every government since
          independence has given prominence to the goal of achieving
          self-sufficiency in rice. Accordingly, a significant amount of
          resources are allocated for the supply of irrigation water, land
          development, research on technological improvements, farm
          mechanisation, and support facilities such as credit, subsidised
          inputs, and farmer welfare measures.
        </p>
        <br />
        <p>
          The central feature of Sri Lankan cuisine is boiled or steamed rice,
          served with a curry of fish or meat, along with other curries made
          with vegetables, lentils, or fruits. Dishes are accompanied by pickled
          fruits or vegetables, chutneys, and sambols.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
