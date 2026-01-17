import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Paper } from '@mui/material';
import styled from 'styled-components';
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
  return (
    <Wrapper>
      <PaperBox elevation={4}>
        <Title>College Management System</Title>

        <Description>
          Securely manage students, faculty, attendance, performance, and more — all in one dashboard.
        </Description>

        <ButtonGroup>
          <StyledLink to="/choose">
            <LightPurpleButton variant="contained" fullWidth>
              Login
            </LightPurpleButton>
          </StyledLink>

         
        </ButtonGroup>

        <FooterText>
          Don’t have an account?{" "}
          <Link to="/Adminregister" style={{ fontWeight: 700, color: "#5a2ec9" }}>
            Sign up
          </Link>
        </FooterText>
      </PaperBox>
    </Wrapper>
  );
};

export default Homepage;

// ---------------- Styled ----------------

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const PaperBox = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 45px;
  max-width: 520px;
  width: 100%;
  text-align: center;
  border-radius: 14px;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 900;
  margin-bottom: 20px;
  color: #121212;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 35px;
`;

const ButtonGroup = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const FooterText = styled.p`
  margin-top: 18px;
  font-size: 0.9rem;
  text-align: center;
`;
