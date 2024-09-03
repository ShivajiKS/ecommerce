import { FC } from "react";

import { ProductsType } from "@/lib/dumyProducts";
import Link from "next/link";

type PropsTypes = {
  item: ProductsType;
};

export const ProductCard: FC<PropsTypes> = ({ item }) => {
  const { title, price, imgUrl } = item;
  return (
    <Link
      href={`/product?${Object.entries(item)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")}`}
      prefetch={false}
      className="cursor-pointer"
    >
      <div className="overflow-hidden ">
        <img
          src={"3.webp"}
          alt={title}
          className=" transition ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex flex-col space-y-2 pt-2 ">
        <h2 className="font-medium text-sm">{title}</h2>
        <div className="text-sm">{price}</div>
      </div>
    </Link>
  );
};
