import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { Card, Input, Main, ScrollView, Spinner, YStack } from 'tamagui';
import { Container, Subtitle, Title } from 'tamagui.config';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getSearchResults, getTrending } from 'services/api';
import MovieCard from 'components/MovieCard';

const Page = () => {
  const [searchString, setSearchString] = React.useState('');

  const searchQuery = useQuery({
    queryKey: ['search'],
    queryFn: () => getSearchResults,
  });

  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: getTrending,
  });

  return (
    <Main>
      <ImageBackground
        source={{
          uri: 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/ghQrKrcEpAlkzBuNoOCSxHQXWqw.jpg',
        }}
        style={{ width: '100%', height: 200 }}>
        <Container>
          <YStack>
            <Title
              color={'#fff'}
              enterStyle={{
                opacity: 0,
                scale: 1.5,
                translateY: -10,
              }}
              animation="quick">
              Trending
            </Title>
            <Input
              placeholder="Search"
              placeholderTextColor={'#fff'}
              borderWidth={1}
              size={'s4'}
              onChangeText={(text) => setSearchString(text)}
            />
          </YStack>
        </Container>
      </ImageBackground>

      <Subtitle
        p={10}
        enterStyle={{
          opacity: 0,
        }}
        animation="lazy">
        Popular
      </Subtitle>

      {(trendingQuery.isLoading || searchQuery.isLoading) && (
        <Spinner py={14} size="large" color={'$blue10'} />
      )}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        py={40}
        contentContainerStyle={{ gap: 14, paddingLeft: 14 }}>
        {trendingQuery.data?.results.map((item) => <MovieCard key={item.id} movie={item} />)}
      </ScrollView>
    </Main>
  );
};

export default Page;
