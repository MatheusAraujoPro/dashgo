import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProos {
  name: string;
  email: string;
}

export function Profile({ name, email }: ProfileProos) {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>{name}</Text>
        <Text color="gray.300" fontSize="small">
          {email}
        </Text>
      </Box>
      <Avatar size="md" name="Matheus de Araújo" />
    </Flex>
  );
}
