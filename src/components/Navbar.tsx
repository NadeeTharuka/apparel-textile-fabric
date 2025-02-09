"use client";

import React from 'react';
import { Flex, Text } from "@/once-ui/components";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Flex
      as="nav"
      fillWidth
      paddingY="s"
      paddingX="l"
      justifyContent="space-between" /* Moves navbar items to the right */
      alignItems="center"
    >
      <Link href="/">
        <Image
          src="/images/bscs.png"
          alt="BSCS"
          width={100}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </Link>
      <Flex
        as="ul"
        gap="s" /* Keeps navbar items close together */
        alignItems="center"
        justifyContent="flex-end" /* Aligns navbar items to the right */
        className={styles.navMenu}
      >
        {[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: "/about", label: "About" },
          //{ href: "/customer-feedback", label: "Customer Feedback" },
          { href: "/contact", label: "Contact Us" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>
              <Text 
                variant="body-strong-s" 
                onBackground={pathname === href ? "brand-strong" : "neutral-strong"}
                className={`${styles.navItem} ${pathname === href ? styles.active : ''}`}
                style={{
                  backgroundColor: pathname === href ? 'var(--brand-weak)' : 'transparent',
                  borderColor: pathname === href ? 'var(--brand-medium)' : 'transparent',
                }}
              >
                {label}
              </Text>
            </Link>
          </li>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
