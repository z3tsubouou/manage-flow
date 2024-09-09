import { Input } from "@nextui-org/input";
import { SearchIcon } from "lucide-react";

const BookmarkHeader = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Input
          label="Search"
          isClearable
          radius="lg"
          variant="bordered"
          placeholder="Type to search..."
          startContent={
            <SearchIcon
              size={18}
              className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
            />
          }
        />
      </div>
    </div>
  );
};

export default BookmarkHeader;
