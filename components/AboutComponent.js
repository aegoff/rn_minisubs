import React, { Component } from "react";
import { ScrollView, Text, Image, FlatList } from "react-native";
import { Card, Avatar, ListItem } from "react-native-elements";
import * as Animatable from "react-native-animatable";

function Mission() {
  return (
    <Card title="What We Believe">
      <Text style={{ margin: 10 }}>
        Housing costs are ridiculously expensive today. We wanted to create a
        platform where individuals can come together to help each other's needs
        get met.We've vetted all of our members extensively to create a safe
        experience, and through extensive Q&amp;As and filters, we want to help
        you find your ideal match.We guide you through the entire process, with
        our amazing Customer Service, so that you can be confident in reaching
        your goals.
      </Text>
    </Card>
  );
}

function Founder() {
  return (
    <Card title="Our Founder">
      <Image
        style={{ alignSelf: "center" }}
        source={require("./img/founder.jpg")}
      />
      <Text style={{ margin: 10 }}>
        Hi! I'm Maria Angel, and I started MiniSubs in March of 2022, as a new
        Full Stack Developer, struggling to find a place to stay in a big city
        for an internship. My goal was for this website to serve as a connection
        between those in need of more equitable housing and those trying to
        break the cycle of living paycheck to paycheck. Initially geared towards
        students on internships, we have expanded to reaching populations we
        never dreamed of! We would like to thank our donors and users for this
        success! For every dollar we receive, we donate $0.25 to Homeless
        Charities. We are working hard to create solutions to homelessness
        around the United States and would be eager to continue that mission
        around the globe.
      </Text>
    </Card>
  );
}

function Makers() {
  return (
    <Card title="We'd Like to Thank...">
      <ListItem
        leftAvatar={{
          size: "large",
          source: {
            uri: "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png",
          },
        }}
        title={"Francesco D'Algieri"}
        subtitle={"Software Engineer"}
      />

      <ListItem
        leftAvatar={{
          size: "large",
          source: {
            uri: "https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png",
          },
        }}
        title={"Marina Pompescu"}
        subtitle={"Software Engineer"}
      />

      <ListItem
        leftAvatar={{
          size: "large",
          source: {
            uri: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
          },
        }}
        title={"Eric Whitehead"}
        subtitle={"Software Engineer"}
      />
      <Text h4>Without them, this project wouldn't have been possible.</Text>
    </Card>
  );
}

class About extends Component {
  static navigationOptions = {
    title: "About Us",
  };

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Mission />

          <Founder />
          <Makers />
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default About;
