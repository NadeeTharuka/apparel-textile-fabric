"use client";

import React from "react";
import {
  Heading,
  Text,
  Flex,
  Button,
  Grid,
} from "@/once-ui/components";
import Link from "next/link";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Nuwan Darshana",
      role: "Managing Director",
      description: "Leading the company with innovation and dedication.",
      // image: "/images/team/john.jpg",
    },
  ];

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      fillWidth
      padding="xl"
      gap="xl"
      background="transparent"
    >
      <Heading variant="display-strong-l" align="center">
        About BSCS
      </Heading>

      <Flex
        direction="column"
        gap="xl"
        maxWidth={1000}
        fillWidth
        alignItems="center"
      >
        <Text variant="label-default-m" align="center">
          We provide precise and efficient cutting solutions for the apparel, textile, and fabric industry. Our services include numbering, cutting, bundling, and fabric laying, ensuring high-quality processing for seamless garment production.
        </Text>

        <Grid
          columns="repeat(2, 1fr)"
          tabletColumns="1col"
          mobileColumns="1col"
          gap="l"
          fillWidth
        >
          <Flex
            direction="column"
            gap="m"
            padding="xl"
            background="brand-weak"
            style={{ 
              borderRadius: 'var(--radius-m)',
              boxShadow: 'var(--elevation-card)'
            }}
          >
            <Heading variant="body-strong-m" align="center">Our Mission</Heading>
            <Text variant="body-default-m" align="center">
              To deliver exceptional fabric cutting solutions with precision, efficiency, and innovation, helping businesses achieve excellence in textile and apparel manufacturing.
            </Text>
          </Flex>

          <Flex
            direction="column"
            gap="m"
            padding="xl"
            background="brand-weak"
            style={{ 
              borderRadius: 'var(--radius-m)',
              boxShadow: 'var(--elevation-card)'
            }}
          >
            <Heading variant="body-strong-m" align="center">Our Vision</Heading>
            <Text variant="body-default-m" align="center">
              To be a leading provider of cutting-edge fabric processing solutions, setting industry standards in quality, reliability, and customer satisfaction.
            </Text>
          </Flex>
        </Grid>

        {/* Our Team Section Inside a Box */}
        <Heading variant="body-strong-l">Our Team</Heading>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          padding="xl"
          background="brand-weak"
          gap="xl"
          fillWidth
          style={{
            borderRadius: 'var(--radius-m)',
            boxShadow: 'var(--elevation-card)',
            maxWidth: "800px",
            textAlign: "center",
          }}
        >

          {teamMembers.map((member) => (
            <Flex
              key={member.name}
              direction="column"
              gap="m"
              alignItems="center"
              padding="l"
              background="white"
              style={{
                borderRadius: "var(--radius-m)",
                boxShadow: "var(--elevation-card)",
                width: "100%",
                maxWidth: "400px",
                textAlign: "center",
              }}
            >
              
              <Heading variant="body-strong-s">{member.name}</Heading>
              <Text variant="body-strong-m" color="brand-strong">
                {member.role}
              </Text>
              <Text variant="body-default-m">{member.description}</Text>
            </Flex>
          ))}
        </Flex>

        <Flex direction="column" gap="l" alignItems="center" marginTop="xl">
          <Text variant="label-default-m" align="center">
            Want to join our team?
          </Text>
          <Link href="/contact">
            <Button variant="primary" size="l">
              Contact Us
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
