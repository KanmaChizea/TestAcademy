import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { isProductFinishing, Product } from '../../data';
import { AppTextStyle, Typography } from '../shared/Typography';
import { COLORS } from '../../theme/colors';
import { Spacer } from '../shared/Spacer';
import { formatNumber } from '../../util/formatters';
import { Button } from './Button';
import { Icons } from '../../theme/icons';
import { CONSTANTS } from '../../constants';

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: product.image }}
          style={[
            {
              width: screenWidth - CONSTANTS.screenPadding * 2,
            },
            styles.image,
          ]}
        />
        <View style={styles.heart}>
          <Icons.Heart />
        </View>
        {!product.inStock && (
          <View style={styles.overlay}>
            <Typography
              textstyle={AppTextStyle.bodyMediumBold}
              color={COLORS.red600}
              style={styles.outOfStock}
            >
              Out of Stock
            </Typography>
          </View>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <Typography textstyle={AppTextStyle.bodyTiny} color={COLORS.grey500}>
          {product.category}
        </Typography>
        <Spacer height={4} />
        <Typography textstyle={AppTextStyle.bodyLargeBold}>
          {product.name}
        </Typography>
        <Spacer height={8} />
        <View style={styles.ratingRow}>
          <Typography>
            {['★', '★', '★', '★', '★'].map((item, index) => (
              <Typography
                key={index}
                textstyle={AppTextStyle.bodySmall}
                color={
                  index < Math.floor(product.rating)
                    ? COLORS.amber500
                    : COLORS.grey400
                }
              >
                {item}
              </Typography>
            ))}
          </Typography>
          <Typography
            textstyle={AppTextStyle.bodyTiny}
            color={COLORS.grey500}
          >{`${product.rating} (${product.reviewCount})`}</Typography>
        </View>
        <Spacer height={8} />
        <View style={styles.priceRow}>
          <Typography textstyle={AppTextStyle.heading7}>{`₦${formatNumber(
            product.price,
          )}`}</Typography>
          {product.originalPrice && (
            <Typography
              textstyle={AppTextStyle.bodySmall}
              color={COLORS.grey400}
              style={styles.strike}
            >{`₦${formatNumber(product.originalPrice)}`}</Typography>
          )}
        </View>
        <Spacer height={8} />
        <View style={styles.ctaRow}>
          {product.inStock && (
            <Typography
              textstyle={AppTextStyle.bodyTiny}
              color={
                isProductFinishing(product) ? COLORS.red600 : COLORS.green600
              }
            >
              {isProductFinishing(product)
                ? `Only ${product.stockCount} left`
                : 'In stock'}
            </Typography>
          )}
          <View style={styles.fill}>
            <Button
              icon={<Icons.Cart />}
              text="Add"
              disabled={!product.inStock}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.grey100,
    boxShadow: [
      {
        offsetX: 0,
        offsetY: 1,
        blurRadius: 3,
        color: '#0000001A',
      },
    ],
  },
  bottomContainer: {
    padding: 16,
  },
  ratingRow: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  priceRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  strike: {
    textDecorationLine: 'line-through',
  },
  ctaRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  fill: {
    flex: 1,
  },
  image: {
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  heart: {
    padding: 8,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    position: 'absolute',
    top: 12,
    right: 16,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#000000B2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outOfStock: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
