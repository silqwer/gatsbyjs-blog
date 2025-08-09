import React from 'react';

import svgPaths from '@/utils/icons/home-page-icon';
import SocialIcon from './SocialIcon';

type Props = {
  color?: string;
};

export default function SocialMedia({ color = 'text-foreground' }: Props) {
  return (
    <div className={`flex gap-3 ${color}`}>
      <SocialIcon path={svgPaths.p1305e900} label='Instagram' />
      <SocialIcon path={svgPaths.p3fd3a000} label='Twitter' />
      <SocialIcon path={svgPaths.pdb0b000} label='YouTube' />
      <SocialIcon path={svgPaths.p8693780} label='RSS' />
    </div>
  );
}
