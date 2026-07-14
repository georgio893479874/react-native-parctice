import { Text, View, StyleSheet, Linking, TouchableHighlight, Button, Share, TouchableOpacity } from "react-native"
import tw from "tailwind-react-native-classnames"

const paint = () => {
    const style = StyleSheet.create({
      text: {
        color: "#FFF",
      }
    })


    const open = async () => {
        const url = 'https://google.com'
        const canOpen = await Linking.canOpenURL(url)

        if (canOpen) {
            await Linking.openURL(url)
        }
        else {
            console.log('error')
        }
    }

    async function share() {
        const result = await Share.share({
            message: 'how',
            title: '',
            url: '',
        })
        if (result.activityType) {
            console.log('good')
        }
        if (result.action == Share.dismissedAction) {
            console.log('cancel')
        }
    }
    
  return (
    <View style={tw`p-4 bg-blue-100`}>
        <TouchableOpacity onPress={() => open()}>
            <View>
                <Text style={style.text}>Paint</Text>
            </View>
        </TouchableOpacity>
            <Button title="Share" onPress={() => share()}/>
    </View>
  )
}

export default paint