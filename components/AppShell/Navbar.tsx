import {ReactNode} from "react";
import {
    Box,
    BoxProps,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    IconButton,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import Header from "./Header";

export default function Navbar({children}: { children: ReactNode }) {
    const {isOpen, onOpen, onClose} = useDisclosure();

    function NavItem({children}: { children: ReactNode }) {
        return (
            <Flex
                align="center"
                px="4"
                pl="4"
                py="3"
                cursor="pointer"
                color={"black"}
                _hover={{
                    bg: "gray.100",
                    color: "black",
                }}
                role="group"
                fontWeight="semibold"
                transition=".15s ease"
            >
                {children}
            </Flex>
        );
    }


    function SidebarContent(boxProps?: BoxProps) {

        return (
            <Box
                as="nav"
                pos="fixed"
                top="0"
                left="0"
                zIndex="sticky"
                h="full"
                pb="10"
                overflowX="hidden"
                overflowY="auto"
                bg={"white"}
                borderColor={"inherit"}
                borderRightWidth="1px"
                w="60"
                {...boxProps}
            >
                <Flex px="4" py="5" align="center">
                    <Text
                        p={4}
                        fontSize="lg"
                        ml="2"
                        color={"black"}
                        fontWeight="semibold"
                        bgColor={"gray.100"}
                        rounded={"2xl"}
                    >
                        Wish-Hearthstone
                    </Text>
                </Flex>
                <Flex
                    direction="column"
                    as="nav"
                    fontSize="sm"
                    color="gray.600"
                    aria-label="Main Navigation"
                >
                    <NavItem>
                        <Text>Cock</Text>
                    </NavItem>
                </Flex>
            </Box>
        )
    }

    return (
        <>
            <Box as="section" bg={"gray.100"} minH="100vh">
                <SidebarContent display={{base: "none", md: "unset"}}/>
                <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                    <DrawerOverlay/>
                    <DrawerContent>
                        <SidebarContent w="full" borderRight="none"/>
                    </DrawerContent>
                </Drawer>

                <Box ml={{base: 0, md: "60"}} transition=".3s ease">
                    <Header/>
                    <Box as="main" p={4} pt={"20"}>
                        {children}
                    </Box>
                </Box>

            </Box>
        </>
    )
}