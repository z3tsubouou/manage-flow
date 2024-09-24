import { Button } from '@nextui-org/button';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle
} from '@nextui-org/navbar';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ThemeSwitcher } from './theme-switcher';

const NavbarComponent = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = [
		'Profile',
		'Dashboard',
		'Activity',
		'Analytics',
		'System',
		'Deployments',
		'My Settings',
		'Team Settings',
		'Help & Feedback',
		'Log Out'
	];

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
			<NavbarContent>
				<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
				<NavbarBrand>
					<Link to="/" className="font-bold text-inherit [&.active]:font-bold">
						Manage flow
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="hidden gap-4 sm:flex" justify="center">
				<NavbarItem>
					<Link to="/bookmarks" color="foreground" className="[&.active]:font-bold">
						Bookmarks
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link to="/login" className="[&.active]:font-bold">
						Login
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" to="/sign-up" variant="flat" className="[&.active]:font-bold">
						Sign Up
					</Button>
				</NavbarItem>
				<NavbarItem>
					<ThemeSwitcher />
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
							className="w-full"
							href="#">
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};

export default NavbarComponent;
