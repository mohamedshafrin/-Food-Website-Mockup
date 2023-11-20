import React from "react";
import Layout from "../components/Layout/Layout";
import EmailIcon from "@mui/icons-material/Email";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Details</Typography>
        <p>
          Welcome to Thalapa Katti, where culinary excellence meets
          unforgettable experiences. At our restaurant, we take pride in
          offering a diverse and delectable menu to satisfy every palate. If you
          have any inquiries, suggestions, or if you'd like to make a
          reservation, please don't hesitate to contact us. You can reach us at
          0779-055-333 or drop us an email at pag.shafrin582@gmail.com. We value
          your feedback and are eager to assist you in any way we can. Thalapa
          Katti is more than just a restaurant; it's a place where passion for
          food and dedication to customer satisfaction come together. Whether
          you're planning a special event, a casual dining experience, or simply
          want to explore our culinary offerings, we're here for you. Thank you
          for choosing Thalapa Katti, and we look forward to serving you with
          warmth and flavor that exceed your expectations.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media(max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  077-9055333(TollFree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />
                  shafrin582@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "Green", pt: 1 }} />
                  077-9055333
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
