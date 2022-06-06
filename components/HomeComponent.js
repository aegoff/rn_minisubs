import React, { Component } from "react";
import { View, Header, ScrollView, Animated } from "react-native";
import { Card, Text } from "react-native-elements";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleValue: new Animated.Value(0),
    };
  }
  componentDidMount() {}

  static navigationOptions = {
    title: "MiniSubs: Home",
  };

  render() {
    return (
      <ScrollView>
        <Card>
          <Text h4>Home!!!</Text>
          <Text>Welcome Home, Friend!</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Home;
