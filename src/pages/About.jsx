import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import Main from '../images/About image.png'

const About = () => {
  return (<>
          <Heading pl={'45%'} pt={'20'} id="about" bg='#C6DDB2' color='black' fontSize={'4xl'}
              display={['none','none','none', 'grid']}  >𝐀ᑲⱺυ𝗍 𝐌𝖾</Heading>

    <SimpleGrid id='about' columns={2} spacing={10}  bg='#C6DDB2' color='black' height='84vh'
     display={['none','none','none', 'grid']}>

        <Box>
            <Box w={'80%'} m={'auto'} ml={'20%'} >
                <Image w={'80%'}  src={Main}/>
            </Box>
        </Box>


        <Box  w={'80%'} mt={'30px'} ml={'40px'}  >
            <Text fontSize={'20'} fontWeight={'500'}>
                :-  𝐇𝖾ᥣᥣⱺ! I'm  𝐀ᑲɦ𝗂𝗃𝖾𝖾𝗍 𝐒ɦυ𝗄ᥣα, a passionate Full Stack Developer From Chapra, Bihar.
                A skilled full-stack web developer proficient in HTML, CSS, JavaScript, Express.js, and Node.js. Completed a comprehensive 1000+ hour web development and Generative AI/Prompt Engineering course at Masai School with hands-on experience in individual and collaborative projects. Seeking an opportunity to apply the skills and knowledge while continuing to learn and grow in this dynamic field.

            </Text>

            <Heading fontSize={'30px'} mt={'3'}>Some of my interests apart from Coding:</Heading>
             <Text mt={'3'}>
                :- Playing & Watching  𝐂𝐫𝐢𝐜𝐤𝐞𝐭 <br />
                :- 𝐂𝐨𝐨𝐤𝐢𝐧𝐠 𝐅𝐨𝐨𝐝 <br />
                :- 𝐓𝐫𝐚𝐯𝐞𝐥𝐥𝐢𝐧𝐠

             </Text>
        </Box>

    </SimpleGrid>


    {/* ----------------------------------------------------------------------- */}
          
    <Heading pl={'33%'}    pt={'8'} bg='#C6DDB2' color='black' fontSize={'4xl'}
       display={['grid','grid','none', 'none']} >𝐀ᑲⱺυ𝗍 𝐌𝖾</Heading>

    <SimpleGrid  row={2} spacing={10}  id="abouts" bg='#C6DDB2' color='black' height='100vh'
     display={['grid','grid','none', 'none']}>

        <Box>
            <Box w={'80%'} m={'auto'} ml={'20%'} >
                <Image w={'80%'}  src='src\images\About image.png'/>
            </Box>
        </Box>


        <Box  w={'80%'} mt={'-10'} ml={'40px'}  >
            <Text fontSize={'17px'} fontWeight={'500'}>
                :-  𝐇𝖾ᥣᥣⱺ! I'm  𝐀ᑲɦ𝗂𝗃𝖾𝖾𝗍 𝐒ɦυ𝗄ᥣα, a passionate Full Stack Developer From Chapra, Bihar.
                A skilled full-stack web developer proficient in HTML, CSS, JavaScript, Express.js, and Node.js. Completed a comprehensive 1000+ hour web development and Generative AI/Prompt Engineering course at Masai School with hands-on experience in individual and collaborative projects. Seeking an opportunity to apply the skills and knowledge while continuing to learn and grow in this dynamic field.

            </Text>

            <Heading fontSize={'20px'} mt={'3'}>Some of my interests apart from Coding:</Heading>
             <Text mt={'3'} fontSize={'17px'} fontWeight={'500'}>
                :- Playing & Watching  𝐂𝐫𝐢𝐜𝐤𝐞𝐭 <br />
                :- 𝐂𝐨𝐨𝐤𝐢𝐧𝐠 𝐅𝐨𝐨𝐝 <br />
                :- 𝐓𝐫𝐚𝐯𝐞𝐥𝐥𝐢𝐧𝐠

             </Text>
        </Box>

    </SimpleGrid>
    
{/* -------------------------------------------------------------------------------- */}
         


<Heading pl={'37%'}     pt={'8'} bg='#C6DDB2' color='black' fontSize={'4xl'}
       display={['none','grid','grid', 'none']} >𝐀ᑲⱺυ𝗍 𝐌𝖾</Heading>

    <SimpleGrid  row={2} spacing={10}  bg='#C6DDB2' color='black' height='100vh'
     display={['none','grid','grid', 'none']}  id="abouts">

        <Box>
            <Box w={'80%'} m={'auto'} ml={'20%'} >
                <Image w={'80%'}  src='src\images\About image.png'/>
            </Box>
        </Box>


        <Box  w={'80%'} mt={'-10'} ml={'15%'}  >
            <Text fontSize={'25px'} fontWeight={'500'}>
                :-  𝐇𝖾ᥣᥣⱺ! I'm  𝐀ᑲɦ𝗂𝗃𝖾𝖾𝗍 𝐒ɦυ𝗄ᥣα, a passionate Full Stack Developer From Chapra, Bihar.
                A skilled full-stack web developer proficient in HTML, CSS, JavaScript, Express.js, and Node.js. Completed a comprehensive 1000+ hour web development and Generative AI/Prompt Engineering course at Masai School with hands-on experience in individual and collaborative projects. Seeking an opportunity to apply the skills and knowledge while continuing to learn and grow in this dynamic field.

            </Text>

            <Heading fontSize={'30px'} mt={'3'}>Some of my interests apart from Coding:</Heading>
             <Text mt={'3'} fontSize={'25px'} fontWeight={'500'}>
                :- Playing & Watching  𝐂𝐫𝐢𝐜𝐤𝐞𝐭 <br />
                :- 𝐂𝐨𝐨𝐤𝐢𝐧𝐠 𝐅𝐨𝐨𝐝 <br />
                :- 𝐓𝐫𝐚𝐯𝐞𝐥𝐥𝐢𝐧𝐠

             </Text>
        </Box>

    </SimpleGrid>
         
        
         </>
  )
}
  
export default About
