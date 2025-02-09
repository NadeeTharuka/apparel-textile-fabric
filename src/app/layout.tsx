import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';
import { headers } from "next/headers";
import { Metadata } from "next";

import { baseURL, style, meta, og, schema, social } from "@/once-ui/resources/config"
import { Background, Flex } from '@/once-ui/components'
import Navbar from '@/components/Navbar';

// Remove font imports
// import { Inter } from 'next/font/google'
// import { Roboto_Mono } from 'next/font/google';

// Add static font CSS
export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: og.title,
    description: og.description,
    url: 'https://' + baseURL,
    type: 'website' as const
  }
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": schema.type,
  "url": "https://" + baseURL,
  "logo": schema.logo,
  "name": schema.name,
  "description": schema.description,
  "email": schema.email,
  "sameAs": Object.values(social).filter(Boolean)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      as="html" lang="en"
      fillHeight background="page"
      data-neutral={style.neutral} data-brand={style.brand} data-accent={style.accent}
      data-border={style.border} data-theme={style.theme}
      data-solid={style.solid} data-solid-style={style.solidStyle}
      data-surface={style.surface} data-transition={style.transition}
      data-scaling={style.scaling}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <Flex
        as="body"
        fillWidth fillHeight margin="0" padding="0">
        <Background
          style={{zIndex: '-1'}}
          position="fixed"
          mask="cursor"
          dots={{
            display: true,
            opacity: 0.4,
            size: '20'
          }}
          gradient={{
            display: true,
            opacity: 0.4,
          }}/>
        <Flex flex={1} direction="column">
          <Flex
            fillWidth
            paddingTop="l"
            paddingX="l"
            direction="column"
            alignItems="center"
          >
            <Navbar />
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}