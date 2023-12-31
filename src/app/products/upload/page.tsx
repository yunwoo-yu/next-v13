'use client';

import { categories } from '@/components/Categories/Categories';
import CategoryInput from '@/components/Categories/CategoryInput';
import Button from '@/components/Common/Button';
import Container from '@/components/Common/Container';
import Heading from '@/components/Common/Heading';
import Input from '@/components/Common/Input';
import ImageUpload from '@/components/Products/ImageUpload';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const ProductUploadPage = () => {
  const route = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      latitude: 33.5563,
      longitude: 126.79581,
      imageSrc: '',
      price: 1,
    },
  });
  const imageSrc = watch('imageSrc');
  const category = watch('category');
  const latitude = watch('latitude');
  const longitude = watch('longitude');
  const KakaoMap = dynamic(() => import('../../../components/Common/KakaoMap'), { ssr: false });

  const onSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post('/api/products', data);

      route.push(`/products/${response.data.id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const setCustomValue = (id: string, value: unknown) => {
    setValue(id, value);
  };

  return (
    <Container>
      <div className="mx-auto max-w-screen-lg ">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmitHandler)}>
          <Heading title="Product Upload" subtitle="upload your product" />
          <ImageUpload value={imageSrc} onChange={(value) => setCustomValue('imageSrc', value)} />
          <Input id="title" label="Title" disabled={isLoading} register={register} errors={errors} required />
          <hr />
          <Input
            id="description"
            label="Description"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="price"
            label="Price"
            disabled={isLoading}
            register={register}
            errors={errors}
            formatPrice
            required
          />
          <hr />
          <div className="max-[50vh] grid grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2">
            {categories.map((item) => (
              <div key={item.label} className="col-span-1">
                <CategoryInput
                  onClick={(category) => setCustomValue('category', category)}
                  selected={category === item.path}
                  label={item.label}
                  icon={item.icon}
                  path={item.path}
                />
              </div>
            ))}
          </div>
          <hr />
          <KakaoMap setCustomValue={setCustomValue} latitude={latitude} longitude={longitude} />
          <Button label="상품 생성하기" />
        </form>
      </div>
    </Container>
  );
};

export default ProductUploadPage;
