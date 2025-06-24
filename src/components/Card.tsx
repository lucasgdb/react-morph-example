import { motion } from "framer-motion";

type Props = {
  id: string;
  title: string;
  image: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export function Card({ id, title, image, onClick }: Props) {
  return (
    <motion.button
      layoutId={`item-${id}`}
      className="card bg-white rounded-lg border cursor-pointer flex items-start"
      onClick={onClick}
      type="button"
    >
      <div className="p-4 grid [grid-template-columns:min-content_1fr] gap-2">
        <motion.img
          src={`/assets/images/${image}`}
          className="max-w-40"
          width={142}
          height={78}
          layoutId={`image-${id}`}
        />

        <motion.h3
          layoutId={`title-${id}`}
          className="text-sm font-medium text-left"
        >
          {title}
        </motion.h3>
      </div>
    </motion.button>
  );
}
