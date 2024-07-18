import { Box,   Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
     <>
    
 
 <SimpleGrid id="home" columns={2} spacing={10}
  // bg='rgb(170,210,175)' 
  bg={"#DCF2FD"}
  height='100vh'
   color='black'  display={['none','none','none', 'grid']}>
  <Box  m='auto' ml={'20'} >
       <Text  fontSize='4xl' >
             𝐇𝐞𝐥𝐥𝐨, 𝐦𝐲 𝐧𝐚𝐦𝐞 𝐢𝐬</Text>
            <Heading as='h2' size='3xl' color={"olive"}  >
            𝐀𝐛𝐡𝐢𝐣𝐞𝐞𝐭 𝐒𝐡𝐮𝐤𝐥𝐚 </Heading>


 <TypeAnimation
          sequence={[
        
        `i'm A MERN Developer!`,
        1000, 
        'A Frontend Developer',
        1000,
        `I'm a Problem Solver!`,
        1000,
        'Always Eager to Learn Things',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.7em',marginLeft:'15px', fontWeight:'500', display: 'inline-block' }}
      repeat={Infinity}
       
    /> 
 

  </Box>
  <Box  m='auto'  className="ProfileImageBox" >
  <Box  className="Profile_Img" >  { <Image m={'auto'}    src='src/images/IMG20240405185523-removebg-preview.png' alt='Main_Profile' />}
     <Heading fontSize={'2xl'}> <br /> 𝐀ᑲɦ𝗂𝗃𝖾𝖾𝗍 𝐒ɦυ𝗄ᥣα </Heading> 
      <Text fontSize='2xl' fontWeight={500} cursor={'pointer'} color='blue' textDecoration={"underline"}>Resume </Text> 
   </Box>
</Box>
   
</SimpleGrid>


{/* ------------------------------------------------------------------------------------------- */}

     

     
 <SimpleGrid id="home" raw={2} spacing={10} bg='rgb(150,215,175)' height='100vh'
   color='black'  display={['grid','grid','grid', 'none']}>
  <Box  m='auto' >
       <Text  fontSize='3xl' >
             𝐇𝐞𝐥𝐥𝐨, 𝐦𝐲 𝐧𝐚𝐦𝐞 𝐢𝐬</Text>
            <Heading as='h2' size='3xl' color={"olive"}  >
            𝐀𝐛𝐡𝐢𝐣𝐞𝐞𝐭 𝐒𝐡𝐮𝐤𝐥𝐚 </Heading>


 <TypeAnimation
          sequence={[
        
          `i'm A MERN Developer!`,
        1000, 
            'A Frontend Developer',
        1000,
              `I'm a Problem Solver!`,
        1000,
        'Always Eager to Learn things!',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '25px',marginLeft:'15px',fontWeight:'500', display: 'inline-block' }}
      repeat={Infinity}
    /> 
       
    

  </Box>
  <Box  m='auto' className="ProfileImageBox" >
  <Box  className="Profile_Img" >  { <Image m={'auto'}    src='src/images/IMG20240405185523-removebg-preview.png' alt='Main_Profile' />}
     <Heading fontSize={'2xl'}> <br /> 𝐀ᑲɦ𝗂𝗃𝖾𝖾𝗍 𝐒ɦυ𝗄ᥣα </Heading> 
    {/* <Text fontSize='2xl' color='blue' textDecoration={"underline"}>  <a href="#">𝐇𝗂𝗋𝖾 𝐌𝐄</a></Text> */}
    <Text fontSize='2xl' fontWeight={500} cursor={'pointer'} color='blue' textDecoration={"underline"}>Resume </Text> 
   </Box>
</Box>

 
   
</SimpleGrid>


     </>
  )
}

export default Home
