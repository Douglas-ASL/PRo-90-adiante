import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import StoryCard from './StoryCard'; // Importe o componente StoryCard
import { fetchPostsFromDatabase } from './DatabaseManager'; // Importe a função para buscar os posts

class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTheme: 'dark', // Simulação de tema preferido do usuário
      posts: [], // Armazenamento das postagens
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    const posts = fetchPostsFromDatabase();
    this.setState({ posts });
  }

  render() {
    const { userTheme, posts } = this.state;

    return (
      <View>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <StoryCard post={item} theme={userTheme} />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    );
  }
}

export default FeedScreen;
