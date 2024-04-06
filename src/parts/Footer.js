/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from 'elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex flex-col justify-between mx-auto h-full">
        <div className="flex flex-col items-center mt-7">
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Copyright reserved by&nbsp;
            </p>
            <Button href="https://github.com/ZainShk7" type="link" target="_blank" className="text-lg text-theme-purple font-light" isExternal>
              Zain Sheikh
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
