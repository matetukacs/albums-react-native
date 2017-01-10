import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image source={{ uri: props.album.thumbnail_image }} style={styles.thumbnailStyle} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: props.album.image }} style={styles.imageStyle} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(props.album.url)} >
          Buy now
        </Button>
      </CardSection>
    </Card>
);

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default AlbumDetail;
