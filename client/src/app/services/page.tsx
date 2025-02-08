"use client";

import React from "react";
import { Heading, Text, Flex, Grid } from "@/once-ui/components";

const SolutionsPage = () => {
  const solutions = [
    {
      title: "Numbering",
      description: "Assigning identification numbers to fabric pieces to ensure proper sequencing and organization during production",
      features: ["Ensures accurate tracking of fabric pieces", "Minimizes errors in garment assembly", "Streamlines production workflow"]
    },
    {
      title: "Bandknife Cutting",
      description: "Bandknife cutting uses a continuous loop blade to cut fabric, providing precise and clean edges for intricate designs and complex shapes, ideal for mass production.",
      features: ["Accurate and smooth cuts on various fabrics", "Suitable for cutting complex shapes and designs", "Increases production efficiency for large volumes", "Reduces fabric wastage with precise cutting"]
    },
    {
      title: "Bundling",
      description: "Grouping and organizing cut fabric pieces into bundles for efficient handling and further processing",
      features: ["Maintains order and reduces mix-ups", "Increases efficiency in sewing and assembly", "Custom bundling options based on order requirements"]
    },
    {
      title: "Fabric Laying",
      description: "Spreading fabric layers evenly before cutting to ensure consistency and accuracy",
      features: ["Reduces fabric distortion and stretching", "Supports different laying techniques (manual/automatic)", "Ensures smooth and even fabric surfaces for precise cutting"]
    },
    {
      title: "Any Fabric Cutting",
      description: "We offer versatile fabric cutting solutions for a wide range of materials, ensuring quality cuts regardless of fabric type or thickness",
      features: ["Compatible with various fabric types (cotton, polyester, silk, etc.)", "Customizable cutting solutions based on fabric requirements", "High precision and clean cuts for every fabric type", "Suitable for both small-scale and mass production"]
    },
    {
      title: "CPI (Cost Per Item)",
      description: "CPI is a measurement used to calculate the cost of producing each individual item in a garment or textile manufacturing process, helping businesses monitor and optimize costs.",
      features: ["Provides a clear understanding of production costs per item", "Helps in cost optimization and pricing strategies", "Allows businesses to track manufacturing efficiency", "Supports better budgeting and financial planning"]
    },
    {
      title: "Yan Remove",
      description: "Yan removal is the process of removing unwanted elements (such as excess fabric, threads, or marks) from the fabric before it is used for garment production, ensuring clean and precise materials.",
      features: ["Ensures clean and clear fabric for production", "Removes excess threads, marks, or imperfections", "Increases the quality and consistency of final products", "Helps reduce rework and defects in the finished garments"]
    },
  
  ];

  return (
    <Flex direction="column" alignItems="center" gap="xl" padding="l">
      <Heading variant="display-strong-s" align="center">Our Services</Heading>
      
      <Grid columns="repeat(3, 1fr)" gap="l" tabletColumns="1col" mobileColumns="1col">
        {solutions.map((solution) => (
          <Flex
            key={solution.title}
            direction="column"
            gap="m"
            padding="l"
            background="neutral-medium"
            style={{ borderRadius: "8px" }}
          >
            <Heading variant="body-strong-m">{solution.title}</Heading>
            <Text variant="body-default-m">{solution.description}</Text>
            <Flex direction="column" gap="s">
              {solution.features.map((feature) => (
                <Text key={feature} variant="body-default-s">• {feature}</Text>
              ))}
            </Flex>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default SolutionsPage;
