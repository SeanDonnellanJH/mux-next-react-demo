'use client';

import { useState } from 'react';
import {
  Footer,
  Layout as MuxLayout,
  SideNav,
  SkipLinks,
  useSkipLinks,
  UtilityHeader,
} from '@manulife/mux';
import { PartlySunny } from '@manulife/mux-cds-icons';
import { usePathname, useRouter } from 'next/navigation';

const Layout = ({ children, toggleLang }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { mainContentRef, mainNavRef, subNavRef, footerRef, ...skipLinksProps } =
    useSkipLinks();

  return (
    <MuxLayout
      isSideNavOpen={isSideNavOpen}
      header={
        <UtilityHeader skipLinks={<SkipLinks {...skipLinksProps} />}>
          <UtilityHeader.SignIn />
          <UtilityHeader.Lang onClick={toggleLang} />
        </UtilityHeader>
      }
      footer={<Footer ref={footerRef} />}
      sideNav={
        <SideNav
          activeKey={pathname}
          brandLogoProps={{
            onClick: () => router.push('/'),
          }}
          mobileFooterItems={[
            <SideNav.SignIn key="sign_in" />,
            <SideNav.Lang key="lang" onClick={toggleLang} />,
          ]}
          onToggleSideNav={setIsSideNavOpen}
          mainNavRef={mainNavRef}
          subNavRef={subNavRef}
          skipLinks={<SkipLinks {...skipLinksProps} />}
        >
          <SideNav.Section id="personal">
            <SideNav.NavItem
              as="button"
              id="our_demo"
              label="Our Demo"
              itemKey="/demo"
              icon={<PartlySunny />}
              onClick={() => router.push('/demo')}
            />
          </SideNav.Section>
        </SideNav>
      }
    >
      <div ref={mainContentRef} style={{ padding: '1.5rem' }} tabIndex="-1">
        {children}
      </div>
    </MuxLayout>
  );
};

export default Layout;
