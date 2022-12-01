import React from 'react';
export interface ButtonBaseType extends
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string
}

export type BaseNavLinkType = {
	name: string;
	path: string;
	image: string;
}