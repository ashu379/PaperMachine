import React from "react";
import { Link } from "react-router-dom";
import logo from "../Pictures/logo.png";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { RiMenu2Line } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  const {
    isOpen: isLeftOpen,
    onOpen: onLeftOpen,
    onClose: onLeftClose,
  } = useDisclosure();
  const {
    isOpen: isRightOpen,
    onOpen: onRightOpen,
    onClose: onRightClose,
  } = useDisclosure();

  return (
    <>
      {/* // desktop header code */}
      <div className="desktop_header">
        <nav>
          <span className="logo">
            <Link to={"/"}>
              <img src={logo} alt="not" />
            </Link>
          </span>

          <main>
            <Link to={"/Tools"}>TOOLS</Link>
            <Link to={"/VideoCompressor"}>VIDEO COMPRESSOR</Link>
            <Link to={"/PDF_TO_WORD"}>PDF TO WORD</Link>
            <Link to={"/WATERMARK"}>WATERMARK</Link>
            <Link to={"/Test"}>Test</Link>
          </main>

          <span className="account_details">
            <Link id="login">Log-in</Link>
            <Link>Sign-up</Link>
          </span>
        </nav>
      </div>
      {/* // Desktop header code */}

      <div className="tab_header">
        <nav>
          <Button
            pos={"fixed"}
            top={"10"}
            left={"10"}
            colorScheme="black"
            onClick={() => {
              onLeftOpen();
              onRightClose();
            }}
          >
            <RiMenu2Line size={"30"} />
          </Button>
          <Drawer placement="left" onClose={onLeftClose} isOpen={isLeftOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} alignItems={"flex-start"}>
                  <Button variant={"ghost"} colorScheme={"$second"}>
                    {" "}
                    <Link to={"/Tools"}>TOOLS</Link>{" "}
                  </Button>
                  <Button variant={"ghost"} colorScheme={"$second"}>
                    {" "}
                    <Link to={"/VideoCompressor"}>VIDEO COMPRESSOR</Link>{" "}
                  </Button>
                  <Button variant={"ghost"} colorScheme={"$second"}>
                    {" "}
                    <Link to={"/PDF_TO_WORD"}>PDF TO WORD</Link>{" "}
                  </Button>
                  <Button variant={"ghost"} colorScheme={"$second"}>
                    {" "}
                    <Link to={"/WATERMARK"}>WATERMARK</Link>{" "}
                  </Button>
                  <Button variant={"ghost"} colorScheme={"$second"}>
                    {" "}
                    <Link to={"/WATERMARK"}>WATERMARK</Link>
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </nav>f
      </div>

      <div className="mobile_header">
        <span className="logo">
          <Link to={"/"}>
            <img src={logo} alt="not" />
          </Link>
        </span>

        <span className="space"></span>
        <span className="space"></span>
        <span className="space"></span>

        <FaRegCircleUser size={30} color="white" />

        <nav>
          <Button
            pos={"right"}
            top={"10"}
            left={"10"}
            onClick={() => {
              onRightOpen();
              onLeftClose();
            }}
          >
            <RiMenu2Line size={"20"} />
          </Button>
          <Drawer placement="right" onClose={onRightClose} isOpen={isRightOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader></DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} alignItems={"flex-start"}>
                  <Button variant={"ghost"} colorScheme={"$second"}>
                    {" "}
                    <Link to={"/Tools"}>TOOLS</Link>{" "}
                  </Button>
                  <Button variant={"ghost"} colorScheme={"$second"}>
                    {" "}
                    <Link to={"/VideoCompressor"}>VIDEO COMPRESSOR</Link>{" "}
                  </Button>
                  <Button variant={"ghost"} colorScheme={"$second"}>
                    {" "}
                    <Link to={"/PDF_TO_WORD"}>PDF TO WORD</Link>{" "}
                  </Button>
                  <Button variant={"ghost"} colorScheme={"$second"}>
                    {" "}
                    <Link to={"/WATERMARK"}>WATERMARK</Link>{" "}
                  </Button>
                  <Button variant={"ghost"} colorScheme={"$second"}>
                    {" "}
                    <Link to={"/WATERMARK"}>WATERMARK</Link>
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </nav>
      </div>
    </>
  );
};

export default Header;
