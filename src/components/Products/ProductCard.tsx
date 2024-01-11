'use client';

import { Product, User } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  data: Product;
  currentUser?: User | null;
}

const ProductCard = ({ data, currentUser }: ProductCardProps) => {
  const router = useRouter();

  return (
    <div className="group col-span-1 cursor-pointer" onClick={() => router.push(`/product/${data.id}`)}>
      <div className="flex w-full flex-col gap-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
          <Image
            src={data.imageSrc}
            fill
            sizes="auto"
            className="h-full w-full object-cover transition group-hover:scale-110"
            alt="product"
          />
        </div>
        <div className="text-lg font-semibold">{data.title}</div>
        <div className="font-light text-neutral-500">{data.category}</div>
        <div>
          <div>
            {data.price} <span className="font-light">원</span>
          </div>
          <div>{/* {data.createdAt} */}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
