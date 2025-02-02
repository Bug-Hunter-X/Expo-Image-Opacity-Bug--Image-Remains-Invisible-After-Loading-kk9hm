import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const MyComponent = () => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.error('Failed to load image');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./my-image.jpg')}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          width: 200,
          height: 200,
          opacity: imageLoaded ? 1 : 0, // Bug: Incorrect opacity handling
        }}
      />
      <Text>Image loaded: {imageLoaded ? 'yes' : 'no'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyComponent;