import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Tweeter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";

const Navbar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }
    return (
        <Flex justifyContent="space-between" align="center" padding="30px">
            {/* left nav */}
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href='manoj.tk'>
                    <Image src={Facebook} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href='manoj.tk'>
                    <Image src={Tweeter} boxSize="42px" margin="0 15px" />
                </Link>
                <Link href='manoj.tk'>
                    <Image src={Email} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>

            {/* Right side */}
            <Flex
                justifyContent="space-around" align="center" width="40%" padding="30px 30px 30px 30px"
            >
                <Box margin="0 15px" fontFamily="VT323" >About</Box>
                <Spacer />
                <Box margin="0 15px" fontFamily="VT323" >Mint</Box>
                <Spacer />
                <Box margin="0 15px" fontFamily="VT323">Team</Box>
                <Spacer />

                {/* connect */}
                {isConnected ? (
                    <Box margin="0 15px" >Connected</Box>
                ) : (
                    <Button
                        backgroundColor="#D6517D"
                        borderRadius="5px"
                        color="white"
                        fontFamily="inherit"
                        cursor="pointer"
                        padding="15px"
                        margin="0 15px"
                        onClick={connectAccount}
                    >
                        Connect
                    </Button>
                )}
            </Flex>



        </Flex>
    )
}

export default Navbar;
