import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const BookmarkContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6">
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt="Woman listing to music"
          className="object-cover"
          src="https://nextui.org/images/hero-card.jpeg"
          width="auto"
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Notify me
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookmarkContent;
