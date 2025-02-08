"use client";

import React from "react";
import {
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  Icon,
} from "@/once-ui/components";
import Link from "next/link";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Nuwan Darshana",
      role: "Managing Director",
      description: "",
      image: "/images/team/john.jpg",
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

        <Heading variant="body-strong-l" align="center" marginTop="xl">
          Our Team
        </Heading>

        <Grid
          columns="repeat(2, 1fr)"
          tabletColumns="1col"
          mobileColumns="1col"
          gap="l"
          fillWidth
        >
          {teamMembers.map((member) => (
            <Flex
              key={member.name}
              direction="column"
              gap="m"
              padding="xl"
              background="brand-weak"
              alignItems="center"
              style={{ 
                borderRadius: 'var(--radius-m)',
                boxShadow: 'var(--elevation-card)'
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: '50%',
                  objectFit: "cover",
                  border: '4px solid var(--brand-medium)'
                }}
              />
              <Heading variant="body-strong-s" align="center">{member.name}</Heading>
              <Text variant="body-strong-m" color="brand-strong">{member.role}</Text>
              <Text variant="body-default-m" align="center">
                {member.description}
              </Text>
            </Flex>
          ))}
        </Grid>

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
