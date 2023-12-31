import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ResultItem } from 'interfaces/apiResults';
import { Link } from 'expo-router';
import { Card, Image, Paragraph, YStack } from 'tamagui';
import { Text } from 'tamagui';

type MovieCardProps = {
  movie: ResultItem;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    // TODO: ADD TV TYPE
    <Link
      href={`/(drawer)/home/${movie.media_type === 'movie' ? 'movie' : 'movie'}/${movie.id}`}
      asChild>
      <Card elevate width={150} height={260} scale={0.9}>
        <Card.Header p={0}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
            alt={movie.title}
            style={{ width: 150, height: 200 }}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.975 }}
            animation="bouncy"
          />
        </Card.Header>
        <Card.Footer p={8}>
          <YStack>
            <Text color={'lightblue'} fontSize={20}>
              {movie.title || movie.name}
            </Text>
            <Paragraph theme={'alt2'}>
              {new Date(movie.release_date! || movie.first_air_date!).getFullYear()}
            </Paragraph>
          </YStack>
        </Card.Footer>
      </Card>
    </Link>
  );
}

const styles = StyleSheet.create({});
