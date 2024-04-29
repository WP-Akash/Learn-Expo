import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground,ScrollView, Button } from "react-native";
const Icon = require("./assets/adaptive-icon.png");
export default function App() {
 
  return (
    <ScrollView style={styles.container}>
      
      <View style={{ marginVertical: 20}}>
        <Text>Hello World! 1 🔥</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          voluptatem eligendi necessitatibus ut dignissimos ea quasi molestias
          fuga alias excepturi repellat autem impedit nam qui, et tempora, cum
          cumque suscipit quod amet, quam blanditiis dicta. Accusantium maxime
          esse ipsam corporis porro sunt quam debitis. Voluptatem autem animi
          blanditiis quo rem quaerat consectetur libero impedit accusamus
          ratione aspernatur ea est, veniam, veritatis deleniti, quibusdam
          mollitia debitis odio maxime! Earum consequuntur perferendis vero
          dolorum maxime hic laborum fugiat ducimus pariatur nam expedita ipsum
          est nostrum cum dolore qui, blanditiis ipsam deleniti voluptas
          praesentium assumenda. Assumenda ipsa deleniti tempora molestiae autem
          recusandae nobis!
        </Text>
      </View>

      <View>
        <Image style={{ width: "100%", height: 300 }} source={Icon} />
        <View  style={{ marginVertical: 20}}>
          <Text>Hello World! 1 🔥</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur voluptatem eligendi necessitatibus ut dignissimos ea
            quasi molestias fuga alias excepturi repellat autem impedit nam qui,
            et tempora, cum cumque suscipit quod amet, quam blanditiis dicta.
            Accusantium maxime esse ipsam corporis porro sunt quam debitis.
            Voluptatem autem animi blanditiis quo rem quaerat consectetur libero
            impedit accusamus ratione aspernatur ea est, veniam, veritatis
            deleniti, quibusdam mollitia debitis odio maxime! Earum consequuntur
            perferendis vero dolorum maxime hic laborum fugiat ducimus pariatur
            nam expedita ipsum est nostrum cum dolore qui, blanditiis ipsam
            deleniti voluptas praesentium assumenda. Assumenda ipsa deleniti
            tempora molestiae autem recusandae nobis!
          </Text>
        </View>
      </View>
      <View>
        <Image style={{ width: "100%", height: 300 }} source={Icon} />
        <View style={{ marginVertical: 20}}>
          <Text>Hello World! 1 🔥</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur voluptatem eligendi necessitatibus ut dignissimos ea
            quasi molestias fuga alias excepturi repellat autem impedit nam qui,
            et tempora, cum cumque suscipit quod amet, quam blanditiis dicta.
            Accusantium maxime esse ipsam corporis porro sunt quam debitis.
            Voluptatem autem animi blanditiis quo rem quaerat consectetur libero
            impedit accusamus ratione aspernatur ea est, veniam, veritatis
            deleniti, quibusdam mollitia debitis odio maxime! Earum consequuntur
            perferendis vero dolorum maxime hic laborum fugiat ducimus pariatur
            nam expedita ipsum est nostrum cum dolore qui, blanditiis ipsam
            deleniti voluptas praesentium assumenda. Assumenda ipsa deleniti
            tempora molestiae autem recusandae nobis!
          </Text>
          <Text style={{marginVertical: 10}}>
          <Button title="Press Me" onPress={()=>{alert('Hi Sadia')}} />
          </Text>
          
        </View>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
});
