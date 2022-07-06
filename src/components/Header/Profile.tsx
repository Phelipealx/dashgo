import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = false }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Phelipe Magalhães</Text>
          <Text color="gray.300" fontSize="small">
            phelipemagalhaes13@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Phelipe Magalhães"
        src="https://img.ex.co/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2.5/v1614889686/yiyfto7cfdrsf8wkquqk.jpg"
      />
    </Flex>
  );
}
