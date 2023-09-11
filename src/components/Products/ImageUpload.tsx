import { CloudinaryInfoData } from '@/types/types';
import { CldUploadWidget, CldUploadWidgetResults } from 'next-cloudinary';
import Image from 'next/image';
import { TbPhotoPlus } from 'react-icons/tb';

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload = ({ onChange, value }: ImageUploadProps) => {
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const onUploadHandler = (result: CldUploadWidgetResults) => {
    const info = result.info as CloudinaryInfoData;

    if (info) {
      onChange(info.secure_url);
    }
  };

  return (
    <CldUploadWidget
      onUpload={onUploadHandler}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative flex cursor-pointer flex-col items-center justify-center gap-4 border-2 border-dashed bg-neutral-300 to-neutral-300 p-20 transition hover:opacity-70"
          >
            <TbPhotoPlus size={50} />
            {value && (
              <div className="absolute inset-0 h-full w-full">
                <Image fill style={{ objectFit: 'cover' }} src={value} alt="" />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
