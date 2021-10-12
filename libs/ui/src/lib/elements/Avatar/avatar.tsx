import getConfig from 'next/config';
import { User } from 'next-auth';
import React from 'react';

interface Props {
  user: User;
}

export const Avatar = ({ user }) => {
  const { publicRuntimeConfig } = getConfig();

  return user.image ? (
    <img
      className="object-cover w-8 h-8 rounded-full"
      src={`${publicRuntimeConfig.cdn}${user.image}`}
      alt="Menu"
      aria-hidden="true"
    />
  ) : (
    <div className="border-primary bg-skin-primary text-skin-button-primary w-8 h-8 mr-8 rounded-full inline-flex items-center align-middle justify-center font-bold text-sm">
      {`${user.alias ? user.alias[0] : user.email[0]}`.toUpperCase()}
    </div>
  );
};

export default Avatar;
