import { createLazyFileRoute} from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about')({
	component: AboutLazy,
})

function AboutLazy() {
	return (
		<div>
			<h3>About</h3>
		</div>
	)
}