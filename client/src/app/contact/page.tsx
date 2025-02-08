"use client";

import React from "react";
import {
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  Icon,
  InlineCode,
  Logo,
  Arrow,
} from "@/once-ui/components";
import Link from "next/link";

export default function ContactUs() {
  const contactInfo = [
    {
      href: "nuwandarshana472@gmail.com",
      title: "Email",
      description: "nuwandarshana472@gmail.com",
    },
    {
      href: "tel:+94775377707",
      title: "Phone",
      description: "+94 77 537 7707",
    },
    {
      href: "",
      title: "Address",
      description: "102/01, Pujapitiya, Kandy, Sri Lanka",
    },
  ];

  return (
    <Flex
      fillWidth
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Flex as="main" direction="column" alignItems="center" gap="l">
        {/* <Logo size="xl" href="/" /> */}
        <Heading variant="display-strong-s">Contact Us</Heading>
        <Text variant="body-default-m">We'd love to hear from you!</Text>

        <Grid
          radius="l"
          border="neutral-medium"
          borderStyle="solid-1"
          columns="repeat(3, 1fr)"
          tabletColumns="1col"
          mobileColumns="1col"
          fillWidth
          maxWidth={600}
          gap="l"
          padding="l"
        >
          {contactInfo.map((info) => (
            <Link
              key={info.href}
              href={info.href}
              style={{ padding: "var(--responsive-space-l)" }}
              target="_blank"
            >
              <Flex fillWidth paddingY="8" gap="8" direction="column">
                <Flex fillWidth gap="12" alignItems="center">
                  <Text variant="body-strong-m">{info.title}</Text>
                  <Icon size="s" name="arrowUpRight" />
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {info.description}
                </Text>
              </Flex>
            </Link>
          ))}
        </Grid>

        {/* <Button href="/" variant="secondary">
          Back to Home <Arrow trigger="click" />
        </Button> */}
      </Flex>

      {/* Footer */}
      <Flex
        as="footer"
        fillWidth
        paddingX="l"
        paddingY="m"
        justifyContent="space-between"
      >
        <Text variant="body-default-s">© 2025 BSCS Fabric Cutting Solution. All rights reserved</Text>
       
      </Flex>
    </Flex>
  );
}
