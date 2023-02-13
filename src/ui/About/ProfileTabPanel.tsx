import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons';
import { ImProfile } from 'react-icons/im';

import Resume from './TabItems/Resume';

type TabIcon = {
   icon?: IconType;
   children?: React.ReactNode;
}

const CustomTab = ({icon, children}: TabIcon) => {
   return (
      <Tab _selected={{color: "#2260ff"}}><Box as={icon} mr="2"/>{children}</Tab>
   );
}

const ProfileTabPanel = () => {
   return (
      <Tabs 
         as="section"
         variant="unstyled"
         align="center"
         width="100%"
         rounded="lg"
         background="bg1"
         borderWidth={2}
         borderColor="borderColor"
      >
         <TabList >
            <CustomTab icon={ImProfile}>Perfil</CustomTab>
            <CustomTab icon={ImProfile}>Curriculum</CustomTab>
         </TabList>
         <TabPanels>
            <TabPanel>
               Hola, bienvenido a mi perfil :)<br/>
               En un futuro pondré algo aquí.
               <Image
                  width={["75%", "25%"]}
                  src="assets/HelloCat.gif"
                  alt="Hello Cat"
                  margin="auto"
               />
            </TabPanel>
            <TabPanel>
               <Resume/>
            </TabPanel>
         </TabPanels>
      </Tabs>
   );
}



export default ProfileTabPanel;