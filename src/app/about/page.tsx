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
      name: "Mr. Nuwan Darshana",
      role: "Managing Director",
      description: "Nuwan Darshana, the Managing Director of Bogahawatta Sub Cutting Service, brings over 20 years of experience in the clothing and garment industry. His extensive knowledge and hands-on expertise have been instrumental in establishing the company as a trusted partner for top-tier textile manufacturers in Sri Lanka. With a strong focus on process optimization, quality assurance, and technological innovation, he has led the company to deliver high-precision fabric cutting and consultancy services. His commitment to excellence and continuous improvement has helped numerous textile businesses enhance efficiency, reduce fabric wastage, and implement advanced cutting solutions. Under his leadership, Bogahawatta Sub Cutting Service continues to grow, providing reliable, high-quality solutions that meet the evolving needs of the industry.",
      // image: "/images/team/john.jpg",
    },
    {
      name: "H.K.P.M. Hewavitharana",
      role: "Marketing Director",
      description: "",
      // image: "/images/team/john.jpg",
    },
    {
      name: "W. Ruwan Fernando",
      role: "Custom Relationship Manager",
      description: "",
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
          <Heading>Precision Cutting & Expert Consultation for the Textile Industry
          </Heading>
          <br></br>
          Bogahawatta Sub Cutting Service is a trusted name in third-party fabric cutting and related services for Sri Lanka's leading textile manufacturers. With a strong reputation built over the past six years, we provide high-quality, precision-driven solutions to some of the country's top garment manufacturers, ensuring efficiency and accuracy in every stage of fabric preparation.
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
              Our mission is to provide top-tier textile companies with seamless and accurate fabric cutting services that enhance production efficiency while maintaining the highest industry standards. We strive to be the leading sub-cutting service provider in Sri Lanka by continuously.
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
              At Bogahawatta Sub Cutting Service, we take pride in delivering precision, consistency, and reliability. Our commitment to cutting-edge techniques, skilled craftsmanship, and industry expertise makes us the go-to choice for top textile companies in Sri Lanka.
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
              background="neutral-weak"
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
