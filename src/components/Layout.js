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
import { PartlySunny, Sunny } from '@manulife/mux-cds-icons';
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
              id="item_1"
              label="Item 1"
              itemKey="/item/1"
              icon={<Sunny />}
            >
              <SideNav.Dropdown
                as="button"
                id="item_1_1"
                itemKey="/item/1_1"
                label="Item 1.1"
              >
                <SideNav.SubNavItem
                  as="button"
                  id="item_1_1_1"
                  itemKey="/item/1_1_1"
                  label="Item 1.1.1"
                  onClick={() => router.push('/item/1_1_1')}
                />
                <SideNav.SubNavItem
                  as="button"
                  id="item_1_1_2"
                  itemKey="/item/1_1_2"
                  label="Item 1.1.2"
                  onClick={() => router.push('/item/1_1_2')}
                />
              </SideNav.Dropdown>
              <SideNav.SubNavItem
                as="button"
                id="item_1_2"
                itemKey="/item/1_2"
                label="Item 1.2"
                onClick={() => router.push('/item/1_2')}
              />
            </SideNav.NavItem>
            <SideNav.NavItem
              as="button"
              id="item_2"
              label="Item 2"
              itemKey="/item/2"
              icon={<PartlySunny />}
              onClick={() => router.push('/item/2')}
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
