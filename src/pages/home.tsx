import { Flex, Input, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input
            name="email"
            type="email"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900",
            }}
            size="lg"
          />
          <Input
            name="password"
            type="password"
            bgColor="gray.900"
            variant="filled"
            _hover={{
              bgColor: "gray.900",
            }}
            size="lg"
          />
        </Stack>
      </Flex>
    </Flex>
  );
}
