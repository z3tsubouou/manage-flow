import { Button } from '@nextui-org/button';
import { Card, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

const BookmarkContent = () => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
			<Card isFooterBlurred radius="lg" className="border-none">
				<Image
					alt="Woman listing to music"
					className="object-cover"
					src="https://nextui.org/images/hero-card.jpeg"
					width="auto"
				/>
				<CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
					<p className="text-tiny text-white/80">Available soon.</p>
					<Button
						className="bg-black/20 text-tiny text-white"
						variant="flat"
						color="default"
						radius="lg"
						size="sm">
						Notify me
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default BookmarkContent;
