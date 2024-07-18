import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import '../Styles/Projects.css';
import { Mousewheel, Pagination } from 'swiper/modules';
import lenskartBig from '../images/projects/lenskartbig.png';
// import lenskartSmall from '../images/projects/lenskartMobile.png'
 

const Projects = () => {
  return (<>
      <Box>
         <Heading pl={'45%'}  id="projects"  pt={'20'}  bg='#C6DDB2' color='black' fontSize={'4xl'}
              display={['none','none','none', 'grid']}  >𝐌𝗒 𝐏𝗋ⱺ𝗃𝖾𝖼𝗍𝗌</Heading>
      </Box>


        <Box  id="projects"  bg='#C6DDB2' h={'100vh'} pt={'10'} >
             <Box m={'auto'} h={'70%'} w={'90%'} pt={'15px'} >

        <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>  
              <Flex gap={15} justifyContent={'space-around'} >
              <Image w={'100%'}  src={lenskartBig}/>
               <SimpleGrid   w={'45%'} >
                <Heading fontSize={'3xl'}>
                  Leanskart Clone
                </Heading>
                <Text size={'xl'}>  This project is a clone of the Lenskart website, a popular online platform for buying eyewear. It is built using javaScript, React.js, React Router,Contaxt Api, and Chakra UI to replicate the key features and functionalities of the Lenskart website for learning and practice purposes.</Text>
               </SimpleGrid>
              {/* <Image w={'40%'} h={'20%'} src={lenskartSmall}/> */}
              </Flex>
           </SwiperSlide>
        <SwiperSlide><Image src="src/images/About image.png"/></SwiperSlide>
        <SwiperSlide><Image src="src/images/About image.png"/></SwiperSlide>
        <SwiperSlide><Image src="src/images/About image.png"/></SwiperSlide>
        <SwiperSlide><Image src="src/images/About image.png"/></SwiperSlide>
        <SwiperSlide><Image src="src/images/About image.png"/></SwiperSlide>
         
      </Swiper>

        </Box>
        </Box>


        </>
    
  )
}

export default Projects
