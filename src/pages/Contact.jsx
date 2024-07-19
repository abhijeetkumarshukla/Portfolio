import { Box, Button, Heading, Image, SimpleGrid, Text, Tooltip, Link, useDisclosure } from "@chakra-ui/react"
 import BigImg from "../images/contactBigImg.png"
 import { FaLinkedin } from "react-icons/fa";
 import { FaGithub } from "react-icons/fa6";
 import { FaTwitter } from "react-icons/fa";
 import { MdMailOutline } from "react-icons/md";
 import { FaWhatsapp } from "react-icons/fa6";
 import { FaPhoneVolume } from "react-icons/fa6";
// import { Link } from "react-scroll";

const Contact = () => {

  const linkedInURL = 'https://www.linkedin.com/in/abhijeetshukla17';
  const githubURL  = 'https://github.com/abhijeetkumarshukla'
  const twitterURL = 'https://x.com/AbhijeetSonu17'
  const {
    isOpen: isLinkedInOpen,
    onOpen: onLinkedInOpen,
    onClose: onLinkedInClose,
  } = useDisclosure();
  
  const {
    isOpen: isGithubOpen,
    onOpen: onGithubOpen,
    onClose: onGithubClose,
  } = useDisclosure();

  const {
    isOpen: isTwitterOpen,
    onOpen: onTwitterOpen,
    onClose: onTwitterClose,
  } = useDisclosure();
  const delay = 200;
  return (
    <>
        <Heading pl={'45%'}  pt={'20'}  id="contacts" bg='#C6DDB2' color='black' fontSize={'4xl'}
                 display={['none','none','none', 'grid']}  >𝐂ⱺ𐓣𝗍α𝖼𝗍
        </Heading>
         
         <SimpleGrid  id="contacts" columns={2} spacing={10}  bg='#C6DDB2' color='black' height='84vh'
                     display={['none','none','none', 'grid']} >
             <Box w={'80%'} m={'auto'}>
             <Image w={'80%'} src={BigImg}/>
             </Box>
            
       <SimpleGrid columns={2}  m={'auto'} w={'60%'} h={'30%'}>
       <Box>
        <Tooltip
          // label={"Let's Connect On LinkedIn"}
          aria-label="LinkedIn URL"
          hasArrow
          isOpen={isLinkedInOpen}
          onClose={onLinkedInClose}
          openDelay={delay}
          p={3}
          borderRadius={10}
        >
          <Button
            w={'150px'}
            p={'6'}
            bg={'#000000'}
            color={'grey'}
            onMouseEnter={onLinkedInOpen}
            onMouseLeave={onLinkedInClose}
            onClick={() => window.open(linkedInURL, '_blank')}
          >
            <Text m={2}>ʟɪɴᴋᴇᴅɪɴ</Text>
            <FaLinkedin />
          </Button>
        </Tooltip>
      </Box>
  
      <Box height='80px'>
        <Tooltip
          // label={"Let's Connect On Github"}
          aria-label="Github URL"
          hasArrow
          isOpen={isGithubOpen}
          onClose={onGithubClose}
          openDelay={delay}
          p={3}
          borderRadius={10}
        >
          <Button
            w={'150px'}
            p={'6'}
            bg={'#000000'}
            color={'grey'}
            onMouseEnter={onGithubOpen}
            onMouseLeave={onGithubClose}
            onClick={() => window.open(githubURL, '_blank')}
          >
            <Text m={2}>ɢɪᴛʜᴜʙ</Text>
            <FaGithub />
          </Button>
        </Tooltip>
      </Box>

      
      <Box height='80px'>
        <Tooltip
          // label={"Let's Connect On Twitter"}
          aria-label="Github URL"
          hasArrow
          isOpen={isTwitterOpen}
          onClose={onTwitterClose}
          openDelay={delay}
          p={3}
          borderRadius={10}
        >
          <Button
            w={'150px'}
            p={'6'}
            bg={'#000000'}
            color={'grey'}
            onMouseEnter={onTwitterOpen}
            onMouseLeave={onTwitterClose}
            onClick={() => window.open(twitterURL, '_blank')}
          >
            <Text m={2}>ᴛᴡɪᴛᴛᴇʀ</Text>
            < FaTwitter />
          </Button>
        </Tooltip>
      </Box>
             
      <Box bg='' height='80px'>
      <Link href="tel:8210628230" >
        <Button _hover={{ textDecoration: '8210628230' }} w={'150px'} p='6' bg={'#000000'} color={'grey'}>
          <span>
            <Text fontSize={'17'} m={2}>ᴘʜᴏɴᴇ</Text>
          </span>
          <FaPhoneVolume />
        </Button>
      </Link>
    </Box>


           <Box bg='' height='80px'>
      <Link href="mailto:shuklaabhijeet510@gmail.com" _hover={{ textDecoration: 'none' }}>
        <Button w={'150px'} p='6' bg={'#000000'} color={'grey'}>
          <span>
            <Text fontSize={'17'} m={2}>ᴍᴀɪʟ</Text>
          </span>
          <MdMailOutline />
        </Button>
      </Link>
    </Box>
            
    <Box bg='' height='80px'>
      <Link href="https://wa.me/8083839342 " _hover={{ textDecoration: 'none' }}>
        <Button w={'150px'} p='6' bg={'#000000'} color={'grey'}>
          <span>
            <Text fontSize={'17'} m={2}>ᴡʜᴀᴛsᴀᴘᴘ</Text>
          </span>
          <FaWhatsapp />
        </Button>
      </Link>
    </Box>          
              
             
       </SimpleGrid>

         </SimpleGrid>


{/* ------------------------------------------------------------------------------------------------- */}




<Heading pl={'36%'}  pt={'8'}  i  bg='#C6DDB2' color='black' fontSize={'4xl'}
                 display={['grid','grid','none', 'none']}  >𝐂ⱺ𐓣𝗍α𝖼𝗍
        </Heading>
         
         <SimpleGrid  id="contact" row={2} pl={12} spacing={10}  bg='#C6DDB2' color='black' height='84vh'
                        display={['grid','grid','none', 'none']}  >
             <Box w={'80%'} m={'auto'}>
             <Image w={'80%'} src={BigImg}/>
             </Box>
            
       <SimpleGrid columns={2}   w={'100%'} h={'30%'}>
        <Box>
        <Tooltip
          // label={"Let's Connect On LinkedIn"}
          aria-label="LinkedIn URL"
          hasArrow
          isOpen={isLinkedInOpen}
          onClose={onLinkedInClose}
          openDelay={delay}
          p={3}
          borderRadius={10}
        >
          <Button
            w={'150px'}
            p={'6'}
            bg={'#000000'}
            color={'grey'}
            onMouseEnter={onLinkedInOpen}
            onMouseLeave={onLinkedInClose}
            onClick={() => window.open(linkedInURL, '_blank')}
          >
            <Text m={2}>ʟɪɴᴋᴇᴅɪɴ</Text>
            <FaLinkedin />
          </Button>
        </Tooltip>
      </Box>
  
      <Box height='80px'>
        <Tooltip
          // label={"Let's Connect On Github"}
          aria-label="Github URL"
          hasArrow
          isOpen={isGithubOpen}
          onClose={onGithubClose}
          openDelay={delay}
          p={3}
          borderRadius={10}
        >
          <Button
            w={'150px'}
            p={'6'}
            bg={'#000000'}
            color={'grey'}
            onMouseEnter={onGithubOpen}
            onMouseLeave={onGithubClose}
            onClick={() => window.open(githubURL, '_blank')}
          >
            <Text m={2}>ɢɪᴛʜᴜʙ</Text>
            <FaGithub />
          </Button>
        </Tooltip>
      </Box>
            

      <Box height='80px'>
        <Tooltip
          // label={"Let's Connect On Twitter"}
          aria-label="Github URL"
          hasArrow
          isOpen={isTwitterOpen}
          onClose={onTwitterClose}
          openDelay={delay}
          p={3}
          borderRadius={10}
        >
          <Button
            w={'150px'}
            p={'6'}
            bg={'#000000'}
            color={'grey'}
            onMouseEnter={onTwitterOpen}
            onMouseLeave={onTwitterClose}
            onClick={() => window.open(twitterURL, '_blank')}
          >
            <Text m={2}>ᴛᴡɪᴛᴛᴇʀ</Text>
            < FaTwitter />
          </Button>
        </Tooltip>
      </Box> 
     
      <Box bg='' height='80px'>
      <Link href="tel:8210628230" >
        <Button _hover={{ textDecoration: '8210628230' }} w={'150px'} p='6' bg={'#000000'} color={'grey'}>
          <span>
            <Text fontSize={'17'} m={2}>ᴘʜᴏɴᴇ</Text>
          </span>
          <FaPhoneVolume />
        </Button>
      </Link>
    </Box>

    <Box bg='' height='80px'>
      <Link href="mailto:shuklaabhijeet510@gmail.com" _hover={{ textDecoration: 'none' }}>
        <Button w={'150px'} p='6' bg={'#000000'} color={'grey'}>
          <span>
            <Text fontSize={'17'} m={2}>ᴍᴀɪʟ</Text>
          </span>
          <MdMailOutline />
        </Button>
      </Link>
    </Box>
 

    <Box bg='' height='80px'>
      <Link href="https://wa.me/8083839342 " _hover={{ textDecoration: 'none' }}>
        <Button w={'150px'} p='6' bg={'#000000'} color={'grey'}>
          <span>
            <Text fontSize={'17'} m={2}>ᴡʜᴀᴛsᴀᴘᴘ</Text>
          </span>
          <FaWhatsapp />
        </Button>
      </Link>
    </Box>          
              

              
             
              
              
             
       </SimpleGrid>

         </SimpleGrid>



         {/* -------------------------------------------------------------------*/}



         <Heading pl={'43%'}  pt={'8'}   bg='#C6DDB2' color='black' fontSize={'4xl'}
                 display={['none','grid','grid', 'none']}  >𝐂ⱺ𐓣𝗍α𝖼𝗍
        </Heading>
         
         <SimpleGrid  id="contact" row={2} pl={12} spacing={10}  bg='#C6DDB2' color='black' height='84vh'
                        display={['none','grid','grid', 'none']}  >
             <Box w={'80%'} m={'auto'} ml={'15%'}>
             <Image w={'80%'} src={BigImg}/>
             </Box>
            
       <SimpleGrid columns={2} ml={'20%'}  w={'80%'} h={'30%'}>
       <Box>
        <Tooltip
          // label={"Let's Connect On LinkedIn"}
          aria-label="LinkedIn URL"
          hasArrow
          isOpen={isLinkedInOpen}
          onClose={onLinkedInClose}
          openDelay={delay}
          p={3}
          borderRadius={10}
        >
          <Button
            w={'150px'}
            p={'6'}
            bg={'#000000'}
            color={'grey'}
            onMouseEnter={onLinkedInOpen}
            onMouseLeave={onLinkedInClose}
            onClick={() => window.open(linkedInURL, '_blank')}
          >
            <Text m={2}>ʟɪɴᴋᴇᴅɪɴ</Text>
            <FaLinkedin />
          </Button>
        </Tooltip>
      </Box>
  
      <Box height='80px'>
        <Tooltip
          // label={"Let's Connect On Github"}
          aria-label="Github URL"
          hasArrow
          isOpen={isGithubOpen}
          onClose={onGithubClose}
          openDelay={delay}
          p={3}
          borderRadius={10}
        >
          <Button
            w={'150px'}
            p={'6'}
            bg={'#000000'}
            color={'grey'}
            onMouseEnter={onGithubOpen}
            onMouseLeave={onGithubClose}
            onClick={() => window.open(githubURL, '_blank')}
          >
            <Text m={2}>ɢɪᴛʜᴜʙ</Text>
            <FaGithub />
          </Button>
        </Tooltip>
      </Box>

      <Box height='80px'>
        <Tooltip
          // label={"Let's Connect On Twitter"}
          aria-label="Github URL"
          hasArrow
          isOpen={isTwitterOpen}
          onClose={onTwitterClose}
          openDelay={delay}
          p={3}
          borderRadius={10}
        >
          <Button
            w={'150px'}
            p={'6'}
            bg={'#000000'}
            color={'grey'}
            onMouseEnter={onTwitterOpen}
            onMouseLeave={onTwitterClose}
            onClick={() => window.open(twitterURL, '_blank')}
          >
            <Text m={2}>ᴛᴡɪᴛᴛᴇʀ</Text>
            < FaTwitter />
          </Button>
        </Tooltip>
      </Box>
            
      <Box bg='' height='80px'>
      <Link href="tel:8210628230" >
        <Button _hover={{ textDecoration: '8210628230' }} w={'150px'} p='6' bg={'#000000'} color={'grey'}>
          <span>
            <Text fontSize={'17'} m={2}>ᴘʜᴏɴᴇ</Text>
          </span>
          <FaPhoneVolume />
        </Button>
      </Link>
    </Box>
    <Box bg='' height='80px'>
      <Link href="mailto:shuklaabhijeet510@gmail.com" _hover={{ textDecoration: 'none' }}>
        <Button w={'150px'} p='6' bg={'#000000'} color={'grey'}>
          <span>
            <Text fontSize={'17'} m={2}>ᴍᴀɪʟ</Text>
          </span>
          <MdMailOutline />
        </Button>
      </Link>
    </Box>

    <Box bg='' height='80px'>
      <Link href="https://wa.me/8083839342 " _hover={{ textDecoration: 'none' }}>
        <Button w={'150px'} p='6' bg={'#000000'} color={'grey'}>
          <span>
            <Text fontSize={'17'} m={2}>ᴡʜᴀᴛsᴀᴘᴘ</Text>
          </span>
          <FaWhatsapp />
        </Button>
      </Link>
    </Box>          
              
 
              
             
              
       </SimpleGrid>

         </SimpleGrid>


    </>
  )
}

export default Contact
