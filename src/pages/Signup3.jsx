import { Avatar, Grid, TextField, Typography, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { lightBlue } from "@mui/material/colors";
import Login from "./Login";

export default function Signup3() {
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{display: 'flex', mt:17, flexDirection:'column', alignItems:'center', justifyContent:'center', height:'60vh',}}> 
        <Avatar sx={{m:3, bgcolor:lightBlue[700]}}>#</Avatar>
        <Typography component="h1" variant="h5">Join</Typography>
        <Box component="form" noValidate sx={{mt:3}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name="email" required fullWidth label="이메일" autoFocus autoComplete="off"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField name="password" required fullWidth label="비밀번호" type="password"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField name="confirmPassword" required fullWidth label="비밀번호 확인" type="password"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField name="nickname" required fullWidth label="닉네임"></TextField>
            </Grid>
          </Grid>
          <LoadingButton type="submit" fullWidth variant="contained" sx={{mt:3, mb:2, bgcolor:lightBlue[700], height:'3.5em'}}>Join Us</LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to='/login'>Do you have account? Login plz</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>
  )
}
