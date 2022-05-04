import { Box, Heading, HStack, Tooltip, Icon } from '@chakra-ui/react';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { AboutContext } from 'contexts/about';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6,
    },
  },
};

const item = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
};

const FavoriteTS = () => {
  const aboutCtx = useContext(AboutContext);

  return (
    <Box marginBottom={8}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', delay: 0.4 }}>
        <Heading as="h3" fontSize={24}>
          Current Favorite Tech Stack
        </Heading>
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show">
        <HStack marginTop={2} spacing={3}>
          {aboutCtx.about.favorite_tech_stack.map((fts, idx) => (
            <motion.div key={idx} variants={item}>
              <Tooltip label={fts.name} closeOnClick={false}>
                <span>
                  <Icon as={fts.icon} fontSize={28} />
                </span>
              </Tooltip>
            </motion.div>
          ))}
        </HStack>
      </motion.div>
    </Box>
  );
};

export default FavoriteTS;
