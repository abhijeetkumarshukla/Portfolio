import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react"


const Statistics = () => {
  return (
   
   <>
         <Heading pl={'45%'}  id="statistics"  pt={'20'}  bg="rgb(170,215,175)" color='black' fontSize={'4xl'}
              display={['none','none','none', 'grid']} > 𝐒𝗍α𝗍𝗂𝗌𝗍𝗂𝖼𝗌
              </Heading>

        <SimpleGrid row={2} spacing={10}  id="statistics"    bg="rgb(170,215,175)" color='black' height='84vh'
             display={['none','none','none', 'grid']} >
           <Box pl={'15%'} >
            <Image w={'80%'} src=" https://ghchart.rshah.org/abhijeetkumarshukla" alt="gitStats"/>
           </Box>


        <Flex justifyContent={'center'} row={3} spacing={10} gap={'10'} >
               <Image w={'28%'} src="https://camo.githubusercontent.com/696030a32ee73919049c76348dd0fd0a1a26ad842be16ff2430b39732260e722/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616268696a6565746b756d61727368756b6c612673686f775f69636f6e733d74727565266c6f63616c653d656e"  alt="stats"/>   
                <Image  w={'28%'} src="https://camo.githubusercontent.com/14a898e6c5ed9e338d86744e3e26b0ca83aa3ce0c4a7f9582ee60c334cfb1b90/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d616268696a6565746b756d61727368756b6c612673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="most used language "/>
                <Image  w={'28%'} src="https://camo.githubusercontent.com/24a48d2a81eee41752a967115fcacb660f4ed11baa6565d6a6d0a2b9eff7aa77/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d616268696a6565746b756d61727368756b6c6126" alt="streak"/>
        </Flex>   


        </SimpleGrid>      

       {/* ------------------------------------------------------------------  */}

       <Heading pl={'35%'}    pt={'8'}  bg="rgb(170,215,175)" color='black' fontSize={'4xl'}
              display={['grid','grid','none', 'none']} > 𝐒𝗍α𝗍𝗂𝗌𝗍𝗂𝖼𝗌
              </Heading>

        <SimpleGrid column={2}  id="statistic" pt={'8'}   bg="rgb(170,215,175)" color='black' height='84vh'
             display={['grid','grid','none', 'none']} >
           <Box   >
            <Image w={'100%'} h={'60%'} src=" https://ghchart.rshah.org/abhijeetkumarshukla" alt="gitStats"/>
           </Box>


        <SimpleGrid ml={'20'} mt={-10} row={3} gap={'5'} >
               <Image w={'80%'} src="https://camo.githubusercontent.com/696030a32ee73919049c76348dd0fd0a1a26ad842be16ff2430b39732260e722/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616268696a6565746b756d61727368756b6c612673686f775f69636f6e733d74727565266c6f63616c653d656e"  alt="stats"/>   
               <Image w={'80%'} src="https://camo.githubusercontent.com/14a898e6c5ed9e338d86744e3e26b0ca83aa3ce0c4a7f9582ee60c334cfb1b90/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d616268696a6565746b756d61727368756b6c612673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="most used language "/>
               <Image w={'80%'} src="https://camo.githubusercontent.com/24a48d2a81eee41752a967115fcacb660f4ed11baa6565d6a6d0a2b9eff7aa77/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d616268696a6565746b756d61727368756b6c6126" alt="streak"/>
        </SimpleGrid>   


        </SimpleGrid>   

        {/* ---------------------------------------------------------------------- */}


        <Heading pl={'40%'}   pt={'8'}  bg="rgb(170,215,175)" color='black' fontSize={'4xl'}
              display={['none','grid','grid', 'none']} > 𝐒𝗍α𝗍𝗂𝗌𝗍𝗂𝖼𝗌
              </Heading>

        <SimpleGrid column={2}  id="statistic"  pt={5}   bg="rgb(170,215,175)" color='black' height='84vh'
             display={['none','grid','grid', 'none']} >
           <Box   >
            <Image ml={'5rem'} w={'85%'} h={'70%'} src=" https://ghchart.rshah.org/abhijeetkumarshukla" alt="gitStats"/>
           </Box>


        <SimpleGrid ml={'11rem'} row={3} gap={'6'} >
               <Image w={'75%'} src="https://camo.githubusercontent.com/696030a32ee73919049c76348dd0fd0a1a26ad842be16ff2430b39732260e722/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616268696a6565746b756d61727368756b6c612673686f775f69636f6e733d74727565266c6f63616c653d656e"  alt="stats"/>   
               <Image w={'75%'} src="https://camo.githubusercontent.com/14a898e6c5ed9e338d86744e3e26b0ca83aa3ce0c4a7f9582ee60c334cfb1b90/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d616268696a6565746b756d61727368756b6c612673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="most used language "/>
               <Image w={'75%'} src="https://camo.githubusercontent.com/24a48d2a81eee41752a967115fcacb660f4ed11baa6565d6a6d0a2b9eff7aa77/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d616268696a6565746b756d61727368756b6c6126" alt="streak"/>
        </SimpleGrid>   


        </SimpleGrid>   

   </>
  )
}

export default Statistics
