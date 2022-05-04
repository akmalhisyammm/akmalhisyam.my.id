import { Box, Heading, HStack, Tooltip, Icon } from '@chakra-ui/react';
import { useContext } from 'react';
import { AboutContext } from 'contexts/about';

const FavoriteTS = () => {
  const aboutCtx = useContext(AboutContext);

  return (
    <Box marginBottom={8}>
      <Heading as="h3" fontSize={24}>
        Current Favorite Tech Stack
      </Heading>

      <HStack marginTop={2} spacing={3}>
        {aboutCtx.about.favorite_tech_stack.map((fts) => (
          <Tooltip key={fts.name} label={fts.name}>
            <span>
              <Icon as={fts.icon} fontSize={28} />
            </span>
          </Tooltip>
        ))}
      </HStack>
    </Box>
  );
};

export default FavoriteTS;
