'use client';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import imagePlaceHolder from '@/assets/icons/gallery.png';

type ImagePickerProps = {
  label: string;
  svg?: JSX.Element;
  name: string;
};

export default function ImagePicker({ label, name, svg }: ImagePickerProps) {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (files) {
        setFile(files[0]);
      }
    },
    []
  );

  const handleInputRef = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className='min-h-* w-full flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <label
          htmlFor={name}
          className='cursor-pointer flex items-center gap-2 bg-black text-slate-50 py-2 px-2 max-w-[200px] rounded-md transition-colors hover:bg-slate-50 hover:text-black hover:shadow-md'
        >
          <i>{svg}</i>
          <span className=''>{label}</span>
        </label>
        <input
          ref={inputRef}
          type='file'
          id={name}
          accept='image/*'
          name={name}
          className='hidden'
          onChange={handleImageChange}
        />

        {file && (
          <button
            type='button'
            className='bg-transparent transition-colors hover:bg-red-500  py-2 rounded-md overflow-hidden px-4 border border-black hover:border-transparent'
            onClick={() => setFile(null)}
          >
            Remove
          </button>
        )}
      </div>

      {file && (
        <div className='w-full max-h-[155px] md:max-h-[200px] overflow-y-auto flex justify-center items-center'>
          <div className='flex flex-col max-w-[70%] items-center'>
            <Image
              src={URL.createObjectURL(file)}
              alt='Selected Image'
              width={'0'}
              height={'0'}
              loading='lazy'
              className='w-auto h-auto'
            />
          </div>
        </div>
      )}

      {!file && (
        <div
          className='w-full h-[155px] flex justify-center items-center bg-slate-50 rounded-md cursor-pointer'
          onClick={handleInputRef}
        >
          <Image
            src={imagePlaceHolder}
            alt='Default Image Placeholder'
            width={'0'}
            height={'0'}
            loading='lazy'
            className='w-32 h-32 object-cover rounded-md'
          />
        </div>
      )}
    </div>
  );
}
