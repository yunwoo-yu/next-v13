'use client';

import Button from '@/components/Common/Button';
import Container from '@/components/Common/Container';
import Heading from '@/components/Common/Heading';
import Input from '@/components/Common/Input';
import ImageUpload from '@/components/Products/ImageUpload';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const ProductUploadPage = () => {
  const [isLoading] = useState(false);
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

  const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const setCustomValue = (id: string, value: string) => {
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
          <div className="max-[50vh] grid grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2"></div>
          <hr />
          <Button label="상품 생성하기" />
        </form>
      </div>
    </Container>
  );
};

export default ProductUploadPage;
