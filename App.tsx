import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './src/components/Header';
import { AppTextStyle, Typography } from './src/components/Typography';
import { COLORS } from './src/theme/colors';
import { mockProducts } from './src/data';
import { ProductCard } from './src/components/ProductCard';
import { Spacer } from './src/components/Spacer';
import { CONSTANTS } from './src/constants';

function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.title}>
        <Typography textstyle={AppTextStyle.heading6}>
          {'Featured Products'}
        </Typography>
        <Typography textstyle={AppTextStyle.bodySmall} color={COLORS.grey500}>
          {'Discover our latest tech collection'}
        </Typography>
      </View>
      <FlatList
        data={mockProducts}
        renderItem={({ item }) => <ProductCard product={item} />}
        style={styles.products}
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={() => Spacer({ height: 50 })}
      />
    </SafeAreaView>
  );
}

const ItemSeparator = () => <Spacer height={34} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textColor: {
    color: 'red',
  },
  title: {
    paddingHorizontal: CONSTANTS.screenPadding,
    paddingTop: 24,
    paddingBottom: 16,
    gap: 4,
  },
  products: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
});

export default App;
