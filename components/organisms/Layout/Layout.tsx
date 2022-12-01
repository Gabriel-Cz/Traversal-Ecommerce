import { useState } from "react";
import { AppFooter } from "../AppFooter/AppFooter"
import { AppNavbar } from "..//AppNavbar/AppNavbar";
import { BaseNavLinkType } from "types/Base";

interface LayoutProps {
  children: React.ReactNode;
  navLinks: BaseNavLinkType[]
}

export const Layout: React.FC<LayoutProps> = ({ children, navLinks }) => {
  return (
    <>
      <AppNavbar linksCategories={navLinks} />
      {children && children}
      <AppFooter
        linksCategories={navLinks}
        supportLinks={[
          'Get Help',
          'Shipment Statement',
          'Products Returns'
        ]}
        socialMediaIcons={[
          "bi bi-instagram",
          "bi bi-twitter",
          "bi bi-envelope-fill",
        ]}
      />
    </>
  )
}

Layout.defaultProps = {
  children: undefined
}