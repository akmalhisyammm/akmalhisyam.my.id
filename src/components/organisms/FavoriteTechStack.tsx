'use client';

import { Box, HStack, Icon, Tooltip } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { BrandHeading } from '@/components/atoms';
import { AboutContext } from '@/contexts/about';

const FavoriteTechStack = () => {
	const { about } = useContext(AboutContext);
	const { t } = useTranslation('about');

	return (
		<Box marginBottom={4}>
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', delay: 0.4 }}
			>
				<BrandHeading as="h3" size="lg" paddingBottom={1}>
					{t('favoriteTechStack.title')}
				</BrandHeading>
			</motion.div>

			<motion.div
				variants={{
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: {
							staggerChildren: 0.2,
							delayChildren: 0.6,
						},
					},
				}}
				initial="hidden"
				animate="show"
			>
				<HStack marginTop={2} spacing={4}>
					{about.favoriteTechStacks.map((fts) => (
						<motion.div
							key={fts.name}
							variants={{
								hidden: { y: 50, opacity: 0 },
								show: { y: 0, opacity: 1, transition: { ease: 'easeOut' } },
							}}
						>
							<Tooltip label={fts.name} closeOnClick={false}>
								<span>
									<Icon as={fts.icon} fontSize={36} />
								</span>
							</Tooltip>
						</motion.div>
					))}
				</HStack>
			</motion.div>
		</Box>
	);
};

export default FavoriteTechStack;
