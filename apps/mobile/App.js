import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <WebView
                source={{ uri: 'http://localhost:3000' }} // Next.js dev 서버 주소
                style={styles.webview}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
});
