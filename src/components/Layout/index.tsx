import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import TabBar from "./Tabbar";

type LayoutProps = {
   children: React.ReactNode;
};

const AppLayout = ({ children }: LayoutProps) => {
   return (
      <Box paddingTop={20} paddingBottom={[32, 20]} minHeight="100vh" position="relative">
         <Header />
         <Box as="main" layerStyle="mainLayout" paddingBottom={8}>
            {children}
         </Box>
         <Footer />
         <TabBar />
      </Box>
   );
};

export default AppLayout;