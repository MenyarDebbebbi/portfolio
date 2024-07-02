import { motion } from 'framer-motion';

export default function Footer() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="flex justify-center bg-indigo-900 text-white p-10"
		>
			Copyright &copy; 2024 Menyar Debbebi
		</motion.div>
	);
}
