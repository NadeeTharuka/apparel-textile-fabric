"use client";

import React from "react";
import { Heading, Text, Flex, Grid } from "@/once-ui/components";

const SolutionsPage = () => {
  const solutions = [
    {
      title: "Fabric Layering(Auto & Manual)",
      description: "Ensuaring perfectly aligned fabric layers for a flawless cutting process.",
      features: ["Automated layering for efficiency", "Manual adjustments for precision", "Minimized fabric distortion", "Consistent layering thickness"]
    },
    {
      title: "Fabric Cutting(Auto & Manual)",
      description: "Using both automated and manual cutting techniques for precision and consistency.",
      features: [ "High-precision automated cutting", "Manual trimming for intricate parts", "Reduced fabric wastage", "Consistent cut quality"]
    },
    {
      title: "Fabric Numbering",
      description: "Systematic numbering for accurate tracking and organization.",
      features: ["Sequential labeling of layers", "Prevents mix-ups during assembly", "Enhances traceability", "Supports efficient workflow"]
    },
    {
      title: "Quality Checking of Previously Cut Panels(CPI)",
      description: "Inspecting pre-cut fabric for defects and inconsistencies.",
      features: ["Visual inspection for flaws", "Measurement accuracy verification", "Panel defect marking", "Compliance with quality standards"]
    },
    {
      title: "Yarn Removal",
      description: "Eliminating unwanted fibers for a clean and professional finish.",
      features: ["Removal of loose yarns", "Clean edge preparation", "Improves appearance", "Prevents fabric unraveling"]
    },
    {
      title: "Fabric Touch-Up",
      description: "Refining cut fabrics to maintain superior quality.",
      features: ["Minor defect correction", "Edge smoothing and shaping", "Final quality adjustments", "Ensures visual and structural integrity"]
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
      <div className="flex items-center justify-center min-h-screen bg-white text-center px-4">
      <p className="text-xl font-medium text-gray-800 max-w-2xl">
        We offer a comprehensive range of sub-cutting and fabric processing solutions, catering to the specific requirements of large-scale textile and apparel manufacturers.
      </p>
    </div>
    </Flex>
  );
};

export default SolutionsPage;
