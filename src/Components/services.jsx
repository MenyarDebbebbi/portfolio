import gil from '../assets/gil.jpg';

export default function Service() {
	const services = [
		{
			img: gil,
			title: 'Backend Development',
			description: 'Backend Development with "SpringBoot", "Symfony5", and ".Net".',
			role: 'Web Developer',
		},
		{
			img: gil,
			title: 'Frontend Development',
			description: 'Building responsive and interactive interfaces with "React" and "Vue.js".',
			role: 'Frontend Developer',
		},
		{
			img: gil,
			title: 'Mobile Development',
			description: 'Creating mobile applications using "React Native" and "Flutter".',
			role: 'Mobile Developer',
		},
		{
			img: gil,
			title: 'DevOps',
			description:
				'Managing CI/CD pipelines and cloud infrastructure with "Docker" and "Kubernetes".',
			role: 'DevOps Engineer',
		},
		{
			img: gil,
			title: 'UI/UX Design',
			description:
				'Designing user-friendly interfaces and experiences using "Figma" and "Adobe XD".',
			role: 'UI/UX Designer',
		},
	];

	return (
		<div className="w-full section">
			<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service, index) => (
					<div
						key={index}
						className="relative rounded-xl overflow-auto p-8 hover:animate-pulse"
					>
						<div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-3 dark:bg-slate-800 dark:hightlight-white/5">
							<div className="min-w-0 py-5 pl-28 pr-5">
								<div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-300">
									{service.title} {service.description}
								</div>
								<div className="text-slate-500 font-medium text-sm sm:text-base truncate leading-tight dark:text-slate-400">
									{service.role}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
