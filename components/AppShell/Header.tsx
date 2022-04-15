import {Box, Flex, Text} from "@chakra-ui/react";

export default function Header() {
    return (
        <Box height={"20"}>
            <Flex
                zIndex={"dropdown"}
                as="header"
                align="center"
                justify="space-between"
                w="full"
                px="4"
                bg={"white"}
                borderBottomWidth="1px"
                borderColor="blackAlpha.300"
                h="14"
                position={"fixed"}
            >
                <Text color={"black"} fontSize={{base: "xl", md: "4xl"}}>
                    WISH HEARTHSTONE
                </Text>
            </Flex>
        </Box>
    )
}