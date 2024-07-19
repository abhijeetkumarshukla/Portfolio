import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent,  
         DrawerOverlay, Flex,  Heading,           Spacer,  Text, useDisclosure } from "@chakra-ui/react"
import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-scroll";

 

const Navbar = () => {

  const [size, setSize] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const scrollTo = () => {
    scroll.scrollTo(100);  
  };
 
  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
  const sizes = ['full']

  const scrollToSection = (sectionId) => {
    return (event) => {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        onClose()
      }
    };
  };

  return (
  <>
  <Flex  justifyContent='space-between' alignItems='center' gap='2' bg='#C6DDB2' color='black'
        display={['none','none','none', 'flex']}
        position="sticky"
        top={0}
        zIndex={1000}
        p={1}
        >
  <Box p='2'>
    <Heading as='h2' size='xl' ml={2}>𝐀𝔟𝔥𝔦𝔧𝔢𝔢𝔱</Heading>
  </Box>
  
  <Flex gap='6' >
  <Text cursor="pointer" fontSize="19">
        <a href="#" onClick={scrollToSection('home')}>𝐇𝐨𝐦𝐞</a>
      </Text>
      <Text cursor="pointer" fontSize="19">
        <a href="#about" onClick={scrollToSection('about')}>𝐀𝐛𝐨𝐮𝐭</a>
      </Text>
      <Text cursor="pointer" fontSize="19">
        <a href="#skills" onClick={scrollToSection('skills')}>𝐒𝐤𝐢𝐥𝐥𝐬</a>
      </Text>
      <Text cursor="pointer" fontSize="19">
        <a href="#projects" onClick={scrollToSection('projects')}>𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬</a>
      </Text>
      <Text cursor="pointer" fontSize="19">
        <a href="#statistics" onClick={scrollToSection('statistics')}>𝐒𝐭𝐚𝐭𝐢𝐬𝐭𝐢𝐜𝐬</a>
      </Text>
      <Text cursor="pointer" fontSize="19">
        <a href="#contacts" onClick={scrollToSection('contacts')}>𝐂𝐨𝐧𝐭𝐚𝐜𝐭</a>
      </Text>
  <ButtonGroup  mr='3'>  
    <Button    colorScheme='yellow' pt={-2} pb={0} fontSize='16' color='#0d8096'>𝐑𝐞𝐬𝐮𝐦𝐞</Button>
  </ButtonGroup>
  </Flex>
</Flex>

{/* --------------------------------------------------------------- */}


<Flex minWidth='max-content' alignItems='center' gap='2' bg='#C6DDB2' color='black'
       display={['flex','flex','flex', 'none']}
       position="sticky"
       top={0}
       zIndex={1000}>
  <Box p='2'>
    <Heading as='h2' size='2xl' ml={2}>𝐀𝔟𝔥𝔦𝔧𝔢𝔢𝔱</Heading>
  </Box>
  <Spacer />

  {sizes.map((size) => (
        <Button
          onClick={() => handleClick(size)}
          key={size}
          m={4}
          bg='#C6DDB2'
          _hover='none'
          fontSize={'35px'}
        >{<HiOutlineBars3/>}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen}  >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
           
          <DrawerBody>
 
          <Flex flexDirection="column" fontSize="25" pt="20" alignItems="center" gap="6">
      <Link
        activeClass="active"
        to="homes"
        fontSize="25"
        spy={true}
        smooth={true}
        offset={-70}
        // offset={-4000}
        duration={500}
      >
        𝐇𝐨𝐦𝐞
      </Link>

      <Link
        activeClass="active"
        to="abouts"
        fontSize="25"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        // onSetActive={scrollTo}
        onClick={scrollToSection('about')}
      >
        
        𝐀𝐛𝐨𝐮𝐭
      </Link>

      <Link
        activeClass="active"
        to="skill"
        fontSize="25"
        spy={true}
        smooth={true}
        // offset={0}
        offset={-65}
        duration={500}
      >
        𝐒𝐤𝐢𝐥𝐥𝐬
      </Link>

      <Link
        activeClass="active"
        to="projects"
        fontSize="25"
        spy={true}
        smooth={true}
        offset={60}
        // offset={-3500}
        duration={500}
      >
        𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬
      </Link>

      <Link
        activeClass="active"
        to="statistic"
        fontSize="25"
        spy={true}
        smooth={true}
        offset={-70}
        // offset={0}
        duration={500}
      >
        𝐒𝐭𝐚𝐭𝐢𝐬𝐭𝐢𝐜𝐬
      </Link>

      <Link
        activeClass="active"
        to="contact"
        fontSize="25"
        spy={true}
        offset={-75}
        smooth={true}
        // offset={4000}
 
        duration={300}
      >
        𝐂𝐨𝐧𝐭𝐚𝐜𝐭
      </Link>
    </Flex> 

{/* 
            <Flex flexDirection="column" pt="20" alignItems="center" gap="6">
              <Text cursor="pointer" fontSize="25" onClick={scrollToSection('home')}>𝐇𝐨𝐦𝐞</Text>
              <Text cursor="pointer" to='/about' fontSize="25" onClick={scrollToSection('about')}>𝐀𝐛𝐨𝐮𝐭</Text>
              <Text cursor="pointer" fontSize="25" onClick={scrollToSection('skills')}>𝐒𝐤𝐢𝐥𝐥𝐬</Text>
              <Text cursor="pointer" fontSize="25" onClick={scrollToSection('projects')}>𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬</Text>
              <Text cursor="pointer" fontSize="25" onClick={scrollToSection('statistics')}>𝐒𝐭𝐚𝐭𝐢𝐬𝐭𝐢𝐜𝐬</Text>
              <Text cursor="pointer" fontSize="25" onClick={scrollToSection('contacts')}>𝐂𝐨𝐧𝐭𝐚𝐜𝐭</Text>
              <ButtonGroup mr="3">
                <Button colorScheme="yellow" pt={-2} pb={0} fontSize="16" color="#0d8096">𝐑𝐞𝐬𝐮𝐦𝐞</Button>
              </ButtonGroup>
            </Flex>   */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        
  
</Flex>

 
  </>
  )
}

export default Navbar
