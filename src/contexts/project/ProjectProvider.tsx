'use client';

import {
	SiApollographql,
	SiBootstrap,
	SiChakraui,
	SiExpo,
	SiExpress,
	SiFirebase,
	SiInternetcomputer,
	SiIonic,
	SiJavascript,
	SiMongodb,
	SiMui,
	SiNextdotjs,
	SiOpenai,
	SiPostgresql,
	SiReact,
	SiRedis,
	SiSocketdotio,
	SiStripe,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';

import { IMAGE_URL } from '@/constants/url';
import { ProjectContext } from './ProjectContext';

import type { Project } from '@/types/project';

type ProjectProviderProps = {
	children: React.ReactNode;
};

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
	const projects: Project[] = [
		{
			id: 'P001',
			name: 'Countdown Timer',
			description: {
				en: 'Site to countdown according to a predetermined time.',
				id: 'Situs untuk menghitung mundur sesuai dengan waktu yang telah ditentukan.',
			},
			type: {
				en: 'Personal',
				id: 'Pribadi',
			},
			logo: `${IMAGE_URL}/projects/icons/countdown-timer.png`,
			preview: `${IMAGE_URL}/projects/previews/countdown-timer_preview.png`,
			techStacks: [
				{
					name: 'JavaScript',
					icon: SiJavascript,
				},
				{
					name: 'React',
					icon: SiReact,
				},
				{
					name: 'Material UI',
					icon: SiMui,
				},
			],
			link: 'https://countdowntimer.akmalhisyam.my.id/',
			isFeatured: false,
		},
		{
			id: 'P002',
			name: 'Random Quote Generator',
			description: {
				en: 'Site to generate random quotes from Quotable.io API.',
				id: 'Situs untuk menghasilkan kutipan acak dari API Quotable.io.',
			},
			type: {
				en: 'Personal',
				id: 'Pribadi',
			},
			logo: `${IMAGE_URL}/projects/icons/random-quote-generator.png`,
			preview: `${IMAGE_URL}/projects/previews/random-quote-generator_preview.png`,
			techStacks: [
				{
					name: 'JavaScript',
					icon: SiJavascript,
				},
				{
					name: 'React',
					icon: SiReact,
				},
				{
					name: 'Material UI',
					icon: SiMui,
				},
			],
			link: 'https://randquotegenerator.akmalhisyam.my.id/',
			isFeatured: false,
		},
		{
			id: 'P003',
			name: 'Gamma-5',
			description: {
				en: 'Web-based expert system to assist prospective students in determining college majors based on their personality',
				id: 'Sistem pakar berbasis web untuk membantu calon mahasiswa dalam menentukan jurusan kuliah berdasarkan kepribadiannya.',
			},
			type: {
				en: 'Group',
				id: 'Kelompok',
			},
			logo: `${IMAGE_URL}/projects/icons/gamma-5.png`,
			preview: `${IMAGE_URL}/projects/previews/gamma-5_preview.png`,
			techStacks: [
				{
					name: 'TypeScript',
					icon: SiTypescript,
				},
				{
					name: 'Next.js',
					icon: SiNextdotjs,
				},
				{
					name: 'Chakra UI',
					icon: SiChakraui,
				},
				{
					name: 'Firebase',
					icon: SiFirebase,
				},
			],
			link: 'https://gammafive.akmalhisyam.my.id/',
			isFeatured: true,
		},
		{
			id: 'P004',
			name: 'KlikDarurat',
			description: {
				en: 'Application to assist Indonesian citizens in finding emergency service contacts and the nearest emergency service location based on current location.',
				id: 'Aplikasi untuk membantu warga Indonesia dalam mencari kontak layanan darurat dan lokasi layanan darurat terdekat berdasarkan lokasi saat ini.',
			},
			type: {
				en: 'Group',
				id: 'Kelompok',
			},
			logo: `${IMAGE_URL}/projects/icons/klikdarurat.png`,
			preview: `${IMAGE_URL}/projects/previews/klikdarurat_preview.png`,
			techStacks: [
				{
					name: 'TypeScript',
					icon: SiTypescript,
				},
				{
					name: 'Ionic',
					icon: SiIonic,
				},
				{
					name: 'React',
					icon: SiReact,
				},
				{
					name: 'Firebase',
					icon: SiFirebase,
				},
			],
			link: 'https://klikdarurat.akmalhisyam.my.id/',
			isFeatured: false,
		},
		{
			id: 'P005',
			name: 'Rikumovies',
			description: {
				en: 'Site to search and display list of movies from The Movies Database (TMDB) API.',
				id: 'Situs untuk mencari dan menampilkan daftar film dari API The Movies Database (TMDB).',
			},
			type: {
				en: 'Personal',
				id: 'Pribadi',
			},
			logo: `${IMAGE_URL}/projects/icons/rikumovies.png`,
			preview: `${IMAGE_URL}/projects/previews/rikumovies_preview.png`,
			techStacks: [
				{
					name: 'TypeScript',
					icon: SiTypescript,
				},
				{
					name: 'Next.js',
					icon: SiNextdotjs,
				},
				{
					name: 'Chakra UI',
					icon: SiChakraui,
				},
			],
			link: 'https://rikumovies.akmalhisyam.my.id/',
			isFeatured: false,
		},
		{
			id: 'P006',
			name: 'Matsuri',
			description: {
				en: 'Site to assist organizer in creating, promoting, and selling tickets for their events.',
				id: 'Situs untuk membantu penyelenggara dalam membuat, mempromosikan, dan menjual tiket untuk acaranya.',
			},
			type: {
				en: 'Personal',
				id: 'Pribadi',
			},
			logo: `${IMAGE_URL}/projects/icons/matsuri.png`,
			preview: `${IMAGE_URL}/projects/previews/matsuri_preview.png`,
			techStacks: [
				{
					name: 'TypeScript',
					icon: SiTypescript,
				},
				{
					name: 'Next.js',
					icon: SiNextdotjs,
				},
				{
					name: 'Bootstrap',
					icon: SiBootstrap,
				},
				{
					name: 'Express.js',
					icon: SiExpress,
				},
				{
					name: 'MongoDB',
					icon: SiMongodb,
				},
			],
			link: 'https://matsuri.akmalhisyam.my.id/',
			isFeatured: false,
		},
		{
			id: 'P007',
			name: 'Gitpedia',
			description: {
				en: 'Application to assist developers learn Git in an easy and fun way.',
				id: 'Aplikasi untuk membantu pengembang dalam belajar Git dengan cara yang mudah dan menyenangkan.',
			},
			type: {
				en: 'Personal',
				id: 'Pribadi',
			},
			logo: `${IMAGE_URL}/projects/icons/gitpedia.png`,
			preview: `${IMAGE_URL}/projects/previews/gitpedia_preview.png`,
			techStacks: [
				{
					name: 'TypeScript',
					icon: SiTypescript,
				},
				{
					name: 'Ionic',
					icon: SiIonic,
				},
				{
					name: 'React',
					icon: SiReact,
				},
				{
					name: 'Firebase',
					icon: SiFirebase,
				},
			],
			link: 'https://gitpedia.akmalhisyam.my.id/',
			isFeatured: true,
		},
		{
			id: 'P008',
			name: 'Rikutodo',
			description: {
				en: 'Site to assist users in managing their daily tasks.',
				id: 'Situs untuk membantu pengguna dalam mengelola tugas-tugas harian mereka.',
			},
			type: {
				en: 'Personal',
				id: 'Pribadi',
			},
			logo: `${IMAGE_URL}/projects/icons/rikutodo.png`,
			preview: `${IMAGE_URL}/projects/previews/rikutodo_preview.png`,
			techStacks: [
				{
					name: 'TypeScript',
					icon: SiTypescript,
				},
				{
					name: 'Next.js',
					icon: SiNextdotjs,
				},
				{
					name: 'Chakra UI',
					icon: SiChakraui,
				},
				{
					name: 'Express.js',
					icon: SiExpress,
				},
				{
					name: 'MongoDB',
					icon: SiMongodb,
				},
			],
			link: 'https://rikutodo.akmalhisyam.my.id/',
			isFeatured: false,
		},
		{
			id: 'P009',
			name: 'MyHealth',
			description: {
				en: 'Decentralized healthcare platform to assist patients in making appointments and viewing medical history.',
				id: 'Platform kesehatan terdesentralisasi untuk membantu pasien dalam membuat janji dan melihat riwayat medis.',
			},
			type: {
				en: 'Group',
				id: 'Kelompok',
			},
			logo: `${IMAGE_URL}/projects/icons/myhealth.png`,
			preview: `${IMAGE_URL}/projects/previews/myhealth_preview.png`,
			techStacks: [
				{
					name: 'TypeScript',
					icon: SiTypescript,
				},
				{
					name: 'Next.js',
					icon: SiNextdotjs,
				},
				{
					name: 'Chakra UI',
					icon: SiChakraui,
				},
				{
					name: 'Internet Computer',
					icon: SiInternetcomputer,
				},
			],
			link: 'https://github.com/akmalhisyammm/myhealth',
			isFeatured: false,
		},
		{
			id: 'P010',
			name: 'Hack TV',
			description: {
				en: 'Web-based video call application to do one-on-one video calls in real-time.',
				id: 'Aplikasi panggilan video berbasis web untuk melakukan panggilan video satu lawan satu secara real-time.',
			},
			type: {
				en: 'Group',
				id: 'Kelompok',
			},
			logo: `${IMAGE_URL}/projects/icons/hack-tv.png`,
			preview: `${IMAGE_URL}/projects/previews/hack-tv_preview.png`,
			techStacks: [
				{
					name: 'JavaScript',
					icon: SiJavascript,
				},
				{
					name: 'React',
					icon: SiReact,
				},
				{
					name: 'Tailwind CSS',
					icon: SiTailwindcss,
				},
				{
					name: 'Express.js',
					icon: SiExpress,
				},
				{
					name: 'Socket.io',
					icon: SiSocketdotio,
				},
				{
					name: 'PostgreSQL',
					icon: SiPostgresql,
				},
			],
			link: 'https://hacktv.akmalhisyam.my.id/',
			isFeatured: true,
		},
		{
			id: 'P011',
			name: 'Tweetify',
			description: {
				en: 'Social media application to socialize and share tweets with other users.',
				id: 'Aplikasi sosial media untuk bersosialisasi dan berbagi tweet dengan pengguna lainnya.',
			},
			type: {
				en: 'Personal',
				id: 'Pribadi',
			},
			logo: `${IMAGE_URL}/projects/icons/tweetify.png`,
			preview: `${IMAGE_URL}/projects/previews/tweetify_preview.png`,
			techStacks: [
				{
					name: 'JavaScript',
					icon: SiJavascript,
				},
				{
					name: 'React Native',
					icon: SiReact,
				},
				{
					name: 'Expo',
					icon: SiExpo,
				},
				{
					name: 'Express.js',
					icon: SiExpress,
				},
				{
					name: 'Apollo GraphQL',
					icon: SiApollographql,
				},
				{
					name: 'Redis',
					icon: SiRedis,
				},
				{
					name: 'MongoDB',
					icon: SiMongodb,
				},
			],
			link: 'https://github.com/akmalhisyammm/tweetify',
			isFeatured: false,
		},
		{
			id: 'P012',
			name: 'EasyTrip',
			description: {
				en: 'Site to assist users in finding the right destination and book a travel package in one go.',
				id: 'Situs untuk membantu pengguna dalam menemukan destinasi wisata yang tepat dan memesan paket perjalanan sekaligus.',
			},
			type: {
				en: 'Group',
				id: 'Kelompok',
			},
			logo: `${IMAGE_URL}/projects/icons/easytrip.png`,
			preview: `${IMAGE_URL}/projects/previews/easytrip_preview.png`,
			techStacks: [
				{
					name: 'TypeScript',
					icon: SiTypescript,
				},
				{
					name: 'Next.js',
					icon: SiNextdotjs,
				},
				{
					name: 'Tailwind CSS',
					icon: SiTailwindcss,
				},
				{
					name: 'Express.js',
					icon: SiExpress,
				},
				{
					name: 'OpenAI',
					icon: SiOpenai,
				},
				{
					name: 'Stripe',
					icon: SiStripe,
				},
				{
					name: 'Redis',
					icon: SiRedis,
				},
				{
					name: 'MongoDB',
					icon: SiMongodb,
				},
			],
			link: 'https://easytrip.asia/',
			isFeatured: true,
		},
	];

	return (
		<ProjectContext.Provider value={{ projects }}>
			{children}
		</ProjectContext.Provider>
	);
};
