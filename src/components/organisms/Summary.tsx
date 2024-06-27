'use client';

import { Box, HStack, Icon, Text, Tooltip, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { BrandHeading, NextImage } from '@/components/atoms';
import { AboutContext } from '@/contexts/about';

import type { Locale } from '@/types/globals';

const Summary = () => {
	const { about } = useContext(AboutContext);
	const { i18n, t } = useTranslation('about');

	const locale = i18n.language as keyof Locale;

	return (
		<Box marginBottom={4}>
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: 'easeOut' }}
			>
				<BrandHeading as="h2" size="2xl" paddingBottom={2}>
					{t('title')}
				</BrandHeading>
			</motion.div>

			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', delay: 0.2 }}
			>
				<HStack
					flexDirection={['column-reverse', 'column-reverse', 'row']}
					justifyContent="space-between"
					alignItems="flex-start"
					marginY={4}
					spacing={6}
				>
					<Box>
						<VStack
							as="article"
							alignItems="start"
							marginBottom={8}
							spacing={4}
						>
							{(about.summary[locale] as string[]).map((summary) => (
								<Text key={summary.slice(10)} lineHeight={1.75}>
									{summary}
								</Text>
							))}
						</VStack>
						<Box>
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
												show: {
													y: 0,
													opacity: 1,
													transition: { ease: 'easeOut' },
												},
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
					</Box>
					<Box
						as="figure"
						position="relative"
						width={[300, 300, 240]}
						height={[375, 375, 300]}
						borderRadius={18}
						flex="0 0 auto"
						boxShadow="base"
						marginX="auto"
					>
						<NextImage src={about.photo} alt="Akmal Hisyam's photo" fill />
					</Box>
				</HStack>
			</motion.div>
		</Box>
	);
};

export default Summary;
