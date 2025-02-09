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
  LetterFx,
  Arrow,
} from "@/once-ui/components";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Home() {
  const links = [
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
      href: "https://maps.app.goo.gl/9zUiKJKfrnUdksVz7",
      title: "Address",
      description: "102/01, Pujapitiya, Kandy, Sri Lanka",
    },
  ];

  return (
    <Flex fillWidth direction="column" alignItems="center" flex={1}>
      {/* Two Column Layout Container */}
      <Flex 
        direction="row" 
        fillWidth 
        gap="l"
        padding="l"
        alignItems="center"
      >
        {/* Left Column - Image Slider */}
        <Flex flex={1} justifyContent="center" alignItems="center">
          <Carousel 
            showThumbs={false} 
            autoPlay 
            infiniteLoop
            showStatus={false}
          >
            <div style={{ borderRadius: 'var(--radius-l)', overflow: 'hidden', position: 'relative', width: '100%', height: '400px' }}>
              <Image 
                src="/images/image1.png" 
                alt="Description" 
                width={800}
                height={400}
                priority
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-l)' 
                }}
              />
            </div>
            <div style={{ borderRadius: 'var(--radius-l)', overflow: 'hidden', position: 'relative', width: '100%', height: '400px' }}>
              <Image 
                src="/images/image2.jpg" 
                alt="Description" 
                width={800}
                height={400}
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-l)' 
                }}
              />
            </div>
            <div style={{ borderRadius: 'var(--radius-l)', overflow: 'hidden', position: 'relative', width: '100%', height: '400px' }}>
              <Image 
                src="/images/image3.jpg" 
                alt="Description" 
                width={800}
                height={400}
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-l)' 
                }}
              />
            </div>
          </Carousel>
        </Flex>

        {/* Right Column - Main Content */}
        <Flex
          flex={1}
          direction="column"
          gap="l"
          alignItems="flex-start"
          padding="l"
        >
         

          <InlineCode className="shadow-m" style={{ fontSize: '24px' , padding: '8px 16px', borderRadius: '8px' }}>
          Welcome to Our Apparel Textile Services!
          </InlineCode>
         
          <Heading wrap="balance" variant="display-strong-s">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Cutting & Fabric Solutions
            </motion.span>
          </Heading>

          <Button id="contactUs" href="/contact" variant="secondary">
            <Flex alignItems="center">
              Contact Us
              <Arrow trigger="#contactUs" />
            </Flex>
          </Button>
        </Flex>
      </Flex>

      {/* Contact Grid */}
      <Grid
        radius="l"
        border="neutral-medium"
        borderStyle="solid-1"
        columns="repeat(3, 1fr)"
        fillWidth
        padding="l"
        gap="l"
      >
        {links.map((link) => (
          <Link
            target="_blank"
            style={{ padding: "var(--responsive-space-l)" }}
            key={link.href}
            href={link.href}
          >
            <Flex fillWidth paddingY="8" gap="8" direction="column">
              <Flex fillWidth gap="12" alignItems="center">
                <Text variant="body-strong-m" onBackground="neutral-strong">
                  {link.title}
                </Text>
                <Icon size="s" name="arrowUpRight" />
              </Flex>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {link.description}
              </Text>
            </Flex>
          </Link>
        ))}
      </Grid>

      {/* Footer Section */}
      <Flex
        as="footer"
        position="relative"
        fillWidth
        paddingX="l"
        paddingY="m"
        justifyContent="space-between"
        border="neutral-medium"
      >
        <Text variant="body-default-s" onBackground="neutral-weak">
        © 2025 BSCS Fabric Cutting Solution. All rights reserved
        </Text>
        
      </Flex>
    </Flex>
  );
}
