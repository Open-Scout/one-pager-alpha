import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/core';

import { Header } from './Header';
import { getAllPublicOnePagerData } from '../data/dataService';
import { OnePagerPublicData } from '../model/model';
import { OnePager } from './OnePager';

/** Renders the home component. */
export const Home = () => {
  const [onePagers, setOnePagers]: [OnePagerPublicData[], any] = React.useState(
    []
  );
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = event => { 
    setSearchTerm(event.target.value);
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedOnePagers = onePagers.filter(OnePager => { 
    return OnePager.companyName
    .toLowerCase() .includes(searchTerm.toLowerCase());
  });

  // React hook to load data on first render
  React.useEffect(() => {
    getAllPublicOnePagerData().then((result) => {
      setOnePagers(result);
    });
  }, []);

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
            Welcome to One Pager Alpha!
          </Heading>

          <Search search={searchTerm} onSearch={handleSearch}/>

          <Divider />

          <OnePagerLinks onePagers={searchedOnePagers} />
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
          <hr/>
        </Box>
        
      ))}
    </>
  );
};

const Search = props => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = event => { setSearchTerm(event.target.value);
  props.onSearch(event);
  };
    return (
      <div>
  <label htmlFor="search">Search Active OnePagers: </label>
  <input value={props.search} id="search" type="text" onChange={props.onSearch} />
   </div>
  ); 
};
