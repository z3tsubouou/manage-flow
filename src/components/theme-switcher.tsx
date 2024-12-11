import { Button } from '@nextui-org/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			{theme === 'light' && (
				<Button isIconOnly variant="faded" onClick={() => setTheme('dark')}>
					<Moon />
				</Button>
			)}
			{theme === 'dark' && (
				<Button isIconOnly color="warning" variant="faded" onClick={() => setTheme('light')}>
					<Sun />
				</Button>
			)}
		</div>
	);
}
