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

const MessageVariant = {
  error: "red",
	success: "green"
} as const

export type MessageVariantType = typeof MessageVariant;