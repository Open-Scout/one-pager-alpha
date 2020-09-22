import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/core';

import { Header } from './Header';
import { getAllPublicOnePagerData } from '../data/dataService';
import { OnePagerPublicData } from '../model/model';

/** Renders the home component. */
export const Home = () => {
  const [onePagers, setOnePagers]: [OnePagerPublicData[], any] = React.useState(
    []
  );

// Create a react hook to update the search input 


  // React hook to load data on first render
  React.useEffect(() => {
    getAllPublicOnePagerData().then((result) => {
      setOnePagers(result);
    });
  }, []);

  // Create a Search Handler Method to manage search Input


  return (
    <Box>
      <Head>
        <title>One Pager Alpha</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <Box d='flex' justifyContent='center'>
        <Box w='xl'>
          <Heading as='h1' size='xl'>
            Hello, welcome to One Pager Alpha!
          </Heading>

          <Heading as='h2' size='md'>
            View active OnePagers
          </Heading>

          <Divider />

          <OnePagerLinks onePagers={onePagers} />
        </Box>
      </Box>
    </Box>
  );
};

type OnePagerLinksProps = {
  onePagers: OnePagerPublicData[];
};

const OnePagerLinks = ({ onePagers }: OnePagerLinksProps) => {
  return (
    <>
      {onePagers.map((onePagerData: OnePagerPublicData) => (
        <Box key={onePagerData.companyName} marginBottom='10px'>
          <Link href='/[onePagerSlug]' as={`/${onePagerData.url}`}>
            <a>{onePagerData.companyName}</a>
          </Link>
          <Text margin='0'>{onePagerData.briefDescription}</Text>
        </Box>
      ))}
    </>
  );
};
