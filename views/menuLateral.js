import React from 'react';
import { Linking } from "react-native";
import { Drawer ,Text,Header,Left,Icon,Button,Body,Title,Right,List, ListItem,Container,Content} from 'native-base';

import { useNavigation } from '@react-navigation/native';
 

const MenuLateral = () => {
    const navigation = useNavigation();

    return (
        <Drawer>

    <Header>
          <Left>
            <Button
              transparent
                onPress={() =>   navigation.navigate("Inicio")  }
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Acerca de Whats Incognito </Title>
          </Body>
          <Right />
        </Header>

        
        <Container>
        <Header />
        <Content>
          <List>
            <ListItem itemHeader first>
              <Text>Desarrollado por</Text>
            </ListItem>
            <ListItem >
              <Text>Jaime Oswaldo Oj Alonzo</Text>
            </ListItem>
            <ListItem last>
              <Button onPress={() => Linking.openURL('mailto:jaime.oswaldo.ojalonzo@gmail.com') }
      title="mailto:jaime.oswaldo.ojalonzo@gmail.com"><Icon name="mail" /><Text>Enviame un correo</Text></Button>
            </ListItem>
           
          </List>
        </Content>
    
      </Container>
        </Drawer>
    )
}

export default MenuLateral
