import React,{useState,useEffect} from 'react'
import { Linking } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem ,Input,
     Item,Label,H3 
} from "native-base";
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
import RNPhoneCodeSelect from "react-native-phone-code-select";

import AsyncStorage from '@react-native-async-storage/async-storage';

const Inicio = () => {
    const navigation = useNavigation();
    const [telefono, guardarTelefono] = useState('');
    const [pais, guardarpais] = useState('');
    const [mensaje, guardarMensaje] = useState('');
    const [visible, guardarVisible] = useState(false);


    useEffect(() => {
        obtenerDatosStorage();  
              
      }, []);

      

    const seleccionarPais= async (pais) => {       
        try {
          await AsyncStorage.setItem('pais',JSON.stringify(pais));        
          guardarpais(pais);
        } catch (error) {
          console.log(error);
        }
      }


      const obtenerDatosStorage = async () => {
        try {
            const local = await AsyncStorage.getItem('pais');
           const paisJson=JSON.parse(local);
            
            if(paisJson==null){
                
                return
            }
            guardarpais(JSON.parse(local));
            
        } catch (error) {
          console.log(error);
        }
      }
    

    const enviarMensaje =()=>{

      if(pais=='' || telefono==''){
       alert('debe seleccionar el pais y un numero de telefono');
          return;
      }
        Linking.openURL(`https://api.whatsapp.com/send?phone=${pais.dial_code}${telefono}&text=${mensaje}`)
    }

    
 
    return (
        <Container>


        <RNPhoneCodeSelect
                visible={visible}
                onDismiss={() => guardarVisible(false)}
                 onCountryPress={(pais) => seleccionarPais(pais)}
                primaryColor="#f04a4a"
                secondaryColor="#000000"
                buttonText="Listo"
            />
           
        <Header>
          <Left>
            <Button
              transparent
                onPress={() =>   navigation.navigate("MenuLateral")  }
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Whats Incognito </Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <Button 
          full rounded info 
          style={{ marginTop: 10 }}
          onPress={ ()=>{guardarVisible(true)}} 
          >
              <Text> {pais==''?'Seleccionar Pais':`Pais Seleccionado ${pais.name}`}</Text>
          </Button>
          <Card>
            <CardItem>
            <Content>
          <Item>
          <Label>{pais.dial_code}</Label>
            <Input 
                 keyboardType = {'phone-pad'}
                placeholder={"Ingresa el numero de telefono"}
                onChangeText={(texto)=>guardarTelefono(texto)}
                />
          </Item>
         
        </Content>
        </CardItem>
          </Card>
        <Card>
        <CardItem>
            <Body>
            <Input 
            full
            placeholder={"Mensaje opcional"}
            onChangeText={(texto)=>guardarMensaje(texto)}
            ></Input>
            
            </Body>
        </CardItem>
        </Card>
          
        <Button 
        full rounded success 
        style={{ marginTop: 10 }}
        
        onPress={ ()=>enviarMensaje()} 
        >
            <Text>Enviar Mensaje</Text>

        </Button>
          
        <Body>

            <Content>
                <H3></H3>
                <Text>1. Selecciona tu País</Text>
                <H3><Text>2. Ingrese un número </Text></H3>
                <H3><Text>3. Si deseas enviar escribir un mensaje opcional</Text></H3>
                <H3><Text>4. Envíe su mensaje</Text></H3>

                <H3></H3>
                <H3>  
                    <Text>
                        Esta app es una herramienta para enviar un mensaje a cualquier número que no esté guardado en sus contactos.
                        </Text>
                </H3>
            </Content>
        </Body>
        </Content>
        
      </Container>
    )
}

export default Inicio
