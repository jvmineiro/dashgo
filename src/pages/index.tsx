import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w="100w" h="100vh" alignItems="center" justifyContent="center">
      <Flex as="form" width="100%" maxWidth={360} backgroundColor="gray.800" padding="8" borderRadius={8} flexDirection="column">
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            
            <Input  
              name="email" 
              type="email" 
              id="email"
              focusBorderColor="pink.500" 
              bgColor="gray.900" 
              variant="filled" 
              _hover={{bgcolor: "gray.900"}}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>

            <Input  
              name="password"
              type="password"
              id="password"
              focusBorderColor="pink.500" 
              bgColor="gray.900" 
              variant="filled"
              _hover={{bgcolor: "gray.900"}}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
