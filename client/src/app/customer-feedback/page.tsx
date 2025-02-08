"use client";

import React, { useState, useEffect } from "react";
import {
  Heading,
  Text,
  Flex,
  Button,
  Input,
  Textarea,
  Select,
  DropdownOptions,
  Grid,
} from "@/once-ui/components";

// Add testimonials data
const testimonials = [
  {
    name: "John Matthews",
    company: "Production Manager, Trendy Apparel",
    content: "The precision and efficiency of their cutting solutions have significantly improved our production process. Their numbering and bundling services ensure seamless workflow, reducing errors and increasing productivity. Highly recommended!",
    rating: 5,
    image: "/images/testimonials/john.jpg"
  },
  {
    name: "Emma Rodriguez",
    company: "CEO, Elite Textiles",
    content: "We’ve been working with them for years, and their fabric laying and cutting expertise have been outstanding. The quality of work, attention to detail, and commitment to deadlines make them a trusted partner in our textile business.",
    rating: 5,
    image: "/images/testimonials/emma.jpg"
  },
  {
    name: "Michael Lee",
    company: "Operations Head, FashionCraft",
    content: "Their professional approach to fabric cutting and bundling has helped us maintain consistency in our garment production. The accuracy and efficiency of their services have exceeded our expectations. A reliable partner for the apparel industry!",
    rating: 5,
    image: "/images/testimonials/michael.jpg"
  }
];

const feedbackTypes = [
  { value: "general", label: "General Feedback" },
  { value: "bug", label: "Bug Report" },
  { value: "feature", label: "Feature Request" },
  { value: "improvement", label: "Improvement Suggestion" }
];

const ratingOptions = [
  { value: "5", label: "Excellent" },
  { value: "4", label: "Good" },
  { value: "3", label: "Average" },
  { value: "2", label: "Fair" },
  { value: "1", label: "Poor" }
];

interface FeedbackData {
  name: string;
  email: string;
  feedbackType: string;
  rating: string;
  feedback: string;
}

const CustomerFeedback = () => {
  const [feedbackData, setFeedbackData] = useState<FeedbackData>({
    name: "",
    email: "",
    feedbackType: "",
    rating: "",
    feedback: "",
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        alert('Feedback submitted successfully!');
        setFeedbackData({
          name: "",
          email: "",
          feedbackType: "",
          rating: "",
          feedback: "",
        });
      } else {
        alert('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      alert('Error submitting feedback. Please try again.');
    }
  };

  return (
    <Flex direction="column" alignItems="center" gap="xl" padding="xl" background="transparent">
      <Heading variant="display-strong-l" align="center" marginBottom="xl">
        Customer Feedback
      </Heading>
      
      {/* Testimonials Section with Left-Right Layout */}
      <Flex 
        className="direction-responsive"
        gap="xl" 
        maxWidth={1200} 
        fillWidth 
        alignItems="center"
        style={{ minHeight: '400px' }}
      >
        {/* Left Side - Heading */}
        <Flex 
          direction="column" 
          gap="l"
          style={{ flex: 1 }}
          alignItems="flex-start"
        >
          <Heading 
            variant="body-strong-l" 
            align="left"
          >
            What Our
            <br />
            Customers Say
          </Heading>
          <Text 
            variant="body-default-l" 
            color="neutral-strong"
            align="left"
          >
            Read what our valued customers have to say about their experience working with us
          </Text>
          
          {/* Navigation Dots */}
          <Flex direction="row" gap="xs" marginTop="l">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="tertiary"
                size="s"
                onClick={() => setCurrentTestimonial(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  padding: 0,
                  borderRadius: '50%',
                  background: index === currentTestimonial ? 'var(--brand-strong)' : 'var(--neutral-medium)'
                }}
              />
            ))}
          </Flex>
        </Flex>

        {/* Right Side - Testimonial Slider */}
        <Flex
          style={{ 
            flex: 1,
            position: 'relative',
            minHeight: '300px',
            perspective: '2000px',
            transformStyle: 'preserve-3d'
          }}
        >
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentTestimonial;
            const offset = index - currentTestimonial;
            
            return (
              <Flex
                key={testimonial.name}
                direction="column"
                gap="m"
                padding="xl"
                background={isActive ? "brand-weak" : "neutral-weak"}
                style={{
                  borderRadius: 'var(--radius-m)',
                  position: 'absolute',
                  width: '100%',
                  opacity: isActive ? 1 : 0.3,
                  transform: `
                    translate3d(${offset * 60}px, ${Math.abs(offset) * -10}px, ${-Math.abs(offset) * 50}px)
                    rotate3d(0, 1, 0, ${offset * -8}deg)
                    scale(${isActive ? 1 : 0.85})
                  `,
                  transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: testimonials.length - Math.abs(offset),
                  boxShadow: isActive 
                    ? '0 20px 40px rgba(var(--brand-strong-rgb), 0.15), 0 0 30px rgba(var(--brand-medium-rgb), 0.1)' 
                    : 'var(--elevation-card)',
                  border: isActive 
                    ? '1px solid var(--brand-medium)' 
                    : '1px solid var(--neutral-medium)',
                }}
              >
                <Text 
                  variant="body-default-l" 
                  color={isActive ? "brand-strong" : "neutral-strong"}
                  style={{
                    transition: 'color 0.8s ease'
                  }}
                >
                  "{testimonial.content}"
                </Text>
                
                <Flex direction="row" gap="m" alignItems="center" marginTop="m">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: '50%',
                      objectFit: "cover",
                      border: `2px solid var(--${isActive ? 'brand' : 'neutral'}-medium)`,
                      transition: 'border-color 0.8s ease',
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  <Flex direction="column" gap="xs">
                    <Text 
                      variant="body-strong-m"
                      color={isActive ? "brand-strong" : "neutral-strong"}
                    >
                      {testimonial.name}
                    </Text>
                    <Text 
                      variant="body-default-s" 
                      color={isActive ? "brand-medium" : "neutral-medium"}
                    >
                      {testimonial.company}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>

      {/* Feedback Form Section */}
      <Flex
        className="direction-responsive"
        gap="xl"
        maxWidth={1200}
        fillWidth
        marginTop="xl"
        padding="xl"
        alignItems="stretch"
      >
        {/* Form Side - Now on Left */}
        <Flex
          direction="column"
          gap="l"
          style={{ flex: 1 }}
        >
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Flex
              direction="column"
              gap="l"
              padding="xl"
              background="brand-weak"
              style={{
                borderRadius: 'var(--radius-m)',
                boxShadow: 'var(--elevation-card)'
              }}
            >
              <Flex direction="column" gap="xs">
                <Text variant="label-strong-s">Name</Text>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={feedbackData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  label=""
                />
              </Flex>

              <Flex direction="column" gap="xs">
                <Text variant="label-strong-s">Email</Text>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={feedbackData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  label=""
                />
              </Flex>

              <Flex direction="column" gap="xs">
                <Text variant="label-strong-s">Feedback Type</Text>
                <Select
                  id="feedbackType"
                  name="feedbackType"
                  value={feedbackData.feedbackType}
                  onChange={handleInputChange}
                  required
                  options={feedbackTypes}
                  onSelect={(option) => {
                    setFeedbackData(prev => ({
                      ...prev,
                      feedbackType: option.value
                    }));
                  }}
                  label=""
                />
              </Flex>

              <Flex direction="column" gap="xs">
                <Text variant="label-strong-s">Rating</Text>
                <Select
                  id="rating"
                  name="rating"
                  value={feedbackData.rating}
                  onChange={handleInputChange}
                  required
                  options={ratingOptions}
                  onSelect={(option) => {
                    setFeedbackData(prev => ({
                      ...prev,
                      rating: option.value
                    }));
                  }}
                  label=""
                />
              </Flex>

              <Flex direction="column" gap="xs">
                <Text variant="label-strong-s">Your Feedback</Text>
                <Textarea
                  id="feedback"
                  name="feedback"
                  value={feedbackData.feedback}
                  onChange={handleInputChange}
                  placeholder="Please provide your detailed feedback here"
                  required
                  label=""
                  rows={4}
                />
              </Flex>

              <Button
                variant="primary"
                size="m"
                type="submit"
                fillWidth
              >
                Submit Feedback
              </Button>
            </Flex>
          </form>
        </Flex>

        {/* Heading Side - Now on Right */}
        <Flex
          direction="column"
          gap="l"
          style={{ flex: 1 }}
          alignItems="flex-start"
          justifyContent="center"
        >
          <Heading
            variant="body-strong-l"
            align="left"
          >
            Share Your Experience
          </Heading>
          <Text
            variant="body-default-l"
            color="neutral-strong"
            align="left"
          >
            We value your feedback and are committed to continuously improving our services.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomerFeedback;
